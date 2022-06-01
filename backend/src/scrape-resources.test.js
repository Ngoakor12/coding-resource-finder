const { getAllResources } = require("./scrape-resources");
jest.useFakeTimers();

describe("scraping: ", () => {
  describe("getAllResources:", () => {
    test("returns a promise object", async () => {
      const expected = "object";

      const attempt = getAllResources();

      expect(expected).toEqual(typeof attempt);
    });
    // test("resolves to an array", async () => {
    //   const expected = "array";

    //   //   const attempt = ;
    //   //   console.log(attempt);
    //   await expect(expected).toBe(typeof (await getAllResources()));
    // });
  });
});
