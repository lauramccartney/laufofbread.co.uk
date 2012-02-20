

var currentSlide = 0;


// JS for the site. Not minified so it can be used as a learning tool
$(document).ready(function () {

    addFirstSlide();

    $(document).bind('keyup', 'left', function(){
        $('#prev').click();
    });
    $(document).bind('keyup', 'right', function(){
        $('#next').click();
    });

    $('#prev').click(function() {
        event.preventDefault(); 

        if (currentSlide == 0) {
            return;
        }

        $('#' + portfolio[currentSlide].id)
            .removeClass()
            .addClass('animated slideOut');

        currentSlide--;

        updateHash();
    });
    $('#next').click(function() {
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

    var hash = window.location.hash.replace( /^#\//, '' );
});



function updateHash() {
    window.location.hash = '#!/' + portfolio[currentSlide].id;
}


function addFirstSlide() {
    $('<li/>', {
        'id': portfolio[0].id
    }).css('z-index', 10).prependTo('.slides');            
}

