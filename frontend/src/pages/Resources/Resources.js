import React, { useState, useContext, useEffect } from "react";

import { Context } from "../../appContext";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResourceList from "../../components/ResourceList/ResourceList";
import ResourceSkeletonList from "../../components/ResourceSkeletonList/ResourceSkeletonList";
import LoadMoreResourcesButton from "../../components/Buttons/LoadMoreResourcesButton";
import GoToTopButton from "../../components/Buttons/GoToTopButton";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import ErrorFetchingResources from "../ErrorFetchingResources/ErrorFetchingResources";

export default function Resources() {
  const { setPageTitle, renderedResources, searchTerm, hasFetchError } =
    useContext(Context);
  const [resourceFilter, setResourceFilter] = useState("all");
  const filters = ["project", "topic"];

  useEffect(() => {
    setPageTitle("Resources | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  function handleClickFilterChip(filter) {
    setResourceFilter(resourceFilter === filter ? "all" : filter);
  }

  return (
    <React.Fragment>
      {hasFetchError ? (
        <ErrorFetchingResources />
      ) : (
        <div>
          <GoToTopButton />
          <Header />
          <main className="main">
            <aside className="aside-nav">
              <Nav />
            </aside>
            <section className="main-content">
              <section className="resource-list">
                <SearchForm />
                <div className="search-suggestions">
                  <h4 class="header-description">Filters:</h4>
                  {filters.map((filter, filterIdx) => {
                    return (
                      <p
                        key={filterIdx}
                        className={`search-suggestion ${resourceFilter === filter ? "active" : ""}`}
                        onClick={() => handleClickFilterChip(filter)}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </p>
                    );
                  })}
                </div>
                {renderedResources && renderedResources.length ? (
                  <div className="resources-list">
                    {resourceFilter === "all" ? (
                      <ResourceList resources={renderedResources} />
                    ) : (
                      <ResourceList
                        resources={renderedResources.filter(
                          (r) => r.type === resourceFilter
                        )}
                      />
                    )}
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
        </div>
      )}
    </React.Fragment>
  );
}
