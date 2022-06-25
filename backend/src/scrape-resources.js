const { JSDOM } = require("jsdom").jsdom;

const { ACN_URL } = require("./constants");

async function getHTML() {
  try {
    return (await JSDOM.fromURL(ACN_URL)).window.document;
  } catch (error) {
    return error;
  }
}

async function getTopicsFromACN() {
  try {
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
  } catch (error) {
    throw error;
  }
}

async function getProjectsFromACN() {
  try {
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
  } catch (error) {
    throw error;
  }
}

async function getAllResources() {
  try {
    const topics = await getTopicsFromACN();
    const projects = await getProjectsFromACN();
    const allResources = [...topics, ...projects];
    return allResources;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllResources,
};
