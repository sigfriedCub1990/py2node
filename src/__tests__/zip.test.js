const zip = require("../zip");

describe("Tests for zip function", () => {
  test("should throw if lists do not have the same length", () => {
    let instruments = ["guitar", "bass", "drums"];
    let members = ["james", "robert", "lars", "kirk"];

    expect(() => {
      for (let [, ,] of zip(instruments, members)) {
      }
    }).toThrow();
  });

  test("should return correct pair of L1-L2", () => {
    let instruments = ["guitar", "bass", "drums", "guitar"];
    let members = ["james", "robert", "lars", "kirk"];

    let result = [];
    for (let [instrument, member] of zip(instruments, members)) {
      result.push([instrument, member]);
    }

    let expectedResult = [
      ["guitar", "james"],
      ["bass", "robert"],
      ["drums", "lars"],
      ["guitar", "kirk"],
    ];

    expect(result).toStrictEqual(expectedResult);
  });
});
