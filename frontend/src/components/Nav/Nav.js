import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Context } from "../../appContext";

export default function Nav() {
  const { renderedResources, bookmarks } = useContext(Context);

  return (
    <nav className="nav">
      <NavLink
        to="/resources"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        {`Resources ${renderedResources && `(${renderedResources.length})`}`}
      </NavLink>
      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? "nav-item active-nav" : "nav-item"
        }
      >
        {`Bookmarks ${bookmarks && `(${bookmarks.length})`}`}
      </NavLink>
    </nav>
  );
}
