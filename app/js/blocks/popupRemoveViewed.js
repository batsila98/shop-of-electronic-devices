$(function () {
    $('.accountViewed__button').on('click', function () {
        $('.popupRemoveViewed').css('display', 'flex').hide().fadeIn().find('.popupContent').css('display', 'flex').hide().fadeIn();
    });

    $('.popupRemoveViewed .buttonSecondary').on('click', function () {
        $('.popupRemoveViewed').fadeOut().find('.popupContent').fadeOut();
    });
});