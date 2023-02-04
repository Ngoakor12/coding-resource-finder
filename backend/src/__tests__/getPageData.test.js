const { getPageData } = require("../format-resources");

const resources = {
  current_page: 2,
  num_of_pages: 1,
  num_of_resources: 20,
  data: [
    {
      title: "Android user interface resources",
      type: "topic",
      url: "http://syllabus.africacode.net/topics/android/ui-resources/",
    },
    {
      url: "http://syllabus.africacode.net/projects/kotlin/",
      type: "project",
      title: "Android with Kotlin Projects",
    },
    {
      title: "Android-Kotlin",
      url: "http://syllabus.africacode.net/topics/kotlin/",
      type: "topic",
    },
    {
      title: "Androids",
      type: "topic",
      url: "http://syllabus.africacode.net/topics/android/",
    },
    {
      type: "project",
      title: "Androids",
      url: "http://syllabus.africacode.net/projects/android/",
    },
    {
      type: "topic",
      url: "http://syllabus.africacode.net/topics/angular-elements/",
      title: "Angular Elements",
    },
    {
      type: "project",
      url: "http://syllabus.africacode.net/projects/angular-testing-with-cucumber/",
      title: "Angular Testing with Cucumber",
    },
    {
      type: "project",
      title: "Angular Tutorial",
      url: "http://syllabus.africacode.net/projects/angular-tutorial/",
    },
    {
      url: "http://syllabus.africacode.net/topics/angular-material/",
      type: "topic",
      title: "Angular material",
    },
    {
      url: "http://syllabus.africacode.net/topics/angular-testing-cucumber/",
      title: "Angular testing with Cucumber and Protractor",
      type: "topic",
    },
    {
      type: "topic",
      url: "http://syllabus.africacode.net/topics/angular-testing/",
      title: "Angular unit tests",
    },
    {
      title: "Animals",
      url: "http://syllabus.africacode.net/projects/oop/animals/",
      type: "project",
    },
    {
      url: "http://syllabus.africacode.net/projects/oop/animals/part1/",
      title: "Animals Part 1. OOP basics",
      type: "project",
    },
    {
      title: "Animals Part 2. Adding Tests",
      type: "project",
      url: "http://syllabus.africacode.net/projects/oop/animals/part2/",
    },
    {
      type: "topic",
      url: "http://syllabus.africacode.net/topics/kotlin/annotations/",
      title: "Annotations",
    },
    {
      title: "Apis",
      url: "http://syllabus.africacode.net/topics/apis/",
      type: "topic",
    },
    {
      title: "Assertive programming and Pandas",
      type: "topic",
      url: "http://syllabus.africacode.net/topics/assertive-programming-tricks-for-pandas/",
    },
    {
      url: "http://syllabus.africacode.net/topics/python-specific/automate-the-boring-stuff-book/chapter-0-introduction/",
      title: "Automate the boring stuff: Chapter 0 – Introduction",
      type: "topic",
    },
    {
      title: "Automate the boring stuff: Chapter 1 – Python Basics",
      type: "topic",
      url: "http://syllabus.africacode.net/topics/python-specific/automate-the-boring-stuff-book/chapter-1-basics/",
    },
    {
      title: "Automate the boring stuff: Chapter 10 – Organizing Files",
      url: "http://syllabus.africacode.net/topics/python-specific/automate-the-boring-stuff-book/chapter-10-organising-files/",
      type: "topic",
    },
  ],
};

describe("Get page data tests", () => {
  test("Should return requested page data", () => {
    const pageDataTest = getPageData(resources.data, 1);
    expect(pageDataTest.data).toEqual(resources.data);
  });
  test("Should return an error (page set to negative number)", () => {
    expect(() => {
      getPageData(resources.data, -1).toThrow(error);
    });
  });
  test("Should return an error (page set to zero)", () => {
    expect(() => {
      getPageData(resources.data, 0).toThrow(error);
    });
  });
  test("Should return an error (wrong resource)", () => {
    expect(() => {
      getPageData(454545, 2).toThrow(error);
    });
  });
  test("Number of pages test", () => {
    const pageDataTest = getPageData(resources.data, 1);
    expect(pageDataTest.num_of_pages).toBe(1);
  });
  test("Current page test", () => {
    const pageDataTest = getPageData(resources.data, 1);
    expect(pageDataTest.current_page).toBe(1);
  });
  test("Number of resources test", () => {
    const pageDataTest = getPageData(resources.data, 1);
    expect(pageDataTest.num_of_resources).toBe(20);
  });
});
