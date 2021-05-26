

$(function(){


  $('.price-line__input').ionRangeSlider({
     type: "double",
     prefix: "$",
     hide_min_max:	true,
     hide_from_to: true,
      onStart: function (data) {
       $('.price-line__from').text(data.from); 
       $('.price-line__to').text(data.to); 
       
      },
      onChange: function (data) {
       $('.price-line__from').text(data.from); 
       $('.price-line__to').text(data.to); 
       
    },
    });

  $('.header__burger, .menu__list').click(function () {
     $('.header__burger, .menu__list').toggleClass('active');
     $('body').toggleClass('lock');
  });

  $('.header-actions').show('click');
   $('.header__slider').click(function() {
    $('.header-actions').fadeToggle('false');
    $('.header__slider').toggleClass('button-active');
  });

    $('.trendy__items').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $('.partners__items').slick({
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
        slidesToShow: 5,
      }
    },
    {
     breakpoint: 990,
      settings: {
        slidesToShow: 4,
      }
    },
    {
     breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
     breakpoint: 414,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });

  //    $(".menu__list a, .logo, .footer__link a").on("click", function (event) {
	// 	event.preventDefault();
	// 	var id  = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 1000);
	// });

  //    if ($(window).scrollTop() > 1){
  //   $('.header ').addClass("sticky");
  //   }

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 1){
  //   $('.header ').addClass("sticky");
  //   }
  //   else{
  //   $('.header').removeClass("sticky");
  //   }
  // });

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