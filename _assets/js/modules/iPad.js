const Flickity = require('flickity');



const iPad = document.querySelector('.iPad');

if(iPad) {
	const flk = new Flickity('.iPad-slider', {
		cellSelector: '.iPad-slide',
		prevNextButtons: false,
		wrapAround: true,
		autoPlay: 5000,
		pageDots: false
	});
}
