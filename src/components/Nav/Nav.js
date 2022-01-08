import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      {/* const styles = {
          color: tab.isActive ? "white" : "",
          backgroundColor: tab.isActive ? "rgb(27, 27, 27)" : "",
          fontStyle: tab.isActive ? "italic" : "",
        }; */}

      <Link
        to="/"
        className="nav-item"
        name="resources"
        // onClick={props.toggleActiveTab}
        // style={styles}
      >
        Resources
      </Link>
      <Link
        to="/bookmarks"
        className="nav-item"
        name="resources"
        // onClick={props.toggleActiveTab}
        // style={styles}
      >
        Bookmarks
      </Link>
    </nav>
    // <nav className="nav">
    //   {props.tabs.map((tab) => {
    //     const styles = {
    //       color: tab.isActive ? "white" : "",
    //       backgroundColor: tab.isActive ? "rgb(27, 27, 27)" : "",
    //       fontStyle: tab.isActive ? "italic" : "",
    //     };
    //     return (
    //       <button
    //         key={tab.title}
    //         className="nav-item"
    //         name="resources"
    //         onClick={props.toggleActiveTab}
    //         style={styles}
    //       >
    //         {tab.title}
    //       </button>
    //     );
    //   })}
    // </nav>
  );
};

export default Nav;
