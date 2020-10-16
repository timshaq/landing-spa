export default function() {

	document.addEventListener('click', function (e) {
		var map = document.querySelector('#map iframe');

		if (e.target.id === 'map') {
			map.classList.add('active');
		} else {
			map.classList.remove('active');
		}
	});

}