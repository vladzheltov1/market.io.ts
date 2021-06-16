const { utils } = require("../build/src/helper/utils");


describe("Testing utils module", () => {
    test("check if an array is empty", () => {
        expect(utils.isArrayEmpty([])).toBe(true);
        expect(utils.isArrayEmpty([null])).toBe(false);
        expect(utils.isArrayEmpty([undefined])).toBe(false);
        expect(utils.isArrayEmpty([NaN])).toBe(false);
        expect(utils.isArrayEmpty([1])).toBe(false);
    });
    test("check if an object is empty", () => {
        expect(utils.isObjectEmpty({})).toBe(true);
        expect(utils.isObjectEmpty({ name: "Name" })).toBe(false);
        expect(utils.isObjectEmpty({ null: null })).toBe(false);
        expect(utils.isObjectEmpty({ undefined: undefined })).toBe(false);
        expect(utils.isObjectEmpty({ NaN: NaN })).toBe(false);
    });
});