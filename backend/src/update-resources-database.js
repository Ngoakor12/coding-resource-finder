const { resourcesRef, addDoc } = require("./firebase");
const { getAllResources } = require("./scrape-resources");

async function updateResources(resources) {
  try {
    resources.forEach(async (resource) => {
      await addDoc(resourcesRef, {
        title: resource.title,
        url: resource.url,
        type: resource.type,
      });
      console.log(resource.title);
    });
  } catch (error) {
    console.log("Error updating database :(");
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
