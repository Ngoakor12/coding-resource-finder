const ResourceList = (props) => {
  return (
    <div className="resource-list">
      {props.resources.length !== 0 ? (
        props.resources.map((resource) => {
          return (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="resource"
            >
              <h3 className="resource-title">{resource.title}</h3>
              <span className="resource-type">{resource.type}</span>
            </a>
          );
        })
      ) : (
        <h2 className="content-placeholder">Loading resources...</h2>
      )}
    </div>
  );
};

export default ResourceList;
