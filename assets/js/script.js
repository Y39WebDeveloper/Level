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

    function videoToggle(){
        video = $('.level-video').get(0);
        if(video.paused){
            video.play();
            $('.video-control-play').hide();
            $('.video-control-pause').show();
        }else{
            video.pause();
            $('.video-control-pause').hide();
            $('.video-control-play').show();
        }
    }

    $('.video-control-play, .video-control-pause').click(function(){
        videoToggle();
    });
});