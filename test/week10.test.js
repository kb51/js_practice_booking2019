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

describe("createRange", () => {
  test("returns a range of numbers as an array from a star number to an end number with a given step", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(2, 18, 4)).toEqual([2, 6, 10, 14, 18]);
  });

  test("if a step is not given, it takes a step of 1", () => {
    expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
    expect(createRange(2, 6)).toEqual([2, 3, 4, 5, 6]);
  });

});

describe("getScreentimeAlertList", () => {
  const users = [
    { username: "kb123", 
    name: "Karren Brady", 
    screenTime: [
      { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 4} },
      { date: "2019-05-03", usage: { twitter: 12, instagram: 13, facebook: 10} },
      { date: "2019-05-04", usage: { twitter: 10, instagram: 25, facebook: 40} },
    ] },
    { username: "wak", 
    name: "Will Krepes", 
    screenTime: [
      { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 24} },
      { date: "2019-05-02", usage: { twitter: 1, instagram: 19, facebook: 11} },
      { date: "2019-05-03", usage: { twitter: 18, instagram: 31, facebook: 20} },
      { date: "2019-05-04", usage: { twitter: 0, instagram: 5, facebook: 0} },
    ] },
    { username: "pepsi",
    name: "Pepsi Cola",
    screenTime: [
      { date: "2019-05-01", usage: { twitter: 4, instagram: 21, facebook: 7} },
      { date: "2019-05-03", usage: { twitter: 50, instagram: 12, facebook: 30} },
      { date: "2019-05-05", usage: { twitter: 33, instagram: 23, facebook: 12} },
      { date: "2019-05-06", usage: { twitter: 44, instagram: 27, facebook: 32} },
    ] },
    { username: "shel01",
    name: "Sheila Wheel",
    screenTime: [
      { date: "2019-05-02", usage: { twitter: 34, instagram: 22, facebook: 4} },
      { date: "2019-05-04", usage: { twitter: 56, instagram: 10, facebook: 14} },
      { date: "2019-05-05", usage: { twitter: 12, instagram: 13, facebook: 10} },
      { date: "2019-05-06", usage: { twitter: 10, instagram: 25, facebook: 40} },
    ] },
  ]
  test("returns an array of usernames for users that have used more than 100 minutes of screen time for a gien date", () => {
    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(['shel01']);
    expect(getScreentimeAlertList(users, "2019-05-03")).toEqual(['wak', 'pepsi']);
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(['kb123', 'shel01']);
  });

});

describe("hexToRGB", () => {
  test("returns RGB code of given Hex code", () => {
    expect(hexToRGB('#000000')).toBe('rgb(0,0,0)');
    expect(hexToRGB('#C0C0C0')).toBe('rgb(192,192,192)');
    expect(hexToRGB('#808000')).toBe('rgb(128,128,0)');
  });

  test("returns RGB code of Hex codes with a length of 3", () => {
    expect(hexToRGB('#000')).toBe('rgb(0,0,0)');
    expect(hexToRGB('#FFF')).toBe('rgb(255,255,255)');
    expect(hexToRGB('#FCC')).toBe('rgb(255,204,204)');
  });

});

describe.only("findWinner", () => {
  test("returns X or 0 for winner in a column", () => {
    expect(findWinner([
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
     ])).toEqual('X');
    expect(findWinner([
      ["X", "0", null],
      ["X", "0", "X"],
      [null, "0", "0"]
     ])).toEqual('0');
  });

  test("returns X or 0 for winner in a row", () => {
    expect(findWinner([
      ["0", "0", "0"],
      ["X", null, "0"],
      ["X", null, "X"]
     ])).toEqual('0');
    expect(findWinner([
      ["X", "0", null],
      ["X", "X", "X"],
      [null, "0", "0"]
     ])).toEqual('X');
  });

  test("returns X or 0 for winner in a diagnal", () => {
    expect(findWinner([
      ["X", "0", null],
      ["0", "X", "0"],
      [null, null, "X"]
     ])).toEqual('X');
    expect(findWinner([
      ["X", "X", "0"],
      ["X", "0", "X"],
      ["0", "X", "0"]
     ])).toEqual('0');
  });

  test("returns null if there is no current winner", () => {
    expect(findWinner([
      ["X", "0", null],
      [null, null, "0"],
      ["X", null, "0"]
     ])).toEqual(null);
    expect(findWinner([
      [null, null, null],
      [null, null, null],
      [null, null, null]
     ])).toEqual(null);
  });
});
