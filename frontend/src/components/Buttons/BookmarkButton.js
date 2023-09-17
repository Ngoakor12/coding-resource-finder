import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";
import { bookmarkIcon } from "../../svgs";

export default function BookmarkButton({ resource }) {
  const { addBookmark } = useContext(Context);

  function handleClick() {
    addBookmark({ resource });
  }

  return (
    <button
      type="button"
      className={"bookmark-button"}
      onClick={handleClick}
      title="add bookmark"
    >
      {bookmarkIcon}
    </button>
  );
}
