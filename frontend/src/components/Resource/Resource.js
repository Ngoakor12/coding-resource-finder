import React from "react";
import { useContext } from "react";

import { Context } from "../../appContext";
import RemoveBookmarkButton from "../Buttons/RemoveBookmarkButton";
import BookmarkButton from "../Buttons/BookmarkButton";

export default function Resource({ resource }) {
  const { bookmarks } = useContext(Context);
  const isBookmarked = bookmarks.find((bookmark) => {
    return bookmark.url === resource.url;
  });
  const icon = isBookmarked ? (
    <RemoveBookmarkButton resource={resource} />
  ) : (
    <BookmarkButton resource={resource} />
  );

  return (
    <div className="resource-wrapper" key={resource.url}>
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="resource"
      >
        <h3 className="resource-title">{resource.title}</h3>
        <span className="resource-type">{resource.type}</span>
      </a>
      {icon}
    </div>
  );
}
