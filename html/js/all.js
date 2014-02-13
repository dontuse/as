/*fom validation*/
var jt = {};
jt.nsFormValidator = {

    mailPattern: new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
    phonePattern: new RegExp(/^[0-9\-()\+\s]+$/),
    textPattern: new RegExp(/^[a-zA-Zа-яА-Я\s\-.]+$/),
    numPattern: new RegExp(/^[0-9.\s]+$/),

    validateElement: function ($wrapper, control) {
        var error = false;
        if (!control) {
            var input = $wrapper;
        }
        else {
            var input = $wrapper;
        }


        var $container = $($wrapper).find('.b-inp__val-box');

        if (!input.length) {
            input = $($wrapper).find('.b-select__select');

            var selectValResult = parseInt(input.val()) === 0;

            //select
            if (($wrapper.data('required') === true) && (selectValResult)) {
                this.showError("Необходимо выбрать", $container, 'b-inp__val-box_invalid');
                return true;
            }
        }

        // required
        if (($wrapper.data('required') === true) && (!(input.val()))) {
            //this.showError("Необходимо заполнить", $container, 'b-inp__val-box_invalid');
            return true;
        }

        // mail
        else if (($wrapper.data('type') === 'mail') && (!this.mailPattern.test(input.val()))) {

            //this.showError("Неверный адрес", $container, 'b-inp__val-box_invalid');

            return true;
        }  // телефон
        else if (($wrapper.data('type') === 'phone') && ((input.val())) && (!this.phonePattern.test(input.val()))) {

            //this.showError("Неверный телефон", $container, 'b-inp__val-box_invalid');
            return true;
        }  // text
        else if (($wrapper.data('type') === 'text') && ((input.val())) && (!this.textPattern.test(input.val()))) {

            // this.showError("Неверное ФИО", $container, 'b-inp__val-box_invalid');
            return true;
        }
        else { // все валидно
            //this.showValid($container, 'b-inp__val-box_invalid');
            return false;
        }
    },
    showError: function (message, $container, cssClass) {
        $container.addClass(cssClass).html(message).show();
    },
    showValid: function ($container, cssClass) {
        $container.removeClass(cssClass).empty().show();
    }
};


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

    $('.b-slider__box ').attr('data-animate', 'fadeIn, fadeOut');


    $('.js-slider').anythingSlider({
        animationTime: 0,  // no jQuery animation - no sliding left/right
        delayBeforeAnimate: 0, // add delay before switching so you can see the css3 animation
        buildStartStop: false,
        autoPlay: true,
        hashTags: false
    }).anythingSliderFx(
        {},    // no fx animation, it's all css baby!
        {
            stopRepeat: false         // fx option to prevent repeating animation on startup/clicking the same slide (default is false)
            //dataAnimate: ['rotateIn', 'rotateOut'] // data attribute containing the in and out animation.css class names to use
        }
    );


});
/* slider */


/* colorbox*/

$(function () {

    $(".group4").colorbox({rel: 'group4', slideshow: false, maxHeight: '98%'});
    $(".inline").colorbox({inline: true});

});

/* colorbox*/


$(function () {
    $('.js-submenu').each(function () {

        var $block = $(this);
        var $menu = $('.b-table-menu__subnav', this);
        var $lnk = $('.b-table-menu__a ', this);
        var $subNav = $('.b-table-menu__subnav', this).hide();

        var activeClass = 'b-table-menu__a_active';

        $lnk.click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            if ($subNav.is(':visible')) {
                $subNav.hide();

                $lnk.removeClass(activeClass);
            } else {
                $subNav.show();
                $lnk.addClass(activeClass);
            }

        });

        $('body').click(function (e) {
            // e.stopPropagation();
            $subNav.hide();
            $lnk.removeClass(activeClass);
        })
    });
});


// портфолио галерея
$(function () {


    var $ph = $('.b-porttfolio-i__hidden-photo a').colorbox({rel: 'ph-all', slideshow: false, maxHeight: '98%'});

    $('.js-porfolio-show-all').click(function (e) {
        e.preventDefault();
        $('.b-porttfolio-i__hidden-photo a').eq(0).click();
    });


});

