const Flickity = require('flickity-imagesloaded');
// const imagesLoaded = require('imagesloaded');
const Sliders = document.querySelectorAll('.Slider');
const flk = [];


if(Sliders) {
	for (var i = 0; i < Sliders.length; i++) {
		let sliderEl = Sliders[i];
		flk[i] = new Flickity(sliderEl, {
			cellSelector: '.Slider-slide',
			prevNextButtons: false,
			wrapAround: true,
			imagesLoaded: true,
			autoPlay: 6000
		});


			// const next = document.querySelector('.Slider-next');
			// next.addEventListener('click', function(e) {
			// 	flk.next();
			// });
			//
			// const prev = document.querySelector('.Slider-prev');
			// prev.addEventListener('click', function(e) {
			// 	flk.previous();
			// });
	}
}
