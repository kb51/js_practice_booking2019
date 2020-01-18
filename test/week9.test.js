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

describe("getComplementaryDNA", () => {
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

describe("isItPrime", () => {
  test("This function should receive a number and return true/false depending on whether it is a prime number or not."
  , () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(11)).toBe(true);
  });

});

describe("createMatrix", () => {
  test("This function should receive a string and return an array of n arrays, each filled with n items."
  , () => {
    expect(createMatrix(3, "foo")).toEqual(
       [
         ["foo", "foo", "foo"],
         ["foo", "foo", "foo"],
         ["foo", "foo", "foo"]
       ]
    );
    expect(createMatrix(2, "dog")).toEqual(
      [
        ["dog", "dog"],
        ["dog", "dog"]
      ]
    );
  });

  test("This function should receive a number and return an array of n arrays, each filled with n items."
  , () => {
    expect(createMatrix(1, 7)).toEqual([[7]]);
    expect(createMatrix(3, 4)).toEqual([[4, 4, 4], [4, 4, 4], [4, 4, 4]]);
  });

  test("This function should receive a array and return an array of n arrays, each filled with n items."
  , () => {
    expect(createMatrix(3, [34, 'hello'])).toEqual(
      [
        [[34, 'hello'], [34, 'hello'], [34, 'hello']],
        [[34, 'hello'], [34, 'hello'], [34, 'hello']],
        [[34, 'hello'], [34, 'hello'], [34, 'hello']],
      ]
    );
    expect(createMatrix(2, [true, 'yes', 1])).toEqual(
      [
        [[true, 'yes', 1], [true, 'yes', 1]],
        [[true, 'yes', 1], [true, 'yes', 1]]

      ]
    );
  });
});

describe.only("areWeCovered", () => {
  const staff = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Sheila", rota: ["Sunday", "Tuesday", "Friday"] },
    { name: "John", rota: ["Saturday", "Sunday", "Thursday", "Wednesday"] },
  ]
  test("returns true if at least 3 staff members are in on a given day"
  , () => {
    expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    expect(areWeCovered(staff, 'Sunday')).toBe(true);
  });

  test("returns false if there are less than 3 staff members on a given day"
  , () => {
    expect(areWeCovered(staff, 'Thursday')).toBe(false);
    expect(areWeCovered(staff, 'Monday')).toBe(false);
  });

});