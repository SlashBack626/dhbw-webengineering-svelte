import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/wikisearch/:search", (req, res) => {
  console.log(req.params.search);
  res.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
