import React, { useContext } from "react";
import { expandIcon } from "../../svgs";
import { Context } from "../../AppContext";
import { bookmarkIcon } from "../../svgs";

export default function BookmarkButtonsGroup() {
  const { addBookmark } = useContext(Context);

  function handleClick() {
    addBookmark(resource.url);
  }
  return (
    <div>
      <button
        type="button"
        className={"bookmark-button"}
        onClick={handleClick}
        title="add bookmark"
      >
        {bookmarkIcon}
      </button>
      <button type="button" className={"story-button"} title="add bookmark">
        {expandIcon}
      </button>
    </div>
  );
}
