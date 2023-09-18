import React from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

export default function BookmarkGroupCard({ bookmarkGroup }) {
  const { name, count, link } = bookmarkGroup;
  return (
    <Link to={`/bookmarks/${link}`} className={"bookmark-group-card"}>
      <Card fullWidth={true}>
        <p className="bookmark-group-card-title">{name}</p>
        <p className="bookmark-group-card-count">{count}</p>
      </Card>
    </Link>
  );
}
