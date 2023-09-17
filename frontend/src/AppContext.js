import React, { createContext, useEffect, useState } from "react";

import { ALL_RESOURCES_URL, FIRST_PAGE_RESOURCES_URL } from "./constants";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [allResources, setAllResources] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [bookmarkGroups, setBookmarkGroups] = useState(() => {
    const saved = localStorage.getItem("bookmarkGroups");
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
    localStorage.setItem("bookmarkGroups", JSON.stringify(bookmarkGroups));
  }, [bookmarkGroups]);

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

  function addBookmark({ resource, bookmarkGroup = "bookmarks" }) {
    const foundBookmark = bookmarks.find(
      (bookmark) => bookmark.url === resource.url
    );
    // if bookmark does not exist
    // - add that bookmarkGroup to resource's groups
    // - update bookmarks with resource
    // - add bookmarkGroup to bookmarkGroups
    // if bookmark does exist
    // - if resource's groups don't have bookmarkGroup
    //  - add that bookmarkGroup to resourceUrl's groups
    //  - update the old resource in localstorage
    //  - add bookmarkGroup to bookmarkGroups

    if (!foundBookmark) {
      const newBookmark = resource;
      newBookmark.groups = [...newBookmark.groups, bookmarkGroup];

      setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
      updateBookmarksLocalStorage();
    } else {
      if (!foundBookmark.groups.includes(bookmarkGroup)) {
        foundBookmark.groups = [...foundBookmark.groups, bookmarkGroup];
        setBookmarks((prevBookmarks) => {
          const newBookmarks = prevBookmarks.filter(
            (prevBookmark) => prevBookmark.url !== foundBookmark.url
          );
          return [...newBookmarks, foundBookmark];
        });
        updateBookmarksLocalStorage();
      }
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
        updateBookmarksLocalStorage();
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
        updateBookmarksLocalStorage();
      }
    }
  }

  function updateBookmarkGroupsLocalStorage() {
    localStorage.setItem("bookmarkGroups", JSON.stringify(bookmarkGroups));
  }
  function updateBookmarksLocalStorage() {
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
