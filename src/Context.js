import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [resources, setResources] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [tabs, setTabs] = useState([
    { title: "Resources", isActive: true, path: "/" },
    { title: "Bookmarks", isActive: false, path: "/bookmarks" },
  ]);
  // const [activeTab, setActiveTab] = useState("Resources");

  useEffect(() => {
    getResources();
  }, []);

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
    const newBookmark = resources.find(
      (resource) => resource.url === resourceURL
    );
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.url === newBookmark.url
    );

    if (!isBookmarked) {
      setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
    }
  }

  function removeBookmark(bookmarkURL) {
    const newBookmarks = bookmarks.filter(
      (bookmark) => bookmark.url !== bookmarkURL
    );
    setBookmarks(newBookmarks);
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
        bookmarks,
        addBookmark,
        removeBookmark,
        tabs,
        toggleActiveTab,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
