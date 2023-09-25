$(function () {
    $('.subscription .subscription__button').on('click', function (event) {
        event.preventDefault();
        $('.popupSubscription').css("display", "flex").hide().fadeIn().find('.popupContent').css("display", "flex").hide().fadeIn();
    });

    $('.popupSubscription__button').on('click', function (event) {
        event.preventDefault();
        $('.popupSubscription').fadeOut().find('.popupContent').fadeOut();
    });
});