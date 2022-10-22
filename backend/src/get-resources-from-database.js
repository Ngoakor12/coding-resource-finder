const { getDocs, resourcesQuery } = require("./firebase");

async function getResourcesFromDB() {
  const resources = [];
  const resourcesDocs = await getDocs(resourcesQuery);
  resourcesDocs.forEach((doc) => {
    resources.push(doc.data());
  });
  const allResourcesData = {
    num_of_resources: resources.length,
    data: resources,
  };
  return allResourcesData;
}

// getResourcesFromDB().then((res) => console.log(res));

module.exports = { getResourcesFromDB };
