var id = document.location.hash;

$(function() {
  $.get("articles/" + id + ".md", function(data) {
    $("#article").html(data);
  }).fail(function() {
    document.location.pathname = "/404.html";
  });
});
