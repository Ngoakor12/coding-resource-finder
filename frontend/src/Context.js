import { createContext, useEffect, useState } from "react";

import { API_BASE_URL } from "./constants";

const Context = createContext();

function ContextProvider({ children }) {
  const [allResources, setAllResources] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [pageTitle, setPageTitle] = useState("Coding Resource Finder");
  const [renderedResources, setRenderedResources] = useState([]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    async function getAndSetInitialResources() {
      const responseData = await Promise.all([
        getFirstPageOfResources(),
        getAllResources(),
      ]);
      const [firstPageResources, allResources] = responseData;
      setRenderedResources([...firstPageResources]);
      setAllResources(allResources);
    }
    getAndSetInitialResources();
    // eslint-disable-next-line
  }, []);

  async function getAllResources() {
    try {
      const url = `${API_BASE_URL}/all`;
      const response = await fetch(url);
      const data = await response.json();
      const allResources = await data.data;
      return allResources;
    } catch (error) {
      console.log(error);
    }
  }

  async function getFirstPageOfResources() {
    try {
      const url = `${API_BASE_URL}/all/1`;
      const response = await fetch(url);
      const data = await response.json();
      const firstPageResources = await data.data;
      return firstPageResources;
    } catch (error) {
      console.log(error);
    }
  }

  function addBookmark(resourceURL) {
    const newBookmark = allResources.find(
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

  return (
    <Context.Provider
      value={{
        allResources,
        setAllResources,
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
