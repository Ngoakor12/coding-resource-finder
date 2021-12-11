const express = require("express");
const app = express();
const port = 3000;
const { getResources } = require("./resources");

app.get("/", (req, res) => {
  getResources().then((resources) => res.json({ resources: resources }));
});

app.listen(port, () => {
  console.log(`API running at port ${port}`);
});
