$(function () {
    // start product page tabs
    $('.tabsNavigation__link').on('click', function (event) {
        event.preventDefault();

        if (!$(this).hasClass('active')) {
            let tab = $(this).data('tab');
            if (tab != 'tabAll') {
                $('.pageProduct__middle').addClass('pageProduct__middle_sidebarActive');
                $('.pageProduct__content').addClass('pageProduct__content_narrow');
                $('.pageProduct__sidebar').addClass('pageProduct__sidebar_visible');
                $('.pageProduct__navigation').addClass('pageProduct__navigation_wide');
            } else {
                $('.pageProduct__middle').removeClass('pageProduct__middle_sidebarActive');
                $('.pageProduct__content').removeClass('pageProduct__content_narrow');
                $('.pageProduct__sidebar').removeClass('pageProduct__sidebar_visible');
                $('.pageProduct__navigation').removeClass('pageProduct__navigation_wide');
            }

            $('.tabsContent__tabPane').removeClass('tabsContent__tabPane_visible');
            $('.tabsContent__tabPane#' + tab).addClass('tabsContent__tabPane_visible');

            $('.tabsNavigation__link').removeClass('active');
            $(this).addClass('active');
        }
    });

    // mobile
    $('.tabsNavigationMobile').on('click', function (event) {
        event.preventDefault();
        $(this).find('.tabsNavigationMobile__dropdown').stop().slideToggle('fast');
        $(this).find('.tabsNavigationMobile__arrow').toggleClass('tabsNavigationMobile__arrow_transformed');
    });

    $('.tabsNavigationMobile__link').on('click', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            let tab = $(this).data('tab');
            if (tab != 'tabAll') {
                $('.pageProduct__middle').addClass('pageProduct__middle_sidebarActive');
                $('.pageProduct__content').addClass('pageProduct__content_narrow');
                $('.pageProduct__sidebar').addClass('pageProduct__sidebar_visible');
                $('.pageProduct__navigation').addClass('pageProduct__navigation_wide');
            } else {
                $('.pageProduct__middle').removeClass('pageProduct__middle_sidebarActive');
                $('.pageProduct__content').removeClass('pageProduct__content_narrow');
                $('.pageProduct__sidebar').removeClass('pageProduct__sidebar_visible');
                $('.pageProduct__navigation').removeClass('pageProduct__navigation_wide');
            }

            $('.tabsContent__tabPane').removeClass('tabsContent__tabPane_visible');
            $('.tabsContent__tabPane#' + tab).addClass('tabsContent__tabPane_visible');

            $('.tabsNavigationMobile__link').removeClass('active');
            $('.tabsNavigationMobile__value').html($(this).html());
            $(this).addClass('active');
        }
    });

    // end product page tabs


    // start product page slider
    let sliderTumbnails = new Swiper(".productSlider__thumbnails", {
        direction: "vertical",
        slidesPerView: 6,
        spaceBetween: 12,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slideToClickedSlide: false,
        breakpoints: {
            0: {
                slidesPerView: 4,
                direction: "horizontal",
            },
            600: {
                slidesPerView: 6,
            },
            990: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 6,
            }
        }
    });

    $('.productSlider__thumbnails .productSlider__slideLink').on('click', function (event) {
        event.preventDefault();
        $('.productSlider__mainImage').hide();
        $('.productSlider__mainImages #' + $(this).data('image')).fadeIn();
        $('.productSlider__slide').removeClass('productSlider__slide_current');
        $(this).parent('.productSlider__slide').addClass('productSlider__slide_current');
    });
    // end product page slider

    // start product page accessories
    $('.productAccessory__variations').on('click', function () {
        $('.productAccessory__dropdown').slideUp('fast');
        $('.productAccessory__arrow').removeClass('productAccessory__arrow_transformed');
        $(this).find('.productAccessory__dropdown').stop().slideToggle('fast');
        $(this).find('.productAccessory__arrow').toggleClass('productAccessory__arrow_transformed');
    });

    $(document).on('click', function (event) {
        if (
            !$(event.target).is('.productAccessory__variations') &&
            !$(event.target).hasClass('productAccessory__dropdown') &&
            $(event.target).parents('.productAccessory__variations').length == 0
        ) {
            $('.productAccessory__dropdown').slideUp('fast');
            $('.productAccessory__arrow').removeClass('productAccessory__arrow_transformed');
        }

        if (
            !$(event.target).is('.tabsNavigationMobile') &&
            !$(event.target).hasClass('tabsNavigationMobile__dropdown') &&
            $(event.target).parents('.tabsNavigationMobile').length == 0
        ) {
            $('.tabsNavigationMobile__dropdown').slideUp('fast');
            $('.tabsNavigationMobile__arrow').removeClass('tabsNavigationMobile__arrow_transformed');
        }
    });

    $('.productAccessory__variation').on('click', function () {
        $(this).parents('.productAccessory__variations').find('.productAccessory__value').text($(this).text());
    });
    // end product page accessories

    // product images tab photos viewing
    $('.tabImages__image').on('click', function (event) {
        event.preventDefault();
        let photoSrc = $(this).attr('src');

        $('.popupPhoto__image').attr('src', photoSrc);

        $('.popupPhoto').css('display', 'flex').hide().fadeIn();
    });
    // end product images tab photos viewing

    // start video popup
    $('.productVideoReview__link, .tabVideos__item').on('click', function (event) {
        event.preventDefault();
        let videoUrl = $(this).data('src');

        $('.popupVideo__iframe').attr('src', videoUrl);

        $('.popupVideo').css('display', 'flex').hide().fadeIn();
    });
    // end video popup

    // product image zoom
    $('.productSlider__mainImage').on('mouseenter', function () {
        $('.productSlider__zoomArea').fadeIn();
    });

    $('.productSlider__mainImage').on('mouseleave', function () {
        $('.productSlider__zoomArea').fadeOut();
    });

    let productImages = document.querySelectorAll('.productSlider__mainImage');
    let paneContainer = document.querySelector('.productSlider__zoomArea');

    productImages.forEach(function (singleImage) {
        new Drift(singleImage, {
            inlinePane: false,
            paneContainer: paneContainer,
            zoomFactor: 2,
            hoverBoundingBox: true,
        });
    });

});