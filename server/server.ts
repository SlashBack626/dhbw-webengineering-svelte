import Axios from "axios";
import express from "express";
import socketIO from "socket.io";
import http from "http";
import { Message, GetAllResponse, MessageData } from "./interfaces";

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

app.get("/wikisearch/:search", async (req, res) => {
  console.log(req.params.search);
  const search = req.params.search as string;
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
    return;
  } else res.send();
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
server.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
