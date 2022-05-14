const { getCurrentCollectionName } = require("./utils");

describe("utils: ", () => {
  describe("getCurrentCollectionName:", () => {
    test("correct collection name according to current year and month", () => {
      const expected = `resources_${
        new Date().getFullYear() + "_" + (new Date().getMonth() + 1)
      }`;

      const attempt = getCurrentCollectionName();

      expect(expected).toEqual(attempt);
    });
    test("returns the correct type", () => {
      const expected = "string";

      const attempt = typeof getCurrentCollectionName();

      expect(expected).toEqual(attempt);
    });
  });
});
