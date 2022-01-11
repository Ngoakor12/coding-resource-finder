import { useContext } from "react";
import { Context } from "../../Context";
import SearchForm from "../SearchForm/SearchForm";

const ResourceList = () => {
  const {
    resources,
    renderedResources,
    addBookmark,
    bookmarks,
    removeBookmark,
    searchTerm,
  } = useContext(Context);
  const resourceGroup = searchTerm.trim() ? renderedResources : resources;

  return (
    <div className="resource-list">
      <SearchForm />
      {resourceGroup.length !== 0 ? (
        resourceGroup.map((resource) => {
          const isBookmarked = bookmarks.find(
            (bookmark) => bookmark.url === resource.url
          );
          const icon = isBookmarked ? (
            <button
              className={"remove-bookmark-button"}
              onClick={() => {
                removeBookmark(resource.url);
              }}
            >
              +
            </button>
          ) : (
            <button
              className={"bookmark-button"}
              onClick={() => {
                addBookmark(resource.url);
              }}
            >
              +
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
    </div>
  );
};

export default ResourceList;
