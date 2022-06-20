import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ResourceList from "./components/ResourceList/ResourceList";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <aside className="aside-nav">
          <Nav />
        </aside>
        <section className="main-content">
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/resources/all" replace={true}></Navigate>}
            />
            <Route exact path="/resources/all" element={<ResourceList />} />
            <Route exact path="/resources/topics" element={<ResourceList />} />
            <Route
              exact
              path="/resources/projects"
              element={<ResourceList />}
            />
            <Route exact path="/bookmarks" element={<BookmarkList />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
