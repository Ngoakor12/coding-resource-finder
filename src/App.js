import { useEffect, useState } from "react";
import "./App.css";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ResourceList from "./components/ResourceList/ResourceList";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [resources, setResources] = useState([]);
  const [renderedResources, setRenderedResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tabs, setTabs] = useState([
    { title: "Resources", isActive: true },
    { title: "Bookmarks", isActive: false },
  ]);
  const [activeTab, setActiveTab] = useState("Resources");
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    try {
      getResources();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getResources() {
    await fetch("https://acn-resource-finder-api.herokuapp.com/all/")
      .then((response) => response.json())
      .then((data) => {
        const finalData = data.data.map((resource) => {
          return { ...resource, isBookmarked: false };
        });
        setRenderedResources(finalData);
        setResources(finalData);
      });
  }
  // console.log(resources);

  function handleSearch() {
    let result = [];
    result = resources.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim());
    });
    if (result.length > 0) {
      setRenderedResources(result);
      result = [];
    } else {
      setRenderedResources(resources);
    }
  }

  function toggleActiveTab(e) {
    const tabVal = e.target;
    setTabs((prevTabs) => {
      return prevTabs.map((tab) => {
        if (tabVal.innerHTML === tab.title) {
          setActiveTab(tab.title);
          return {
            ...tab,
            isActive: true,
          };
        } else {
          return {
            ...tab,
            isActive: false,
          };
        }
      });
    });
  }

  function toggleIsBookmarked(e) {
    const clickedResourceURL = e.target.parentNode.children[0].href;
    console.log(clickedResourceURL);
    setResources((prevResources) => {
      return prevResources.map((resource) => {
        if (clickedResourceURL === resource.url) {
          return {
            ...resource,
            isBookmarked: !resource.isBookmarked,
          };
        } else {
          return resource;
        }
      });
    });
    setRenderedResources(resources);
  }

  return (
    <>
      <Header />
      <main className="main">
        <aside className="aside-nav">
          <Nav
            toggleActiveTab={(e) => toggleActiveTab(e)}
            tabs={tabs}
            setActiveTab={setActiveTab}
          />
        </aside>
        <section className="main-content">
          <SearchForm
            setSearchTerm={(e) => {
              setSearchTerm(e.target.value);
            }}
            handleSearch={handleSearch}
          />

          {activeTab === "Resources" ? (
            <ResourceList
              resources={renderedResources}
              toggleIsBookmarked={toggleIsBookmarked}
            />
          ) : (
            <BookmarkList resources={resources} bookmarks={bookmarks} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
