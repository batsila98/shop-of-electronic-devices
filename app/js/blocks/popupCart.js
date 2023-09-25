$(function () {
    $('.buttonOpenCart').on('click', function () {
        $('.popupCart').css("display", "flex").hide().fadeIn().find('.popupContent').css("display", "flex").hide().fadeIn();
    });

    $('.popupCart__continue').on('click', function () {
        $('.popupCart').fadeOut();
    });

    $('.popupCart__remove').on('click', function () {
        $(this).parents('.popupCart__item').slideUp(function () {
            $(this).remove();
        });
    });

    $('.popupCart__quantitySubtract').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('popupCart__quantityButton_enabled')) {
            let itemPrice = $(this).parents('.popupCart__quantity').siblings('.popupCart__price').find('.popupCart__priceValue').text().replace(/[^0-9]/gi, '');
            let quantity = $(this).siblings('.popupCart__quantityForm').find('input[type=number]').val();
            if (quantity > 1) {
                $(this).siblings('.popupCart__quantityForm').find('input[type=number]').val(--quantity);
            }
            if (quantity < 2) {
                $(this).removeClass('popupCart__quantityButton_enabled');
            }
            $(this).parents('.popupCart__quantity').siblings('.popupCart__sum').find('.popupCart__sumPrice').html(itemPrice * quantity + '&nbsp;<span class="popupCart__sumCurrency">₴</span>');
        }
    });

    $('.popupCart__quantityAdd').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('popupCart__quantityButton_enabled')) {
            let itemPrice = $(this).parents('.popupCart__quantity').siblings('.popupCart__price').find('.popupCart__priceValue').text().replace(/[^0-9]/gi, '');
            let quantity = $(this).siblings('.popupCart__quantityForm').find('input[type=number]').val();

            $(this).siblings('.popupCart__quantityForm').find('input[type=number]').val(++quantity);
            $(this).parents('.popupCart__quantity').siblings('.popupCart__sum').find('.popupCart__sumPrice').html(itemPrice * quantity + '&nbsp;<span class="popupCart__sumCurrency">₴</span>');

            $(this).siblings('.popupCart__quantitySubtract').addClass('popupCart__quantityButton_enabled');
        }
    });
});