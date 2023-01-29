/**
 * Function to get the current collection name
 * @returns {String} A string including the current year and month (resources_year_month)
 */

function getCurrentCollectionName() {
  return `resources_${new Date().getFullYear()}_${new Date().getMonth() + 1}
  }`;
}

/**
 * Function to check if an enter page is a number before or after trying to convert it into a number
 * @param page a number representing representing a page of resources
 * @returns {Boolean} true if page is a number and false if page can be converted into a number
 */

function isPageNumber(page) {
  const pageNumber = Number(page);
  if (pageNumber && typeof pageNumber === "number") return true;
  return false;
}

module.exports = { getCurrentCollectionName, isPageNumber };
