var id = document.location.hash.replace("#article", "");

var hljs = require("highlight.js");
// Actual default values
var md = require("markdown-it")({
  html: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ""; // use external default escaping
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
