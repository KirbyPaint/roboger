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
function numToText(arrayVariable) {
  const originalArray = arrayVariable;
  let newArray = []; // Blank array to hold the numbers and text
  //const arrayLength = originalArray.length;
  //For each element in the array, test if it has the number requested, and then transform based on the parameters given:
  /*
    Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
    Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
    Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

    These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

    The number 13 should be replaced with "Won't you be my neighbor?"
    The number 21 should be replaced with "Boop".
    The number 32 should be replaced with "Won't you be my neighbor?"

    Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5



    CHRIST I have misinterpreted this

    The above doesn't mean specifically that 13, 21, 32 are their own conditions
    What it means is that:
      13 has both a 1 and a 3. Therefore, it has a 1, so it should say BEEP, but since it ALSO has a 3, and that takes priority, it will then be "Won't you be my neighbor."

      plaintext:
      if (array index CONTAINS 3) {
        replace entire element with "Won't you be my neighbor?"
      }
      else if (array index CONTAINS 2) {
        replace entire element with "Boop"
      }
      else if (array index CONTAINS 1) {
        replace entire element with "Beep"
      }
      else {
        append the normal number to the array
      }
  */

  let arrayAsString = "";
  originalArray.forEach(function(arrayElement) {
    arrayAsString = arrayAsString.concat(arrayElement + ", "); //Modify the stuff in brackets to add commas, spacing, etc.
  });
    const regex3 = arrayAsString.replace(/3+/g, "Won't you be my neighbor?");
      const regex2 = regex3.replace(/2+/g, "Boop!");
        const regex1 = regex2.replace(/1+/g, "Beep!");
  return regex1;
  // This technically mostly works but is giving me a headache so I will complete the project later.
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const userInput = parseInt($("#userInputForm").val());
      let arrayifyTest = arrayify(userInput); // Creates array based on number provided from user
      let explodeArrayTest = explodeArray(arrayifyTest); // Explodes array into component numbers
      let numToTextTest = numToText(arrayifyTest); // Explodes array into component numbers
      //$("#output").text(arrayifyTest); // Displays array
      //$("#output").text(explodeArrayTest); // Displays exploded array. Might override past one.
      $("#output").text(numToTextTest); // Displays exploded array. Might override past one.
      $("#output").show();
  });
});