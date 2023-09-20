import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";

export default function AddBookmarkGroupButton() {
  const { setBookmarks } = useContext(Context);

  function handleClick() {
    // setBookmarks([]);
  }

  return (
    <button type="button" className="clear-bookmarks" onClick={handleClick}>
      Add bookmark group
    </button>
  );
}
