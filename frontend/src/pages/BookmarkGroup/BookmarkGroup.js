import React, { useEffect, useContext } from "react";

import { Context } from "../../AppContext";
import ClearBookmarksButton from "../../components/Buttons/ClearBookmarksButton";
import ResourceList from "../../components/ResourceList/ResourceList";
import GoToTopButton from "../../components/Buttons/GoToTopButton";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import BookmarkGroupCard from "../../components/BookmarkGroupCard/BookmarkGroupCard";
import BookmarkGroupDetailsHeader from "../../components/BookmarkGroupDetailsHeader/BookmarkGroupDetailsHeader";
import { useParams } from "react-router-dom";

export default function BookmarkGroup() {
  const { bookmarks, setPageTitle, bookmarkGroups, clearBookmarkGroup } =
    useContext(Context);
  const { group } = useParams();

  useEffect(() => {
    setPageTitle("Bookmarks | Coding Resource Finder");
    // eslint-disable-next-line
  }, []);

  function handleClickClearBookmarkGroup(group) {
    clearBookmarkGroup({ bookmarkGroup: group });
  }

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
            <React.Fragment>
              <BookmarkGroupDetailsHeader
                bookmarkGroups={bookmarkGroups}
                heading={group}
                handleClickClearBookmarkGroup={handleClickClearBookmarkGroup}
              />
              <div className="resources-list">
                {bookmarks.length ? (
                  <ResourceList
                    resources={bookmarks.filter((b) =>
                      b.groups.includes(group)
                    )}
                    isBookmarksPage={true}
                    bookmarkGroup={group}
                  />
                ) : (
                  <h2 className="content-placeholder">No bookmarks yet...</h2>
                )}
              </div>
            </React.Fragment>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
