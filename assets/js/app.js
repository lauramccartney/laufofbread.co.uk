
$(function() {
    
    // If the images are there, swap them out for their retina counterparts
    $('img').retina({
        checkIfImageExists: true,
        suffix: "@2x"
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

        // If we've clicked on the focused image, go back to the main layout
        if ($(this).hasClass('focused')) {
            $(this).parent('ul')
                   .removeClass('gallery')
                   .addClass('blocks');   

            // We are going back the main layout, so remove ALL classes       
            $('.images li').removeClass('focused unfocused');

        } else {
            // Sets the image we clicked on to have the fullsize image
            $(this).children('img')
                   .addClass('focused')
                   .removeClass('unfocused')
                   .attr('src', $(this).children('img').data('fullsize'));             

            // Make sure we are the in the gallery mode
            $(this).parent('ul')
                   .removeClass('blocks')
                   .addClass('gallery');

            // Add the unfocused link to ALL images...
            $('.images li').removeClass('focused')
                           .addClass('unfocused');

            // Now add the focused class on this link and clear off the unfocused we just added
            $(this).addClass('focused')
                   .removeClass('unfocused');

        }
    });
});
