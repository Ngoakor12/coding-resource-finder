import React from "react";
import BookmarkGroupListModal from "../components/BookmarkGroupListModal/BookmarkGroupListModal";

export default {
  title: "components/BookmarkGroupListModal",
  component: BookmarkGroupListModal,
};

const Template = (args) => <BookmarkGroupListModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bookmarkGroupList: [
    { id: "1", title: "Bookmarks" },
    { id: "2", title: "Frontend revision and other things" },
  ],
};
