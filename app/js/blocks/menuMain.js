$(function () {

    $('.menuMain__button').on('focus click', function() {
        $('.menuMain__dropdown').slideDown('fast');
    });
    
    $('.menuMain__button').on('blur', function() {
        $('.menuMain__dropdown').slideUp('fast');
    });

});