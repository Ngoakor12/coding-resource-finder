import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import SearchForm from "../SearchForm/SearchForm";

const removeBookmarkIcon = (
  <svg
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <g fill="currentColor">
      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
    </g>
  </svg>
);
const bookmarkIcon = (
  <svg
    aria-hidden="true"
    role="img"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
  >
    <g fill="currentColor">
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
    </g>
  </svg>
);

function ResourceList() {
  const {
    addBookmark,
    bookmarks,
    removeBookmark,
    searchTerm,
    resources,
    setPageTitle,
    loadMoreResources,
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
            <div className="resource-wrapper" key={resource.url}>
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
        <h2 className="content-placeholder">Loading resources...</h2>
      )}
      <button
        className="load-more-btn"
        onClick={loadMoreResources}
        disabled={
          renderedResources.length === resources.length || searchTerm.trim()
        }
      >
        Load 20 more resources
      </button>
      <button
        className="load-more-btn"
        onClick={() => setRenderedResources(resources)}
        disabled={
          renderedResources.length === resources.length || searchTerm.trim()
        }
      >
        Load all resources
      </button>
    </div>
  );
}

export default ResourceList;
