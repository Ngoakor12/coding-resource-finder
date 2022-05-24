import { createContext, useEffect, useState } from "react";

const PORT = 2856;
const BASE_URL =
  process.env.REACT_APP_PROD_BASE_URL || `http://localhost:${PORT}`;

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
  const [pageParams, setPageParams] = useState('');

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
      setRenderedResources([...pageResources]);
      setIsLoading(false);
      setResources(allResources);
    }
    getAndSetInitialResources();
    // eslint-disable-next-line
  }, [pageParams]);

  async function getAllResources() {
    try {
      const url = (
        (pageParams && pageParams.length) 
        ? `${BASE_URL}/all/${pageParams}` 
        : `${BASE_URL}/all`
      );
      const response = await fetch(url);
      const data = await response.json();
      const allResources = await data.data;    
      return allResources;
    } catch (error) {
      console.log(error);
    }
  }

  async function getResourcesAllPages() {
    try {
      const url = `${BASE_URL}/all`;
      const response = await fetch(url);
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
      const url = (
        (pageParams && pageParams.length)
        ? `${BASE_URL}/all/${pageParams}/${startPage}` 
        : `${BASE_URL}/all/${startPage}`
      );
      const response = await fetch(url);
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
        setPageParams,
        getResourcesAllPages,
        getPageOfResources,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
