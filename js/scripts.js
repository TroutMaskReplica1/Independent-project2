$(document).ready(function() {
$('form#track-form').submit(function(event) {
  var trackInput = $("input#track-input").val();
  switch (trackInput) {
    case "ruby":
      "#ruby".toggle();
      break;
    case "php":
      "#php".toggle();
    case "c#":
      "#csharp".toggle();
      break;
    default:
      text = "please choose between ruby, php, and c#"
  // event.preventDefault();
}
});
});
