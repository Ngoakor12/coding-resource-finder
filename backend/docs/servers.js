const { PORT } = require("../constants");

module.exports = {
  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: "Local server",
    },
  ],
};
