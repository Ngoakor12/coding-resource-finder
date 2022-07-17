const app = require("express")();
const cors = require("cors");

const { API_BASE_URL, PORT } = require("./constants");
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
    resources: `${API_BASE_URL}/all`,
    topics: `${API_BASE_URL}/all/topics`,
    projects: `${API_BASE_URL}/all/projects`,
    resources_page: `${API_BASE_URL}/all/{page}`,
    topics_page: `${API_BASE_URL}/all/topics/{page}`,
    projects_page: `${API_BASE_URL}/all/projects/{page}`,
  });
});

app.use("/all/topics", topicsRoutes);
app.use("/all/projects", projectsRoutes);
app.use("/all", allRoutes);

// swagger
const swaggerUi = require('swagger-ui-express');
const docs = require('./docs');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${API_BASE_URL}`);
});
