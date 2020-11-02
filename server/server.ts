import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/wikisearch/:search", (req, res) => {
  console.log(req.params.search);
  res.send();
});

app.listen(3000, () => {
  console.log("Server started");
});
