const { connectToDb, getDb } = require("./database-config");
// const { getDocs, resourcesQuery } = require("./firebase");
const { getCurrentCollectionName } = require("./utils");
// firebase
// async function getResourcesFromDB() {
//   const resources = [];
//   const resourcesDocs = await getDocs(resourcesQuery);
//   resourcesDocs.forEach((doc) => {
//     resources.push(doc.data());
//   });
//   const allResourcesData = {
//     num_of_resources: resources.length,
//     data: resources,
//   };
//   return allResourcesData;
// }

async function getResourcesFromDB(database) {
  const collectionName = getCurrentCollectionName();
  const resources = [];
  await database
    .collection(collectionName)
    .find({}, { projection: { _id: 0, type: 1, url: 1, title: 1 } })
    .forEach((resource) => {
      resources.push(resource);
    });
  const allResourcesData = {
    num_of_resources: resources.length,
    data: resources,
  };
  return allResourcesData;
}

// let db;
// connectToDb((err) => {
//   if (!err) {
//     db = getDb();
//     getResourcesFromDB(db).then((res) => console.log(res));
//   }
// });

module.exports = { getResourcesFromDB };
