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

describe("isValidDNA", () => {
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

describe.only("getComplementaryDNA", () => {
  test("This function will receive a valid DNA string and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA('CGTA')).toBe('GCAT');
    expect(getComplementaryDNA('TAGC')).toBe('ATCG');
    expect(getComplementaryDNA('TACG')).toBe('ATGC');
  });

  test("Still returns complementary base pair regardless of casing", () => {
    expect(getComplementaryDNA('cgta')).toBe('GCAT');
    expect(getComplementaryDNA('tagc')).toBe('ATCG');
    expect(getComplementaryDNA('tACg')).toBe('ATGC');
  });

  test("Returns to say DNA is not valid if invalid string is passed in", () => {
    expect(getComplementaryDNA('hello')).toBe('Invalid DNA');
    expect(getComplementaryDNA('blue')).toBe('Invalid DNA');
    expect(getComplementaryDNA('TGGH')).toBe('Invalid DNA');
  });

});
