const app = require("express")();
const cors = require("cors");

const { API_BASE_URL, PORT } = require("../constants");
const allRoutes = require("./routes/all");
const topicsRoutes = require("./routes/topics");
const projectsRoutes = require("./routes/projects");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({
    resources: `${API_BASE_URL}`,
    topics: `${API_BASE_URL}/topics`,
    projects: `${API_BASE_URL}/projects`,
    resources_page: `${API_BASE_URL}/{page}`,
    topics_page: `${API_BASE_URL}/topics/{page}`,
    projects_page: `${API_BASE_URL}/projects/{page}`,
  });
});

app.use("/api/topics", topicsRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api", allRoutes);

// swagger
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(docs));

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${API_BASE_URL}`);
});
