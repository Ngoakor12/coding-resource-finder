import React, { useContext, useEffect } from "react";

import { Context } from "../../AppContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResourceList from "../../components/ResourceList/ResourceList";
import ResourceSkeletonList from "../../components/ResourceSkeletonList/ResourceSkeletonList";
import LoadMoreResourcesButton from "../../components/Buttons/LoadMoreResourcesButton";
import GoToTopButton from "../../components/Buttons/GoToTopButton";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import ErrorFetchingResources from "../ErrorFetchingResources/ErrorFetchingResources";

export default function Resources() {
  const {
    setPageTitle,
    renderedResources,
    searchTerm,
    hasFetchError,
    resourceFilter,
  } = useContext(Context);

  const filteredResources =
    resourceFilter === "all" ? (
      <ResourceList resources={renderedResources} />
    ) : (
      <ResourceList
        resources={renderedResources.filter(
          (resource) => resource.type === resourceFilter
        )}
      />
    );

  useEffect(() => {
    setPageTitle("Resources | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {hasFetchError ? (
        <ErrorFetchingResources />
      ) : (
        <div>
          <Header />
          <main className="main">
            <aside className="aside-nav">
              <Nav />
            </aside>
            <section className="main-content">
              <section className="resource-list">
                <SearchForm />
                {renderedResources && renderedResources.length ? (
                  <div className="resources-list">
                    {filteredResources}
                    <LoadMoreResourcesButton />
                  </div>
                ) : searchTerm ? (
                  <h2 className="content-placeholder">
                    Resource(s) not found...
                  </h2>
                ) : (
                  <ResourceSkeletonList />
                )}
              </section>
            </section>
          </main>

          <GoToTopButton />
        </div>
      )}
    </React.Fragment>
  );
}
