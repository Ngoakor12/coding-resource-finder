import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResourceList from "./components/ResourceList/ResourceList";

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    try {
      getResources();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getResources() {
    await fetch("https://acn-resource-finder-api.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setResources(data.resources));
  }

  return (
    <>
      <Header />
      <ResourceList resources={resources} />
    </>
  );
}

export default App;
