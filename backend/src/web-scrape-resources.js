const http = require("http");
const cheerio = require("cheerio");

const { ACN_URL } = require("./constants");

// use node's core http API to reduce overhead
/**
 * Fetches HTML document from {ACN_URL} - http://syllabus.africacode.net/
 *
 * @returns {Promise}
 */
function getHTML() {
  return new Promise((resolve, reject) => {
    try {
      http.get(ACN_URL, (res) => {
        const { statusCode } = res;

        if (statusCode !== 200) {
          throw new Error(
            `Request failed\nReceived status code ${statusCode}\nExpected status code 200`
          );
        }

        let html = "";
        res.on("data", (chunk) => (html += chunk));
        res.on("end", () => resolve(html));
      });
    } catch (e) {
      console.error(e.message);
      reject(new Error(`Failed to fetch HTML document from ${ACN_URL}`));
    }
  });
}

/**
 * @typedef {Object} Resource
 * @property {String} title - Resource title
 * @property {String} url - Resource URL
 * @property {String} type - Resource type
 */

/**
 * Returns all resources categorized by "topic" or "project"
 *
 * @returns {Resource[]} - Array of resources
 */
async function getAllResources() {
  let html = null;
  try {
    html = await getHTML();
  } catch (e) {
    console.error(e.message);
    return [];
  }

  const $ = cheerio.load(html);

  const resources = [];
  const resourceTypes = ["Topics", "Projects"];

  resourceTypes.forEach((resourceType) => {
    const resourceElements = $("#sidebar").find(
      `li[title=${resourceType}] ul li a`
    );
    resourceElements.each(function () {
      resources.push({
        title: $(this).text().replace(/\n/g, "").trim(),
        // remove the preceding `/` from `href`
        url: `${ACN_URL}${$(this).attr("href").slice(1)}`,
        // Assuming the `resourceType` is a singular lowercased version of itself
        type: resourceType.toLowerCase().slice(0, -1),
      });
    });
  });

  return resources;
}

module.exports = {
  getAllResources,
};
