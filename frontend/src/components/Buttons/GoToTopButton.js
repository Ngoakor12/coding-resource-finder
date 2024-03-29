import React from "react";
import { goToTopIcon } from "../../svgs";

export default function GoToTopButton() {
  function handleClick() {
    // can be set to auto if you want it to snap to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      className={"go-to-top-button"}
      onClick={handleClick}
      title="Go to Top"
    >
      {goToTopIcon}
    </button>
  );
}
