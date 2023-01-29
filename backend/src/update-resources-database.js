const { getDb, connectToDb } = require("./database-config");
const { getCurrentCollectionName } = require("./utils");
const { getAllResources } = require("./web-scrape-resources");

/**
 * A function that adds resources to the database
 * @param {Object} database representing the database connection/instance
 * @param {Array} resources
 * @returns {void}
 */

async function updateResources(database, resources = []) {
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
//     console.log(typeof db);
//     getAllResources().then((res) => {
//       updateResources(db, res);
//     });
//   }
// });
