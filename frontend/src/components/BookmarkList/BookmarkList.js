import { useContext, useEffect } from "react";
import { Context } from "../../appContext";
import { removeBookmarkIcon } from "../../svgs";

function BookmarkList() {
  const { bookmarks, setBookmarks, removeBookmark, setPageTitle } =
    useContext(Context);

  useEffect(() => {
    setPageTitle("Bookmarks | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="resource-list">
      {bookmarks.length > 0 ? (
        <button className="clear-bookmarks" onClick={() => setBookmarks([])}>
          Clear bookmarks
        </button>
      ) : (
        <h2 className="content-placeholder">No bookmarks yet...</h2>
      )}
      {bookmarks.map((bookmark) => {
        return (
          <div className="resource-wrapper" key={bookmark.url}>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noreferrer"
              className="resource"
            >
              <h3 className="resource-title">{bookmark.title}</h3>
              <span className="resource-type">{bookmark.type}</span>
            </a>
            <button
              className="remove-bookmark-button"
              onClick={() => removeBookmark(bookmark.url)}
              title="remove bookmark"
            >
              {removeBookmarkIcon}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default BookmarkList;
