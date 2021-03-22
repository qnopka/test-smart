var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});


$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

