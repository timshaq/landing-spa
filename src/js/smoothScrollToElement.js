export default function() {

	var allLinkNL = document.querySelectorAll('a');
	var allLinkList = Array.prototype.slice.call(allLinkNL);
	var achorList = [];
	allLinkList.forEach(function (anchor) {
		var pattern = /^#/;
		var href = anchor.getAttribute('href');
		var test = pattern.exec(href);
		if (test) achorList.push(anchor);
	});
	
	achorList.forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			var href = this.getAttribute('href').substring(1);
			var scrollTarget = document.getElementById(href);
			var elementPosition = scrollTarget.getBoundingClientRect().top;
			var offsetPosition = elementPosition - 100;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});

}