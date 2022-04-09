const { resourcesRef, getDocs } = require("../firebase");

async function getResourcesFromDB() {
  const resources = [];
  try {
    const resourcesDocs = await getDocs(resourcesRef);
    resourcesDocs.forEach((doc) => {
      resources.push(doc.data());
    });
    const allResourcesData = {
      num_of_resources: resources.length,
      data: resources,
    };
    return allResourcesData;
  } catch (error) {
    throw error;
  }
}

// getResourcesFromDB().then((res) => console.log(res));

module.exports = { getResourcesFromDB };
