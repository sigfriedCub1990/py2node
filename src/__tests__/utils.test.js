const validation = require("../utils");

describe("Tests for util functions", () => {
  describe("Test for possible errors", () => {
    test("should return false if Array do not have same length", () => {
      let firstArray = [1, 2];
      let secondArray = [3, 4, 5];

      let result = validation(firstArray, secondArray);

      expect(result).toBeFalsy();
    });

    test.each([
      { input: [1, [3, 4, 5], [6, 7, 8]] },
      { input: [[1], 3, [6, 7, 8]] },
      { input: [[1], [3, 4, 5], 6] },
    ])(
      "should throw and Error if any of the arguments is not an Array (%j)",
      ({ input }) => {
        expect(() => validation(...input)).toThrow();
      }
    );
  });
});
