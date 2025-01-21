const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  if (num == 1) {
    return 1;
  }
  let result = 0;
  [a, b] = [0, 1];
  for (let i = 1; i < num; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
};
// Do not edit below this line
module.exports = fibonacci;
