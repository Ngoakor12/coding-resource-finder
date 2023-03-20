import React from "react";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

export default function BookmarkGroupCard(bookmarkGroup) {
  const { title, count, bookmarkLink } = bookmarkGroup;
  return (
    <Link to={`/${bookmarkLink}`} className={"bookmark-group-card"}>
      <Card fullWidth={true}>
        <p className="bookmark-group-card-title">{title}</p>
        <p className="bookmark-group-card-count">{count}</p>
      </Card>
    </Link>
  );
}
