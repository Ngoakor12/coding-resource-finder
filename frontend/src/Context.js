import { createContext, useEffect, useState } from "react";

// const PORT = 2856;
// const LOCAL_URL = `http://localhost:${PORT}`;
const PROD_URL = `https://coding-resource-finder-api.herokuapp.com`;
const BASE_URL = PROD_URL;

const Context = createContext();

function ContextProvider({ children }) {
  const [resources, setResources] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [pageTitle, setPageTitle] = useState("Coding Resource Finder");
  const [currentPage, setCurrentPage] = useState(2);
  const [renderedResources, setRenderedResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    async function getAndSetInitialResources() {
      const responseData = await Promise.all([
        getPageOfResources(1),
        getAllResources(),
      ]);
      const [pageResources, allResources] = responseData;
      setRenderedResources([...renderedResources, ...pageResources]);
      setIsLoading(false);
      setResources(allResources);
    }
    getAndSetInitialResources();
    // eslint-disable-next-line
  }, []);

  async function getAllResources() {
    try {
      const response = await fetch(`${BASE_URL}/all`, {
        mode: "no-cors",
      });
      const data = await response.json();
      const allResources = await data.data;
      return allResources;
    } catch (error) {
      console.log(error);
    }
  }

  async function getPageOfResources(startPage = 1) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/all/${startPage}`, {
        mode: "no-cors",
      });
      const data = await response.json();
      const pageResources = await data.data;
      return pageResources;
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePageResources() {
    const pageResources = await getPageOfResources(currentPage);
    setRenderedResources([...renderedResources, ...pageResources]);
    setIsLoading(false);
  }

  function addBookmark(resourceURL) {
    const newBookmark = resources.find(
      (resource) => resource.url === resourceURL
    );
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function removeBookmark(bookmarkURL) {
    const newBookmarks = bookmarks.filter(
      (bookmark) => bookmark.url !== bookmarkURL
    );
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function loadMoreResources() {
    setCurrentPage((prevPage) => {
      return (prevPage += 1);
    });
    updatePageResources();
  }

  return (
    <Context.Provider
      value={{
        resources,
        setResources,
        getAllResources,
        renderedResources,
        setRenderedResources,
        bookmarks,
        addBookmark,
        setBookmarks,
        removeBookmark,
        searchTerm,
        setSearchTerm,
        setPageTitle,
        loadMoreResources,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
