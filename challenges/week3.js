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
  return people.reduce((pv, val) => pv.concat(val.subjects), []).length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return !!menu.filter(food => food.ingredients.includes(ingredient) ).length; 
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  let temp = [];

  arr1.forEach(n => {
    if (arr2.includes(n)) {
      temp.push(n);
    }
  })

  return temp.filter((item, pos) => temp.indexOf(item) === pos).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
