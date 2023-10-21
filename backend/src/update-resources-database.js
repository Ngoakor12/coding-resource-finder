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
  console.log("In updateResources");
  console.log("Format all resources");
  const formattedResources = resources.map((resource) => ({
    title: resource.title,
    url: resource.url,
    type: resource.type,
  }));
  console.log(
    `Finished formatting all resources: Number of resources: ${formattedResources.length}`
  );
  console.log("Run getCurrentCollectionName");
  const collectionName = getCurrentCollectionName();
  console.log(`Finished getting collection name: ${collectionName}`);
  await database.collection(collectionName).insertMany(formattedResources);
}

let db;
connectToDb(async (err) => {
  if (!err) {
    console.log("Start db init");
    db = await getDb();
    console.log(`Have access to db: ${db}`);

    console.log("Run getAllResources");
    getAllResources().then((res) => {
      console.log("Finished running getAllResources");
      console.log(`Run updateResources. Found resources length: ${res.length}`);
      updateResources(db, res);
      console.log("Finished running updateResources");
    });
  } else {
    console.log(`Error: ${err}`);
  }
});
