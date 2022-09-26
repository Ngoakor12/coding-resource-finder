import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Resources from "./pages/Resources/Resources";

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
              element={<Navigate to="/resources" replace={true}></Navigate>}
            />
            <Route exact path="/resources" element={<Resources />} />
            <Route exact path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
