const convertToCelsius = function(tempF) {
  let tempC=Math.round(((tempF-32)*5/9)*10)/10;
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF=Math.round((tempC*9/5+32)*10)/10;
  return tempF;
};

//console.log(convertToCelsius(100));
//console.log(convertToFahrenheit(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
