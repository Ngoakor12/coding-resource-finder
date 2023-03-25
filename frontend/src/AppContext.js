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
      const responseData = await response.json();
      const allResources = await responseData.data;
      return allResources;
    } catch (error) {
      setHasFetchError(true);
      console.log(error);
    }
  }

  async function getFirstPageOfResources(url) {
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      const firstPageResources = await responseData.data;
      return firstPageResources;
    } catch (error) {
      setHasFetchError(true);
      console.log(error);
    }
  }

  function addBookmark({ resourceUrl, bookmarkGroup = "All bookmarks" }) {
    // find resource passed in from all resources
    const newBookmark = allResources.find(
      (resource) => resource.url === resourceUrl
    );

    // check if it's not already bookmarked
    let isBookmarked = false;
    bookmarks.forEach((bookmark) => {
      if (bookmark.url === newBookmark.url) isBookmarked = true;
    });

    if (!isBookmarked) {
      // update bookmark groups field
      newBookmark.groups = [...newBookmark.groups, bookmarkGroup];

      // add bookmark
      setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      // update bookmark groups field if bookmarkGroup is not in the group yet
      if (!newBookmark.groups.includes(bookmarkGroup)) {
        newBookmark.groups = [...newBookmark.groups, bookmarkGroup];
        setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      }
    }
  }

  function removeBookmark({ resourceUrl, bookmarkGroup }) {
    const newBookmarks = bookmarks.filter(
      (bookmark) => bookmark.url !== resourceUrl
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
