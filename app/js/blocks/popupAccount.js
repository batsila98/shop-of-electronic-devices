$(function () {

    // input effects
    $('.popupAccount__inputLabel').on('click focus', function () {
        $(this).addClass('popupAccount__inputLabel_active');
        $(this).find('.popupAccount__inputText').addClass('popupAccount__inputText_blue popupAccount__inputText_transformed');
    });

    $('.popupAccount__input').on('focus', function () {
        $(this).parent('.popupAccount__inputLabel').addClass('popupAccount__inputLabel_active');
        $(this).siblings('.popupAccount__inputText').addClass('popupAccount__inputText_blue popupAccount__inputText_transformed');
    });

    $('.popupAccount__input').on('blur', function (event) {
        if (($(this).val() === '' || $(this).val() === '+38 (0') && !$('.datepicker').hasClass('active')) {
            $(this).val('');
            $(this).siblings('.popupAccount__inputText').removeClass('popupAccount__inputText_transformed');
        }

        $(this).parent('.popupAccount__inputLabel').removeClass('popupAccount__inputLabel_active');
        $(this).siblings('.popupAccount__inputText').removeClass('popupAccount__inputText_blue');
    });


    $('.menuUser .registration').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount, .popupAccount__registration').css("display", "flex").hide().fadeIn();
    });

    $('.menuUser .login').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount, .popupAccount__login').css("display", "flex").hide().fadeIn();
    });

    // go to password reseting
    $('.popupAccount__login .popupAccount__form .popupAccount__link').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount__login').hide();
        $('.popupAccount').addClass('popupAccount_desktopView');
        $('.popupAccount__password').css("display", "flex");
    });

    // go back from password reseting to login
    $('.popupAccount__password .buttonSecondary').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount__password').hide();
        $('.popupAccount__login').css("display", "flex");
        $('.popupAccount').removeClass('popupAccount_desktopView');
    });

    // start popup message
    $('.popupAccount__message').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount__message').hide();
        $('.popupAccount').fadeOut().removeClass('popupAccount_desktopView');
    });

    // go to registration 
    $('.popupAccount__login .popupAccount__text .popupAccount__link').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount__login').hide();
        $('.popupAccount__registration').css("display", "flex");
    });

    // go back from registration to login
    $('.popupAccount__registration .buttonSecondary').on('click', function (event) {
        event.preventDefault();
        $('.popupAccount__registration').hide();
        $('.popupAccount__login').css("display", "flex");
    });

    // user birthday datepicker
    let currentYear = new Date().getFullYear();

    if ($('#popupAccount__userBirthday').length) {
        $('#popupAccount__userBirthday').datepicker({
            minDate: new Date((currentYear - 60).toString()),
            maxDate: new Date((currentYear - 18).toString())
        });

        $('#popupAccount__userBirthday').mask('99.99.9999');
    }

    // login form handler
    $('.popupAccount__formLogin').on('submit', function (event) {
        event.preventDefault();

        const domFormLogin = $(this);

        // check for emptiness
        const domLoginInputs = $(domFormLogin).find('.popupAccount__input');
        $(domLoginInputs).each(function (index, item) {
            if ($(item).val() == '') {
                $(item).parent('.popupAccount__inputLabel').addClass('popupAccount__inputLabel_red');
            } else {
                $(item).parent('.popupAccount__inputLabel').removeClass('popupAccount__inputLabel_red');
            }
        });

        // email or phone
        const domFormInputEmail = $(domFormLogin).find('.popupAccount__inputEmail');
        const domFormLabelEmail = $(domFormInputEmail).parent('.popupAccount__inputLabel');
        if (isEmail($(domFormInputEmail).val()) == false && isPhone($(domFormInputEmail).val()) == false) {
            $(domFormLabelEmail).addClass('popupAccount__inputLabel_red');
            return;
        }

        // password
        // const domFormInputPassword = $(domFormLogin).find('.popupAccount__inputPassword');
        // const domFormLabelPassword = $(domFormInputPassword).parent('.popupAccount__inputLabel');

    });

    // registration form handler
    $('.popupAccount__formRegistration').on('submit', function (event) {
        event.preventDefault();

        const domFormRegistration = $(this);

        // check for emptiness
        const domRegistrationInputs = $(domFormRegistration).find('.popupAccount__input');
        $(domRegistrationInputs).each(function (index, item) {
            if ($(item).val() == '') {
                $(item).parent('.popupAccount__inputLabel').addClass('popupAccount__inputLabel_red');
            } else {
                $(item).parent('.popupAccount__inputLabel').removeClass('popupAccount__inputLabel_red');
            }
        });

        // email
        const domFormInputEmail = $(domFormRegistration).find('.popupAccount__inputEmail');
        const domFormLabelEmail = $(domFormInputEmail).parent('.popupAccount__inputLabel');
        if (isEmail($(domFormInputEmail).val()) == false) {
            $(domFormLabelEmail).addClass('popupAccount__inputLabel_red');
            return;
        }

        // phone
        const domFormInputPhone = $(domFormRegistration).find('.popupAccount__inputPhone');
        const domFormLabelPhone = $(domFormInputPhone).parent('.popupAccount__inputLabel');
        if (isPhone($(domFormInputPhone).val()) == false) {
            $(domFormLabelPhone).addClass('popupAccount__inputLabel_red');
            return;
        }
    });

    // password form handler
    $('.popupAccount__formPassword').on('submit', function (event) {
        event.preventDefault();

        let boolIsValid = true;
        const domFormPassword = $(this);

        // check for emptiness
        const domPasswordInputs = $(domFormPassword).find('.popupAccount__input');
        $(domPasswordInputs).each(function (index, item) {
            if ($(item).val() == '') {
                boolIsValid = false;
                $(item).parent('.popupAccount__inputLabel').addClass('popupAccount__inputLabel_red');
            } else {
                $(item).parent('.popupAccount__inputLabel').removeClass('popupAccount__inputLabel_red');
            }
        });

        // email or phone
        const domFormInputEmail = $(domFormPassword).find('.popupAccount__inputEmail');
        const domFormLabelEmail = $(domFormInputEmail).parent('.popupAccount__inputLabel');
        if (isEmail($(domFormInputEmail).val()) == false && isPhone($(domFormInputEmail).val()) == false) {
            $(domFormLabelEmail).addClass('popupAccount__inputLabel_red');
            return;
        }

        if (boolIsValid == true) {
            $('.popupAccount__password').hide();
            $('.popupAccount__message').css("display", "flex");
        }
    });

    function isEmail(email) {
        let regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regexEmail.test(email);
    }

    function isPhone(phone) {
        let phoneVal = phone.replace(/\s+/g, '');
        let regexPhone = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
        return regexPhone.test(phoneVal);
    }
});