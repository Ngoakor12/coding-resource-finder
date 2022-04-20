import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import SearchForm from "../SearchForm/SearchForm";
import { bookmarkIcon, removeBookmarkIcon } from "../../svgs";

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
    isLoading,
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
        {isLoading ? "Loading..." : "Load 20 more resources"}
      </button>
      <button
        className="load-more-btn"
        onClick={() => setRenderedResources(resources)}
        disabled={
          renderedResources.length === resources.length || searchTerm.trim()
        }
      >
        {`Load all resources (${resources.length - renderedResources.length})`}
      </button>
    </div>
  );
}

export default ResourceList;
