$(document).ready(function () {
  $('.popup').on('click', function (event) {
    if (event.target == this) {
      $(this).fadeOut().find('.popupContent').fadeOut();
    }
  });

  $('.popupClose__button').on('click', function (event) {
    event.preventDefault();
    $(this).parents('.popup').fadeOut().find('.popupContent').fadeOut();
  });
});