/*!
 * jQuery Touch Plugin 1.0.0
 * https://github.com/upwards/jquery-touch
 *
 * @autor Alexey Kupriyanenko (a.kupriyanenko@gmail.com)
 */
(function($, undefined) {
  /**
   * Determines the status of finger over the object
   * @param {jQuery} $that
   */
  var isTouchStateLeave = function($that) {
    var startX = $that.offset().left
      , startY = $that.offset().top
      , endX   = $that.outerWidth() + startX
      , endY   = $that.outerHeight() + startY;

    touchX = event.touches[0].pageX;
    touchY = event.touches[0].pageY;

    var isXY = ((touchX > startX) && (touchX < endX)) &&
                ((touchY > startY) && (touchY < endY));
    if (!isXY) {
      return true;
    }

    return false;
  }

  jQuery.fn.extend({
    // Bind an event handler to the "touchstart" JavaScript event.
    touchstart: function(fn) {
      var that = this[0];
      that.addEventListener('touchstart', function(event) {
        fn.call(that);
      });

      return this;
    },
    // Bind an event handler to the "touchend" JavaScript event.
    touchend: function(fn) {
      var that = this[0];
      that.addEventListener('touchend', function(event) {
        fn.call(that);
      });

      return this;
    },
    // Bind an event handler to the "touchmove" JavaScript event.
    touchmove: function(fn) {
      var that = this[0];

      that.addEventListener('touchstart', function(event) {
        event.preventDefault();
      }, false);

      that.addEventListener('touchmove', function(event) {
        var x = event.touches[0].pageX
          , y = event.touches[0].pageY;
        
        event.toucheX = x - 100;
        event.toucheY = y - 50;
        
        fn.call(that, event);
      }, false);

      return this;
    },
    // Bind an event handler to the "touchup" JavaScript event.
    touchup: function(fn) {
      var that = this[0]
        , $that = this
        , touchX = null
        , touchY = null;

      that.addEventListener('touchstart', function(event) {
        event.preventDefault();
        
        touchX = null;
        touchY = null;
      }, false);

      that.addEventListener('touchmove', function(event) {
        touchX = event.touches[0].pageX;
        touchY = event.touches[0].pageY;
      }, false);

      that.addEventListener('touchend', function(event) {
        event.preventDefault();

        var startX = $that.offset().left
          , startY = $that.offset().top
          , endX   = $that.outerWidth() + startX
          , endY   = $that.outerHeight() + startY;

        var isXY = ((touchX > startX) && (touchX < endX)) &&
                    ((touchY > startY) && (touchY < endY));
        var isNotMove = !(touchX && touchY);
        if (isXY || isNotMove)
          fn.call(that, event);
      }, false);

      return this;
    },
    // Bind an event handler to the "touchleave" JavaScript event.
    touchleave: function(fn) {
      var that = this[0]
        , $that = this
        , isRun = true;

      that.addEventListener('touchstart', function(event) {
        event.preventDefault();
      }, false);

      that.addEventListener('touchmove', function(event) {
        if (isTouchStateLeave($that)) {
          if (isRun) fn.call(that, event);
          isRun = false;
        } else 
          isRun = true;
      }, false);

      return this;
    },
    // Bind an event handler to the "touchenter" JavaScript event.
    touchenter: function(fn) {
      var that = this[0]
        , $that = this
        , isRun = false;

      that.addEventListener('touchstart', function(event) {
        event.preventDefault();
      }, false);

      that.addEventListener('touchmove', function(event) {
        if (!isTouchStateLeave($that)) {
          if (isRun) fn.call(that, event);
    	  isRun = false;
        } else
    	  isRun = true;
      }, false);

      return this;
    }
  })
}(jQuery))
