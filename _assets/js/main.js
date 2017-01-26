var svg4everybody = require('svg4everybody');
var svg4everybody = new svg4everybody();

require('./modules/Scrolling');
require('./modules/Slider');
require('./modules/iPad');
require('./modules/Video');
require('./modules/LoadIn');


var toggleNav = document.querySelector('.js-toggle-nav');
const bodyEl = document.querySelector('body');
toggleNav.addEventListener('click', function(e) {
	if(bodyEl.classList.contains('nav-open')) {
		bodyEl.classList.remove('nav-open');
	} else {
		bodyEl.classList.add('nav-open');
	}

});

const toggleDetails = document.querySelector('.js-toggle-details');
if(toggleDetails) {
	toggleDetails.addEventListener('click', function(e) {
		if(bodyEl.classList.contains('details-expanded')) {
			bodyEl.classList.remove('details-expanded');
		} else {
			bodyEl.classList.add('details-expanded');
		}
	});
}
