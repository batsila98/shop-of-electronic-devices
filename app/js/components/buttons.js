// start copy buttons
$('.buttonCopy').on('click', function () {
    let $temp = $('<input>');

    $("body").append($temp);
    $temp.val($(this).siblings('.copyValue').text().replace(/ +(?= )/g, '')).select();
    document.execCommand("copy");
    $temp.remove();

    let $message = $(this).find('.buttonCopy__message');
    $message.fadeIn();
    setTimeout(function () {
        $message.fadeOut();
    }, 1000);
});
// end copy buttons