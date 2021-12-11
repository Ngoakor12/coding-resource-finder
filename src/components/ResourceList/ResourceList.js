const ResourceList = (props) => {
  return (
    <main>
      {props.resources.map((resource) => {
        return (
          <a href={resource.url}>
            <h3>{resource.title}</h3>
            <span>{resource.type}</span>
          </a>
        );
      })}
    </main>
  );
};

export default ResourceList;
