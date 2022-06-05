require("dotenv").config();
const app = require("express")();
const cors = require("cors");

const allRouter = require("./routes/all");
const topicsRouter = require("./routes/topics");
const projectsRouter = require("./routes/projects");

app.use(
  cors({
    origin: "*",
  })
);
const PORT = 2856;
const BASE_URL = process.env.PROD_BASE_URL || `http://localhost:${PORT}`;

app.get("/", (_, res) => {
  res.json({
    resources: `${BASE_URL}/all`,
    topics: `${BASE_URL}/all/topics`,
    projects: `${BASE_URL}/all/projects`,
    resources_page: `${BASE_URL}/all/{page}`,
    topics_page: `${BASE_URL}/all/topics/{page}`,
    projects_page: `${BASE_URL}/all/projects/{page}`,
  });
});

app.use("/all/topics", topicsRouter);
app.use("/all/projects", projectsRouter);
app.use("/all", allRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${BASE_URL}`);
});
