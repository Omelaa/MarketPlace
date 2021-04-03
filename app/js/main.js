$(function(){


    $('.blog__items').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      arrows: false,
    });

    $('.partners__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    focusOnSelect: true,
    });

     var mixer = mixitup('.product-card__inner');
     var mixer = mixitup('.design__inner');

})