import React from "react";

export default function SkeletonResource() {
  return (
    <div className="resource-skeleton">
      <div className="left">
        <div className="larger" />
        <div className="smaller" />
      </div>
      <div className="right" />
    </div>
  );
}
