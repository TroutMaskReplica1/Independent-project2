$(document).ready(function() {
  $("#question").submit(function() {
    var q1 = $("input#track-input1").val();
    var q2 = $("input#track-input2").val();
    var q3 = $("input#track-input3").val();
    var q4 = $("input#track-input4").val();
    var q5 = $("input#track-input5").val();

    if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "front end" && q5 == "yes") {
      $("#ruby").show();
    } else if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "front end" && q5 == "yes") {
      $("#php").show();
    } else if (q1 == "yes" && q2 == "yes" && q3 == "no" && q4 == "front end" && q5 == "yes") {
      $("#csharp").show();
    }
    event.preventDefault();
});
});
