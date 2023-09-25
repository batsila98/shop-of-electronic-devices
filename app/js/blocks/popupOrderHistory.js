$(function () {
    $('.orderInfo__buttonHistory').on('click', function () {
        $(this).parents('.userOrder').find('.popupOrderHistory').css('display', 'flex').hide().fadeIn().find('.popupContent').css('display', 'flex');
    });
});