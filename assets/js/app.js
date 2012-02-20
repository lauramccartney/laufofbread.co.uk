

var currentSlide = 0;


// JS for the site. Not minified so it can be used as a learning tool
$(document).ready(function () {

    gotoHash();
    addFirstSlide();

    $(document).bind('keyup', 'left', function(){
        $('#prev').click();
    });
    $(document).bind('keyup', 'right', function(){
        $('#next').click();
    });

    $('#prev').click(function(event) {
        event.preventDefault(); 

        var prevSlide = currentSlide - 1;

        if (currentSlide == 0) {
            return;
        }

        // Add the previous slide, if we've landed in the middle of the deck
        if ($('#' + portfolio[prevSlide].id).length == 0) {            
            $('<li/>', {
                'id': portfolio[prevSlide].id,
                'class': 'animated',
            }).css('z-index', prevSlide + 10).appendTo('.slides');
        }

        $('#' + portfolio[currentSlide].id)
            .removeClass()
            .addClass('animated slideOut');

        currentSlide = prevSlide;

        updateHash();
    });
    $('#next').click(function(event) {
        event.preventDefault();

        var nextSlide = currentSlide + 1;

        if (nextSlide == portfolio.length) {
            return;
        }

        // Only add the element if we haven't already
        if ($('#' + portfolio[nextSlide].id).length) {            
            $('#' + portfolio[nextSlide].id)
                .removeClass()
                .addClass('animated slideIn');
        } else {
            $('<li/>', {
                'id': portfolio[nextSlide].id,
                'class': 'animated slideIn',
            }).css('z-index', nextSlide + 10).prependTo('.slides');            
        }

        currentSlide = nextSlide;

        updateHash();
    });
    
});


function gotoHash() {
    var hash = window.location.hash.replace( /^#!\//, '' );

    currentSlide = portfolio_index[hash] || 0;
}


function updateHash() {
    window.location.hash = '#!/' + portfolio[currentSlide].id;
}


function addFirstSlide() {
    $('<li/>', {
        'id': portfolio[currentSlide].id
    }).css('z-index', currentSlide + 10).prependTo('.slides');            
}
