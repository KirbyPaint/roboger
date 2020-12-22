function process(variable) {
  const testVar = variable;
  for (let i = 0; i < testVar; i++) {
    console.log(i);
    console.log(testVar);
    //return i; //to test the incrementation alone
  }
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