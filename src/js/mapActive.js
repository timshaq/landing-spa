export default function() {

	var footer = document.getElementById('map');

	var mapEl = document.createElement('iframe')
	mapEl.classList.add('footer__mapbg');
	mapEl.setAttribute('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A7ca08e99e1dbd068bbf8aa43e9a7aa4c13e82b3b8d0d9fb9b31364459267a489&amp;source=constructor')
	mapEl.setAttribute('frameborder', '0')
	
	footer.append(mapEl)
	
	document.addEventListener('click', function (e) {
		var map = document.querySelector('#map iframe');

		if (e.target.id === 'map') {
			map.classList.add('active');
		} else {
			map.classList.remove('active');
		}
	});

}