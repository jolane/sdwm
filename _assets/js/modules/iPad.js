const Flickity = require('flickity-imagesloaded');



const iPad = document.querySelector('.iPad');

if(iPad) {
	const flk = new Flickity('.iPad-slider', {
		cellSelector: '.iPad-slide',
		prevNextButtons: false,
		wrapAround: true,
		autoPlay: 3000,
		pageDots: false,
		imagesLoaded: true
	});
}
