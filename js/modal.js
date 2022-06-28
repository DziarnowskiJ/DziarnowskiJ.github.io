// stop video when modal is closed
$('.stopVideo').click(function (e) {
    $("iframe").each(function () {
        var src = $(this).attr('src');
        $(this).attr('src', src);
    });
});
