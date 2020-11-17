"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
const server = http_1.default.createServer(app);
const io = socket_io_1.default(server);
app.use(express_1.default.static("public"));
app.get("/wikisearch/:search", async (req, res) => {
    console.log(req.params.search);
    const search = req.params.search;
    const wiki = await axios_1.default.get(`https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=description|extracts&exintro=1&explaintext=1&exsentences=3&redirects=1&gpssearch=${search}`);
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
    }
    else
        res.send();
});
app.get("/weather/ip", async (req, res) => {
    console.log(req.connection.remoteAddress);
    const { remoteAddress } = req.connection;
    try {
        const weather = await axios_1.default.get(`https://api.weatherapi.com/v1/history.json?key=${process.env.WEATHER_API}&q=${remoteAddress}`);
        res.send(weather.data);
    }
    catch (error) {
        res.sendStatus(400);
    }
});
app.get("/weather/:cmd/:city", async (req, res) => {
    const { city, cmd } = req.params;
    if (cmd.toLowerCase() === "history") {
        const date = new Date();
        const weather = await axios_1.default.get(`https://api.weatherapi.com/v1/history.json?key=${process.env.WEATHER_API}&q=${city}&dt=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
        res.send(weather.data);
    }
    else if (cmd.toLowerCase() === "current") {
        const weather = await axios_1.default.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${city}`);
        res.send(weather.data);
    }
    else
        res.sendStatus(404);
});
io.on("connection", (socket) => {
    console.log("someone connected");
    const rooms = [];
    socket.on("join", async (room) => {
        if (rooms.findIndex((val) => val === room) !== -1)
            return;
        rooms.push(room);
        socket.join(room);
        const res = await axios_1.default.post("https://juergenschneider.eu-gb.mybluemix.net/chat", {
            cmd: "getAll",
            Group: room,
        });
        socket.emit("load", res.data.Data);
    });
    socket.on("leave", (room) => {
        socket.leave(room);
        const index = rooms.findIndex((val) => val === room);
        if (index !== -1) {
            rooms.splice(index, 1);
        }
    });
    socket.on("msg", (msg) => {
        socket.to(msg.room).emit("msg", msg);
        axios_1.default.post("https://juergenschneider.eu-gb.mybluemix.net/chat", {
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
