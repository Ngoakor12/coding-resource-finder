const Nav = (props) => {
  return (
    <nav className="nav">
      {props.tabs.map((tab) => {
        const styles = {
          color: tab.isActive ? "white" : "",
          backgroundColor: tab.isActive ? "rgb(27, 27, 27)" : "",
          fontStyle: tab.isActive ? "italic" : "",
        };
        return (
          <button
            className="nav-item"
            name="resources"
            onClick={props.toggleActiveTab}
            style={styles}
          >
            {tab.title}
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
