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

// код загрузки 

   window.onload = function () {
    document.body.classList.add('loaded');
  }

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


//animation
  const animItems = document.querySelectorAll('._anim-items');

  if(animItems.length > 0){
    window.addEventListener('scroll' , animOnScroll);
    function animOnScroll(){
      for (let index = 0; index < animItems.length; index++) {
       const animItem = animItems[index];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset = offser(animItem).top;
       const animStart = 4;

       let animItemPoint = window.innerHeight - animItemHeight / animStart;

       if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
       }

       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
       }else{
          if (!animItem.classList.contains('_anim-no-hide')) {
            // animItem.classList.remove('_active'); /*убрал повторную анимацию*/
          }        
       }
      }
      function offser(el){
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}  
      }
    }
    setTimeout(() =>{
      animOnScroll();      
    }, 300);    
  }