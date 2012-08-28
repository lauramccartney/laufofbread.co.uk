
$(function() {
    $('.images li').click('click', function(){

        var img = $(this).children('img');
        var ul  = $(this).parent('ul');

        if ($(this).hasClass('focused')) {
            ul.removeClass('gallery').addClass('blocks');

            $('.images li').removeClass('focused unfocused');
        } else {
            $('.images li').removeClass('focused').addClass('unfocused');
;

            ul.removeClass('blocks').addClass('gallery');

            $(this).addClass('focused').removeClass('unfocused');

            // Save the thumbnail to a data-thumbnail attr
            img.data('thumbnail', img.attr('src'));
            
            // Swap out for the fullsize image
            img.attr('src', img.data('fullsize'));
        }
    });
});
