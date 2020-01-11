const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      return nums[i + 1];
    }
  }

  return null;

};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  const numArr = str.split('');
  let count1 = 0;
  let count0 = 0;

  for (let i = 0; i <= numArr.length; i++) {
    if (numArr[i] === '1') {
      count1++
    } else if (numArr[i] === '0') {
      count0++
    }
  }
  return { 1: count1, 0: count0 }

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split('').reverse().join(''))

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return (arrs.map(arr => arr.reduce((a, b) => a + b))).reduce((a, b) => a + b);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
