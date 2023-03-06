
import React from "react";
import BookmarkButton from "../components/Buttons/BookmarkButton";

export default {
  title: "svgs",
  component: BookmarkButton,
  argTypes: {
    title: { type: "string", defaultValue: "Why is type undefined?" }
  }
};

const Template = (args) => <BookmarkButton {...args} />;

export const BookmarkButtonStory = Template.bind({});
BookmarkButtonStory.args = {
  backgroundcolor: "hsla(0, 100%, 50%, 1)",
  label: "press me",
};
// BookmarkButtonStory.args = {
//   isBookmarked: false,
//   size: 24,
//   onClick: () => console.log("Button clicked"),
// };