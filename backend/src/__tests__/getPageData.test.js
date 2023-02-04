const { getPageData } = require("../format-resources");
const resources = require("./mocks/resources-mock");

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
