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

  //const found1 = originalArray.includes(1);
  const arrayLength = originalArray.length; //Not a function.
  //Pseudocode
  for (let i = 0; i < arrayLength; i++) {
    if (originalArray[i].toString().includes("3")) {
      newArray.push("Won't you be my neighbor?");
    }
    else if (originalArray[i].toString().includes("2")) {
      newArray.push("Boop");
    }
    else if (originalArray[i].toString().includes("1")) {
      newArray.push("Beep");
    }
    else {
      newArray.push(originalArray[i]);
    }
  }
  const joinArray = newArray.join(", ")
  return joinArray;
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const userInput = parseInt($("#userInputForm").val());
      let arrayifyTest = arrayify(userInput); // Creates array based on number provided from user
      //let explodeArrayTest = explodeArray(arrayifyTest); // Explodes array into component numbers
      let numToTextTest = numToText(arrayifyTest); // Explodes array into component numbers
      //$("#output").text(arrayifyTest); // Displays array
      //$("#output").text(explodeArrayTest); // Displays exploded array. Might override past one.
      $("#output").text(numToTextTest); // Displays exploded array. Might override past one.
      $("#output").show();
  });
});