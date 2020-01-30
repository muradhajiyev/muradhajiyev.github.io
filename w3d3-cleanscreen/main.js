$(document).ready(function(){
    "use strict";

    const $circles = $('.circles');
    let growthAmount;
    let growRate;


    $('#start').on('click', function(evt) {
        const size = $('#width').val();
        const circles = parseInt($('#number-circles').val());

        for (let i=0; i<circles; i++) {
            let $circle = $('<div>', {
                'css': {
                    'width': size,
                    'height': size,
                    'bottom': Math.floor(Math.random()*evt.clientX),
                    'left': Math.floor(Math.random()*evt.clientY),
                    'background-color': randomColor(),
                },
                'class': 'circle',
            });

            growthAmount = parseInt($('#growth-amount').val());
            growRate = parseInt($('#grow-rate').val());

            let circleInterval = setInterval(function() {

                const size = parseInt($circle.css('width')) + growthAmount + 'px';

                $('.circle').css({
                    'width': size,
                    'height': size
                });
            }, growRate);

            $circle.on('click', function() {
                $(this).remove();
                clearInterval(circleInterval);
            });

            $circles.append($circle);
        }
    });


    function randomColor() {
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);

        return "rgba(" + red + "," + green + "," + blue + ")";
    }

});