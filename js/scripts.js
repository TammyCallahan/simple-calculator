
//$(document).ready(function() {
var expression = "";

  $('button').click(function() {
    var input = $(this).text();
    if (input === 'C') {
      $('#output').html('');
      expression = "";
    } else if (input === '=') {
        $('#output').html(eval(expression));
        expression = "";
    } else {
        expression+=input;
        $('#output').html(expression);
        console.log("expression = " + expression);
    };
    
  });
//});
      // var result = $('#output').val();
      // console.log("result is " + result);