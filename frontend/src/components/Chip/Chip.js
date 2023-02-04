import React from "react";

export default function Chip({ title, isActive, onClick }) {
  return (
    <p className={`chip ${isActive ? "active" : ""}`} onClick={onClick}>
      {title}
    </p>
  );
}
