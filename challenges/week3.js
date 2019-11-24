function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let temp = '';
  words.forEach(word => {
    temp += word[0].toUpperCase() + word.slice(1).toLowerCase();
  })

  return temp[0].toLowerCase() + temp.slice(1);

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  //return people.map(person => person.subjects).flat().length;
  let temp = [];
  people.forEach(person => {
    person.subjects.forEach(subject => {
      temp.push(subject);
    })
  })
return temp.length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
