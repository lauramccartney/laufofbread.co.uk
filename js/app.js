
// JS for the site. Not minified so it can be used as a learning tool
$(document).ready(function () {

    $.localScroll({
        target:   '#wrapper',
        queue:    true,
        duration: 1000,
        axis:     'xy',
        hash:     true,
        lazy:     true,
        easing:   'swing'
    });

});
