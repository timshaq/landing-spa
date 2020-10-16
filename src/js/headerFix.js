export default function() {
	var header = document.getElementById('header');
	var topY = window.scrollY;
	if (topY >= 100) header.classList.add('fix');
	if (topY < 100) header.classList.remove('fix');
	window.addEventListener('scroll', function (ev) {
		topY = window.scrollY;
		if (topY >= 100) header.classList.add('active');
		if (topY < 100) header.classList.remove('active');
	});
}