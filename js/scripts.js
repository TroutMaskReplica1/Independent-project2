$(document).ready(function() {
  $("#question").submit(function() {
    var q1 = $("input#track-input1").val();
    var q2 = $("input#track-input2").val();
    var q3 = $("input#track-input3").val();
    var q4 = $("input#track-input4").val();
    var q5 = $("input#track-input5").val();

    if (q1 == "no" && q2 == "yes" && q3 == "no" && q4 == "yes" && q5 == "no") {
      $("#ruby").show();
      $("#php").hide();
      $("#csharp").hide();
      $("#other").hide();
    } else if (q1 == "no" && q2 == "no" && q3 == "no" && q4 == "yes" && q5 == "yes") {
      $("#php").show();
      $("#ruby").hide();
      $("#csharp").hide();
      $("#other").hide();
    } else if (q1 == "yes" && q2 == "yes" && q3 == "yes" && q4 == "no" && q5 == "yes") {
      $("#csharp").show();
      $("#php").hide();
      $("#ruby").hide();
      $("#other").hide();
    } else {
      $("#other").show();
      $("#csharp").hide();
      $("#php").hide();
      $("#ruby").hide();
    }
    event.preventDefault();
});
});
