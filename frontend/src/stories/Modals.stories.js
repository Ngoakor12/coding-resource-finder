import React from "react";
import BaseModal from "../components/BaseModal/BaseModal";

export default {
  title: "components/Modals/BaseModal",
  component: BaseModal,
};
const Template = (args) => <BaseModal {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Some text inside the body of the modal",
};
