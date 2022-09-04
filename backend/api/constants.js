require("dotenv").config();

const ACN_URL = "http://syllabus.africacode.net/";
const PORT = 2856;
const API_BASE_URL =
  process.env.PROD_BASE_URL || `http://localhost:${PORT}/api`;

module.exports = { ACN_URL, PORT, API_BASE_URL };
