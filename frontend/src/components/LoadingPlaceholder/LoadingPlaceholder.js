import React from "react";

function LoadingPlaceholder() {
  return (
    <div>
      <div className="loading-placeholder">
        <div className="left">
          <div className="larger"></div>
          <div className="smaller"></div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default LoadingPlaceholder;
