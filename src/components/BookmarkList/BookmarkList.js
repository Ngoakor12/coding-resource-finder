import { useContext } from "react";
import { Context } from "../../Context";
const BookmarkList = () => {
  const { bookmarks, setBookmarks, removeBookmark } = useContext(Context);

  return (
    <div className="resource-list">
      {bookmarks.length > 0?  (
        <p
          className="clear-bookmarks"
          onClick={() => {
            console.log("cleared bookmarks");
            setBookmarks([]);
            console.log(bookmarks);
          }}
        >
          Clear bookmarks
        </p>
      ):(
        <h2 className="content-placeholder">No bookmarks yet...</h2>
      )
    }
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
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BookmarkList;
