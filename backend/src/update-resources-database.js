const { resourcesRef, addDoc } = require("../firebase");
const { getAllResources } = require("./scrape-resources");

async function updateResources(resources) {
  try {
    resources.forEach(async (resource) => {
      await addDoc(resourcesRef, {
        title: resource.title,
        url: resource.url,
        type: resource.type,
      });
    });
  } catch (error) {
    throw error;
  }
}

getAllResources()
  .then((resources) => {
    updateResources(resources);
  })
  .catch((error) => {
    throw error;
  });
console.log("Database successfully updated :)");
