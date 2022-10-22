import React from "react";
import { useContext } from "react";

import { Context } from "../../appContext";
import { bookmarkIcon } from "../../svgs";

export default function RemoveBookmarkButton({ resource }) {
  const { addBookmark } = useContext(Context);
  return (
    <button
      className={"bookmark-button"}
      onClick={() => {
        addBookmark(resource.url);
      }}
      title="add bookmark"
    >
      {bookmarkIcon}
    </button>
  );
}
