$(function () {

    $('.wishlist__button').on('click', function () {
        $('.popupWishlist').css('display', 'flex').hide().fadeIn();
        $('.popupWishlist .popupWishlist__create').css('display', 'flex').hide().fadeIn();
    });

    $('.wishlistMove').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('wishlistSet__optionsButton_blue')) {
            $('.popupWishlist').css('display', 'flex').hide().fadeIn();
            $('.popupWishlist .popupWishlist__move').css('display', 'flex').hide().fadeIn();
        }
    });

    $('.wishlistRemoveProducts').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('wishlistSet__optionsButton_blue')) {
            let $domProductsToRemove = $(this).parent('.wishlistSet__options').siblings('.wishlistSet__products').find(('.wishlistSet__product'));

            $domProductsToRemove.each(function (index, item) {
                if ($(item).find('input').prop('checked') == true) {
                    $(item).remove();
                }
            });
        }
    });

    $('.wishlistSet__rename').on('click', function () {
        $('.popupWishlist').css('display', 'flex').hide().fadeIn();
        $('.popupWishlist .popupWishlist__rename').css('display', 'flex').hide().fadeIn();
    });

    $('.wishlistSet__share').on('click', function () {
        $('.popupWishlist').css('display', 'flex').hide().fadeIn();
        $('.popupWishlist .popupWishlist__share').css('display', 'flex').hide().fadeIn();
    });

    $('.wishlistSet__remove').on('click', function () {
        $('.popupWishlist').css('display', 'flex').hide().fadeIn();
        $('.popupWishlist .popupWishlist__remove').css('display', 'flex').hide().fadeIn();
    });

    $('.popup__cancel').on('click', function () {
        $('.popupWishlist').fadeOut();
        $('.popupWishlist .popupContent').fadeOut();
    });

    // dropdown
    $('.popupWishlist__label').on('focus click', function () {
        $(this).addClass('popupWishlist__label_active');
        $(this).find('.popupWishlist__dropdown').slideToggle();
        $(this).find('.popupWishlist__arrow').toggleClass('popupWishlist__arrow_transformed');
        $(this).find('.popupWishlist__input').show().focus();
        $(this).find('.popupWishlist__labelText').addClass('popupWishlist__labelText_blue popupWishlist__labelText_transformed');
    });

    $('.popupWishlist__input').on('blur', function (event) {
        if ($(this).val() === '') {
            $(this).siblings('.popupWishlist__labelText').removeClass('popupWishlist__labelText_transformed');
        }

        $(this).parent('.popupWishlist__label').removeClass('popupWishlist__label_active');
        $(this).siblings('.popupWishlist__labelText').removeClass('popupWishlist__labelText_blue');
    });

    $('.popupWishlist__dropdownItem').on('click', function () {
        $(this).parent('.popupWishlist__dropdown').siblings('.popupWishlist__input').val($.trim($(this).text()));
    });

    // copy wishlist set url
    $('.buttonCopyWishlisUrl').on('click', function() {
        $(this).siblings('.popupWishlist__label').find('.popupWishlist__input').trigger('select');
        document.execCommand("copy");
    });

});