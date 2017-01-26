export const getTopOffset = function(el) {
	var val = 0;
	var currentEl = el;

	while (currentEl.offsetParent) {
		val = val + currentEl.offsetTop;
		currentEl = currentEl.offsetParent;
	}

	return val;
}
