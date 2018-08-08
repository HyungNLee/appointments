$(document).ready(function() {

  $("#myBtn").click(function() {
    $(".modal").show();
  });
  $(".close").click(function() {
    $(".modal").hide();
  });

  $("form#inputBox").submit(function(event) {
    event.preventDefault();
    $(".modal").hide();
    $(".confirmation").show();
  });
})
