;(function ($, undefined) {
  var mainHeader = $('.main-header'),
      // scrollDown = $('.scroll-down'),
      scrollUp   = $('.scroll-up');

  $(document).ready(function () {
    $('.swipebox').swipebox();
    // scrollDown.scrolltoo();
    scrollUp.scrolltoo();
  });

  $(window).scroll(function () {
    var headerHeight = mainHeader.height();

    if ($(this).scrollTop() > headerHeight) {
      scrollUp.css({ 'bottom' : '15px' });
    } else {
      scrollUp.css({ 'bottom' : '-80px' });
    }
  });

  // Parallax Ccrolling
  // var parallaxElements = $('[data-parallax]'),
  //     browserWindow = $(window);

  // $.each(parallaxElements, function(index, value) {
  //   var $this = $(value),
  //       speed = $this.data('parallax');

  //   browserWindow.scroll(function() {
  //     var offset = -(browserWindow.scrollTop() / speed);
  //     $this.css({ backgroundPosition: '50% ' + offset + 'px' });
  //   });
  // });

  $.fn.scrolltoo = function (options) {

    var defaults = {
      elem: $(this),
      speed: 800
    },

    settings = $.extend(defaults, options);

    settings.elem.click(function (e) {
      e.preventDefault();

      var $this     = $(this),
          $htmlBody = $('html, body'),
          offset    = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
          position  = ($this.attr('data-position')) ? $this.attr('data-position') : false,
          toMove;

      if (offset) {

        toMove = parseInt(offset, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top + toMove)
        }, settings.speed);

      } else if (position) {

        toMove = parseInt(position, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: toMove
        }, settings.speed);

      } else {

        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top)
        }, settings.speed);

      }
    });
  };
})(jQuery);

// new WOW().init();