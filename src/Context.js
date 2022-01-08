import { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    try {
      getResources();
    } catch (error) {
      console.log(error)
    }
  }, []);

  async function getResources() {
    await fetch("https://acn-resource-finder-api.herokuapp.com/all/")
      .then((response) => response.json())
      .then((data) => {
        const finalData = data.data.map((resource) => {
          return { ...resource, isBookmarked: false };
        });
        setResources(finalData);
      });
  }

  return (
    <Context.Provider value={{  resources,setResources }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
