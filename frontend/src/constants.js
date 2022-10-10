export const PORT = process.env.PORT || 2856;
export const API_BASE_URL =
  process.env.REACT_APP_API_PROD_BASE_URL || `http://localhost:${PORT}`;
export const CLIENT_BASE_URL =
  process.env.REACT_APP_CLIENT_PROD_BASE_URL || "http://localhost:3000";

export const ALL_RESOURCES_URL = `${API_BASE_URL}/all`;
export const FIRST_PAGE_RESOURCES_URL = `${API_BASE_URL}/all/1`;

export const ERROR = {
  FETCH: "Something went wrong.Please try again.",
};
