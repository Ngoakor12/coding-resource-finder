import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

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
    await fetch("https://acn-resource-finder-api.herokuapp.com/", {
      method: "GET", // The method
      mode: "no-cors", // It can be no-cors, cors, same-origin
    }).then((data) => setResources(data));
  }

  console.log(resources);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
