import { nanoid } from "nanoid";
import ErrorFetchingResources from "../../pages/ErrorFetchingResources/ErrorFetchingResources";
import Resource from "../Resource/Resource";

export default function ResourceList({ resources }) {
  return (
    <div className="resource-list">
      {resources ?( 
        resources &&
          resources.map((resource) => (
            <Resource resource={resource} key={nanoid()} />
          ))
      ):(<ErrorFetchingResources/>) }
    </div>
  );
}
