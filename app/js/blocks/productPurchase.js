$(function () {

    $('.productPurchase__button.addToCart').on('click', function (event) {
        event.preventDefault();

        let $productPurchase__button = $(this);

        $productPurchase__button.addClass('productPurchase__button_loading');

        let buttonTimeout = setTimeout(function () {
            $productPurchase__button.removeClass('productPurchase__button_loading').addClass('productPurchase__button_done');

            $('.popupNotifications__itemCart').css("display", "flex").hide().fadeIn().find('.popupNotifications__circle').addClass('popupNotifications__circle_animated');
        }, 500);

        let notificationTimeout = setTimeout(function () {
            $('.popupNotifications__itemCart').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');

            $productPurchase__button.removeClass('productPurchase__button_done');
        }, 3000);
    });

});