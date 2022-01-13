import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

const Nav = () => {
  const { tabs, toggleActiveTab } = useContext(Context);

  return (
    <nav className="nav">
      {tabs.map((tab) => {
        const styles = {
          color: tab.isActive ? "white" : "",
          backgroundColor: tab.isActive ? "rgb(27, 27, 27)" : "",
        };
        return (
          <Link
            key={tab.title}
            className="nav-item"
            to={tab.path}
            onClick={() => toggleActiveTab(tab.title)}
            style={styles}
          >
            {tab.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
