jQuery(function ($) {
    var winWidth = $(window).width(),
        winHeight = $(window).height();

    $('#mt').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('#mob_nav').toggleClass('open');
        $('.mob_nav_content').slideToggle();
    });

    if ($('.main-page #gallery').length) {
        $('.slide-item:first-child').addClass('active');
        if ($('.slide-item').length > 1) {
            $('.slide-item img').on('click', function () {
                clearInterval(intervalID)
                if ($('.slide-item.active').next().length) {
                    $('.slide-item.active').removeClass('active').next().addClass('active');
                } else {
                    $('.slide-item.active').removeClass('active');
                    $('.slide-item:first-child').addClass('active');
                }
                intervalID = window.setInterval(function () {
                    if ($('.slide-item.active').next().length) {
                        $('.slide-item.active').removeClass('active').next().addClass('active');
                    } else {
                        $('.slide-item.active').removeClass('active');
                        $('.slide-item:first-child').addClass('active');
                    }
                }, 5000);
            });

            intervalID = window.setInterval(function () {
                if ($('.slide-item.active').next().length) {
                    $('.slide-item.active').removeClass('active').next().addClass('active');
                } else {
                    $('.slide-item.active').removeClass('active');
                    $('.slide-item:first-child').addClass('active');
                }
            }, 5000);
        }
    }

    $(document).on('focus', 'input[type=text], textarea', function () {
        if ($(this).val().length) {
            $(this).closest('.input_line').find('.label').css({ 'opacity': '1' });
        } else {
            $(this).closest('.input_line').find('.label').css({ 'opacity': '0' });
        }
        $(this).blur(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '1' });
            } else {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '0' });
            }
        });
        $(this).keydown(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '1' });
            } else {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '0' });
            }
        });
        $(this).keyup(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '1' });
            } else {
                $(this).closest('.input_line').find('.label').css({ 'opacity': '0' });
            }
        });
    });

    $(window).on('load', function () {
        var winWidth = $(window).width(),
            winHeight = $(window).height();

        if ($('.main-page #gallery').length) {
            $('#gallery').height(winHeight - $('.footer').outerHeight(true) - $('header').outerHeight(true) - $('#mob_nav').outerHeight(true) - 56);
            $('.slide-img img').css({
                'max-height': $('#gallery').height()
            });
            $('.slide-img').each(function () {
                $(this).width($(this).parent().width()).height($(this).parent().height());
            });
        } else if ($('#gallery').length) {
            $('#gallery .products_blocks').each(function () {
                $(this).find('a').height($(this).find('a').width());
            });
        }
    });

    $(window).on('resize', function () {
        var winWidth = $(window).width(),
            winHeight = $(window).height();

        if ($('.main-page #gallery').length) {
            $('#gallery').height(winHeight - $('.footer').outerHeight(true) - $('header').outerHeight(true) - $('#mob_nav').outerHeight(true) - 56);
            $('.slide-img img').css({
                'max-height': $('#gallery').height()
            });
            $('.slide-img').each(function () {
                $(this).width($(this).parent().width()).height($(this).parent().height());
            });
        } else if ($('#gallery').length) {
            $('#gallery .products_blocks').each(function () {
                $(this).find('a').height($(this).find('a').width());
            });
            $('.swiper-slide').each(function () {
                $(this).find('a').css({ 'max-height': winHeight - 75 });
                $(this).find('img').css({ 'max-height': winHeight - 75 });
            });
        }
    });
})
