import React from "react";
import BookmarkButtonsGroup from "../components/Buttons/BookmarkButtonsGroup";

export default {
  title: "components/BookmarkButtonsGroup",
  component: BookmarkButtonsGroup,
};

const Template = (args) => <BookmarkButtonsGroup {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
