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

  function addBookmark({ resourceUrl, bookmarkGroup = "bookmarks" }) {
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
              const newBookmarkGroup = [...foundBookmark.groups, bookmarkGroup];
              return { ...bookmark, groups: newBookmarkGroup };
            }
          }
          return bookmark;
        });
      });

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }

  function removeBookmark({ resourceUrl, bookmarkGroup = "bookmarks" }) {
    const foundBookmark = bookmarks.find(
      (bookmark) => bookmark.url === resourceUrl
    );
    // 1. if bookmark is in one group
    // - remove bookmark from other bookmarks
    // 2. if bookmark is in more than one group
    // - remove group from bookmark
    // - remove bookmark from bookmarks
    if (foundBookmark) {
      if (
        foundBookmark.groups.length === 1 &&
        foundBookmark.groups.includes(bookmarkGroup)
      ) {
        setBookmarks((prevBookmarks) => {
          return prevBookmarks.filter(
            (prevBookmark) => prevBookmark.url !== foundBookmark.url
          );
        });
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      } else if (
        foundBookmark.groups.length > 1 &&
        foundBookmark.groups.includes(bookmarkGroup)
      ) {
        setBookmarks((prevBookmarks) => {
          return prevBookmarks.map((bookmark) => {
            if (bookmark.groups.includes(bookmarkGroup)) {
              const newBookmark = bookmark;
              newBookmark.groups = newBookmark.groups.filter(
                (group) => group !== bookmarkGroup
              );
              return newBookmark;
            }
            return bookmark;
          });
        });
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      }
    }
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
