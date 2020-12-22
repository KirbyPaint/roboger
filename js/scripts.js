function process(variable) {
  let testVar = variable;
  return testVar;
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const number1 = parseInt($("#userInputForm").val());
      //const result = add(number1, number2);
      const result = number1;
      $("#output").text(result);
      $("#output").show();
  });
});