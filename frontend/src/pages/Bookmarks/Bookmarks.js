import { useEffect, useContext } from "react";
import React from "react";

import { Context } from "../../appContext";
import ClearBookmarksButton from "../../components/Buttons/ClearBookmarksButton";
import ResourceList from "../../components/ResourceList/ResourceList";
import GoToTopButton from "../../components/Buttons/GoToTopButton";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";

export default function Bookmarks() {
  const { bookmarks, setPageTitle } = useContext(Context);

  useEffect(() => {
    setPageTitle("Bookmarks | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <GoToTopButton />
      <Header />
      <main className="main">
        <aside className="aside-nav">
          <Nav />
        </aside>
        <section className="main-content">
          <section className="resource-list">
            {bookmarks.length ? (
              <React.Fragment>
                <ClearBookmarksButton />
                <div className="resources-list">
                  <ResourceList resources={bookmarks} />
                </div>
              </React.Fragment>
            ) : (
              <h2 className="content-placeholder">No bookmarks yet...</h2>
            )}
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
