import React from "react";
import NewBookmarkModal from "../components/NewBookmarkModal/NewBookmarkModal";

export default {
  title: "components/NewBookmarkModal",
  component: NewBookmarkModal,
};
const Template = (args) => <NewBookmarkModal {...args} />;

export const Primary = Template.bind({});
