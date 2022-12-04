const { getDb, connectToDb } = require("./database-config");
// const { resourcesRef, addDoc } = require("./firebase");
const { getCurrentCollectionName } = require("./utils");
const { getAllResources } = require("./web-scrape-resources");

// firebase
// async function updateResources(resources) {
//   await resources.forEach(async (resource) => {
//     await addDoc(resourcesRef, {
//       title: resource.title,
//       url: resource.url,
//       type: resource.type,
//     });
//   });
// }

// mongodb
async function updateResources(resources, database) {
  const formattedResources = resources.map((resource) => ({
    title: resource.title,
    url: resource.url,
    type: resource.type,
  }));
  const collectionName = getCurrentCollectionName();
  console.log(database);
  await database.collection(collectionName).insertMany(formattedResources);
  // await database.forEach(async (resource) => {
  //   await addDoc(resourcesRef, {
  //     title: resource.title,
  //     url: resource.url,
  //     type: resource.type,
  //   });
  // });
}

let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
    getAllResources().then((resources) => {
      updateResources(resources, db);
    });
  }
});
