import React from "react";
import { nanoid } from "nanoid";

import Resource from "../Resource/Resource";

export default function ResourceList({ resources, isBookmarksPage }) {
  return (
    <div className="resource-list">
      {resources.map((resource) => (
        <Resource
          resource={resource}
          isBookmarksPage={isBookmarksPage}
          key={nanoid()}
        />
      ))}
    </div>
  );
}
