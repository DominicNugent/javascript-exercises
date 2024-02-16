const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let resultNum = 0;
  for (let thisItem of numArray) {
    resultNum += thisItem;
  }

  return resultNum;
};

const multiply = function(numArray) {
  let multipliedNums = (num1, num2) => num1 * num2;
  let resultNum = numArray.reduce(multipliedNums, 1);

  return resultNum; 
};

const power = function(baseNum, powerNum) {
	return baseNum ** powerNum;
};

const factorial = function(whatNum) {
	function factorialize(n) {
    if (n === 0 || n === 1) return 1;
  
    return n * factorialize(n - 1);
  }

  return factorialize(whatNum);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
// npm test calculator.spec.js