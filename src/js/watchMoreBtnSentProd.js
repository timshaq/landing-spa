export default function() {

	var sentprodLoad = document.getElementById('sentprodLoad');
	var startText = sentprodLoad.innerText;
	var statusSentprodLoad = false;
	sentprodLoad.addEventListener('click', function () {
		if (!statusSentprodLoad) {
			statusSentprodLoad = true;
			var hiddenNL = document.querySelectorAll('.sentprod__map-item.hidden');
			var hiddenList = Array.prototype.slice.call(hiddenNL);
			hiddenList.forEach(function (item, i) {
				item.classList.add('visible');
				setTimeout(function () {
					item.classList.add('active');
				}, i * 100);
			});
			sentprodLoad.innerText = 'Скрыть список';
		} else {
			statusSentprodLoad = false;
			var hiddenNL = document.querySelectorAll('.sentprod__map-item.hidden');
			var hiddenList = Array.prototype.slice.call(hiddenNL);
			hiddenList.forEach(function (item, i) {
				item.classList.remove('active');
				item.classList.remove('visible');
			});
			sentprodLoad.innerText = startText;
		}
	});

}