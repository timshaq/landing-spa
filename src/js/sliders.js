export default function() {

	var prodsliders = $('.prodslider').find('.prodslider__slider');

	for (var i = 0; i <= prodsliders.length; i++) {
	    $(prodsliders[i]).slick({
	      infinite: false,
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      swipeToSlide: true,
	      responsive: [{
	        breakpoint: 1025,
	        settings: {
	          slidesToShow: 2,
	          arrows: false,
	          dots: true
	        }
	      }, {
	        breakpoint: 993,
	        settings: {
	          slidesToShow: 1,
	          arrows: false,
	          dots: true
	        }
	      }]
	    }).on('setPosition', function (event, slick) {
	      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	    });
	  }

	  $('.brands__slider').slick({
	    infinite: false,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    swipeToSlide: true,
	    responsive: [{
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 2,
	        arrows: false,
	        dots: true
	      }
	    }, {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        dots: true
	      }
	    }]
	  });
	  $('.reviews__slider').slick({
	    infinite: false,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: false,
	    swipeToSlide: true,
	    responsive: [{
	      breakpoint: 1441,
	      settings: {
	        slidesToShow: 3
	      }
	    }, {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 2
	      }
	    }, {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 1
	      }
	    }]
	  });
}