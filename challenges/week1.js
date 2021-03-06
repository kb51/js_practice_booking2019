function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return `${word[0].toUpperCase() + word.slice(1)}`;``
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.slice(0, 1)}.${lastName.slice(0, 1)}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return originalPrice / 100 * vatRate;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Number((originalPrice - originalPrice * reduction/100).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  }

  return str.slice(str.length / 2, str.length / 2 + 1); 
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(val => val.split('').reverse().join(''))
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(user => user.type === 'Linux').length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return Number(((scores.reduce((prev, val) => prev + val, 0)) / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz';
  if (n % 3 === 0) return 'fizz';
  if (n % 5 === 0) return 'buzz';
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
