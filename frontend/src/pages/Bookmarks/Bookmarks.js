import React, { useEffect, useContext } from "react";

import { Context } from "../../AppContext";
import ClearBookmarksButton from "../../components/Buttons/ClearBookmarksButton";
import ResourceList from "../../components/ResourceList/ResourceList";
import GoToTopButton from "../../components/Buttons/GoToTopButton";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import BookmarkGroupCard from "../../components/BookmarkGroupCard/BookmarkGroupCard";

export default function Bookmarks() {
  const { bookmarks, setPageTitle, bookmarkGroups } = useContext(Context);

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
                {bookmarkGroups.map((group) => (
                  <BookmarkGroupCard bookmarkGroup={group} />
                ))}
                <ClearBookmarksButton />
                <div className="resources-list">
                  <ResourceList resources={bookmarks} isBookmarksPage={true} />
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
