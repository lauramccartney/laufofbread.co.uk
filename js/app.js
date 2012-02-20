

// Load from JSON provided by jekyll
var project = [
    { title: "Tea", description: "Some Tea", id: "tea"},
    { title: "Girl", description: "A Girl", id: "girl"},
    { title: "Seat", description: "A Seat", id: "seat"}
]

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

        $('#' + project[currentSlide].id)
            .removeClass()
            .addClass('animated slideOut');

        currentSlide--;

        updateHash();
    });
    $('#next').click(function() {
        event.preventDefault();

        var nextSlide = currentSlide;
        nextSlide++;

        // Only add the element if we haven't already
        if ($('#' + project[nextSlide].id).length) {            
            $('#' + project[nextSlide].id)
                .removeClass()
                .addClass('animated slideIn');
        } else {
            $('<li/>', {
                'id': project[nextSlide].id,
                'class': 'animated slideIn',
            }).css('z-index', nextSlide + 10).prependTo('.slides');            
        }

        currentSlide = nextSlide;

        updateHash();
    });

    var hash = window.location.hash.replace( /^#\//, '' );
});



function updateHash() {
    window.location.hash = '#!/' + project[currentSlide].id;
}


function addFirstSlide() {
    $('<li/>', {
        'id': project[0].id
    }).css('z-index', 10).prependTo('.slides');            
}

