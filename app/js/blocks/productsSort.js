$(function () {

    $('.productsSort__select').on('click', function () {
        $(this).find('.productsSort__dropdown').slideToggle();
    });

    $('.productsSort__select').on('blur', function () {
        $(this).find('.productsSort__dropdown').slideUp();
    });

    $('.productsSort__item').on('click', function () {
        $('.productsSort__value').html($(this).html());
    });

});