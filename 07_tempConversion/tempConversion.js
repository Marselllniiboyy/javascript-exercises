const convertToCelsius = function(value) {
  // fahrenheit to celsius
  // formula (32 °F − 32) × 5/9 = 0 °C
  if (value === 32) {
    return 0; 
  }
  let celsius = (value - 32) * 5/9;
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(value) {
  // celsius to fahrenheit
  // formula (0 °C × 9/5) + 32 = 32 °F
  if (value === 0){
    return 32;
  }
  let fahrenheit = (value * 9/5) + 32;
  return Math.round(fahrenheit * 10)/10;
};
// AllDone
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
