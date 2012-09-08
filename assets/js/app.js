
// This block is run as soon as the page has finished loading and is "ready"
$(function() {

    // See function enableKeyboard()
    enableKeyboard();


    // Every time you click on a thumbnail
    $('.boxy li').click(function(){        
        // See the function addToLightbox.
        addToLightbox(this);

        // Change the grid view to the navigation view on the right-hand side
        $('.grid').removeClass('grid').addClass('navigation');
        
        // Remove the selected class from everything else... 
        $('.selected').removeClass('selected');

        // And add it to the thumbnail we just clicked on
        $(this).addClass('selected');

        // Work out how many pictures are before the one we clicked on
        var prevCount = $(this).prevAll().length;

        // Each small thumbnail is 120px (including margins).
        // So we scroll down 120 * number of images before the one we clicked
        window.scrollTo(0, (prevCount * 120));        
    });


    // Every click on the lightbox. Returns us to the grid.
    $('.lightbox').click(function(){

        // Scroll back to the top of the window
        window.scrollTo(0, 0);

        // Remove the selected class from everything else... 
        $('.selected').removeClass('selected');

        // Change the navigation view back the grid view
        $('.navigation').removeClass('navigation').addClass('grid');

        // Remove everything in the lightbox, and hide it
        $('.lightbox').empty().addClass('hidden');
    });

});



// Adds the contents of the box you clicked on to the lightbox
function addToLightbox(box) {
    
    // This is empty now, but will be what we add to the lightbox
    var content;
    
    // Check if this is a box with an image in it
    if ( $(box).children('img').length ) {
        // It does have an image, so get the fullsize image...
        var fullImage = $(box).children('img').data('fullsize');

        // Now create a new img tag with the fullsize image, and add it to content
        content = $('<img/>').attr('src', fullImage);

    } else {
        // It's just a text box, so add all it's content to the lightbox
        content = $(box).html();
    }

    // Put the content into the lightbox, and show it
    $('.lightbox').html(content).removeClass('hidden');
}


// Turns on keyboard navigation
function enableKeyboard() {
    key('escape', function(){
        // Clicks on the lightbox. Has the effect of closing it
        $('.lightbox').click();
    });

    // Allow tabbing to items for people who can't use a mouse
    key('tab', function(){
        // Is anything already selected?
        if ( $('.selected').length ) {
            // Yes, so lets move the selection along one
            $('.selected').removeClass('selected').next().addClass('selected');
        } else {
            // Nothing selected, so start at the beginning
            $('ul.boxy li').first().addClass('selected');
        }
        
        // Stops the tab key doing it would normally do
        return false;
    });

    // Shift tab is the same as tab, but backwards
    key('shift+tab', function(){
        // Is anything already selected?
        if ( $('.selected').length ) {
            // Yes, so lets move the selection backwards one
            $('.selected').removeClass('selected').prev().addClass('selected');
        } else {
            // Nothing selected, so start at the end
            $('ul.boxy li').last().addClass('selected');
        }

        // Stops the tab key doing it would normally do
        return false;
    });


    // Open the currently selected item in the lightbox when enter is pressed
    key('enter, return', function(){
        // Click on whatever is selected
        $('.selected').click();
        
        // Stops enter doing it would normally do
        return false;
    });


    // What happens when you press any of the scrolling DOWN keys
    key('down, right, space, pagedown, home, option+down, command+down', function(){
        // Get the element after the currently selected one
        var next = $('.navigation .selected').next();
        
        // If it exists - We aren't at the last item - click it
        if (next.length) {
            next.click();

            // Stops the down keys doing what they would normally do (scroll down)
            return false;
        }
    });


    // What happens when you press any of the scrolling UP keys
    key('up, left, shift+space, pageup, end, option+up, command+up', function(){
        // Get the element before the currently selected one
        var prev = $('.navigation .selected').prev();
        
        // If it exists - We aren't at the first item - click it
        if (prev.length) {
            prev.click();

            // Stops the up keys doing what that would normally do (scroll up)
            return false;
        }
    });


}
