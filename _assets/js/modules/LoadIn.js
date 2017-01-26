import { getTopOffset } from './helpers';
const imagesLoaded = require('imagesloaded');
const loadInEls = document.querySelectorAll('.Arrow, .Image, .Video, .iPad, .Slider');

const checkElements = function() {
	let triggerPoint = window.pageYOffset + (window.innerHeight * 0.96);
	for (var i = 0; i < loadInEls.length; i++) {
		const yPos = getTopOffset(loadInEls[i]);
		if(yPos < triggerPoint) {
			loadInEls[i].classList.add('is-in-view');
		}
	}
};

imagesLoaded('body > main', function() {
	checkElements();
});

window.addEventListener('scroll', function(e) {
	checkElements();
});
