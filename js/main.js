$(function() {
  load();
});
$(window).scroll(function() {
  $("body").scrollspy({ target: "#navbar" });
});
function load() {
  $("#main").removeClass("invisible");
  $("#load").addClass("invisible");
}
