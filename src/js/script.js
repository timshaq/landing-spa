document.addEventListener("DOMContentLoaded", function() {
	


	const header = document.getElementById('header');
	var topY = window.scrollY;
	if (topY >= 100) header.classList.add('fix');
	if (topY < 100) header.classList.remove('fix');
	window.addEventListener('scroll', function(ev) {
		topY = window.scrollY;
		if (topY >= 100) header.classList.add('active');
		if (topY < 100) header.classList.remove('active');
	})




	/*    SLICK    */

	const prodsliders = $('.prodslider').find('.prodslider__slider')

	for(var i = 0; i <= prodsliders.length; i++) {
		$(prodsliders[i]).slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipeToSlide: true,
			responsive: [
				{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true
					}
				},
				{
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true
					}
				}
			]
		}).on('setPosition', function (event, slick) {
			slick.$slides.css('height', slick.$slideTrack.height() + 'px');
		});

	}

	$('.brands__slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
				}
			},
			{
			breakpoint: 993,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
				}
			}
		]
	})

	$('.reviews__slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		responsive: [
			{
			breakpoint: 1441,
			settings: {
				slidesToShow: 3,
				}
			},
			{
			breakpoint: 1201,
			settings: {
				slidesToShow: 2,
				}
			},
			{
			breakpoint: 993,
			settings: {
				slidesToShow: 1,
				}
			}
		]
	})


	/*    /SLICK    */

	/*    burger    */
	var html = document.getElementById('html');

	var burger = document.getElementById('burger');
	var closeNav = document.getElementById('closeNav');
	var mobNav = document.getElementById('mobNav');

	function disableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'hidden';
	};

	function enableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'scroll';
	};
	function closeNavMob() {
		mobNav.classList.remove('active');
		enableScroll();
	}

	burger.addEventListener('click', function() {
		mobNav.classList.add('active');
		disableScroll()
	})

	closeNav.addEventListener('click', function() {
		closeNavMob();
	})
	var navLinksNodeList = document.querySelectorAll('.header__navlink');
	var navLinksList = Array.prototype.slice.call(navLinksNodeList);

	navLinksList.forEach(link => {
		link.addEventListener('click', function(ev) {
			ev.preventDefault();
			closeNavMob();
		})
	})

	/*    /burger    */

	/*    smooth scroll to element*/

	document.querySelectorAll('a[href^="#"').forEach(link => {

	    link.addEventListener('click', function(e) {
	        e.preventDefault();

	        let href = this.getAttribute('href').substring(1);

	        const scrollTarget = document.getElementById(href);

	        const topOffset = document.querySelector(`#${href}`).offsetHeight;
	        // const topOffset = 0; // если не нужен отступ сверху 
	        const elementPosition = scrollTarget.getBoundingClientRect().top;
	        const offsetPosition = elementPosition - 100;

	        window.scrollBy({
	            top: offsetPosition,
	            behavior: 'smooth'
	        });
	    });
	});

	/*    /smooth scroll to element*/


	/*    watch more sentprod    */
	var sentprodLoad = document.getElementById('sentprodLoad');
	var startText = sentprodLoad.innerText;
	var statusSentprodLoad = false;

	sentprodLoad.addEventListener('click', function() {
		if (!statusSentprodLoad) {
			statusSentprodLoad = true;
			var hiddenNL = document.querySelectorAll('.sentprod__map-item.hidden');
			var hiddenList = Array.prototype.slice.call(hiddenNL);
			hiddenList.forEach((item, i) => {
				item.classList.add('visible');
				setTimeout(() => { item.classList.add('active')}, i*100 )
			})
			sentprodLoad.innerText = 'Скрыть список'
		} else {
			statusSentprodLoad = false;
			var hiddenNL = document.querySelectorAll('.sentprod__map-item.hidden');
			var hiddenList = Array.prototype.slice.call(hiddenNL);
			hiddenList.forEach((item, i) => {
					item.classList.remove('active')
					item.classList.remove('visible')
			})
			sentprodLoad.innerText = startText

		}
	})

	/*    /watch more sentprod    */


	/*    MAP    */


	document.addEventListener('click', function(e) {
		var map = document.querySelector('#map iframe')
		if(e.target.id === 'map') {
			map.classList.add('active')
		} else {
			map.classList.remove('active')
		}
	})



	/*    /MAP    */


	/*    ANIM CIRCLE    */
	var statusFaqAnim = false;
	function startFaqAnim () {
		statusFaqAnim = true
		setTimeout(() => { statusFaqAnim = false }, 20000)
		var minSec = 100;
		var maxSec = 500;

		var circle = document.getElementById('circleNum');
		var circleTop = circle.style.top;
		var circleLeft = circle.style.left;

		var num1 = document.getElementById('circleNum1');
		var num12 = document.getElementById('circleNum12');

		var num2 = document.getElementById('circleNum2');
		var num22 = document.getElementById('circleNum22');

		var num3 = document.getElementById('circleNum3');
		var num32 = document.getElementById('circleNum32');

		var circleCoord = circle.getBoundingClientRect()
		var num1Coord = num1.getBoundingClientRect()

		function setCircleAnimStart() {
			circle.classList.add('active');
			var num1pos = $('#circleNum1').offset();
			$('#circleNum').css('left', `${num1pos.left}px`);
		}

		function setCircleStartValue() {
			circle.style.transition = 'all linear 1s';
			circle.classList.remove('active');
			circle.style.left = circleLeft;
			circle.style.top = circleTop;

		}

		var prom1 = new Promise((resolve) => {
			setCircleAnimStart();
			setTimeout(() => {resolve();},4200);
		});

		prom1.then(() => {
			$('#circleNum').offset($('#circleNum3').offset());
			setNumColor();
		});

		var nums = [num12,num22,num32];
		var numsTimeout = [4000,7000,2000];

		
		function setNumColor(start = 0) {
			if (start === nums.length) {
				setCircleStartValue();
				nums[start-1].style.clip = 'rect(0px, 150px, 0px, 0px)';
				return;
			}

			if (start != 0) nums[start-1].style.clip = 'rect(0px, 150px, 0px, 0px)';

			var num = nums[start];

			num.classList.add('active');
			num.style.clip = 'rect(0px, 150px, 300px, 0px)';
			setTimeout(()=> {
				num.classList.remove('active');
				start++;
				setNumColor(start);
				return;
			},numsTimeout[start])

		}

		
	}

	/*    /ANIM CIRCLE    */


	/*    ANIM BLOCK TO CIRCLE    */


