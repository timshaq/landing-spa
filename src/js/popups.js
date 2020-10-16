export default function() {

	var html = document.getElementById('html');
	var burger = document.getElementById('burger');
	var closeNav = document.getElementById('closeNav');
	var mobNav = document.getElementById('mobNav');

	function disableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'hidden';
	}

	;

	function enableScroll() {
		html.style.overflowX = 'hidden';
		html.style.overflowY = 'scroll';
	};

	function closeEl(el) {
		el.classList.remove('active');
		enableScroll();
	}

	function openEl(el) {
		el.classList.add('active');
		disableScroll();
	}
	
	// MOBILE NAVIGATION
	burger.addEventListener('click', function () {
		openEl(mobNav);
	});
	closeNav.addEventListener('click', function () {
		closeEl(mobNav);
	});


	var navLinksNodeList = document.querySelectorAll('.header__navlink');
	var navLinksList = Array.prototype.slice.call(navLinksNodeList);
	navLinksList.forEach(function (link) {
		link.addEventListener('click', function (ev) {
		  ev.preventDefault();
		  closeEl(mobNav);
		});
	});
	// MOBILE NAVIGATION

	// PRODUCT CARD
	var prodCard = document.getElementById('prodCard');
	var closeProdCard = document.getElementById('closeProdCard');
	var eyeButtonNL = document.querySelectorAll('.prodslider__slider-eyecont');
	var eyeButtonList = Array.prototype.slice.call(eyeButtonNL);


	eyeButtonList.forEach(function (btn) {
		btn.addEventListener('click', function (ev) {
			ev.preventDefault();
			openEl(prodCard);
			var name = ev.target.parentElement.parentElement.children[3].children[0].innerText;
			localStorage.setItem('blockNameForSend', name);
			console.log(name);
		});
	});

	closeProdCard.addEventListener('click', function (ev) {
		ev.preventDefault();
		closeEl(prodCard);
	});
	// PRODUCT CARD

	// PRODUCT CARD TO BUY MODAL
	var prodmodalToBuy = document.getElementById('prodmodalToBuy');
	var buyModal = document.getElementById('buyModal');
	var closeBuyModalBtn = document.getElementById('closeBuyModal');

	var buyButtonNL = document.querySelectorAll('.prodslider__slider-btn');
	var buyButtonList = Array.prototype.slice.call(buyButtonNL);
	buyButtonList.forEach(function (btn) {
		btn.addEventListener('click', function (ev) {
			ev.preventDefault();
			openEl(buyModal);
			var name = ev.target.parentElement.children[0].innerText;
			localStorage.setItem('blockNameForSend', name);
			console.log(name);
		});
	});

	closeBuyModalBtn.addEventListener('click', function (ev) {
		ev.preventDefault();
		closeEl(buyModal);
	});

	prodmodalToBuy.addEventListener('click', function (ev) {
		ev.preventDefault();
		closeEl(prodCard);
		openEl(buyModal);
	});
	// PRODUCT CARD TO BUY MODAL

	// TEL MODAL
	var telModal = document.getElementById('telModal');
	var freeCall = document.getElementById('freeCall');
	var closeTelModalBtn = document.getElementById('closeTelModal');

	closeTelModalBtn.addEventListener('click', function (ev) {
		ev.preventDefault();
		closeEl(telModal);
	});

	freeCall.addEventListener('click', function (ev) {
		ev.preventDefault();
		openEl(telModal);
	});
	// TEL MODAL

	// CATALOG MODAL
	var catalogModal = document.getElementById('catalogModal');
	var closeCatalogModalBtn = document.getElementById('closeCatalogModal');

	closeCatalogModalBtn.addEventListener('click', function (ev) {
		ev.preventDefault();
		closeEl(catalogModal);
	});
	var catalogButtonNL = document.querySelectorAll('.prodslider__btn');
	var catalogButtonList = Array.prototype.slice.call(catalogButtonNL);
  
	catalogButtonList.forEach(function (btn) {
		btn.addEventListener('click', function (ev) {
			ev.preventDefault();
			openEl(catalogModal);
			var name = "Заявка на каталог — ";
			name += ev.target.parentElement.parentElement.children[0].innerText;
			localStorage.setItem('blockNameForSend', name);
			console.log(name);
		});
	});

	// CATALOG MODAL




}