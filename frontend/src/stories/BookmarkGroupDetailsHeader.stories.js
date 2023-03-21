import React from "react";
import BookmarkGroupDetailsHeader from "../components/BookmarkGroupDetailsHeader/BookmarkGroupDetailsHeader";

export default {
  title: "components/BookmarkGroupDetailsHeader",
  component: BookmarkGroupDetailsHeader,
};

export const Default = (args) => <BookmarkGroupDetailsHeader {...args} />;

Default.args = {
  heading: "Frontend revision",
};
