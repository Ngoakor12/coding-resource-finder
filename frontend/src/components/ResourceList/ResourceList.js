import { nanoid } from "nanoid";

import Resource from "../Resource/Resource";

export default function ResourceList({ resources }) {
  return (
    <div className="resource-list">
      {resources &&
        resources.map((resource) => (
          <Resource resource={resource} key={nanoid()} />
        ))}
    </div>
  );
}
