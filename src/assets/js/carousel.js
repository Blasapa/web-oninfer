$(document).ready(function() {
  (function($) {
    $(function() {

      $(".js-carousel > div:gt(0)").hide();

      setInterval(function() {
        $('.js-carousel > div:first')
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo('.js-carousel');
      },  5000);
    });

  }(jQuery));
});
