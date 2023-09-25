$(function () {

    $('.addAccessory').on('click', function (event) {
        event.preventDefault();

        let $productAccessory__button = $(this);

        $productAccessory__button.addClass('productAccessory__button_loading');

        let buttonTimeout = setTimeout(function () {
            $productAccessory__button.removeClass('productAccessory__button_loading').addClass('productAccessory__button_done');

            $('.popupNotifications__itemCart').css("display", "flex").hide().fadeIn().find('.popupNotifications__circle').addClass('popupNotifications__circle_animated');
        }, 500);

        let notificationTimeout = setTimeout(function () {
            $('.popupNotifications__itemCart').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');

            $productAccessory__button.removeClass('productAccessory__button_done');
        }, 3000);
    });
    
});