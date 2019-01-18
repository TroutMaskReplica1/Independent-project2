$(document).ready(function() {
$('form#track-form1').submit(function(event) {
$('form#track-form2').submit(function(event) {
$('form#track-form3').submit(function(event) {
$('form#track-form4').submit(function(event) {
$('form#track-form5').submit(function(event) {
  // var ok = document.getElementById("").val();
  var q1 = $("input#track-input1").val();
  var q2 = $("input#track-input2").val();
  var q3 = $("input#track-input3").val();
  var q4 = $("input#track-input4").val();
  var q5 = $("input#track-input5").val();

  if (q1 === "yes") {
    alert("FER")
    ("#ruby").show();
  }
  event.preventDefault();
});
});
});
});
});
});



// var ruby = parseInt($("#ruby").val());
// var php = parseInt($("#php").val());
// var csharp = parseInt($("#csharp").val());
// var trackInput = $("input#track-input").val();
// if (trackInput < 2) {
  //   $("#ruby").show();
  // } else if (trackInput > 1) {
    //   alert("PHP!!!")
    //   $("#php").show();
    // } else if (trackInput > 2){
      //   $("#csharp").show();
      // }
