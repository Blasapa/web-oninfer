$(document).ready(function() {
  (function($) {
    $(function() {

      $(".js-carousel > div:gt(0)").hide();

      setInterval(function() {
        $('.js-carousel > div:first')
        .fadeOut(200)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.js-carousel');
      },  2500);
    });

  }(jQuery));
});
