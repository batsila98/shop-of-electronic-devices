$(function () {

    $('.reviewCard__mediaItem, .reviewReplies__mediaItem').on('click', function(event) {
        event.preventDefault();

        let videoUrl = $(this).data('video');
        if(videoUrl) {
            showVideoInPopup(videoUrl);
            return;
        }

        let photoSrc = $(this).data('photo');
        if(photoSrc) {
            showPhotoInPopup(photoSrc);
            return;
        }
    });

    function showVideoInPopup(videoUrl) {
        $('.popupVideo__iframe').attr('src', videoUrl);
        $('.popupVideo').css('display', 'flex').hide().fadeIn();
    }

    function showPhotoInPopup(photoSrc) {
        $('.popupPhoto__image').attr('src', photoSrc);
        $('.popupPhoto').css('display', 'flex').hide().fadeIn();
    }

});