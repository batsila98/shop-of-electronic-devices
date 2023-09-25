$(function () {

    // start search
    $('.search .search__form .search__input').on('focus', function () {
        $('.search__livesearch').slideDown();
        $('.search__empty').hide();
    });

    $('.search .search__form .search__input').blur(function () {
        $('.search__livesearch').slideUp();
    });

    $('.header__btnSearch').on('click', function (event) {
        event.preventDefault();
        $('.header__search').css('display', 'flex').hide().slideDown();
    });

    $('.search__close').on('click', function (event) {
        event.preventDefault();
        $('.header__search').slideUp();
    });

    $('.search__clear').on('click', function (event) {
        event.preventDefault();
        $('.search__input').val('');
    });
    // end search

    // start languages
    $(".menuLang__toggle").click(function () {
        if ($(this).find(".menuLang__checkbox").is(":checked")) {
            $(this).find(".menuLang__checkbox").prop("checked", true);
            $(this).find('.menuLang__round').addClass("menuLang__round_left");
        } else {
            $(this).find(".menuLang__checkbox").prop("checked", false);
            $(this).find('.menuLang__round').removeClass("menuLang__round_left");
        }
    });
    // end languages

    // start main menu mobile
    $('.header__btnMenu').on('click', function () {
        $('.menuMobile').fadeIn('fast', function () {
            $('.menuMobile__inner').animate({ left: '0' }, 300);
        });
    });

    $('.menuMobile').on('click', function (event) {
        if (event.target == this) {
            $('.menuMobile__inner').animate({ left: '-100%' }, 300, function () {
                $('.menuMobile').fadeOut('fast');
            });
        }
    });
    // end main menu mobile

    // start HELLO SECTION
    $('.advantages__expand').on('click', function () {
        if ($('.hello__advantages').hasClass('hello__advantages_expanded')) {
            $('.hello__advantages').removeClass('hello__advantages_expanded');
            $('.hello__advantages').animate({ height: '350px' }, 500);
            $('.advantages__textShow').show();
            $('.advantages__textHide').hide();
        } else {
            $('.hello__advantages').addClass('hello__advantages_expanded');
            $('.hello__advantages').css('height', '100%');
            $('.advantages__textShow').hide();
            $('.advantages__textHide').show();
        }
    });
    // end HELLO SECTION

    // start about section 
    $('.about__expand').on('click', function () {
        if ($('.about__description').hasClass('about__description_expanded')) {
            $('.about__description').removeClass('about__description_expanded');
            $('.about__description').animate({ height: '241px' }, 500);
            $('.about__textShow').show();
            $('.about__textHide').hide();
        } else {
            $('.about__description').addClass('about__description_expanded');
            $('.about__description').css('height', '100%');
            $('.about__textShow').hide();
            $('.about__textHide').show();
        }
    });
    // end about section

    // start catalog page
    $(".filtersForm__button").on("click", function (event) {
        event.preventDefault();

        if ($(this).siblings(".filtersForm__content").hasClass('filtersForm__content_opened')) {
            $(this).siblings(".filtersForm__content").slideUp(300, function () {
                $(this).removeClass('filtersForm__content_opened');
            });
            return;
        }

        $(this).siblings(".filtersForm__content").addClass('filtersForm__content_opened').hide().slideDown(300);
    });

    $('.filtersForm__inputCheckbox').on('change', function () {
        let valName = $(this).siblings('.filtersForm__name').text();
        let valId = $(this).attr('id');
        let filterType = $(this).parents('.filtersForm__filter').find('.filtersForm__button .filtersForm__name').text();

        if ($(this).is(':checked')) {
            $('.filtersForm__current').css('display', 'flex');

            $('.filtersForm__currentClear').before(`
            <div class="filtersForm__currentItem" data-val="${valId}">
                <div class="filtersForm__currentType">
                ${filterType}:
                <span class="filtersForm__currentName">
                    ${valName}
                </span>
                </div>
                <button class="filtersForm__currentRemove">
                <svg class="icon" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.1875 4.4875L7.8875 1.8125C8.0375 1.6625 8.0375 1.3875 7.8875 1.2375L7.2625 0.6125C7.1125 0.4625 6.8375 0.4625 6.6875 0.6125L4.0125 3.3125L1.3125 0.6125C1.1625 0.4625 0.8875 0.4625 0.7375 0.6125L0.1125 1.2375C-0.0375 1.3875 -0.0375 1.6625 0.1125 1.8125L2.8125 4.4875L0.1125 7.1875C-0.0375 7.3375 -0.0375 7.6125 0.1125 7.7625L0.7375 8.3875C0.8875 8.5375 1.1625 8.5375 1.3125 8.3875L4.0125 5.6875L6.6875 8.3875C6.8375 8.5375 7.1125 8.5375 7.2625 8.3875L7.8875 7.7625C8.0375 7.6125 8.0375 7.3375 7.8875 7.1875L5.1875 4.4875Z" fill="white"></path>
                </svg>
                </button>
            </div>`);

            return;
        }

        $('.filtersForm__currentItem').each(function (index, item) {
            if ($(item).data('val') == valId) {
                $(item).remove();
            }
        });

        if ($('.filtersForm__currentItem').length == 0) {
            $('.filtersForm__current').slideUp(function () {
                $('.filtersForm__currentItem').remove();
            });
            $('.filtersForm__inputCheckbox').prop("checked", false);
        }
    });

    $(document).on('click', '.filtersForm__currentItem', function () {
        let val = $(this).data('val');
        $(`#${val}`).prop("checked", false);
        $(this).remove();
        if ($('.filtersForm__currentItem').length == 0) {
            $('.filtersForm__currentClear').trigger('click');
        }
    });

    $('.filtersForm__currentClear').on('click', function (event) {
        event.preventDefault();
        $('.filtersForm__current').slideUp(function () {
            $('.filtersForm__currentItem').remove();
        });
        $('.filtersForm__inputCheckbox').prop("checked", false);
    });

    $('.productFilters__mobileButton').on('click', function () {
        $('.productFilters__form').toggleClass('active')

        if ($('.productFilters__form').hasClass('active')) {
            $('.productFilters__form').css('display', 'flex').hide().slideDown();
        } else {
            $('.productFilters__form').slideUp();
        }
    });
    // end catalog page

    // start notifications
    $('.addToComparison').on('click', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('addToComparison_bgBlue')) {
            $(this).addClass('addToComparison_bgBlue');
            $('.popupNotifications__itemComparison').css("display", "flex").hide().fadeIn().find('.popupNotifications__circle').addClass('popupNotifications__circle_animated');
            setTimeout(function () {
                $('.popupNotifications__itemComparison').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');
            }, 3000);
            return;
        }

        $(this).removeClass('addToComparison_bgBlue');
    });

    $('.addToWishlist').on('click', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('addToWishlist_bgBlue')) {
            $(this).addClass('addToWishlist_bgBlue');
            $('.popupNotifications__itemWishlist').css("display", "flex").hide().fadeIn().find('.popupNotifications__circle').addClass('popupNotifications__circle_animated');
            setTimeout(function () {
                $('.popupNotifications__itemWishlist').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');
            }, 3000);
            return;
        }

        $(this).stop().removeClass('addToWishlist_bgBlue');
    });

    $('.popupNotifications__close').on('click', function () {
        $(this).parent('.popupNotifications__item').fadeOut().find('.popupNotifications__circle').removeClass('popupNotifications__circle_animated');
    });
    // end notifications

    // start account wishlist
    $('.wishlistSet__settingsButton').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.wishlistSet__settingsMenu').fadeToggle();
    });

    $('.wishlistSet__settingsButton').on('blur', function () {
        $(this).removeClass('active');
        $(this).siblings('.wishlistSet__settingsMenu').fadeOut();
    });

    $('.wishlistSelectAll').on('click', function () {
        if ($(this).find('.wishlistSet__optionsCheckmark').hasClass('wishlistSet__optionsCheckmark_active')) {
            $(this).parent('.wishlistSet__options').siblings('.wishlistSet__products').find('.wishlistSet__productCheckbox').prop('checked', false);
            $('.wishlistSet__optionsButton').removeClass('wishlistSet__optionsButton_blue');
        } else {
            $(this).parent('.wishlistSet__options').siblings('.wishlistSet__products').find('.wishlistSet__productCheckbox').prop('checked', true);
            $('.wishlistSet__optionsButton').addClass('wishlistSet__optionsButton_blue');
        }

        $(this).find('.wishlistSet__optionsCheckmark').toggleClass('wishlistSet__optionsCheckmark_active');
    });

    $('.wishlistSet__productCheckbox').on('change', function () {
        let checkboxName = $(this).attr("name");
        let checkedFlag = false;

        $(`[name=${checkboxName}]`).each(function () {
            if ($(this).is(':checked')) {
                checkedFlag = true;
            }
        });

        if (checkedFlag === true) {
            $(this).parents('.wishlistSet__products').siblings('.wishlistSet__options').find('.wishlistSet__optionsButton').addClass('wishlistSet__optionsButton_blue');
        } else {
            $(this).parents('.wishlistSet__products').siblings('.wishlistSet__options').find('.wishlistSet__optionsButton').removeClass('wishlistSet__optionsButton_blue');
        }
    });

    // end account wishlist

    // start account orders
    $('.userOrders .userOrder__toggle').on('click', function () {
        if (!$(this).hasClass('active')) {
            $('.userOrders .userOrder__toggle').removeClass('active');
            $(this).addClass('active');
            $('.userOrder__content').slideUp();
            $(this).parents('.userOrder').find('.userOrder__content').css('display', 'flex').hide().slideDown();
        } else {
            $(this).removeClass('active');
            $(this).parents('.userOrder').find('.userOrder__content').slideUp();
        }
    });
    // end account orders

    // start account viewed
    $('.reviewCard__buttonSettings').on('click', function () {
        $(this).siblings('.reviewCard__settingsMenu').fadeToggle();
    });

    $('.reviewCard__buttonSettings').on('blur focusout', function () {
        $(this).siblings('.reviewCard__settingsMenu').fadeOut();
    });
    // end account viewed

    // start review card replies
    $('.reviewCard__buttonShowReplies').on('click', function () {
        $(this).find('.reviewCard__buttonShowRepliesTextShow').toggle();
        $(this).find('.reviewCard__buttonShowRepliesTextHide').toggle();
        $(this).parents('.reviewCard').find('.reviewCard__replies').slideToggle();
        $(this).find('.reviewCard__buttonShowRepliesIcon').toggleClass('reviewCard__buttonShowRepliesIcon_transformed');
    });
    // end review card replies

    $('.tabReviews .suggestionLeaveFeedback__button').on('click', function () {
        $('.pageProduct__middle').addClass('pageProduct__middle_sidebarActive container');
        $('.pageProduct__sidebar').addClass('pageProduct__sidebar_visible');
        $('.pageProduct__content').hide();
        $('.pageProduct__leaveReview').css('display', 'flex').hide().fadeIn(100);
    });

    $('.pageProduct__leaveReviewButton').on('click', function () {
        $('.pageProduct__content').fadeIn(100);
        $('.pageProduct__leaveReview').hide();
    });

    $('.tabQuestions .suggestionLeaveFeedback__button').on('click', function () {
        $('.pageProduct__middle').addClass('pageProduct__middle_sidebarActive container');
        $('.pageProduct__sidebar').addClass('pageProduct__sidebar_visible');
        $('.pageProduct__content').hide();
        $('.pageProduct__askQuestion').css('display', 'flex').hide().fadeIn(100);
    });

    $('.pageProduct__askQuestionButton').on('click', function () {
        $('.pageProduct__content').fadeIn(100);
        $('.pageProduct__askQuestion').hide();
    });
});