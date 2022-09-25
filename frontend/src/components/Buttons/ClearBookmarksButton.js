import { useContext } from "react";
import { Context } from "../../appContext";

function ClearBookmarksButton() {
  const { setBookmarks } = useContext(Context);

  function handleClick() {
    setBookmarks([]);
  }

  return (
    <button className="clear-bookmarks" onClick={handleClick}>
      Clear bookmarks
    </button>
  );
}

export default ClearBookmarksButton;
