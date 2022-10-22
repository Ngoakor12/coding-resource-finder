const { resourcesRef, addDoc } = require("./firebase");
const { getAllResources } = require("./web-scrape-resources");

async function updateResources(resources) {
  resources.forEach(async (resource) => {
    await addDoc(resourcesRef, {
      title: resource.title,
      url: resource.url,
      type: resource.type,
    });
    console.log(resource.title);
  });
}

getAllResources().then((resources) => {
  updateResources(resources);
});
