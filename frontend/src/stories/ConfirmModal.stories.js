import React from "react";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";

export default {
  title: "components/Modals/ConfirmModal",
  component: ConfirmModal,
};
const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  prompt: "Are you ready to rumble?",
};
