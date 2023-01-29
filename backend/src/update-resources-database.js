const { getDb, connectToDb } = require("./database-config");
const { getCurrentCollectionName } = require("./utils");
const { getAllResources } = require("./web-scrape-resources");

async function updateResources(resources = [], database) {
  const formattedResources = resources.map((resource) => ({
    title: resource.title,
    url: resource.url,
    type: resource.type,
  }));
  const collectionName = getCurrentCollectionName();
  await database.collection(collectionName).insertMany(formattedResources);
}

/* Uncomment and run to update to the latest resources */

// let db;
// connectToDb(async (err) => {
//   if (!err) {
//     db = await getDb();
//     getAllResources().then((res) => {
//       updateResources(res, db);
//     });
//   }
// });
