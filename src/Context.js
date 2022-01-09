import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [resources, setResources] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

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

  return (
    <Context.Provider
      value={{
        resources,
        setResources,
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
