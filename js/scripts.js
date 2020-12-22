function process(variable) {
  let testVar = variable;
  return testVar;
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
    event.preventDefault();
      const input = parseInt($("#userInputForm").val());
      const result = process(input);
      $("#output").text(result);
      $("#output").show();
  });
});