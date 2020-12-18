function process(variable) {
  let testVar = variable;
  return testVar;
}

$(document).ready(function() {
  $("form#calculateButton").submit(function(event) {
   event.preventDefault();
    const userInput = parseInt($("#userInputForm").val());
    const result = process(userInput);
    $("#output").text(result);
    $('#output').show();
  });
});