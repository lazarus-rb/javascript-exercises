const convertToCelsius = function(valToConvert) {
  let tempInCelsius = ((valToConvert - 32) * 0.55555555555).toFixed(1);
  return Number.parseFloat(tempInCelsius);
};

const convertToFahrenheit = function(valToConvert) {
  let tempInFahrenheit = ((valToConvert * 1.8) + 32).toFixed(1);
  return Number.parseFloat(tempInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
