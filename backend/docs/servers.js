const { PORT } = require("../api/constants");

module.exports = {
  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: "Local server",
    },
  ],
};
