$(function () {
    $(window).on('resize', function () {
        if ($(window).width() > 990) {
            $('.productFilters__form').show();
        } else {
            $('.productFilters__form').hide();
        }
    });
});