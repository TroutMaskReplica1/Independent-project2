$(document).ready(function() {
$('form#track-form').submit(function(event) {
  var trackInput = $("input#track-input").val();
  var ruby = "#ruby"
  var php = "#php"
  var csharp = "#csharp"
  if (trackInput = ruby) {
    $("#ruby").show();
  } else if (trackInput = php) {
    $("#php").show();
  } else {
    ("#csharp").show();
  }
  event.preventDefault();
});
});
