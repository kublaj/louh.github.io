$(function () {
    var distance = 10;
    var time = 250;
    var hideDelay = 500;

    var hideDelayTimer = null;

    var beingShown = false;
    var shown = false;
    var info = $('#download-tooltip').css('opacity', 0);


    $('#nav .download').mouseover(function () {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        if (beingShown || shown) {
            // don't trigger the animation again
            return;
        } else {
            // reset position of info box
            beingShown = true;

            info.css({
                top:-75,
                left:-25,
                display: 'block'
            }).animate({
                top: '-=' + distance + 'px',
                opacity: 1
            }, time, 'swing', function() {
                beingShown = false;
                shown = true;
            });
        }

        return false;
    }).mouseout(function () {
        if (hideDelayTimer) clearTimeout(hideDelayTimer);
        hideDelayTimer = setTimeout(function () {
            hideDelayTimer = null;
            info.animate({
                top: '-=' + distance + 'px',
                opacity: 0
            }, time, 'swing', function () {
                shown = false;
                info.css('display', 'none');
            });

        }, hideDelay);

        return false;
    });
});