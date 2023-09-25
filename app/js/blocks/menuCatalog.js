$(function () {

    let menuCatalog = $('.menuCatalog');
    let menuCatalogToggle = $('.menuCatalogToggle');
    let menuCatalogToggle__arrow = $('.menuCatalogToggle__arrow');
    let menuCatalog__content = $('.menuCatalog__content');
    let menuCatalog__item = $(".menuCatalog .menuCatalog__item");
    let menuCatalog__link = $(".menuCatalog .menuCatalog__link");
    let menuCatalog__close = $(".menuCatalog .menuCatalog__close");

    $(menuCatalog__link).on('mouseenter mouseleave', function () {
        $(this).toggleClass("menuCatalog__link_blue");
    });

    catalogMenuDesktop();
    catalogMenuMobile();


    $(window).on('resize', function () {
        if ($(window).width() > 990) {
            catalogMenuClearStyles();
            return;
        }
    });

    function catalogMenuDesktop() {
        $(menuCatalog).on('mouseenter mouseleave', function () {
            if ($(window).width() > 990) {
                $('.blurryOverlay').stop().fadeToggle(300);

                if ($(this).hasClass('menuCatalog_active')) {
                    return;
                }

                $(menuCatalogToggle).toggleClass('hovered');
                $(menuCatalogToggle__arrow).toggleClass('menuCatalogToggle__arrow_rotated');
                $(menuCatalog__content).stop().slideToggle(300);
            }
        });

        $(menuCatalog__item)
            .mouseover(function () {
                if ($(window).width() > 990) {
                    $(this).children('.menuCatalog__link').addClass("menuCatalog__link_blue").children(".menuCatalog__arrow").addClass("menuCatalog__arrow_visible");
                    $(this).children(".menuCatalog__subContent").stop().fadeIn(200);
                }
            })
            .mouseleave(function () {
                if ($(window).width() > 990) {
                    $(this).children('.menuCatalog__link').removeClass("menuCatalog__link_blue").children(".menuCatalog__arrow").removeClass("menuCatalog__arrow_visible");
                    $(this).children(".menuCatalog__subContent").stop().fadeOut(200);
                }
            });
    }

    function catalogMenuMobile() {
        $(menuCatalogToggle).on('click', function (event) {
            event.preventDefault();

            if ($(window).width() <= 990) {
                $('.blurryOverlay').stop().fadeToggle(300);
                $(menuCatalogToggle).toggleClass('hovered');
                $(menuCatalogToggle__arrow).toggleClass('menuCatalogToggle__arrow_rotated');
                $(menuCatalog__content).stop().slideToggle(300);
            }
        });

        $('.blurryOverlay').on('click', function (event) {
            event.preventDefault();

            if ($(window).width() <= 990) {
                $('.blurryOverlay').stop().fadeToggle(300);
                $(menuCatalogToggle).toggleClass('hovered');
                $(menuCatalogToggle__arrow).toggleClass('menuCatalogToggle__arrow_rotated');
                $(menuCatalog__content).stop().slideToggle(300);
            }
        });

        $(menuCatalog__link).on('click', function (event) {
            event.preventDefault();

            if ($(window).width() <= 990) {
                $(this).addClass("menuCatalog__link_blue").children(".menuCatalog__arrow").addClass("menuCatalog__arrow_visible");
                $(this).siblings(".menuCatalog__subContent").show().animate({ left: '0', width: '100%', opacity: '1' }, 500);
            }
        });

        $(menuCatalog__close).on('click', function (event) {
            event.preventDefault();

            if ($(window).width() <= 990) {
                $(this).parents('.menuCatalog__item').children(".menuCatalog__link").removeClass("menuCatalog__link_blue").children(".menuCatalog__arrow").removeClass("menuCatalog__arrow_visible");
                $(this).parents('.menuCatalog__item').children(".menuCatalog__subContent").animate({ left: '50%', width: '50%', opacity: '0' }, 500, function () {
                    $(this).parents('.menuCatalog__item').children(".menuCatalog__subContent").hide();
                });
            }
        });
    }

    function catalogMenuClearStyles() {
        $('.blurryOverlay').stop().hide();
        $(menuCatalogToggle__arrow).removeClass('menuCatalogToggle__arrow_rotated');
    }

});