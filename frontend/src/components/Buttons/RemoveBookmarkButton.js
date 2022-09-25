import { useContext } from "react";
import { Context } from "../../appContext";
import { removeBookmarkIcon } from "../../svgs";

function RemoveBookmarkButton({ resource }) {
  const { removeBookmark } = useContext(Context);
  return (
    <button
      className={"remove-bookmark-button"}
      onClick={() => {
        removeBookmark(resource.url);
      }}
      title="remove bookmark"
    >
      {removeBookmarkIcon}
    </button>
  );
}

export default RemoveBookmarkButton;
