function arrayify(variable) {
  const userInputTransform = variable;
  const numbersArray = [];
  for (let i = 0; i <= userInputTransform; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

function numToText(arrayVariable) {
  const originalArray = arrayVariable;
  const newArray = [];

  const arrayLength = originalArray.length;
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
      const arrayifyTest = arrayify(userInput);
      const numToTextTest = numToText(arrayifyTest);
      $("#output").text(numToTextTest);
      $("#output").show();
  });
});