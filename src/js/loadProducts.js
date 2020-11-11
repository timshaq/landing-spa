export default function() {

	console.log('loaded');
	// settings
	const startLoad = 12;

	const hydroSlider = $('#hydroSlider');
	const perelivSlider = $('#perelivSlider');
	const swimSlider = $('#swimSlider');

	const headersDataUrl = './build/lib/dataHeaders.json';
	var headersData;

	const productsDataUrl = './build/lib/dataProducts.json';
	var productsData;
	// settings

	$.getJSON(headersDataUrl, (headers) => {
		headersData = headers;
		// console.log('headers');
		// console.log(headers);

		$.getJSON(productsDataUrl, (products) => {
			productsData = [...products];
			for (var i = 0; i < startLoad; i++) {
				products.shift();
			}
			products = products.filter((prod) => prod.id.includes('gmb'))
			// console.log('productsData');
			// console.log(productsData);
			const shuffle = (arr) => {
				var array = [...arr];
				for (var i = array.length - 1; i > 0; i--) {
					var j = Math.floor(Math.random() * (i + 1));
					var temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
				return array;
			}

			var products1 = shuffle(products);
			var products2 = shuffle(products1);
			var products3 = shuffle(products2);

			// console.log('products1');
			// console.log(products1);

			// console.log('products2');
			// console.log(products2);

			// console.log('products3');
			// console.log(products3);

			products1.map((product) => {
				hydroSlider
					.slick('slickAdd',getHtmlSlide(product.name, product.img[0], product.price, product.id));
			});
			products2.map((product) => {
				perelivSlider
					.slick('slickAdd',getHtmlSlide(product.name, product.img[0], product.price, product.id));
			});
			products3.map((product) => {
				swimSlider
					.slick('slickAdd',getHtmlSlide(product.name, product.img[0], product.price, product.id));
			});

			btnClickListener();
		})

	})


	const getHtmlSlide = (productName, imgName, productPrice, id) => {
		var imgPath = 'build/img/products/';
		var imgWebp = imgName.replace('.jpg','').replace('.png','');
		imgWebp += '.webp';
		imgWebp = imgPath + imgWebp;
		imgName = imgPath + imgName;

		return (`
			<div class="prodslider__slider-item" data-product-id="${id}">
				
				<div class="prodslider__slider-mask"></div>

				<button class="prodslider__slider-eyecont" type="button">
					<picture>
						<source srcset="build/img/slider__eye.webp" type="image/webp">
						<img src="build/img/slider__eye.png" alt="" class="prodslider__slider-eye">
					</picture>
				</button>

				<div class="prodslider__slider-phcont">
					<picture>
						<source srcset="${imgWebp}" type="image/webp">
						<img src="${imgName}" alt="" class="prodslider__slider-ph">
					</picture>
				</div>
				
				<div class="prodslider__slider-row">
					<h3 class="prodslider__slider-title">
						${productName}
					</h3>
					<h4 class="prodslider__slider-price">
						${productPrice}
					</h4>
					<button class="prodslider__slider-btn" type="button">
						Купить
					</button>
				</div>

			</div>
			`)
	};

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

	function resetDomListeners() {
		$('#promodalGallery').fotorama({
			width: '100%',
			maxwidth: '100%',
			ratio: 16 / 9,
			allowfullscreen: true,
			nav: 'thumbs',
			thumbmargin: 20,
			swipe: true
		});

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
				// console.log(name);
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

		// CLOSE CARD

		var closeProdCard = document.getElementById('closeProdCard');

		closeProdCard.addEventListener('click', function (ev) {
			ev.preventDefault();
			closeEl(prodCard);
		});

	}

	function btnClickListener() {

		// PRODUCT CARD
		var prodCard = document.getElementById('prodCard');
		var eyeButtonNL = document.querySelectorAll('.prodslider__slider-eyecont');
		var eyeButtonList = Array.prototype.slice.call(eyeButtonNL);

		const currentProduct = document.getElementById('currentProduct');


		eyeButtonList.forEach(function (btn) {
			btn.addEventListener('click', function (ev) {
				ev.preventDefault();
				var name = ev.target.offsetParent.offsetParent.querySelector('h3').innerText;
				localStorage.setItem('blockNameForSend', name);
				// console.log(name);

				var prodId = ev.target.offsetParent.offsetParent.getAttribute('data-product-id');
				// console.log('prodId')
				// console.log(prodId)
				if (prodId) {
					openEl(prodCard);
					// prodCard.classList.add('load');
					var curProd = productsData.find(prod => prod.id == prodId);
					// console.log('curProd')
					// console.log(curProd)
					currentProduct.innerHTML = getHtmlCard(curProd);
					resetDomListeners()
					// prodCard.classList.remove('load');
				}

			});
		});
		// PRODUCT CARD

	}

const getHtmlCard = (product) => {
	var imgList = '';
	product.img.map(img => {
		var imgWebp = img.replace('.jpg', '').replace('.png', '');
		imgWebp += '.webp';
		var body = document.getElementById('body');
		var bodyWebp = body.classList.contains('webp');
		if (bodyWebp) {
			imgList += (`
				<img src="build/img/products/${imgWebp}" alt="">
			`);
		} else {
			imgList += (`
				<img src="build/img/products/${img}" alt="">
			`);
		}

	})


	var isGmb = product.id.includes('gmb')

	if (isGmb) {
		var technicalParameters = '';

		var technicalKeys = Object.keys(product.technical_parameters);
		technicalKeys.map((key) => {
			

			technicalParameters += (`
				<li class="prodmodal__options-item">
					<span class="prodmodal__options-name">
						${headersData[key]}
					</span>
					<span class="prodmodal__options-descr">
						${product.technical_parameters[key]}
					</span>
				</li>
				`)
		});

		var baseConfigurationCol1 = '';
		var baseConfigurationCol2 = '';

		var baseConfKeys = Object.keys(product.base_configuration);
		baseConfKeys.map((key, index) => {
			
			if (index < baseConfKeys.length / 2) {
				baseConfigurationCol1 += (`
						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData[key]}
							</span>
							<span class="prodmodal__options-descr">
								${product.base_configuration[key]}
							</span>
						</li>
					`)
			} else {
				baseConfigurationCol2 += (`
						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData[key]}
							</span>
							<span class="prodmodal__options-descr">
								${product.base_configuration[key]}
							</span>
						</li>
					`)
			}

		});

		var addOptionsCol1 = '';
		var addOptionsCol2 = '';

		var addOptionsKeys = Object.keys(product.add_options);
		addOptionsKeys.map((key, index) => {
			
			if (index < addOptionsKeys.length / 2) {
				addOptionsCol1 += (`
						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData[key]}
							</span>
							<span class="prodmodal__options-descr">
								${product.add_options[key]}
							</span>
						</li>
					`)
			} else {
				addOptionsCol2 += (`
						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData[key]}
							</span>
							<span class="prodmodal__options-descr">
								${product.add_options[key]}
							</span>
						</li>
					`)
			}

		});
		return (`
			<button type="button" class="prodmodal__close" id="closeProdCard">
				<img src="build/img/close.png" alt="">
			</button>
			<h2 class="prodmodal__title">
				${product.name}
			</h2>

			<div class="prodmodal__row">

				<div class="prodmodal__col col-left gallery">

					<div class="prodmodal__gallery" id="promodalGallery">
						${imgList}
					</div>
				</div>

				<div class="prodmodal__col col-right">

					<ul class="prodmodal__options">

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.country}
							</span>
							<span class="prodmodal__options-descr">
								${product.country}
							</span>
						</li>

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.color_cup}
							</span>
							<span class="prodmodal__options-descr">
								${product.color_cup}
							</span>
						</li>

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.color_termo}
							</span>
							<span class="prodmodal__options-descr">
								${product.color_termo}
							</span>
						</li>

					</ul>

					<ul class="prodmodal__options">

						<h3 class="prodmodal__subtitle">
							Технические параметры оборудования
						</h3>
						${technicalParameters}

					</ul>
				</div>

			</div>



			<h3 class="prodmodal__subtitle">
				Базовая комплектация
			</h3>

			<div class="prodmodal__row base">

				<div class="prodmodal__col col-left base">

					<ul class="prodmodal__options">

						${baseConfigurationCol1}

					</ul>
					
				</div>


				<div class="prodmodal__col col-right base">
					<ul class="prodmodal__options">

						${baseConfigurationCol2}

					</ul>
					
				</div>
			</div>



			<h3 class="prodmodal__subtitle">
				Дополнительные опции
			</h3>

			<div class="prodmodal__row base">

				<div class="prodmodal__col col-left base">

					<ul class="prodmodal__options">

						${addOptionsCol1}

					</ul>
					
				</div>


				<div class="prodmodal__col col-right base">
					<ul class="prodmodal__options">

						${addOptionsCol2}

					</ul>
					
				</div>
			</div>

			<div class="prodmodal__row">
				<button type="button" class="prodmodal__btn btn_blue2" id="prodmodalToBuy">
					Купить
				</button>
			</div>


			</div>
		`)

	} else {
		return (`
			<button type="button" class="prodmodal__close" id="closeProdCard">
				<img src="build/img/close.png" alt="">
			</button>
			<h2 class="prodmodal__title">
				${product.name}
			</h2>

			<div class="prodmodal__row">

				<div class="prodmodal__col col-left gallery">

					<div class="prodmodal__gallery" id="promodalGallery">
						${imgList}
					</div>
				</div>

				<div class="prodmodal__col col-right">

					<ul class="prodmodal__options">

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.brand_acces}
							</span>
							<span class="prodmodal__options-descr">
								${product.country}
							</span>
						</li>

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.articul_access}
							</span>
							<span class="prodmodal__options-descr">
								${product.color_cup}
							</span>
						</li>

						<li class="prodmodal__options-item">
							<span class="prodmodal__options-name">
								${headersData.stock_access}
							</span>
							<span class="prodmodal__options-descr">
								${product.color_termo}
							</span>
						</li>

					</ul>
				</div>

			</div>

			<div class="prodmodal__row">
				<button type="button" class="prodmodal__btn btn_blue2" id="prodmodalToBuy">
					Купить
				</button>
			</div>


			</div>
		`)

	}
}


}