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

//This function will explode the array into its component numbers, and return THAT as a new array
//Function explodeArray
//I wonder if I can define the parameters in the function, I don't like not doing that, seems too loose

//Come to think of it, it might be better for this function to be put on the back burner for now...
function explodeArray(arrayVariable) {
  const originalArray = arrayVariable;
  console.log(originalArray);
  let newArray = []; // Blank array to hold the digits
  const arrayLength = originalArray.length; //Not a function.
  //For each element in the array, split it into components, and add components to the new array
  for (let i = 0; i < arrayLength; i++) {
    newArray.push(i);
  }
  //For now, I just want to see that the function performs at all.
  return newArray;
}

//Better way to do it will be to take each element of the array, check it for what numbers it has (or is) and then return it to the array.
//Because returning the broken up array into a good array again sounds like it'll be a PITA.

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const userInput = parseInt($("#userInputForm").val());
      let arrayifyTest = arrayify(userInput); // Creates array based on number provided from user
      let explodeArrayTest = explodeArray(arrayifyTest); // Explodes array into component numbers
      //$("#output").text(arrayifyTest); // Displays array
      $("#output").text(explodeArrayTest); // Displays exploded array. Might override past one.
      //Something here is broken.
      $("#output").show();
  });
});