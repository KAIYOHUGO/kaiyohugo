var id = document.location.hash.replace("#article", "");

var md = window.markdownit({
  html: true,
  linkify: false,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return "";
  }
});

//load
$(function() {
  $.get("articles/" + id + ".md", function(data) {
    var result = md.render(data);
    $("#article").html(result);
    $("title").text($("#article > h1:first-child").text());
    btp();
  }).fail(function() {
    document.location.pathname = "/404.html";
  });
});

//bootstrap
function btp() {
  $("img").addClass("img-fluid rounded img-thumbnail mx-auto d-block");
  $("img").wrap("<picture></picture>");
  $("img").each(function() {
    var png = $(this)
      .attr("src")
      .replace("png", "webp");
    var jpg = $(this)
      .attr("src")
      .replace("jpg", "webp");
    if (png > jpg) {
      var t = png;
    } else {
      var t = jpg;
    }
    $(this).before(`<source srcset="${t}" type="image/webp" />`);
  });
}
