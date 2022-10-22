import React from "react";
import { nanoid } from "nanoid";

import ResourceSkeleton from "../ResourceSkeleton/ResourceSkeleton";

export default function ResourceSkeletonList() {
  return (
    <div className="resource-list">
      {[...Array(20)].map(() => (
        <ResourceSkeleton key={nanoid()} />
      ))}
    </div>
  );
}
