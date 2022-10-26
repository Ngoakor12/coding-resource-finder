const pageData = require('../format-resources');
const resources = require('../mocks/resource-mock');

describe("Get page data tests", () => {
    test('Should return requested page data', async () => {
        const pageDataTest = await pageData.getPageData(resources.data, 1);
        expect(pageDataTest.data).toEqual(resources.data);
    });
    test('Should return an error (page set to negative number)', async () => {
        await expect(() => {
            pageData.getPageData(resources.data, -1).toThrow(error);
        })
    });
    test('Should return an error (page set to zero)', async () => {
        await expect(() => {
            pageData.getPageData(resources.data, 0).toThrow(error);
        })
    });
    test('Should return an error (wrong resource)', async () => {
        await expect(() => {
            pageData.getPageData(454545, 2).toThrow(error);
        })
    });
    test('Number of pages test', async () => {
        const pageDataTest = await pageData.getPageData(resources.data, 1);
        expect(pageDataTest.num_of_pages).toBe(1);
    });
    test('Current page test', async () => {
        const pageDataTest = await pageData.getPageData(resources.data, 1);
        expect(pageDataTest.current_page).toBe(1);
    });
    test('Number of resources test', async () => {
        const pageDataTest = await pageData.getPageData(resources.data, 1);
        expect(pageDataTest.num_of_resources).toBe(20);
    });
})
