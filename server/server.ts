import Axios from "axios";
import express from "express";
import socketIO from "socket.io";
import http from "http";
import { GetAllResponse, MessageData, Weather } from "./interfaces";
import publicIP from "public-ip";
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

app.get("/wikisearch/:search", async (req, res) => {
  console.log(req.params.search);
  const search = req.params.search as string;
  try {
    const wiki = await Axios.get(
      `https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=description|extracts&exintro=1&explaintext=1&exsentences=3&redirects=1&gpssearch=${search}`
    );
    // res.writeHead(wiki.status, wiki.statusText);
    res.status(wiki.status);

    if (wiki.status === 200) {
      const results = [];
      for (const page in wiki.data.query.pages) {
        if (Object.prototype.hasOwnProperty.call(wiki.data.query.pages, page)) {
          const element = wiki.data.query.pages[page];
          results.push(element);
        }
      }
      res.send({ results: results });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.get("/weather/ip", async (req, res) => {
  console.log(req.ip);
  let { ip } = req;
  if (ip.substr(0, 7) === "::ffff:") {
    ip = ip.substring(7);
  }
  if (ip.match(/(127\.0\.0\.1)|(::1)/)) {
    ip = process.env.IPV4 as string;
  }
  console.log(ip);
  const { remoteAddress } = req.connection;
  try {
    const weather = await Axios.get<Weather.ForecastResponse>(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${ip}`
    );

    res.send(weather.data);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.get("/weather/:cmd/:city", async (req, res) => {
  const { city, cmd } = req.params;
  try {
    if (cmd.toLowerCase() === "history") {
      const date = new Date();

      const weather = await Axios.get<Weather.ForecastResponse>(
        `https://api.weatherapi.com/v1/history.json?key=${
          process.env.WEATHER_API
        }&q=${city}&dt=${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`
      );
      res.send(weather.data);
    } else if (cmd.toLowerCase() === "current") {
      const weather = await Axios.get<Weather.ForecastResponse>(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${city}`
      );
      res.send(weather.data);
    } else res.sendStatus(404);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

io.on("connection", (socket) => {
  console.log("someone connected");
  const rooms: string[] = [];

  socket.on("join", async (room: string) => {
    if (rooms.findIndex((val) => val === room) !== -1) return;
    rooms.push(room);
    socket.join(room);
    const res = await Axios.post<GetAllResponse>(
      "https://juergenschneider.eu-gb.mybluemix.net/chat",
      {
        cmd: "getAll",
        Group: room,
      }
    );
    socket.emit("load", res.data.Data);
  });

  socket.on("leave", (room: string) => {
    socket.leave(room);
    const index = rooms.findIndex((val) => val === room);
    if (index !== -1) {
      rooms.splice(index, 1);
    }
  });

  socket.on("msg", (msg: MessageData) => {
    socket.to(msg.room).emit("msg", msg);
    Axios.post("https://juergenschneider.eu-gb.mybluemix.net/chat", {
      cmd: "append",
      Group: msg.room,
      Owner: msg.username,
      Text: msg.content,
    });
  });
});

publicIP.v4().then((ip) => {
  process.env.IPV4 = ip;
  console.log(process.env.IPV4);
  server.listen(process.env.PORT ?? 5000, () => {
    console.log(`Server started on PORT ${process.env.PORT ?? 5000}`);
  });
});
