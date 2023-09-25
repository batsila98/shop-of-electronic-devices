$(function () {

    $('.pageContact .feedback__button').on('click', function (event) {
        event.preventDefault();
        $('.popupContact').css("display", "flex").hide().fadeIn().find('.popupContent').css("display", "flex").hide().fadeIn();
    });

    $('.popupContact__button').on('click', function (event) {
        event.preventDefault();
        $('.popupContact').fadeOut().find('.popupContent').fadeOut();
    });

    // input
    $('.feedback__label').on('click focus', function () {
        $(this).addClass('feedback__label_active');
        $(this).find('.feedback__labelText').addClass('feedback__labelText_blue feedback__labelText_transformed');
    });

    $('.feedback__input').on('focus', function () {
        $(this).parent('.feedback__label').addClass('feedback__label_active');
        $(this).siblings('.feedback__labelText').addClass('feedback__labelText_blue feedback__labelText_transformed');
    });

    $('.feedback__input').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.feedback__labelText').removeClass('feedback__labelText_transformed');
        }

        $(this).parent('.feedback__label').removeClass('feedback__label_active');
        $(this).siblings('.feedback__labelText').removeClass('feedback__labelText_blue');
    });

    // textarea
    $('.feedback__textareaLabel').on('click', function () {
        $(this).addClass('feedback__textareaLabel_active');
        $(this).find('.feedback__textareaText').addClass('feedback__textareaText_blue feedback__textareaText_transformed');
    });

    $('.feedback__textarea').on('focus', function () {
        $(this).parent('.feedback__textareaLabel').addClass('feedback__textareaLabel_active');
        $(this).siblings('.feedback__textareaText').addClass('feedback__textareaText_blue feedback__textareaText_transformed');
    });

    $('.feedback__textarea').on('blur', function (event) {
        if ($(this).val() === '') {
            $(this).val('');
            $(this).siblings('.feedback__textareaText').removeClass('feedback__textareaText_transformed');
        }

        $(this).parent('.feedback__textareaLabel').removeClass('feedback__textareaLabel_active');
        $(this).siblings('.feedback__textareaText').removeClass('feedback__textareaText_blue');
    });



    // phone mask
    let inputTypeTel = $('input[type=tel]');
    setPhoneMask(inputTypeTel);

    inputTypeTel.on('focus', function () {
        if ($(this).val() == '') {
            $(this).val('+38 (0');
        }
    });

    function setPhoneMask(element) {
        element.keydown(function (e) {
            var key = e.which || e.charCode || e.keyCode || 0;
            $phone = $(this);

            // Don't let them remove the starting '('
            if ($phone.val().length < 7 && (key === 8 || key === 46)) {
                $phone.val('+38 (0');
                return false;
            }
            // Reset if they highlight and type over first char.
            else if ($phone.val().charAt(4) !== '(') {
                $phone.val('(' + String.fromCharCode(e.keyCode) + '');
            }

            // Auto-format- do not expose the mask as the user begins to type
            if (key !== 8 && key !== 9) {
                if ($phone.val().length === 8) {
                    $phone.val($phone.val() + ')');
                }
                if ($phone.val().length === 9) {
                    $phone.val($phone.val() + ' ');
                }
                if ($phone.val().length === 12 || $phone.val().length === 15) {
                    $phone.val($phone.val() + '-');
                }
            }

            // Allow numeric (and tab, backspace, delete) keys only
            return (key == 8 ||
                key == 9 ||
                key == 46 ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        })

            .bind('focus click', function () {
                $phone = $(this);

                if ($phone.val().length === 3) {
                    $phone.val('(');
                }
                else {
                    var val = $phone.val();
                    $phone.val('').val(val); // Ensure cursor remains at the end
                }
            })

            .blur(function () {
                $phone = $(this);

                if ($phone.val() === '(') {
                    $phone.val('');
                }
            });
    }
});