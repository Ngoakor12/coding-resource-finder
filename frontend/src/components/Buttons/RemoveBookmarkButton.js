import React from "react";
import { useContext } from "react";

import { Context } from "../../appContext";
import { removeBookmarkIcon } from "../../svgs";

export default function RemoveBookmarkButton({ resource }) {
  const { removeBookmark } = useContext(Context);

  function handleClick() {
    removeBookmark(resource.url);
  }

  return (
    <button
      className={"remove-bookmark-button"}
      onClick={handleClick}
      title="remove bookmark"
    >
      {removeBookmarkIcon}
    </button>
  );
}
