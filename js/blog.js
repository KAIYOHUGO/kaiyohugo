var id = document.location.hash.replace("#article", "");

var md = window.markdownit({
  html: true,
  linkify: true,
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
  }).fail(function() {
    document.location.pathname = "/404.html";
  });
});
