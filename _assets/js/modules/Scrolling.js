var scrollTo = require('scroll-to');

// back to top
const backToTop = document.querySelector('.js-back-to-top');
backToTop.addEventListener('click', function(e) {
	scrollTo(0, 0, {
		duration: 500
	});
});


// scroll down

const scrollDownButtons = document.querySelectorAll('.js-scroll-down');
for(let i = 0; i < scrollDownButtons.length; i++) {
	let winHeight = window.innerHeight;
	scrollDownButtons[i].addEventListener('click', function(e) {
		let moveTo = window.innerHeight + window.pageYOffset;
		console.log(moveTo);
		scrollTo(0, moveTo, {
			duration: 500
		});
	});
}
