import React from "react";

export default function Card({ children, fullWidth }) {
  return (
    <div className={`card ${fullWidth ? "full-width" : ""}`}>{children}</div>
  );
}
