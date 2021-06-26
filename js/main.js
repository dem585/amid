$(function () {

	$('.slider').slick({
		 slidesToShow: 2,
  		 slidesToScroll: 1,
  		 prevArrow:'<button type="button" class="article-slider__arrow article-slider__arrowleft"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="1"><path d="M15 8H1" stroke="#124F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 1L1 8L8 15" stroke="#124F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg></button>',
		 nextArrow:'<button type="button" class="article-slider__arrow article-slider__arrowright"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15" stroke="#124F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 1L15 8L8 15" stroke="#124F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		  responsive: [{


		  	breakpoint: 700,
      			settings: {
        			slidesToShow: 1,
      			}
      		}
		  ]

	});
	$('.menu__btn').on('click', function(){
		$('.header__top-inner').toggleClass('activ--menu');
		$('.menu__btn').toggleClass('activ--btn');
		$('body').toggleClass('body--hid');
	});

})