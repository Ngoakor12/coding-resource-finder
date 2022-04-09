function getCurrentCollectionName() {
  return `resources_${
    new Date().getFullYear() + "_" + (new Date().getMonth() + 1)
  }`;
}

module.exports = { getCurrentCollectionName };
