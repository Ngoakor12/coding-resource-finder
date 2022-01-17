import { useContext } from "react";
import { Context } from "../../Context";
const BookmarkList = () => {
  const { bookmarks, setBookmarks, removeBookmark } = useContext(Context);

  return (
    <div className="resource-list">
      {bookmarks.length > 0 ? (
        <p className="clear-bookmarks" onClick={() => setBookmarks([])}>
          Clear bookmarks
        </p>
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
              <svg
                aria-hidden="true"
                role="img"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                </g>
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BookmarkList;
