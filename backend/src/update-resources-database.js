const { resourcesRef, addDoc } = require("./firebase");
const { getAllResources } = require("./web-scrape-resources");

async function updateResources(resources) {
  await resources.forEach(async (resource) => {
    await addDoc(resourcesRef, {
      title: resource.title,
      url: resource.url,
      type: resource.type,
    });
  });
}

getAllResources().then((resources) => {
  updateResources(resources);
});
