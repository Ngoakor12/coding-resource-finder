import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [resources, setResources] = useState([]);
  const [renderedResources, setRenderedResources] = useState([]);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [tabs, setTabs] = useState([
    { title: "Resources", isActive: true, path: "/acn-resource-finder" },
    {
      title: "Bookmarks",
      isActive: false,
      path: "/acn-resource-finder/bookmarks",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getResources();
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  async function getResources() {
    try {
      await fetch("https://acn-resource-finder-api.herokuapp.com/all/")
        .then((response) => response.json())
        .then((data) => {
          setResources(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function addBookmark(resourceURL) {
    const newBookmark = renderedResources.find(
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

  function toggleActiveTab(tabName) {
    setTabs((prevTabs) => {
      return prevTabs.map((tab) => {
        if (tabName === tab.title) {
          return {
            ...tab,
            isActive: true,
          };
        } else {
          return {
            ...tab,
            isActive: false,
          };
        }
      });
    });
  }

  return (
    <Context.Provider
      value={{
        resources,
        setResources,
        renderedResources,
        setRenderedResources,
        bookmarks,
        addBookmark,
        setBookmarks,
        removeBookmark,
        tabs,
        toggleActiveTab,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
