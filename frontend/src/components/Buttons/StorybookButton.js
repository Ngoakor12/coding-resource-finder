import React from "react";
import { storybookIcon } from "../../svgs";

export default function StorybookButton({ resource }) {
    
  return (
    <button
      type="button"
      className={"story-button"}
      title="add bookmark"
    >
      {storybookIcon}
    </button>
  );
}
