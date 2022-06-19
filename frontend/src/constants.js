const PORT = 2856;
const BASE_URL =
  process.env.REACT_APP_PROD_BASE_URL || `http://localhost:${PORT}`;

export { PORT, BASE_URL };
