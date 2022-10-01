import { goToTopIcon } from "../../svgs";

function GoToTopButton() {
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

export default GoToTopButton;