var block = document.getElementById('case');

var Visible = function (target, windowVW = windowVW) {
// Все позиции элемента
	var targetPosition = {
	  top: window.pageYOffset + target.getBoundingClientRect().top,
	  left: window.pageXOffset + target.getBoundingClientRect().left,
	  right: window.pageXOffset + target.getBoundingClientRect().right,
	  bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
	// Получаем позиции окна
	windowPosition = {
	  top: window.pageYOffset,
	  left: window.pageXOffset,
	  right: window.pageXOffset + document.documentElement.clientWidth,
	  bottom: window.pageYOffset + document.documentElement.clientHeight
	};

	var center = targetPosition.top + target.offsetHeight / 2;

	function setSwitch() {
		// block.style.transform = 'scale'
		var bgAnim = document.getElementById('bgAnim');
		var textClipColor = document.getElementById('textClipColor');

		function setScale(length) {
			var animRadius = 250;

			var animLeft = bgAnim.getBoundingClientRect().left;
			var animVw = bgAnim.getBoundingClientRect().width;

			// if (animLeft < 0) {
			// 	animVw = animVw - animLeft;
			// }
			if (window.innerWidth === 600) {
				animRadius = 125;
			}

			if (window.innerWidth < 600) return;
			var rectLeft = animLeft + animVw;
			// rectLeft = 95 * rectLeft / 100
			length = Math.round(length / 100) * 100
			// console.log('math');
			// console.log(length);
			switch (length) {
				case 0:
				case 100:
				case 200:
				case 300:
					bgAnim.style.transform = 'scale(1)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 400:
					bgAnim.style.transform = 'scale(2)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 500:
					bgAnim.style.transform = 'scale(3)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 600:
					bgAnim.style.transform = 'scale(4)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 700:
					bgAnim.style.transform = 'scale(5)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 800:
					bgAnim.style.transform = 'scale(6)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
				case 900:
				default:
					bgAnim.style.transform = 'scale(7)';
					textClipColor.style.clipPath = `circle(${animVw}px at ${animLeft}px ${animRadius}px)`;
					break;
			}
		}

		if (targetPosition.top < windowPosition.top) {
			// console.clear();
			// console.log('элемент виден — сверху');
			var length = windowPosition.top - targetPosition.top;
			setScale(length);
		} else {
			// console.clear();
			// console.log('элемент виден — снизу');
			var length = targetPosition.top - windowPosition.top;
			// console.log(length);
			setScale(length);
		}
	}

	if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
		// console.clear();
		// console.log('блок полностью');
		setSwitch();
	} else {
	// Если элемент не видно, то запускаем этот код
		// console.clear();
	};

};


var faq = document.getElementById('faq');
var circleToNums = function (target) {
// Все позиции элемента
	var targetPosition = {
	  top: window.pageYOffset + target.getBoundingClientRect().top,
	  bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
	// Получаем позиции окна
	windowPosition = {
	  top: window.pageYOffset,
	  bottom: window.pageYOffset + document.documentElement.clientHeight
	};

	var center = targetPosition.top + target.offsetHeight / 2;


	if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom) {
		// console.clear();
		// console.log('блок полностью');
		if (window.innerWidth > 1024 && !statusFaqAnim) startFaqAnim();
	} else {
	// Если элемент не видно, то запускаем этот код
		// console.clear();
	};
	
};

window.addEventListener('scroll', function() {
  Visible(block);
  circleToNums(faq);
});

Visible(block);
circleToNums(faq);










	/*    /ANIM BLOCK TO CIRCLE    */


});

