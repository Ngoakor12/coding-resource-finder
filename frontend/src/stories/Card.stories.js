import React from "react";
import Card from "../components/Card/Card";

export default {
  title: "components/Card",
  component: Card,
};

export const Default = (args) => <Card {...args} />;

Default.args = {
  children: "Dear God, it's me again...",
  fullWidth: false,
};

export const FullWidthCard = (args) => <Card {...args} />;

FullWidthCard.args = {
  children: "Heal the world, make it a better place...",
  fullWidth: true,
};

console.log(FullWidthCard.args);
