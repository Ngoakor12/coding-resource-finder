import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";
import { removeBookmarkIcon } from "../../svgs";

export default function RemoveBookmarkButton({ bookmark }) {
  const { removeBookmark } = useContext(Context);

  function handleClick() {
    removeBookmark({ bookmark });
  }

  return (
    <button
      type="button"
      className={"remove-bookmark-button"}
      onClick={handleClick}
      title="remove bookmark"
    >
      {removeBookmarkIcon}
    </button>
  );
}
