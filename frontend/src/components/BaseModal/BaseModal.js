import React from "react";

export default function BaseModal({ heading, children }) {
  return (
    <div className="bookmark-group-modal">
      <div className="bookmark-group-modal-header">
        {heading ? heading : "Heading"}
      </div>
      <div className="bookmark-group-modal-body">{children}</div>
    </div>
  );
}
