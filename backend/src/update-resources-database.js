const { connectToDb, closeDb } = require("./database-config");
const { getCurrentCollectionName } = require("./utils");
const { getAllResources } = require("./web-scrape-resources");

/**
 * A function that adds resources to the database
 * @param {Object} database representing the database connection/instance
 * @param {Array} resources
 * @returns {void}
 */

async function updateResources(database, resources = []) {
  console.log("---In updateResources---");
  console.log(`Format all resources. Number of resources: ${resources.length}`);
  const formattedResources = resources.map((resource) => ({
    title: resource.title,
    url: resource.url,
    type: resource.type,
    groups: [],
  }));
  console.log(
    `Successfully formatted all resources. Number of resources: ${formattedResources.length}`
  );
  console.log("Run getCurrentCollectionName");
  const collectionName = getCurrentCollectionName();
  console.log(`Successfully got collection name: ${collectionName}`);

  try {
    console.log("Run insertMany on collection");
    await database.collection(collectionName).insertMany(formattedResources);
    console.log("Successfully ran insertMany");
  } catch (error) {
    console.log(`Error running insertMany: ${error}`);
  }
}

async function main() {
  console.log("---In main---");

  let client;

  try {
    console.log("Connect to db");
    client = await connectToDb();
    const db = client.db();
    console.log(`Successfully connected to db`);

    console.log("Run getAllResources");
    const resources = await getAllResources();
    console.log("Successfully ran getAllResources");
    console.log(
      `Run updateResources. Number of resources: ${resources.length}`
    );
    await updateResources(db, resources);
    console.log("Successfully ran updateResources");
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    closeDb(client);
    // prevent node from hanging
    process.exit(0);
  }
}

main();
