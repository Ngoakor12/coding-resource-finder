import { useContext, useEffect } from "react";
import { Context } from "../../appContext";
import SearchForm from "../SearchForm/SearchForm";
import ResourceSkeleton from "../ResourceSkeleton/ResourceSkeleton";
import Resource from "../Resource/Resource";
import { nanoid } from "nanoid";

function ResourceList() {
  const {
    searchTerm,
    allResources,
    setPageTitle,
    renderedResources,
    setRenderedResources,
  } = useContext(Context);

  useEffect(() => {
    setPageTitle("Resources | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="resource-list">
      <SearchForm />
      {renderedResources.length !== 0 ? (
        renderedResources.map((resource) => (
          <Resource resource={resource} key={nanoid()} />
        ))
      ) : searchTerm ? (
        <h2 className="content-placeholder">Resource(s) not found...</h2>
      ) : (
        [...Array(20)].map((_, index) => (
          <ResourceSkeleton key={`skeleton${index}`} />
        ))
      )}

      <button
        className="load-more-btn"
        onClick={() => setRenderedResources(allResources)}
        disabled={
          renderedResources.length === allResources.length || searchTerm.trim()
        }
      >
        {`Load all resources (${
          allResources.length - renderedResources.length
        })`}
      </button>
    </div>
  );
}

export default ResourceList;
