function getCurrentCollectionName() {
  return `resources_${
    new Date().getFullYear() + "_" + (new Date().getMonth() + 1)
  }`;
  // return `resources_2022_5`;
}

function isPageNumber(page) {
  page = Number(page);
  if (page && typeof page === "number") return true;
  return false;
}

module.exports = { getCurrentCollectionName, isPageNumber };
