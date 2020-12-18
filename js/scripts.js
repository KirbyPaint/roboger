function TEMPLATE(variable) {
  let testVar = variable;
  return "Secret Message 2";
}

$(document).ready(function() {
  $("form#process").submit(function(event) {
   event.preventDefault();
    const number = parseInt($("#process1").val());
    const result = TEMPLATE(number);
    $("#output").text(result);
    $('#output').show();
  });
});