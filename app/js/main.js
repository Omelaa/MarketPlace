

$(function(){

    $('.trendy__items').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.partners__inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      focusOnSelect: true,
    });

      var containerEl1 = document.querySelector('[data-ref="container-1"]');
      var containerEl2 = document.querySelector('[data-ref="container-2"]');

      var config = {
           controls: {
              scope: 'local'
                }
            };

      var mixer1 = mixitup(containerEl1, config);
      var mixer1 = mixitup(containerEl2, config);
        
});