import { getTopOffset } from './helpers';
const Player = require('@vimeo/player');

// auto play when in view
const videos = document.querySelectorAll('.Video');

const checkElements = function() {
	let triggerPoint = window.pageYOffset + (window.innerHeight * 0.99);
	for (var i = 0; i < videos.length; i++) {
		if(getTopOffset(videos[i]) < triggerPoint) {
			videos[i].classList.add('play');
			playVideo(videos[i]);
		}
	}
};

const playVideo = function(videoEl) {
	const player = new Player(videoEl.querySelector('.Video-embed'));
	player.play();
}


if(videos) {
	// checkElements();
}
window.addEventListener('scroll', function(e) {
	checkElements();
});
