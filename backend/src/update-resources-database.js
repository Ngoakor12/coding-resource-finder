const { resourcesRef, addDoc } = require("../firebase");
const { getAllResources } = require("./resources");

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

async function main() {
  const resources = (await getAllResources()).data;
  await updateResources(resources);
}

main();
