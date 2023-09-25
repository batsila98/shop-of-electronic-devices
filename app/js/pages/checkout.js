$(function () {

    // contacts
    $('.checkoutContacts__label').on('click focus', function () {
        $(this).addClass('checkoutContacts__label_active');
        $(this).find('.checkoutContacts__labelText').addClass('checkoutContacts__labelText_blue checkoutContacts__labelText_transformed');
    });

    $('.checkoutContacts__input').on('focus', function () {
        $(this).parent('.checkoutContacts__label').addClass('checkoutContacts__label_active');
        $(this).siblings('.checkoutContacts__labelText').addClass('checkoutContacts__labelText_blue checkoutContacts__labelText_transformed');
    });

    $('.checkoutContacts__input').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.checkoutContacts__labelText').removeClass('checkoutContacts__labelText_transformed');
        }

        $(this).parent('.checkoutContacts__label').removeClass('checkoutContacts__label_active');
        $(this).siblings('.checkoutContacts__labelText').removeClass('checkoutContacts__labelText_blue');
    });

    // shipping
    $('.checkoutShipping__inputLabel').on('click focus', function () {
        $(this).addClass('checkoutShipping__inputLabel_active');
        $(this).find('.checkoutShipping__labelText').addClass('checkoutShipping__labelText_blue checkoutShipping__labelText_transformed');
    });

    $('.checkoutShipping__input').on('focus', function () {
        $(this).parent('.checkoutShipping__inputLabel').addClass('checkoutShipping__inputLabel_active');
        $(this).siblings('.checkoutShipping__labelText').addClass('checkoutShipping__labelText_blue checkoutShipping__labelText_transformed');
    });

    $('.checkoutShipping__input').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.checkoutShipping__labelText').removeClass('checkoutShipping__labelText_transformed');
        }

        $(this).parent('.checkoutShipping__inputLabel').removeClass('checkoutShipping__inputLabel_active');
        $(this).siblings('.checkoutShipping__labelText').removeClass('checkoutShipping__labelText_blue');
    });

    // payment
    $('.formInstallment__label').on('click focus', function () {
        $(this).addClass('formInstallment__label_active');
        $(this).find('.formInstallment__labelText').addClass('formInstallment__labelText_blue formInstallment__labelText_transformed');
    });

    $('.formInstallment__input').on('focus', function () {
        $(this).parent('.formInstallment__label').addClass('formInstallment__label_active');
        $(this).siblings('.formInstallment__labelText').addClass('formInstallment__labelText_blue formInstallment__labelText_transformed');
    });

    $('.formInstallment__input').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.formInstallment__labelText').removeClass('formInstallment__labelText_transformed');
        }

        $(this).parent('.formInstallment__label').removeClass('formInstallment__label_active');
        $(this).siblings('.formInstallment__labelText').removeClass('formInstallment__labelText_blue');
    });

    // additional info
    $('.checkoutAdditionalInfo__inputLabel').on('click focus', function () {
        $(this).addClass('checkoutAdditionalInfo__inputLabel_active');
        $(this).find('.checkoutAdditionalInfo__labelText').addClass('checkoutAdditionalInfo__labelText_blue checkoutAdditionalInfo__labelText_transformed');
    });

    $('.checkoutAdditionalInfo__input').on('focus', function () {
        $(this).parent('.checkoutAdditionalInfo__inputLabel').addClass('checkoutAdditionalInfo__inputLabel_active');
        $(this).siblings('.checkoutAdditionalInfo__labelText').addClass('checkoutAdditionalInfo__labelText_blue checkoutAdditionalInfo__labelText_transformed');
    });

    $('.checkoutAdditionalInfo__input').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.checkoutAdditionalInfo__labelText').removeClass('checkoutAdditionalInfo__labelText_transformed');
        }

        $(this).parent('.checkoutAdditionalInfo__inputLabel').removeClass('checkoutAdditionalInfo__inputLabel_active');
        $(this).siblings('.checkoutAdditionalInfo__labelText').removeClass('checkoutAdditionalInfo__labelText_blue');
    });

    // additional info comment
    $('.checkoutAdditionalInfo__textarealabel').on('click focus', function () {
        $(this).addClass('checkoutAdditionalInfo__textarealabel_active');
        $(this).find('.checkoutAdditionalInfo__textareaText').addClass('checkoutAdditionalInfo__textareaText_blue checkoutAdditionalInfo__textareaText_transformed');
    });

    $('.checkoutAdditionalInfo__textarea').on('focus', function () {
        $(this).parent('.checkoutAdditionalInfo__textarealabel').addClass('checkoutAdditionalInfo__textarealabel_active');
        $(this).siblings('.checkoutAdditionalInfo__textareaText').addClass('checkoutAdditionalInfo__textareaText_blue checkoutAdditionalInfo__textareaText_transformed');
    });

    $('.checkoutAdditionalInfo__textarea').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.checkoutAdditionalInfo__textareaText').removeClass('checkoutAdditionalInfo__textareaText_transformed');
        }

        $(this).parent('.checkoutAdditionalInfo__textarealabel').removeClass('checkoutAdditionalInfo__textarealabel_active');
        $(this).siblings('.checkoutAdditionalInfo__textareaText').removeClass('checkoutAdditionalInfo__textareaText_blue');
    });



    $('.headerCheckout__scheduleButton').on('click', function () {
        $(this).toggleClass('active');
        $('.headerCheckout__scheduleDropdown').fadeToggle();
    });

    $('.headerCheckout__scheduleButton').on('blur', function () {
        $(this).removeClass('active');
        $('.headerCheckout__scheduleDropdown').fadeOut();
    });

    $('.pageCheckout__form input[type=radio]').on('change', function () {
        let radioName = $(this).attr('name');
        $(`.pageCheckout__form input[name=${radioName}]`).siblings('.checkoutSubForm').slideUp();
        $(this).siblings('.checkoutSubForm').css('display', 'flex').hide().slideDown();
    });

    $('.formInstallment__type').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('formInstallment__type_active');
        $(this).find('.formInstallment__dropdown').slideToggle();
        $(this).find('.formInstallment__typeTitle').toggleClass('formInstallment__typeTitle_blue');
        $(this).find('.formInstallment__typeArrow').toggleClass('formInstallment__typeArrow_transformed');
    });

    $('.formInstallment__type').on('blur', function () {
        $(this).find('.formInstallment__dropdown').slideUp();
        $(this).find('.formInstallment__typeTitle').removeClass('formInstallment__typeTitle_blue');
        $(this).find('.formInstallment__typeArrow').removeClass('formInstallment__typeArrow_transformed');
    });

    $('.formInstallment__dropdownItem').on('click', function () {
        $('.formInstallment__typeValue').html($(this).html());
    });


    $('.checkoutProduct__remove').on('click', function (event) {
        event.preventDefault();
        $(this).parents('.checkoutOrder__product').slideUp(function () {
            $(this).remove();
        });
    });

    $('.checkoutProduct__quantitySubtract').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('checkoutProduct__quantityButton_enabled')) {
            let itemPrice = $(this).parents('.checkoutProduct__quantity').siblings('.checkoutProduct__price').find('.checkoutProduct__priceValue').text().replace(/[^0-9]/gi, '');
            let quantity = $(this).siblings('.checkoutProduct__quantityForm').find('input[type=number]').val();
            if (quantity > 1) {
                $(this).siblings('.checkoutProduct__quantityForm').find('input[type=number]').val(--quantity);
            }
            if (quantity < 2) {
                $(this).removeClass('checkoutProduct__quantityButton_enabled');
            }
            $(this).parents('.checkoutProduct__quantity').siblings('.checkoutProduct__sum').find('.checkoutProduct__sumPrice').html(itemPrice * quantity + '&nbsp;<span class="checkoutProduct__sumCurrency">₴</span>');
        }
    });

    $('.checkoutProduct__quantityAdd').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('checkoutProduct__quantityButton_enabled')) {
            let itemPrice = $(this).parents('.checkoutProduct__quantity').siblings('.checkoutProduct__price').find('.checkoutProduct__priceValue').text().replace(/[^0-9]/gi, '');
            let quantity = $(this).siblings('.checkoutProduct__quantityForm').find('input[type=number]').val();

            $(this).siblings('.checkoutProduct__quantityForm').find('input[type=number]').val(++quantity);
            $(this).parents('.checkoutProduct__quantity').siblings('.checkoutProduct__sum').find('.checkoutProduct__sumPrice').html(itemPrice * quantity + '&nbsp;<span class="checkoutProduct__sumCurrency">₴</span>');
            $(this).siblings('.checkoutProduct__quantitySubtract').addClass('checkoutProduct__quantityButton_enabled');
        }
    });

});