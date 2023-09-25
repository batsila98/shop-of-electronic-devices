$(function () {

    if ($('.pageComparison').length) {

        let $pageComparison__products = $('.pageComparison__products');
        let $pageComparison__scrollInner = $('.pageComparison__scrollInner');
        let $comparisonProperty__rowRight = $('.comparisonProperty__rowRight');
        let $comparisonProperty__topRight = $('.comparisonProperty__topRight');

        $($pageComparison__products).on('scroll', function () {
            let scrollLeft = $($pageComparison__products).scrollLeft();
            $($pageComparison__scrollInner).scrollLeft(scrollLeft);
            $($comparisonProperty__rowRight).scrollLeft(scrollLeft);
            $($comparisonProperty__topRight).scrollLeft(scrollLeft);
        });

        $('.comparisonProperty__rowRight').on('scroll', function () {
            $('.comparisonProperty__rowRight, .comparisonProperty__topRight, .pageComparison__scrollInner, .pageComparison__products').scrollLeft($(this).scrollLeft());
        });

        $($pageComparison__scrollInner).on('scroll', function () {
            let scrollLeft = $($pageComparison__scrollInner).scrollLeft();

            $($pageComparison__products).scrollLeft(scrollLeft);
            $($comparisonProperty__rowRight).scrollLeft(scrollLeft);
            $($comparisonProperty__topRight).scrollLeft(scrollLeft);
        });

        // slide buttons
        let productsWrapperWidth = $('.pageComparison__products').outerWidth();
        let productScroll = $('.pageComparison__product').outerWidth() * $('.pageComparison__product').length - productsWrapperWidth;

        $(window).on('resize', function() {
            productsWrapperWidth = $('.pageComparison__products').outerWidth();
            productScroll = $('.pageComparison__product').outerWidth() * $('.pageComparison__product').length - productsWrapperWidth;
        });

        $('.pageComparison__slideButtonNext').on('click', function () {
            $('.pageComparison__products').animate({ scrollLeft: '+=228' }, 300, function () {
                $('.pageComparison__slideButtonPrev').addClass('pageComparison__slideButton_active');
                if ($('.pageComparison__products').scrollLeft() >= productScroll) {
                    $('.pageComparison__slideButtonNext').removeClass('pageComparison__slideButton_active');
                }
            });
        });

        $('.pageComparison__slideButtonPrev').on('click', function () {
            $('.pageComparison__products').animate({ scrollLeft: '-=228' }, 300, function () {
                if ($('.pageComparison__products').scrollLeft() < 10) {
                    $('.pageComparison__slideButtonPrev').removeClass('pageComparison__slideButton_active');
                }
                $('.pageComparison__slideButtonNext').addClass('pageComparison__slideButton_active');
            });
        });

        // filters
        $('.comparisonFilter__button').on('click', function () {
            if ($(window).width() > 810) {
                $(this).siblings('.comparisonFilter__content').slideToggle();
            }
        });

        $('.pageComparison__filtersButton').on('click', function () {
            $('.pageComparison__filtersInner').toggleClass('active');
            if ($('.pageComparison__filtersInner').hasClass('active')) {
                $('.pageComparison__filtersInner').css('display', 'flex').hide().slideDown();
                $('.pageComparison__filtersArrow').css('transform', 'rotate(180deg)');
            } else {
                $('.pageComparison__filtersInner').slideUp();
                $('.pageComparison__filtersArrow').css('transform', 'rotate(0deg)');
            }
        });

        $(window).on('resize', function () {
            if ($(window).width() > 810) {
                $('.pageComparison__filtersInner').show();
            } else {
                $('.pageComparison__filtersInner').hide();
            }
        });

        // properties
        $('.pageComparison__scrollRow').css({
            'left': $('.pageComparison__products').offset().left,
            'width': $('.pageComparison__products').width()
        });

        $(window).on('resize', function () {
            $('.pageComparison__scrollRow').css({
                'left': $('.pageComparison__products').offset().left,
                'width': $('.pageComparison__products').width()
            });
        });

        $('.comparisonProperty__button').on('click', function () {
            $(this).parents('.comparisonProperty').find('.comparisonProperty__row').toggleClass('comparisonProperty__row_hidden');
        });

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > ($('.pageComparison__products').offset().top + 400)) {
                $('.pageComparison__scrollRow').css({
                    'display': 'flex'
                });
            } else {
                $('.pageComparison__scrollRow').css({
                    'display': 'none'
                });
            }

            if ($(this).scrollTop() > $('.footer').offset().top - 278) {
                $('.pageComparison__scrollRow').addClass('pageComparison__scrollRow_absolute')
            } else {
                $('.pageComparison__scrollRow').removeClass('pageComparison__scrollRow_absolute')
            }
        });

        // products
        // $('.pageComparison__productButtonRemove').on('click', function() {
        //     $(this).parents('.pageComparison__product').remove();
        // });

    }
});