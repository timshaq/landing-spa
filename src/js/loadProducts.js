export default function() {

	console.log('loaded');
	// settings
	const headersDataUrl = './build/lib/dataHeaders.json';
	var headersData;

	const productsDataUrl = './build/lib/dataProducts.json';
	var productsData;
	// settings

	$.getJSON(headersDataUrl, (headers) => {
		console.log('headers');
		console.log(headers);

		$.getJSON(productsDataUrl, (products) => {
			console.log('products');
			console.log(products);
			products.map((product) => {
				$('#hydroSlider').slick('slickAdd',getHtmlSlide(product.name, product.img[0], 100000, product.id));
			})
		})

	})




	const hydroSlider = document.getElementById('hydroSlider');
	const perelivSlider = document.getElementById('perelivSlider');
	const swimSlider = document.getElementById('swimSlider');
	const accessSlider = document.getElementById('accessSlider');

	const getHtmlSlide = (productName, imgName, productPrice, id) => {
		var imgPath = 'build/img/products/';
		var imgWebp = imgName.replace('.jpg','').replace('.png','');
		imgWebp += '.webp';
		imgWebp = imgPath + imgWebp;
		imgName = imgPath + imgName;
		// jQuery.preloadImages = function()
		//  {
		//   for(var i = 0; i < arguments.length; i++)
		//   {
		//    jQuery("<img>").attr("src", arguments[ i ]);
		//   }
		//  };

		// var body = document.getElementById('body')
		// body.classList.contains('webp')
		// $.preloadImages(imgWebp,imgName);

		return (`
			<div class="prodslider__slider-item">
				
				<div class="prodslider__slider-mask"></div>

				<button class="prodslider__slider-eyecont" data-product-id="${id}" type="button">
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




}