const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2856;
const { getResources } = require("./resources");

app.use(cors());

app.get("/", (req, res) => {
  getResources().then((resources) => res.json({ resources: resources }));
});

app.listen(port);
