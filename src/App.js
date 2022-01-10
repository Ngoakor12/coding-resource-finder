import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import "./App.css";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ResourceList from "./components/ResourceList/ResourceList";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const { resources, setResources } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    let result = [];
    result = resources.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim());
    });
    if (result.length > 0) {
      setResources(result);
      result = [];
    } else {
      setResources(resources);
    }
  }

  return (
    <>
      <Header />
      <main className="main">
        <aside className="aside-nav">
          <Nav />
        </aside>
        <section className="main-content">
          <SearchForm
            setSearchTerm={(e) => {
              setSearchTerm(e.target.value);
            }}
            handleSearch={handleSearch}
          />

          <Routes>
            <Route
              exact
              path="/acn-resource-finder"
              element={<ResourceList />}
            />
            <Route
              path="/acn-resource-finder/bookmarks"
              element={<BookmarkList />}
            />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
