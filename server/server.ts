import Axios from "axios";
import express from "express";

const app = express();

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

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
