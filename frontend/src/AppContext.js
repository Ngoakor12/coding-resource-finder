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
    const foundBookmark = bookmarks.find(
      (resource) => resource.url === resourceUrl
    );
    // 1. if bookmark does not exist
    // - update the bookmark's groups
    // - add that bookmark to the other bookmarks
    // 2. if bookmark does exist
    // - if bookmarkGroup is the already in the found bookmark's group
    //    - do nothing
    // - if bookmarkGroup is not in the found bookmark's group
    //    - add bookmarkGroup in the bookmark's groups
    //    - replace the older bookmark with the new bookmark

    if (!foundBookmark) {
      const newBookmark = allResources.find(
        (bookmark) => bookmark.url === resourceUrl
      );
      newBookmark.groups = [...newBookmark.groups, bookmarkGroup];

      setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      setBookmarks((prevBookmarks) => {
        return prevBookmarks.map((bookmark) => {
          if (bookmark.url === foundBookmark.url) {
            if (!bookmark.groups.includes(bookmarkGroup)) {
              const newBookmarkGroup = [...bookmark.groups, bookmarkGroup];
              return { ...bookmark, groups: newBookmarkGroup };
            }
          }
          return bookmark;
        });
      });

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }

  function removeBookmark({ resourceUrl, bookmarkGroup = "All bookmarks" }) {
    // // find bookmark passed in from all bookmarks
    // const bookmarkToUpdate = allResources.find(
    //   (resource) => resource.url === resourceUrl
    // );
    // // update bookmark groups field
    // bookmarkToUpdate.groups = bookmarkToUpdate.groups.filter(
    //   (bookmark) => bookmark !== bookmarkGroup
    // );
    // // add bookmark
    // if (bookmarkToUpdate.groups) {
    //   setBookmarks((prevBookmarks) => [...prevBookmarks, bookmarkToUpdate]);
    //   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    // } else {
    //   setBookmarks((prevBookmarks) => {
    //     return prevBookmarks.filter((bookmark) => bookmark.url !== resourceUrl);
    //   });
    //   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    // }
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
