

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

    
    $('#container-1').mixItUp({
      selectors: {
        filter: '.filter'
      }
    });
    
    
    $('#сontainer-2').mixItUp({
      selectors: {
        filter: '.filter2'
      }
    });
    
    var mixer = mixitup('#container-1');
    var mixer = mixitup('#сontainer-2');
});