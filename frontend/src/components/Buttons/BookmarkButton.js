import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";
import { bookmarkIcon } from "../../svgs";

export default function RemoveBookmarkButton({ resource }) {
  const { addBookmark } = useContext(Context);

  function handleClick() {
    addBookmark({ resourceUrl: resource.url });
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
