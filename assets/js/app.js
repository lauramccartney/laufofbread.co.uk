
$(function() {
    
    
    // Setup keyboard shortcuts
    key('up', 'gallery', function(){
        var prev = $('.focused').prev('.unfocused');

        if (prev.length) {
            prev.click();
        }

        return false;            

    });

    key('down', 'gallery',  function(){
        var next = $('.focused').next().next('.unfocused');
        
        if (next.length) {
            next.click();
        }

        return false;
    });

    key('escape', 'gallery', function(){
        $('.images li.focused').click();
    });

    // Add the thumbnail attributes to all images before we go anywhere
    $('.images img').each(function() {
        $(this).data('thumbnail', $(this).attr('src'));
    })


    // Every time we click an image, fire this function
    $('.images li').click(function(){        

        // Sets all images on the page to the thumbnail.
        $('.images img').each(function() {
            $(this).attr('src', $(this).data('thumbnail')); 
        });

        // Clear out any clones
        $('.clone').remove();

        // If we've clicked on the focused image, go back to the main layout
        if ($(this).hasClass('focused')) {
            $(this).parent('ul')
                   .removeClass('gallery')
                   .addClass('blocks');   

            // We are going back the main layout, so remove ALL classes       
            $('.images li').removeClass('focused unfocused');

            // Enable the keyboard navigation for the gallery
            key.setScope('blocks');

            // Make sure we are scrolled right to the top of the page
            window.scrollTo(0,0);

        } else {
            // inserts a clone in place of the image we've just made big, to keep position
            $(this).clone().addClass('clone').insertAfter(this)

            // Sets the image we clicked on to have the fullsize image
            $(this).children('img')
                   .addClass('focused')
                   .removeClass('unfocused')
                   .attr('src', $(this).children('img').data('fullsize'));             
            
            // Make sure we are the in the gallery mode
            $(this).parent('ul')
                   .removeClass('blocks')
                   .addClass('gallery');

            // Enable the keyboard navigation for the gallery
            key.setScope('gallery');

            // Work out how many pictures are before the one we clicked on
            var prevCount = $(this).prevAll().length;

            // Each small thumbnail is 130px. So we scroll 130 * number of images before
            window.scrollTo(0, (prevCount * 130));

            // Add the unfocused link to ALL images...
            $('.images li').removeClass('focused')
                           .addClass('unfocused');

            // Now add the focused class on this link and clear off the unfocused we just added
            $(this).addClass('focused')
                   .removeClass('unfocused');

        }
    });
});

