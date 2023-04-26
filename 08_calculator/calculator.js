const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  let result = 0;
  for (let i = 0;i < x.length;i++) {
    result += x[i];
  }
  return result;
};

const multiply = function(x) {
  let result = x[0];
  for (let i = 1;i < x.length;i++) {
    result *= x[i]
  }

  return result
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x > 1) {
    return x * factorial(x - 1)
  } else {
    return 1;
  }
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
