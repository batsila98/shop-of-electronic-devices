$(function () {

    let currentYear = new Date().getFullYear();

    if ($('#settingsSection__inputBirthday').length) {
        $('#settingsSection__inputBirthday').datepicker({
            minDate: new Date((currentYear - 60).toString()),
            maxDate: new Date((currentYear - 18).toString())
        });

        $('#settingsSection__inputBirthday').mask('99.99.9999');
    }

    $('.settingsSection__buttonEdit').on('click', function (event) {
        event.preventDefault();
        $(this).hide().siblings().show();
        $(this).parent('.settingsSection__buttons').addClass('settingsSection__buttons_active');
        $(this).parents('.settingsSection__item').addClass('settingsSection__item_editing');
        $(this).parents('.settingsSection__item').find('.settingsSection__name').addClass('settingsSection__name_active');
        $(this).parents('.settingsSection__item').find('.settingsSection__value').hide();
        $(this).parents('.settingsSection__item').find('.settingsSection__editForm').css('display', 'flex').show();
    });

    $('.settingsSection__buttonCancel').on('click', function (event) {
        event.preventDefault();
        $(this).parent('.settingsSection__buttons').removeClass('settingsSection__buttons_active');
        $(this).hide().siblings('.settingsSection__buttonSave').hide().siblings('.settingsSection__buttonEdit').show();
        $(this).parents('.settingsSection__item').removeClass('settingsSection__item_editing');
        $(this).parents('.settingsSection__item').find('.settingsSection__name').removeClass('settingsSection__name_active');
        $(this).parents('.settingsSection__item').find('.settingsSection__value').show();
        $(this).parents('.settingsSection__item').find('.settingsSection__editForm').hide();
    });

    $('.settingsSection__buttonSave').on('click', function (event) {
        event.preventDefault();
        let newValue, strUserBirthYear, userAge;

        newValue = $(this).parents('.settingsSection__item').find('.settingsSection__inputValue').val();

        $(this).parent('.settingsSection__buttons').removeClass('settingsSection__buttons_active');
        $(this).parents('.settingsSection__item').removeClass('settingsSection__item_editing');
        $(this).parents('.settingsSection__item').find('.settingsSection__name').removeClass('settingsSection__name_active');
        $(this).hide().siblings('.settingsSection__buttonCancel').hide().siblings('.settingsSection__buttonEdit').show();

        if ($(this).hasClass('settingsSection__buttonSaveDate')) {
            strUserBirthYear = parseInt(newValue.split('.')[2]);
            userAge = new Date().getFullYear() - strUserBirthYear;

            $(this).parents('.settingsSection__item').find('.settingsSection__value').show().find('.settingsSection__userBirthday').html(newValue);
            $(this).parents('.settingsSection__item').find('.settingsSection__userAge').html(userAge);
        } else {
            $(this).parents('.settingsSection__item').find('.settingsSection__value').html(newValue).show();
        }

        $(this).parents('.settingsSection__item').find('.settingsSection__editForm').hide();
    });
});