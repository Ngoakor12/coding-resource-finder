import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/coding-resource-finder/"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        Resources
      </NavLink>
      <NavLink
        to="/coding-resource-finder/bookmarks"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        Bookmarks
      </NavLink>
    </nav>
  );
};

export default Nav;