// портфолио галерея
$(function () {



    // gallery container
    var $block = $('.js-porfolio-gal'),
    // the carousel items
        $items = $('.b-porttfolio-i__th', $block),
    // total number of items
        itemsCount = $items.length;

    var Gallery = (function () {
        // index of the current item
        var current = 0,
        // mode : carousel || fullview
            mode = 'carousel',
        // control if one image is being loaded
            anim = false,
            init = function () {

                _initCarousel();
                _showImage($items.eq(0));

            },
            _initCarousel = function () {

                $items.on('click', function (e) {
                    e.preventDefault();
                    _showImage($(this));
                });

            },
            _showImage = function ($item) {
                $('.b-card__make-big-video', $block).hide();
                $('.js-galleryBigImg', $block).fadeIn(200);

                // shows the large image that is associated to the $item

                var $loader = $block.find('.b-card__img-b__rg-loading').show();

                $('.b-porttfolio-i__th_active', $block).removeClass('b-porttfolio-i__th_active ');
                $item.addClass('b-porttfolio-i__th_active ');

                var $thumb = $item,
                    largesrc = $thumb.attr('href'),
                    title = $thumb.data('description');

                $('<img/>').load(function () {

                    $block.find('.js-porfolio-gal__l-pic').empty().append('<img src="' + largesrc + '"/>').hide().fadeIn(400);

                    $loader.hide();


                    anim = false;

                }).attr('src', largesrc);

            };

        return {
            init: init
        };

    })();

    Gallery.init();
});


$(function () {
    // Написать письмо
    var $block = $('.js-write-a-letter');

    if ($block.length === 0) {
        return;
    }

    var $button = $('.js-wr-send', $block);
    var invalidInp = 'b-input_invalid';
    var $form = $('#js-write-a-letter');
    var formAction = $form.attr('action');
    var capchaValid = false;
    var $errorBox = $('.b-popup__error', $block);
    var $acceptChkBox = $('#write-a-letter__accept', $block);

    $button.click(function (e) {
        e.preventDefault();
        // собрать все инпуты с валидацией
        var $input;
        var $label;
        var error = false;

        // собрать все инпуты с валидацией
        $('.b-contol__input[data-required="true"]', $block).each(function () {
            //console.log(this);
            $input = $(this);
            $label = $('label[for="' + $input.attr('id') + '"]');

            if (jt.nsFormValidator.validateElement($input)) {
                $label.addClass('');
                $input.addClass('b-input_invalid');
                $input.parents('.b-control').addClass('b-control_state_error');
                error = true;
            }
            else {
                //console.log('valid');
                $label.removeClass('b-contact-form__lab_error');
                $input.removeClass('b-input_invalid b-textarea_invalid');
                $input.parents('.b-control').removeClass('b-control_state_error');
            }
        });

        // собрать текстареи
        $('.b-contol__textarea[data-required="true"]', $block).each(function () {
            $input = $(this);

            $label = $('label[for="' + $input.attr('id') + '"]');

            if (jt.nsFormValidator.validateElement($(this), 'textarea')) {
                $label.addClass('');
                $input.addClass('b-input_invalid');
                $input.parents('.b-control').addClass('b-control_state_error');
                error = true;
            }
            else {
                $label.removeClass('b-contact-form__lab_error');
                $input.removeClass('b-input_invalid b-textarea_invalid');
                $input.parents('.b-control').removeClass('b-control_state_error');
            }
        });


        if (error === false) {
            var validData = $form.serialize();

            $.post($form.attr('action'), validData).done(function (res) {
                console.log(res);
                $('.b-callUs-form').slideUp();
                $('.js-cont-resilt').slideDown();
            });
            $errorBox.hide();
        }
        else {
            $errorBox.show();
        }
    });

    $('.js-wr-back').click( function(e) {
        $('.js-cont-form').slideDown();
        $('.js-cont-resilt').slideUp();

    })
});
