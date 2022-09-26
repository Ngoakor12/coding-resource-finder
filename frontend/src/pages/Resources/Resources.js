import { useContext, useEffect } from "react";
import { Context } from "../../appContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResourceList from "../../components/ResourceList/ResourceList";
import ResourceSkeletonList from "../../components/ResourceSkeletonList/ResourceSkeletonList";
import LoadMoreResourcesButton from "../../components/Buttons/LoadMoreResourcesButton";

function Resources() {
  const { setPageTitle, renderedResources, searchTerm } = useContext(Context);

  useEffect(() => {
    setPageTitle("Resources | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <main className="resource-list">
      <SearchForm />
      {renderedResources.length ? (
        <div className="resources-list">
          <ResourceList resources={renderedResources} />
          <LoadMoreResourcesButton />
        </div>
      ) : searchTerm ? (
        <h2 className="content-placeholder">Resource(s) not found...</h2>
      ) : (
        <ResourceSkeletonList />
      )}
    </main>
  );
}

export default Resources;
