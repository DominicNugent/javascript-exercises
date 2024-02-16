const convertToCelsius = function(whatTemp) {
  let tempVal = (whatTemp - 32) * .5555;
  return roundToTenthsPlace(tempVal);
};

const convertToFahrenheit = function(whatTemp) {
  let tempVal = whatTemp * 1.8 + 32;
  return roundToTenthsPlace(tempVal);
};

function roundToTenthsPlace(number) {
  return parseFloat(number.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
// npm test tempConversion.spec.js
