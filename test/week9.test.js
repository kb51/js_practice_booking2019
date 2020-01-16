const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([60, 33, 77, 20, 34, 10])).toBe(123);
    expect(sumMultiples([3, 5, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
  });

  test("  if number is not a multiple of 3 or 5 returns 0", () => {
    expect(sumMultiples([61, 32, 77, 34, 11])).toBe(0);
    expect(sumMultiples([2, 7, 13, 1, 16])).toBe(0);
  });

});




