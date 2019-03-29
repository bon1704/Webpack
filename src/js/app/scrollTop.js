(function($) {
    var methods = {
        to_top: function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        }
    };

    $.fn.tottTop = function(options) {

        var settings = $.extend({
            scrollTop: 800, 
            duration: 1000, 
            scrtollTopBtnDuration: 400
        }, options);

        return this.each(function() {
            var $this = $(this);

            var win = $(window);

            win.scroll(function() {
                if (win.scrollTop() > settings.scrollTop) {
                    $this.fadeIn(settings.scrtollTopBtnDuration);
                } else {
                    $this.fadeOut(settings.scrtollTopBtnDuration);
                }
            });

            $this.click(methods.to_top);
        });

    };
})(jQuery);
$('.totop').tottTop({
  duration: 3000,
  scrtollTopBtnDuration: 1000,
  scrollTop: 1000
})