import React from "react";
import { useNavigate } from "react-router-dom";

import { alertIcon } from "../../svgs";

export default function NotFound() {
  const navigate = useNavigate();

  function navigateToHomepage() {
    navigate("/");
  }
  return (
    <div className="centered-container">
      <div>
        {alertIcon}
        <h3 className="page-title">Page not found</h3>
        <p className="page-description">
          Check if the address you entered is correct and try again
        </p>
        <button className="go-to-home-button" onClick={navigateToHomepage}>
          Go back to homepage
        </button>
      </div>
    </div>
  );
}
