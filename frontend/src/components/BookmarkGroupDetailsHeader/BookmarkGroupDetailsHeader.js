import React from "react";
import { backArrowIcon } from "../../svgs";
import { Link } from "react-router-dom";

export default function BookmarkGroupDetailsHeader({
  heading,
  bookmarksGroups,
}) {
  return (
    <div className="bookmark-group-details-header">
      <div className="bookmark-group-details-header-left">
        <Link to={""} className="bookmark-group-details-header-back">
          {backArrowIcon}
        </Link>
        <h2 className="bookmark-group-details-header-heading">{heading}</h2>
      </div>
      <div className="bookmark-group-details-header-right">
        <button className="bookmark-group-details-header-edit">Edit</button>
        <button className="bookmark-group-details-header-clear">Clear</button>
        <button className="bookmark-group-details-header-delete">Delete</button>
      </div>
    </div>
  );
}
