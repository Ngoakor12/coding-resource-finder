const BookmarkList = (props) => {
  return (
    <div className="resource-list">
      {props.resources
        .filter((resource) => resource.isBookmarked)
        .map((resource) => {
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
              <button
                className="remove-bookmark-button"
                onClick={props.removeBookmark}
              >
                +
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default BookmarkList;
