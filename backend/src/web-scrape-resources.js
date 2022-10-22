const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { ACN_URL } = require("./constants");

async function getHTML() {
  return (await JSDOM.fromURL(ACN_URL)).window.document;
}

async function getTopicsFromACN() {
  const html = await getHTML();
  // topics are initially a nodelist and has to be converted to an array
  const topicElements = Array(
    ...html.querySelectorAll(`li[title="Topics"] ul li a`)
  );
  const topics = topicElements.map((topic) => {
    return {
      title: topic.textContent.trim(),
      url: topic.href,
      type: "topic",
    };
  });
  return topics;
}

async function getProjectsFromACN() {
  const html = await getHTML();
  // projects are initially a nodelist and has to be converted to an array
  const projectElements = Array(
    ...html.querySelectorAll(`li[title="Projects"] ul li a`)
  );
  const projects = projectElements.map((project) => {
    return {
      title: project.textContent.trim(),
      url: project.href,
      type: "project",
    };
  });
  return projects;
}

async function getAllResources() {
  const topics = await getTopicsFromACN();
  const projects = await getProjectsFromACN();
  const allResources = [...topics, ...projects];
  return allResources;
}

module.exports = {
  getAllResources,
};
