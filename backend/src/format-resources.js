function getPages(resources) {
  const numOfResources = resources.length;
  const numOfResourcesPerPage = 20;
  const pages = [];
  const numOfPages = Math.ceil(numOfResources / numOfResourcesPerPage);
  let start = 0,
    end = numOfResourcesPerPage;

  for (let i = 1; i <= numOfPages; i++) {
    pages.push({
      current_page: i,
      num_of_pages: numOfPages,
      num_of_resources: resources.slice(start, end).length,
      data: resources.slice(start, end),
    });
    start += numOfResourcesPerPage;
    end += numOfResourcesPerPage;
  }
  return pages;
}

function getPageData(resources, page) {
  const pages = getPages(resources);
  const pageData = pages[Number(page) - 1];
  return pageData;
}

module.exports = {
  getPageData, getPages
};
