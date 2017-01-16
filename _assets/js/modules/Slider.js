const Flickity = require('flickity');
const imagesLoaded = require('imagesloaded');
const Slider = document.querySelector('.Slider');

if(Slider) {
	imagesLoaded( Slider, function() {

		const flk = new Flickity(Slider, {
			cellSelector: '.Slider-slide',
			prevNextButtons: false,
			wrapAround: true
		});


		const next = document.querySelector('.Slider-next');
		next.addEventListener('click', function(e) {
			flk.next();
		});

		const prev = document.querySelector('.Slider-prev');
		prev.addEventListener('click', function(e) {
			flk.previous();
		});
	});
}
