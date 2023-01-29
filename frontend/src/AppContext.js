import React, { createContext, useEffect, useState } from "react";

import { ALL_RESOURCES_URL, FIRST_PAGE_RESOURCES_URL } from "./constants";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [allResources, setAllResources] = useState([]);
  // eslint-disable-next-line
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [pageTitle, setPageTitle] = useState("Coding Resource Finder");
  const [renderedResources, setRenderedResources] = useState([]);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [resourceFilter, setResourceFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    getAndSetInitialResources();
    // eslint-disable-next-line
  }, []);

  async function getAndSetInitialResources() {
    const responseData = await Promise.all([
      getFirstPageOfResources(FIRST_PAGE_RESOURCES_URL),
      getAllResources(ALL_RESOURCES_URL),
    ]);
    const [firstPageResourcesResponse, allResourcesResponse] = responseData;
    setRenderedResources(firstPageResourcesResponse);
    setAllResources(allResourcesResponse);
  }

  async function getAllResources(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const allResources = await data.data;
      return allResources;
    } catch (error) {
      setHasFetchError(true);
      console.log(error);
    }
  }

  async function getFirstPageOfResources(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const firstPageResources = await data.data;
      return firstPageResources;
    } catch (error) {
      setHasFetchError(true);
      console.log(error);
    }
  }

  function addBookmark(resourceUrl) {
    const newBookmark = allResources.find(
      (resource) => resource.url === resourceUrl
    );
    setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function removeBookmark(bookmarkUrl) {
    const newBookmarks = bookmarks.filter(
      (bookmark) => bookmark.url !== bookmarkUrl
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
        hasFetchError,
        resourceFilter,
        setResourceFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
}
