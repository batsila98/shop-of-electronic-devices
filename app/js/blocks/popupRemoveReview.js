$(function () {
    $('.reviewCard__remove').on('click', function () {
        $('.popupRemoveReview').css('display', 'flex').hide().fadeIn().find('.popupContent').css('display', 'flex').hide().fadeIn();
    });

    $('.popupRemoveReview .buttonSecondary').on('click', function () {
        $('.popupRemoveReview').fadeOut().find('.popupContent').fadeOut();
    });
});