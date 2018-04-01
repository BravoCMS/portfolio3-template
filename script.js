jQuery(function ($) {
    var winWidth = $(window).width(),
        winHeight = $(window).height();

    $('body').addClass('k_mob_show_norm');
    $('#container').before(
        '<nav id="mob_nav" class="layout_vert layout_desk_horiz">' +
        '<div class="mob_nav_content"></div>' +
        '<a href="#" id="mt"><span></span></a>' +
        '</nav>'
    ).prepend(
        '<header class="top">' +
        '<div class="site_title_block"></div>' +
        '<nav id="main"></nav>' +
        '</header>'
    );
    // some bull shit
    $('.top_menu .header_menu_top').clone().appendTo($('nav#mob_nav .mob_nav_content'));
    $('.top_menu .header_menu_top').appendTo($('nav#main'));
    $('.site_title_block').append($('a.logo'));

    $('#mt').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('#mob_nav').toggleClass('open');
        $('.mob_nav_content').slideToggle();
    });

    if ($('.main-page #gallery').length) {
        $('#gallery').prepend('<div class="slide-container" />');
        $('.boxcenter a img').each(function () {
            $(this).attr({ 'src': $(this).parent().attr('href') });
            $(this).wrap('<div class="slide-item"><div class="slide-img"></div></div>');
        });
        $('.slide-container').append($('.slide-item'));
        $('.block_conteiner').remove();

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
    } else if ($('#gallery').length) {
        $('#gallery').addClass('photo-list');
        $('#gallery .products_blocks').each(function () {
            $(this).prepend($(this).find('.boxcenter a'), $(this).find('table:nth-child(2) p')).find('table').remove();
            $(this).find('a').append($(this).find('p'));
            $(this).find('a').css({
                'background-image': 'url(' + $(this).find($('img')).attr('src') + ')'
            });

            var descText = $(this).find('p').text().split('\n');
            if (descText.length > 0) {
                $(this).find('a').attr({ 'title': descText[0] });
                var descHtml = '';
                descHtml += '<span>' + descText[0] + '</span>';
                if (descText.length > 1) {
                    descHtml += '<span>';
                    for (var i = 1; i < descText.length; i++) {
                        if (i != descText.length - 1) {
                            descHtml += descText[i] + ' <br/>';
                        } else {
                            descHtml += descText[i];
                        }
                    }
                }
                descHtml += '</span>';
                $(this).find('p').html(descHtml);
            }
        });
        $('body').append('<div id="slideshow"></div>');
        $('#slideshow').prepend(
            '<div class="swiper-container">' +
            '<div class="swiper-wrapper">' +
            '</div>' +
            '<div class="swiper-pagination"></div>' +
            '<div class="swiper-button-next"></div>' +
            '<div class="swiper-button-prev"></div>' +
            '</div>'
        );
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            observer: true
        });
        $('#slideshow').hide();
        $('.photo-list .block_conteiner a').each(function () {
            var cloneSlide = $(this).clone();
            $('#slideshow .swiper-wrapper').append(cloneSlide);
        });
        $('#slideshow a').each(function () {
            $(this).find('img').attr({ 'src': $(this).attr('href') });
            $(this).wrap('<div class="swiper-slide" />');
            // $(this).find('.swiper-slide').unwrap();
        });
        $('<span class="slideshow-close-text">Close</span>').appendTo($('#slideshow'));
        $('#slideshow .slideshow-close-text').wrap('<div class="close-slideshow" />');
        $('#slideshow .close-slideshow').prepend('<div></div>');
        $('#gallery .products_blocks a').off().on('click', function (e) {
            e.preventDefault();
            $('#slideshow').fadeIn();
            var slideIndex = $('.block_conteiner').index($(this).closest('.block_conteiner')) + 1;
            $('#slideshow .swiper-pagination-bullet:nth-child(' + slideIndex + ')').trigger('click');
            $('body').css({ 'overflow': 'hidden' });
        });
        $('.close-slideshow').on('click', function () {
            $(this).closest('#slideshow').hide();
            $('body').css({ 'overflow': 'auto' });
        });

        $('.swiper-slide').each(function () {
            $(this).find('a').css({ 'max-height': winHeight - 75 });
            $(this).find('img').css({ 'max-height': winHeight - 75 });
        });
    }

    var str = $('.who_make a:first-child').text(),
        newStr = '';
    if (str.indexOf("totalcan") != -1) {
        newStr = str.substring(0, str.length - 16);
        $('.who_make a:first-child').addClass('totalcan').text(newStr);
    } else if (str.indexOf("ARTWEB") != -1) {
        newStr = str.substring(0, str.length - 11);
        $('.who_make a:first-child').addClass('artweb').text(newStr);
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
