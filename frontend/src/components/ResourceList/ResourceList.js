import { useContext, useEffect } from "react";
import { nanoid } from "nanoid";
import { Context } from "../../appContext";
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
        {`Load all resources (${
          allResources.length - renderedResources.length
        })`}
      </button>
    </div>
  );
}

export default ResourceList;
