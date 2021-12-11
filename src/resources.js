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
  return topics.map((topic) => {
    return {
      title: topic.textContent.trim(),
      url: topic.href,
      type: "topic",
    };
  });
}

async function getProjects() {
  const html = await getHTML();
  // projects are initially a nodelist and has to be converted to an array
  const projects = Array(
    ...html.querySelectorAll(`li[title="Projects"] ul li a`)
  );
  return projects.map((project) => {
    return {
      title: project.textContent.trim(),
      url: project.href,
      type: "project",
    };
  });
}

async function getResources() {
  const topics = await getTopics();
  const projects = await getProjects();
  return [...topics, ...projects];
}

module.exports = { getResources };
