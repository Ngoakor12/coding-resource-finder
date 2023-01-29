import React from "react";
import { useContext } from "react";

import { Context } from "../../AppContext";

export default function LoadMoreResourcesButton() {
  const { allResources, renderedResources, setRenderedResources } =
    useContext(Context);

  function handleClick() {
    setRenderedResources(allResources);
  }

  function handleDisableClick() {
    return renderedResources.length === allResources.length;
  }

  return (
    <button
      type="button"
      className="load-more-btn"
      onClick={handleClick}
      disabled={handleDisableClick()}
    >
      {`Load all resources (${allResources.length - renderedResources.length})`}
    </button>
  );
}
