import Resource from "../Resource/Resource";
import { nanoid } from "nanoid";

function ResourceList({ resources }) {
  return (
    <div className="resource-list">
      {resources &&
        resources.map((resource) => (
          <Resource resource={resource} key={nanoid()} />
        ))}
    </div>
  );
}

export default ResourceList;
