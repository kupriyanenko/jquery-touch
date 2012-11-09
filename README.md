jQuery Touch
=============

jQuery Plugin for touch events

version 1.0.0

autor Alexey Kupriyanenko (a.kupriyanenko@gmail.com)

[http://upwards.github.com/jquery-touch/](http://upwards.github.com/jquery-touch/)

Methods
-------

### touchstart

Start touch event

    $('#elem').touchstart(function(event) {
        $(this).text('touchstart');
    })

### touchend

Ent touch event

    $('#elem').touchend(function(event) {
        $(this).text('touchend');
    })

### touchleave

Leave touch event

    $('#elem').touchleave(function(event) {
        $(this).text('touchleave');
    })

### touchenter

Enter touch event

    $('#elem').touchenter(function(event) {
        $(this).text('touchenter');
    })

### touchup

Listen touch event after move over element

    $('#elem').touchup(function(event) {
        $(this).text('touchup');
    })

### touchclick

Click touch event

    $('#elem').touchclick(function(event) {
        $(this).text('touchup');
    })

### touchmove

Listen move touch event

    $('#elem').touchmove(function(event) {
        $(this).css({
            left: event.toucheX,
            top: event.toucheY
        })
    })