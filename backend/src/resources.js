const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getHTML() {
  try {
    return (await JSDOM.fromURL("http://syllabus.africacode.net/")).window
      .document;
  } catch (error) {
    console.log(error);
  }
}

async function getTopics() {
  const html = await getHTML();
  // topics are initially a nodelist and has to be converted to an array
  const topics = Array(...html.querySelectorAll(`li[title="Topics"] ul li a`));
  return topics
    .map((topic) => {
      return {
        title: topic.textContent.trim(),
        url: topic.href,
        type: "topic",
      };
    })
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
}

async function getProjects() {
  const html = await getHTML();
  // projects are initially a nodelist and has to be converted to an array
  const projects = Array(
    ...html.querySelectorAll(`li[title="Projects"] ul li a`)
  );
  return projects
    .map((project) => {
      return {
        title: project.textContent.trim(),
        url: project.href,
        type: "project",
      };
    })
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
}

async function getResources() {
  const topics = await getTopics();
  const projects = await getProjects();
  return [...topics, ...projects].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

async function getPages(resource) {
  const resources = await resource();
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

async function getPageData(resource, page) {
  const pages = await getPages(resource);
  const pageData = pages[Number(page) - 1];
  
  return pageData;
}

module.exports = {
  getResources,
  getTopics,
  getProjects,
  getPageData,
};
