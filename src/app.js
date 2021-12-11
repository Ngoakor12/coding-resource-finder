const express = require("express");
const app = express();
const port = process.env.PORT || 2856;
const { getResources } = require("./resources");

app.get("/", (req, res) => {
  getResources().then((resources) => res.json({ resources: resources }));
});

app.listen(port, () => {
  console.log(`API running at port ${port}`);
});
