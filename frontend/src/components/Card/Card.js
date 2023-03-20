import React from "react";

export default function Card({ children, fullWidth }) {
  console.log(fullWidth);
  return (
    <div className={`card ${fullWidth ? "full-width" : ""}`}>{children}</div>
  );
}
