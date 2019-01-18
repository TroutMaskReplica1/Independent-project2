var ruby = $("#ruby").val();

var php = $("#php").val();

var csharp = $("#csharp").val();


$(document).ready(function() {
$('form#track-form').submit(function(event) {
  event.preventDefault();
  var trackInput = $("input#track-input").val();
    if (trackInput = ruby) {
      $("#ruby").show();
  } else if (trackInput = php) {
      alert("PHP!!!")
      $("#php").show();
  } else {
      $("#csharp").show();
  }
});
});
