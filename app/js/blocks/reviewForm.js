$(function () {

    // start star rating
    $('.reviewForm__ratingLabel').hover(function () {
        $(this).prevAll('.reviewForm__ratingLabel').toggleClass('reviewForm__ratingLabel_hovered');
        $(this).toggleClass('reviewForm__ratingLabel_hovered');
    }, function () {
        $(this).prevAll('.reviewForm__ratingLabel').toggleClass('reviewForm__ratingLabel_hovered');
        $(this).toggleClass('reviewForm__ratingLabel_hovered');
    });

    $('.reviewForm__ratingLabel').on('click', function () {
        $('.reviewForm__ratingLabel').removeClass('reviewForm__ratingLabel_hovered');
        $('.reviewForm__ratingLabel').removeClass('reviewForm__ratingLabel_active');
        $(this).prevAll('.reviewForm__ratingLabel').addClass('reviewForm__ratingLabel_active');
        $(this).addClass('reviewForm__ratingLabel_active');
    });

    // review form input effect
    $('.reviewForm__textareaLabel').on('click focus', function () {
        $(this).addClass('reviewForm__textareaLabel_active');
        $(this).find('.reviewForm__textareaText').addClass('reviewForm__textareaText_blue reviewForm__textareaText_transformed');
    });

    $('.reviewForm__textarea').on('focus', function () {
        $(this).parent('.reviewForm__textareaLabel').addClass('reviewForm__textareaLabel_active');
        $(this).siblings('.reviewForm__textareaText').addClass('reviewForm__textareaText_blue reviewForm__textareaText_transformed');
    });

    $('.reviewForm__textarea').on('blur', function (event) {
        if ($(this).val() === '' || $(this).val() === '+38 (0') {
            $(this).val('');
            $(this).siblings('.reviewForm__textareaText').removeClass('reviewForm__textareaText_transformed');
        }

        $(this).parent('.reviewForm__textareaLabel').removeClass('reviewForm__textareaLabel_active');
        $(this).siblings('.reviewForm__textareaText').removeClass('reviewForm__textareaText_blue');
    });

    // review photos
    let arrUploadedPhotos = [];
    let domReviewForms = document.querySelectorAll('.reviewForm');
    if (domReviewForms) {
        domReviewForms.forEach(function (reviewForm) {
            let domDropboxPhotos = reviewForm.querySelector('.reviewForm__photos');
            initDropZone(domDropboxPhotos);
        });
    }

    // review photos
    function initDropZone(domDropboxPhotos) {
        // if not drag and drop is not used but standart click flow is
        let photosInput = domDropboxPhotos.querySelector('.reviewForm__photosInput');
        photosInput.onchange = function () {
            const files = photosInput.files;
            if (files) {
                let arrPreviewItems = handleFiles(files);
                showPhotosPreview(arrPreviewItems, domDropboxPhotos);
            }
        };

        // if drag and drop flow is used
        domDropboxPhotos.addEventListener("dragenter", dragenter, false);
        domDropboxPhotos.addEventListener("dragover", dragover, false);
        domDropboxPhotos.addEventListener("drop", drop, false);

        function dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        function dragover(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        function drop(e) {
            e.stopPropagation();
            e.preventDefault();

            const files = e.dataTransfer.files;
            if (files) {
                let arrPreviewItems = handleFiles(files);
                showPhotosPreview(arrPreviewItems, domDropboxPhotos);
            }
        }
    }

    // handle files
    function handleFiles(files) {
        let arrPreviewItems = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            console.log(1);

            if (!file.type.startsWith('image/') || (file.size / 1024 / 1024).toFixed(2) > 5) {
                issueFileSize(file);
                continue;
            }

            let checkFileExistence = arrUploadedPhotos.find(function (existingFile) {
                if (existingFile && file.name == existingFile.name && file.size == existingFile.size && file.lastModified == existingFile.lastModified) {
                    return true;
                }
            });

            if (checkFileExistence !== undefined) {
                issueFileIsExsists(file.name);
                continue;
            }

            if (arrUploadedPhotos.length < 10) {
                arrUploadedPhotos.push(file);
            } else {
                issueFilesAmount(arrUploadedPhotos.length);
                return arrPreviewItems;
            }

            const item = document.createElement("div");
            item.id = 'attachment' + new Date().valueOf();
            item.setAttribute('data-name', file.name);
            item.setAttribute('data-size', file.size);
            item.setAttribute('data-lastmodified', file.lastModified);

            if ($('.pageProduct__leaveReview').length) {
                item.classList.add("reviewForm__photosItem", "reviewForm__photosItem_small");
            } else {
                item.classList.add("reviewForm__photosItem");
            }

            const remove = document.createElement("button");
            remove.classList.add("reviewForm__photosButton");
            remove.innerHTML = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5879 11.1973L20.8301 4.02539L22.3066 2.54883C22.5176 2.33789 22.5176 1.98633 22.3066 1.70508L20.7598 0.158203C20.4785 -0.0527344 20.127 -0.0527344 19.916 0.158203L11.2676 8.87695L2.54883 0.158203C2.33789 -0.0527344 1.98633 -0.0527344 1.70508 0.158203L0.158203 1.70508C-0.0527344 1.98633 -0.0527344 2.33789 0.158203 2.54883L8.87695 11.1973L0.158203 19.916C-0.0527344 20.127 -0.0527344 20.4785 0.158203 20.7598L1.70508 22.3066C1.98633 22.5176 2.33789 22.5176 2.54883 22.3066L11.2676 13.5879L18.4395 20.8301L19.916 22.3066C20.127 22.5176 20.4785 22.5176 20.7598 22.3066L22.3066 20.7598C22.5176 20.4785 22.5176 20.127 22.3066 19.916L13.5879 11.1973Z" fill="white"/>
                                  </svg>`;

            const image = document.createElement("img");
            image.classList.add("reviewForm__photosImage");
            image.file = file;

            item.appendChild(remove);
            item.appendChild(image);

            arrPreviewItems.push(item);

            const reader = new FileReader();
            reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(image);
            reader.readAsDataURL(file);
        }

        return arrPreviewItems;
    }

    // preview files
    function showPhotosPreview(arrPreviewItems, domDropboxPhotos) {
        let domPhotosPrewiewZone = domDropboxPhotos.querySelector('.reviewForm__photosPreview');
        domPhotosPrewiewZone.style.display = 'flex';
        arrPreviewItems.forEach(function (item, index) {
            domPhotosPrewiewZone.appendChild(item);
        });
    }

    // remove item from previews
    $(document).on('mouseenter', '.reviewForm__photosItem', function () {
        $(this).find('.reviewForm__photosButton').css('display', 'flex').hide().stop().fadeIn('fast');
    });

    $(document).on('mouseleave', '.reviewForm__photosItem', function () {
        $(this).find('.reviewForm__photosButton').stop().fadeOut('fast');
    });

    $(document).on('click', '.reviewForm__photosButton', function (event) {
        event.preventDefault();

        let domPhotosPreviewZone = $(this).parents('.reviewForm__photosPreview');

        const removedItem = {
            'name': $(this).parent().data('name'),
            'size': $(this).parent().data('size'),
            'lastmodified': $(this).parent().data('lastmodified')
        };

        for (key in arrUploadedPhotos) {
            let existingFile = arrUploadedPhotos[key];

            if (
                removedItem.name == existingFile.name &&
                removedItem.size == existingFile.size &&
                removedItem.lastmodified == existingFile.lastModified
            ) {
                arrUploadedPhotos.splice(key, 1);
                $(this).parent().remove();
            }
        }

        if (arrUploadedPhotos.length < 1) {
            $(domPhotosPreviewZone).slideUp('fast');
        }
    });

    // photos uploading issues functions
    function issueFileSize(file) {
        alert('One of files is larger than allowed!');
    }

    function issueFilesAmount(currentAmount) {
        alert('The number of files is exceeded! Current amount is - ' + currentAmount);
    }

    function issueFileIsExsists(fileName) {
        alert('File - ' + fileName + ' is alreasy exists!');
    }



    // review videos
    if (domReviewForms) {
        initVideosUploading();
    }

    function initVideosUploading() {
        let arrUploadedVideos = [];
        let domVideosInput;
        let domVideosPreview;

        $('.reviewForm__videosButton').on('click', function (event) {
            event.preventDefault();

            domVideosInput = $(this).siblings('.reviewForm__videosInput');
            domVideosPreview = $(this).parents('.reviewForm__videos').find('.reviewForm__videosPreview');

            let videoLink = $(domVideosInput).val();
            let uniqueID = 'video' + new Date().valueOf();

            if (validatorURL(videoLink) == false) {
                alert('Url is not from YouTube!');
                return;
            }

            if (arrUploadedVideos.length >= 8) {
                alert('Maximum videos is 8!');
                return;
            }

            let videoPreviewData = handleVideos(videoLink, uniqueID);

            if (videoPreviewData) {
                $(domVideosInput).val('');
                $(domVideosPreview).css('display', 'flex');
                $(domVideosPreview).append(videoPreviewData);
            }
        });

        function handleVideos(videoLink, uniqueID) {
            let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            let match = videoLink.match(regExp);
            let videoID;

            if (match && match[7].length == 11) {
                videoID = match[7];
            }

            let videoThumbnailUrl = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

            // check if video url alreaady exists
            let existanceChecker = false;
            arrUploadedVideos.forEach(function (item) {
                if (item['videoLink'] == videoLink) {
                    existanceChecker = true;
                }
            });

            if (existanceChecker) {
                alert('Video is already exists');
                return;
            }

            // add video to the array
            arrUploadedVideos.push({
                'id': uniqueID,
                'videoLink': videoLink,
                'thumbnail': videoThumbnailUrl
            });

            const item = document.createElement("div");
            item.id = uniqueID;
            if ($('.pageProduct__leaveReview').length) {
                item.classList.add("reviewForm__videosPreviewItem", "reviewForm__videosPreviewItem_small");
            } else {
                item.classList.add("reviewForm__videosPreviewItem");
            }

            const remove = document.createElement("button");
            remove.classList.add("reviewForm__videosPreviewButton");
            remove.innerHTML = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5879 11.1973L20.8301 4.02539L22.3066 2.54883C22.5176 2.33789 22.5176 1.98633 22.3066 1.70508L20.7598 0.158203C20.4785 -0.0527344 20.127 -0.0527344 19.916 0.158203L11.2676 8.87695L2.54883 0.158203C2.33789 -0.0527344 1.98633 -0.0527344 1.70508 0.158203L0.158203 1.70508C-0.0527344 1.98633 -0.0527344 2.33789 0.158203 2.54883L8.87695 11.1973L0.158203 19.916C-0.0527344 20.127 -0.0527344 20.4785 0.158203 20.7598L1.70508 22.3066C1.98633 22.5176 2.33789 22.5176 2.54883 22.3066L11.2676 13.5879L18.4395 20.8301L19.916 22.3066C20.127 22.5176 20.4785 22.5176 20.7598 22.3066L22.3066 20.7598C22.5176 20.4785 22.5176 20.127 22.3066 19.916L13.5879 11.1973Z" fill="white"/>
                                </svg>`;

            const image = document.createElement("img");
            image.classList.add("reviewForm__videosPreviewImage");
            image.src = videoThumbnailUrl;

            item.appendChild(remove);
            item.appendChild(image);

            return item;
        }

        // remove item from previews
        $(document).on('mouseenter', '.reviewForm__videosPreviewItem', function () {
            $(this).find('.reviewForm__videosPreviewButton').css('display', 'flex').hide().stop().fadeIn('fast');
        });

        $(document).on('mouseleave', '.reviewForm__videosPreviewItem', function () {
            $(this).find('.reviewForm__videosPreviewButton').stop().fadeOut('fast');
        });

        $(document).on('click', '.reviewForm__videosPreviewButton', function (event) {
            event.preventDefault();

            const removedItemID = $(this).parent().attr('id');
            const domVideosPreviewItem = $(this).parents('.reviewForm__videosPreviewItem');

            arrUploadedVideos.forEach(function (item, index) {
                if (item['id'] == removedItemID) {
                    arrUploadedVideos.splice(index, 1);
                    $(domVideosPreviewItem).remove();
                }
            });

            if (arrUploadedVideos.length < 1) {
                $(domVideosPreview).slideUp('fast');
            }
        });
    }

    function validatorURL(url) {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);

        if (match) {
            return true;
        }

        return false;
    }
});