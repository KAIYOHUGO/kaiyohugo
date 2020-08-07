var id = document.location.search.replace("?article", "");
el = "#article";
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
  commentBox("5763964768092160-proj");
  ldart();
});
function ldart() {
  $.get(`articles/${id}.md`, function(data) {
    var result = md.render(data);
    $("#article").html(result);
    btp();
    ldinfo();
  }).fail(function() {
    document.location.pathname = "/404.html";
  });
}

ldinfo = function() {
  var description = $(`${el} de`).text();
  var title = $(`${el}>h1:first-child`).text();
  $(`${el} de`).text("");
  $("head").append(`<meta name="description" content="${description}">`);
  $("title").text(title);
};
//bootstrap
btp = function() {
  $(`${el} img`).addClass("img-fluid rounded img-thumbnail mx-auto d-block");
  $(`${el} img`).attr('"loading="lazy"');
  $(`${el} img`).wrap("<picture></picture>");
  $(`${el} picture`).wrap('<div class="col-12"></div>');
  $(`${el} img`).each(function() {
    (function() {
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

    function() {
      $(this).height();
      $(this).width();
    }
  });
};
