function getCurrentCollectionName() {
  return `resources_${new Date().getFullYear()}_${new Date().getMonth() + 1}
  }`;
}

function isPageNumber(page) {
  const pageNumber = Number(page);
  if (pageNumber && typeof pageNumber === "number") return true;
  return false;
}

module.exports = { getCurrentCollectionName, isPageNumber };
