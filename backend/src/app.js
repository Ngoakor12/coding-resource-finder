const app = require("express")();
const cors = require("cors");
const { API_BASE_URL, PORT } = require("./constants");

const allRouter = require("./routes/all");
const topicsRouter = require("./routes/topics");
const projectsRouter = require("./routes/projects");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.json({
    resources: `${API_BASE_URL}/all`,
    topics: `${API_BASE_URL}/all/topics`,
    projects: `${API_BASE_URL}/all/projects`,
    resources_page: `${API_BASE_URL}/all/{page}`,
    topics_page: `${API_BASE_URL}/all/topics/{page}`,
    projects_page: `${API_BASE_URL}/all/projects/{page}`,
  });
});

app.use("/all/topics", topicsRouter);
app.use("/all/projects", projectsRouter);
app.use("/all", allRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${API_BASE_URL}`);
});
