var add = function(number1, number2) {
  return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number to add to:"));
var number2 = parseInt(prompt("Enter a number to add:"));
alert(add(number1,number2));

var sub = function(number1, number2) {
  return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number to subtract from:"));
var number2 = parseInt(prompt("Enter a number to subtract:"));
alert(sub(number1,number2));


var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number to divide into:"));
var number2 = parseInt(prompt("Enter a number to divide by:"));
alert(div(number1,number2));

var multi = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number to multiply:"));
var number2 = parseInt(prompt("Enter a number to multiply against:"));
alert(multi(number1,number2));
