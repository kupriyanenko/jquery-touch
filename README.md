jQuery Touch
=============

jQuery Plugin for touch events

version 1.0.0

autor Alexey Kupriyanenko (a.kupriyanenko@gmail.com)

[http://upwards.github.com/jquery-touch/](http://upwards.github.com/jquery-touch/)

Methods
-------

### touchstart

    $('#elem').touchstart(function(event) {
        $(this).text('touchstart');
    })

### touchend

    $('#elem').touchend(function(event) {
        $(this).text('touchend');
    })

### touchleave

    $('#elem')touchleave(function(event) {
        $(this).text('touchleave');
    })

### touchenter

    $('#elem').touchenter(function(event) {
        $(this).text('touchenter');
    })

### touchup

    $('#elem').touchup(function(event) {
        $(this).text('touchup');
    })

### touchmove

    $('#elem').touchmove(function(event) {
        $(this).css({
            left: event.toucheX,
            top: event.toucheY
        })
    })