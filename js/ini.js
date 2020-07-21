location.hash = "";
const el = "head";
$(function() {
  loader();
});

$(function() {
  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
});

function loader() {
  $.getJSON("loader.json", function(d) {
    $.each(d, function(i1, v1) {
      t = v1["type"];
      f = v1["file"];
      i = v1["integrity"];
      if (t == "css") {
        $(el).append(
          '<link rel="stylesheet" href="' +
            f +
            '" integrity="' +
            i +
            '" crossorigin="anonymous" preload/>'
        );
      } else if (t == "js") {
        $(el).append(
          '<script src="' +
            f +
            '" integrity="' +
            i +
            '"  crossorigin="anonymous" preload></script>'
        );
      }
    });
  });
}
