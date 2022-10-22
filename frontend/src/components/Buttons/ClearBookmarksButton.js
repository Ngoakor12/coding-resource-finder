import React from "react";
import { useContext } from "react";

import { Context } from "../../appContext";

export default function ClearBookmarksButton() {
  const { setBookmarks } = useContext(Context);

  function handleClick() {
    setBookmarks([]);
  }

  return (
    <button type="button" className="clear-bookmarks" onClick={handleClick}>
      Clear bookmarks
    </button>
  );
}
