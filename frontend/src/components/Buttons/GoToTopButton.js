import React from "react";
import { goToTopIcon } from "../../svgs";

export default function GoToTopButton() {
  return (
    <button
      onClick={() => {
        // can be set to auto if you want it to snap to top
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className={"go-to-top-button"}
      title="Go to Top"
    >
      {goToTopIcon}
    </button>
  );
}
