import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";
import { removeBookmarkIcon } from "../../svgs";

export default function RemoveBookmarkButton({ resource }) {
  const { removeBookmark } = useContext(Context);

  function handleClick() {
    removeBookmark({ resourceUrl: resource.url });
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
