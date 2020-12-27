 

(function($){
  "use strict";

  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Back to top button
 
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0}, 'easeInOutExpo');
  return false;
});
//   counterUp
$({counter: 0}).animate({counter: 232}, {
  duration: 3000,
  step: function() {    
    $('.total').text(Math.ceil(this.counter))
  },
  complete: function() {
  }
});

$({counter: 0}).animate({counter: 521}, {
  duration: 3000,
  step: function() {    
    $('.total-1').text(Math.ceil(this.counter))
  },
  complete: function() {
  }
});

$({counter: 0}).animate({counter: 1463}, {
  duration: 3000,
  step: function() {    
    $('.total-2').text(Math.ceil(this.counter))
  },
  complete: function() {
  }
});

$({counter: 0}).animate({counter: 15}, {
  duration: 3000,
  step: function() {    
    $('.total-3').text(Math.ceil(this.counter))
  },
  complete: function() {
  }
});

// Testimonials carousel
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    900: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
});
// fancybox active
$(".fancybox").fancybox();

  // mixItUp active
$(function(){
	$('#portfolio-wrap').mixItUp();
});

// WoW active
new WOW().init();


})(jQuery);

















