"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.static("public"));
app.get("/wikisearch/:search", (req, res) => {
    console.log(req.params.search);
    res.send();
});
app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
});
