function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1);
  }

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name[0].slice(0,1) === char)
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(verbs => verbs.slice(0,3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num % 1 === 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(cities => cities.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => Number(Math.sqrt(num).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(triangle => triangle.sort((a, b) => b - a)[0]);
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
