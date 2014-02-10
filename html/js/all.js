var glb = {};


$(function () {
    var $files = $('.js-file');

    if ($files.length === 0) {
        return;
    }

    $files.find('input[type="file"]').on('change', function (e) {
        var val = $(this).val();
        //  console.log('val',$(this).val());
        $('.b-input__f-text').text(val);
    });

    $files.find('input[type="file"]').click(function (e) {
        e.stopPropagation();
    });
    $files.click(function (e) {
        console.log(e);
        e.preventDefault();
        $(this).find("input[type=\"file\"]").click();
    });

});


/* carousel */
(function ($) {
    $(function () {
        /*
         Carousel initialization
         */
        $('.jcarousel')
            .jcarousel({
                // Options go here
            });

        /*
         Prev control initialization
         */
        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '-=1'
            });

        /*
         Next control initialization
         */
        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                // Options go here
                target: '+=1'
            });


    });
})(jQuery);
/* carousel */

/* slider */

$(function () {

    $('.b-slider__box img').attr('data-animate','fadeIn, fadeOut');
    $('.b-slider__box .b-slider__text').attr('data-animate','fadeIn, fadeOut');

    $('.js-slider').anythingSlider({
        animationTime: 0,  // no jQuery animation - no sliding left/right
        delayBeforeAnimate: 0, // add delay before switching so you can see the css3 animation
        buildStartStop: false,
        autoPlay: true,
        hashTags : false
    }).anythingSliderFx(
        {},    // no fx animation, it's all css baby!
        {
            stopRepeat : false         // fx option to prevent repeating animation on startup/clicking the same slide (default is false)
            //dataAnimate: ['rotateIn', 'rotateOut'] // data attribute containing the in and out animation.css class names to use
        }
    );


});
/* slider */


/* colorbox*/

$(".group4").colorbox({rel:'group4', slideshow:false , maxHeight: '98%'});

$(".inline").colorbox({inline:true, width:"740px"});

/* colorbox*/