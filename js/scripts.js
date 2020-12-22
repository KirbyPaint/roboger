// I think the plan of attack here is to take the number, and for each time it iterates, add the number to the array.
// Have a function specifically dedicated to breaking apart the numbers in the array
// For example: it would take 11 and in the array, that would be [1, 1]

//Step one: for loop to add numbers to the array
//Then output the numbers
//Step One Complete

//Step Two: take the numbers in the array and separate them into individual digits
//Then recombine as a full array again.

//This function's purpose is only to create an array containing the numbers that make up the user-provided number
//Rename to arrayify
function arrayify(variable) {
  const userInputTransform = variable;
  let numbersArray = []; // Blank array to hold the digits
  for (let i = 0; i <= userInputTransform; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const userInput = parseInt($("#userInputForm").val());
      let result = arrayify(userInput);
      $("#output").text(result);
      $("#output").show();
  });
});