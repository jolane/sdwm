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




const bodyEl = document.querySelector('body');
if(bodyEl.classList.contains('home-page')) {
	let introHeight = document.querySelector('.Intro').offsetHeight;
	let headerHeight = document.querySelector('.Header').offsetHeight;

	// detect window scrolling
	window.addEventListener('scroll', function(e) {
		if(window.pageYOffset > headerHeight && window.pageYOffset < introHeight) {
			bodyEl.classList.add('hide-header');
			bodyEl.classList.remove('show-header');
		} else if(window.pageYOffset > introHeight) {
			bodyEl.classList.add('show-header');
			bodyEl.classList.add('hide-header');
		} else {
			bodyEl.classList.remove('hide-header');
			bodyEl.classList.remove('show-header');
		}
	});
}
