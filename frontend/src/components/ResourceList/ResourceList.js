import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { Context } from "../../Context";
import SearchForm from "../SearchForm/SearchForm";
import { bookmarkIcon, removeBookmarkIcon } from "../../svgs";
import ResourceSkeleton from "../ResourceSkeleton/ResourceSkeleton";

function ResourceList() {
  const {
    addBookmark,
    bookmarks,
    removeBookmark,
    searchTerm,
    allResources,
    setPageTitle,
    renderedResources,
    setRenderedResources,
    setResourceType,
    resourceType,
  } = useContext(Context);

  const filterType = useLocation().pathname.split("/")[2];

  const handlePageTitleUpdate = () =>
    filterType && filterType.length
      ? setPageTitle(
          `Resources - ${
            filterType.slice(0, 1).toLocaleUpperCase() + filterType.slice(1)
          } | Coding Resource Finder`
        )
      : setPageTitle(`Resources | Coding Resource Finder`);

  useEffect(() => {
    handlePageTitleUpdate();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setResourceType(filterType);
    // eslint-disable-next-line
  }, [filterType]);

  return (
    <div className="resource-list">
      <SearchForm />
      {renderedResources.length !== 0 ? (
        renderedResources.map((resource) => {
          const isBookmarked = bookmarks.find((bookmark) => {
            return bookmark.url === resource.url;
          });
          const icon = isBookmarked ? (
            <button
              className={"remove-bookmark-button"}
              onClick={() => {
                removeBookmark(resource.url);
              }}
              title="remove bookmark"
            >
              {removeBookmarkIcon}
            </button>
          ) : (
            <button
              className={"bookmark-button"}
              onClick={() => {
                addBookmark(resource.url);
              }}
              title="add bookmark"
            >
              {bookmarkIcon}
            </button>
          );

          return (
            <div className="resource-wrapper" key={nanoid()}>
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="resource"
              >
                <h3 className="resource-title">{resource.title}</h3>
                <span className="resource-type">{resource.type}</span>
              </a>
              {icon}
            </div>
          );
        })
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
        {`Load all ${resourceType === "all" ? "resources" : resourceType} (${
          allResources.length - renderedResources.length
        })`}
      </button>
    </div>
  );
}

export default ResourceList;
