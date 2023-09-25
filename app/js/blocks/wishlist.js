$(function () {

    $(document).on('click', function (event) {
        if ($(event.target).is('.wishlistSet__sort, .wishlistSet__sort *')) return;
        $('.wishlistSet__sortIcon').removeClass('wishlistSet__sortIcon_transformed');
        $('.wishlistSet__sortDropdown').removeClass('wishlistSet__sortDropdown_active').stop().slideUp(300);
    });

    $('.wishlistSet__sort').on('click', function () {
        $(this).find('.wishlistSet__sortIcon').toggleClass('wishlistSet__sortIcon_transformed');
        $(this).find('.wishlistSet__sortDropdown').toggleClass('wishlistSet__sortDropdown_active').stop().slideToggle(300);
    });

    $('.wishlistSet__sortItem').on('click', function () {
        $(this).parent('.wishlistSet__sortDropdown').siblings('.wishlistSet__sortInput').html($(this).text());
    });

    if ($('#wishlistSortable').length) {
        new Sortable(wishlistSortable, {
            handle: '.wishlistSet__icon', // handle's class
            animation: 500
        });
    }

});