const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((accumulator, curentValue) => {
    return accumulator + curentValue;
  }, 0);
};

const multiply = function (arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((accumulator, curentValue) => {
    return accumulator * curentValue;
  }, 1);
};

const power = function (a, b) {
  // if (b === 0) return 1;
  // let result = 1;
  // for (i = 0; i < b; i++) {
  //   result = result * a;
  // }
  // return result;

  return a ** b;
};

const factorial = function (a) {
  if (a === 0 || a === 1) return 1;
  let result = 1;

  for (let i = a; i > 0; i--) {
    result = result * i;
  }
  return result;
  // recursion
  // if (a === 0) return 1;
  // return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
