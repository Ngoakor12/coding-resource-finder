import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../appContext";

function Nav() {
  const { renderedResources, bookmarks } = useContext(Context);

  return (
    <nav className="nav">
      <NavLink
        to="/resources"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        {`Resources (${renderedResources.length})`}
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        {`Bookmarks (${bookmarks.length})`}
      </NavLink>
    </nav>
  );
}

export default Nav;
