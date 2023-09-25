$(function () {

    let domProductCard;

    if ($(window).width() > 1280) {
        domProductCard = $('.productCard:not(.pageComparison__product):not(.accountReviews__product)');
        productCardsHover(domProductCard);
    } else {
        domProductCard = $('.productCard:not(.pageComparison__product):not(.accountReviews__product):not(.productsSet__product)');
        productCardsHover(domProductCard);
    }

    $(window).on('resize', function () {
        if ($(window).width() > 1280) {
            domProductCard = $('.productCard:not(.pageComparison__product):not(.accountReviews__product)');
            productCardsHover(domProductCard);
        } else {
            domProductCard = $('.productCard:not(.pageComparison__product):not(.accountReviews__product):not(.productsSet__product)');
            productCardsHover(domProductCard);
        }
    });

    function productCardsHover(domProductCard) {
        domProductCard
            .mouseenter(function () {
                $(this).find('.productCard__price').stop().hide();
                $(this).find('.productCard__buttons').css('display', 'flex').stop().hide().slideDown(200);
            })
            .mouseleave(function () {
                $(this).find('.productCard__buttons').stop().hide();
                $(this).find('.productCard__price').stop().slideDown(200);
            });
    }



    $('.productCard__addToCard').on('click', function (event) {
        event.preventDefault();

        let $productCard__addToCard = $(this);

        $productCard__addToCard.addClass('productCard__addToCard_loading');

        let buttonTimeout = setTimeout(function () {
            $productCard__addToCard.removeClass('productCard__addToCard_loading').addClass('productCard__addToCard_done');

            $('.popupNotifications__itemCart').css("display", "flex").hide().fadeIn().find('.popupNotifications__circle').addClass('popupNotifications__circle_animated');
        }, 500);

        let notificationTimeout = setTimeout(function () {
            $('.popupNotifications__itemCart').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');

            $productCard__addToCard.removeClass('productCard__addToCard_done');
        }, 3000);
    });

});