var href = document.location.href;

//coin
function coin() {
  $("#likecoin").html(
    '<div class="likecoin-embed likecoin-button" data-liker-id="ky-mc-minecraft" data-href="' +
      href +
      '"></div>'
  );
}

$(function() {
  coin();
});
