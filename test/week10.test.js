const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("returns the sum of all a given values digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(47)).toBe(11);
    expect(sumDigits(111)).toBe(3);
  });

});

describe.only("createRange", () => {
  test("returns a range of numbers as an array from a star number to an end number with a given step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 18, 4)).toEqual([2, 6, 10, 14, 18]);
  });

  test("if a step is not given, it takes a step of 1", () => {
    expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
    expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
  });

});