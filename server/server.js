"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
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
app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});
