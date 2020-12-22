/*** bootstrap carousel */
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {interval: 2000, slide: true, pause: false});


/*** marquee */
jQuery(document).ready(function($) {
    $('.slick.marquee').slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: true
    });
  });