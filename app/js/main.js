

$(function(){


  $('.header__burger').click(function () {
     $('.header__burger, .menu__list').toggleClass('active');
     $('body').toggleClass('lock');
    
  });

    $('.trendy__items').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });

    $('.partners__inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      focusOnSelect: true,
      responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
     breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
     breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
    });

      $('[fill^="#"]').removeAttr('fill');

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