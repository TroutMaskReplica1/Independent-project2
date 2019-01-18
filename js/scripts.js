$(document).ready(function() {
$('form#track-form').submit(function(event) {
  var trackInput = $("input#track-input").val();
  switch (trackInput) {
    case "ruby":
      "#ruby".show();
      break;
    case "php":
      "#php".show();
    case "c#":
      "#csharp".show();
      break;
    default:
      alert("please choose between ruby, php, and c#")
  // event.preventDefault();
}
});
});
