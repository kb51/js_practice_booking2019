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

describe.only("isValidDNA", () => {
  test("This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA('CGTA')).toBe(true);
    expect(isValidDNA('BBCA')).toBe(false);
    expect(isValidDNA('TACG')).toBe(true);
  });

  test("Still returns true/false regardless of casing", () => {
    expect(isValidDNA('tagc')).toBe(true);
    expect(isValidDNA('lrfd')).toBe(false);
    expect(isValidDNA('gcat')).toBe(true);
  });

  test("Still returns false if the string contains more than or less than 4 letters", () => {
    expect(isValidDNA('ta')).toBe(false);
    expect(isValidDNA('tagc')).toBe(true);
    expect(isValidDNA('gctaat')).toBe(false);
  });

});