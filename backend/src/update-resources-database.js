const { getDb, connectToDb } = require("./database-config");
const { getCurrentCollectionName } = require("./utils");
const { getAllResources } = require("./web-scrape-resources");

async function updateResources(resources, database) {
  const formattedResources = resources.map((resource) => ({
    title: resource.title,
    url: resource.url,
    type: resource.type,
  }));
  const collectionName = getCurrentCollectionName();
  console.log(database);
  await database.collection(collectionName).insertMany(formattedResources);
}

// let db;
// connectToDb((err) => {
//   if (!err) {
//     db = getDb();
//     getAllResources().then((resources) => {
//       updateResources(resources, db);
//     });
//   }
// });
