var id = document.location.hash;

$(function() {
  $.get("articles/" + id + ".md", function(data) {
    var md = window.markdownit();
    var result = md.render(data);
    $("#article").html(result);
  }).fail(function() {
    document.location.pathname = "/404.html";
  });
});
