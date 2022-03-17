import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        Resources
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        Bookmarks
      </NavLink>
    </nav>
  );
}

export default Nav;
