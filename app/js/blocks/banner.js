$(function () {

    if ($('.bannerText').length && $(window).width() > 1280) {
        showCatalogMenu();
    }

    $(window).on('resize', function () {
        if ($('.bannerText').length) {
            if ($(window).width() > 1280) {
                showCatalogMenu();
                return;
            }

            hideCatalogMenu();
        }
    });

    function showCatalogMenu() {
        $('.menuCatalogToggle').addClass("active").find('.menuCatalogToggle__arrow').hide();
        $(".menuCatalog__content").stop().show();

        $('.menuCatalog').addClass('menuCatalog_active');
    }

    function hideCatalogMenu() {
        $('.menuCatalogToggle').removeClass("active").find('.menuCatalogToggle__arrow').show();
        $(".menuCatalog__content").stop().hide();

        $('.menuCatalog').removeClass('menuCatalog_active');
    }

});