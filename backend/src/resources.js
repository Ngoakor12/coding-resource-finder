// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const acnUrl = "http://syllabus.africacode.net/";

// // const sortOptions = {
// //   field: "title",
// //   type: "ascending",
// //   array: [{}], //array of resource objects
// // };

// function sortObject(sortOptions) {
//   const { array, field, type } = sortOptions;
//   if (type === "ascending") {
//     array.sort((a, b) => {
//       if (a[field] < b[field]) {
//         return -1;
//       }
//       if (a[field] > b[field]) {
//         return 1;
//       }
//       return 0;
//     });
//   } else if (type === "descending") {
//     array.sort((a, b) => {
//       if (a[field] > b[field]) {
//         return -1;
//       }
//       if (a[field] < b[field]) {
//         return 1;
//       }
//       return 0;
//     });
//   } else {
//     throw Error;
//   }
// }

// async function getHTML() {
//   try {
//     return (await JSDOM.fromURL(acnUrl)).window.document;
//   } catch (error) {
//     return error;
//   }
// }

// async function getTopicsFromACN() {
//   try {
//     const html = await getHTML();
//     // topics are initially a nodelist and has to be converted to an array
//     const topicElements = Array(
//       ...html.querySelectorAll(`li[title="Topics"] ul li a`)
//     );
//     const topics = topicElements.map((topic) => {
//       return {
//         title: topic.textContent.trim(),
//         url: topic.href,
//         type: "topic",
//       };
//     });
//     sortObject({ array: topics, field: "title", type: "ascending" });
//     const topicsData = { num_of_topics: topics.length, data: topics };
//     return topicsData;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getProjectsFromACN() {
//   try {
//     const html = await getHTML();
//     // projects are initially a nodelist and has to be converted to an array
//     const projectElements = Array(
//       ...html.querySelectorAll(`li[title="Projects"] ul li a`)
//     );
//     const projects = projectElements.map((project) => {
//       return {
//         title: project.textContent.trim(),
//         url: project.href,
//         type: "project",
//       };
//     });
//     sortObject({ array: projects, field: "title", type: "ascending" });
//     const projectsData = { num_of_projects: projects.length, data: projects };
//     return projectsData;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getAllResources() {
//   try {
//     const topics = await getTopicsFromACN();
//     const projects = await getProjectsFromACN();
//     const allResources = [...topics.data, ...projects.data];
//     sortObject({ array: allResources, field: "title", type: "ascending" });
//     const allResourcesData = {
//       num_of_resources: allResources.length,
//       data: allResources,
//     };
//     return allResourcesData;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getPages(resources) {
//   try {
//     resources = (await resources()).data;
//     const numOfResources = resources.length;
//     const numOfResourcesPerPage = 20;
//     const pages = [];
//     const numOfPages = Math.ceil(numOfResources / numOfResourcesPerPage);
//     let start = 0,
//       end = numOfResourcesPerPage;

//     for (let i = 1; i <= numOfPages; i++) {
//       pages.push({
//         current_page: i,
//         num_of_pages: numOfPages,
//         num_of_resources: resources.slice(start, end).length,
//         data: resources.slice(start, end),
//       });
//       start += numOfResourcesPerPage;
//       end += numOfResourcesPerPage;
//     }
//     return pages;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getPageData(resources, page) {
//   try {
//     const pages = await getPages(resources);
//     const pageData = pages[Number(page) - 1];
//     return pageData;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = {
//   getAllResources,
//   getTopicsFromACN,
//   getProjectsFromACN,
//   getPageData,
// };
