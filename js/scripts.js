        // THIS IS BUSINESS LOGIC BELOW

var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};


var divide = function(number1, number2) {
  return number1 / number2;
};


var multi = function(number1, number2) {
  return number1 * number2;
};

            // USER LOGIC is below here
$(document).ready(function(event){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);

  });
  $("form#sub").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $("#output").text(result);
  });
  $("form#multi").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#multi1").val());
    var number2 = parseInt($("#multi2").val());
    var result = multi(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
