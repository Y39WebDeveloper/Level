$(function () {
    $("#inputCheckIn").datepicker();
    $("#inputCheckOut").datepicker();

    $(document).ready(function(){
        $('.level-slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    });
});