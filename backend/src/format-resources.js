async function getPages(resources) {
  try {
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
  } catch (error) {
    throw error;
  }
}

async function getPageData(resources, page) {
  try {
    const pages = await getPages(resources);
    const pageData = pages[Number(page) - 1];
    return pageData;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPageData, getPages
};
