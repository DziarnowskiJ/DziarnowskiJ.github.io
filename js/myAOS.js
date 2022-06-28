$('.aos-left').each(function () {
    $(this).attr('data-aos', 'fade-left');
    $(this).attr('data-aos-duration', 1000);
});

$('.aos-right').each(function () {
    $(this).attr('data-aos', 'fade-right');
    $(this).attr('data-aos-duration', 1000);
});

AOS.init();
