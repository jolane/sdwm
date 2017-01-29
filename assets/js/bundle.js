/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./_assets/js/main.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var svg4everybody = __webpack_require__(/*! svg4everybody */ 1);
	var svg4everybody = new svg4everybody();
	
	__webpack_require__(/*! ./modules/Scrolling */ 2);
	__webpack_require__(/*! ./modules/Slider */ 10);
	__webpack_require__(/*! ./modules/iPad */ 31);
	__webpack_require__(/*! ./modules/Video */ 32);
	__webpack_require__(/*! ./modules/LoadIn */ 38);
	
	var toggleNav = document.querySelector('.js-toggle-nav');
	var bodyEl = document.querySelector('body');
	toggleNav.addEventListener('click', function (e) {
		if (bodyEl.classList.contains('nav-open')) {
			bodyEl.classList.remove('nav-open');
		} else {
			bodyEl.classList.add('nav-open');
		}
	});
	
	var toggleDetails = document.querySelector('.js-toggle-details');
	if (toggleDetails) {
		toggleDetails.addEventListener('click', function (e) {
			if (bodyEl.classList.contains('details-expanded')) {
				bodyEl.classList.remove('details-expanded');
			} else {
				bodyEl.classList.add('details-expanded');
			}
		});
	}

/***/ },
/* 1 */
/*!***********************************************!*\
  !*** ./~/svg4everybody/dist/svg4everybody.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
	     true ? // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return root.svg4everybody = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory() : root.svg4everybody = factory();
	}(this, function() {
	    /*! svg4everybody v2.1.4 | github.com/jonathantneal/svg4everybody */
	    function embed(parent, svg, target) {
	        // if the target exists
	        if (target) {
	            // create a document fragment to hold the contents of the target
	            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
	            // conditionally set the viewBox on the svg
	            viewBox && svg.setAttribute("viewBox", viewBox);
	            // copy the contents of the clone into the fragment
	            for (// clone the target
	            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
	                fragment.appendChild(clone.firstChild);
	            }
	            // append the fragment into the svg
	            parent.appendChild(fragment);
	        }
	    }
	    function loadreadystatechange(xhr) {
	        // listen to changes in the request
	        xhr.onreadystatechange = function() {
	            // if the request is ready
	            if (4 === xhr.readyState) {
	                // get the cached html document
	                var cachedDocument = xhr._cachedDocument;
	                // ensure the cached html document based on the xhr response
	                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
	                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
	                xhr._embeds.splice(0).map(function(item) {
	                    // get the cached target
	                    var target = xhr._cachedTarget[item.id];
	                    // ensure the cached target
	                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
	                    // embed the target into the svg
	                    embed(item.parent, item.svg, target);
	                });
	            }
	        }, // test the ready state change immediately
	        xhr.onreadystatechange();
	    }
	    function svg4everybody(rawopts) {
	        function oninterval() {
	            // while the index exists in the live <use> collection
	            for (// get the cached <use> index
	            var index = 0; index < uses.length; ) {
	                // get the current <use>
	                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent);
	                if (svg) {
	                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
	                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
	                        // remove the <use> element
	                        parent.removeChild(use);
	                        // parse the src and get the url and id
	                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
	                        // if the link is external
	                        if (url.length) {
	                            // get the cached xhr request
	                            var xhr = requests[url];
	                            // ensure the xhr request exists
	                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
	                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
	                            xhr._embeds.push({
	                                parent: parent,
	                                svg: svg,
	                                id: id
	                            }), // prepare the xhr ready state change event
	                            loadreadystatechange(xhr);
	                        } else {
	                            // embed the local id into the svg
	                            embed(parent, document.getElementById(id));
	                        }
	                    }
	                } else {
	                    // increase the index when the previous value was not "valid"
	                    ++index;
	                }
	            }
	            // continue the interval
	            requestAnimationFrame(oninterval, 67);
	        }
	        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
	        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	        // create xhr requests object
	        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
	        // conditionally start the interval if the polyfill is active
	        polyfill && oninterval();
	    }
	    function getSVGAncestor(node) {
	        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
	        return svg;
	    }
	    return svg4everybody;
	});

/***/ },
/* 2 */
/*!*****************************************!*\
  !*** ./_assets/js/modules/Scrolling.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var scrollTo = __webpack_require__(/*! scroll-to */ 3);
	
	// back to top
	var backToTop = document.querySelector('.js-back-to-top');
	backToTop.addEventListener('click', function (e) {
		scrollTo(0, 0, {
			duration: 500
		});
	});
	
	// scroll down
	
	var scrollDownButtons = document.querySelectorAll('.js-scroll-down');
	for (var i = 0; i < scrollDownButtons.length; i++) {
		var winHeight = window.innerHeight;
		scrollDownButtons[i].addEventListener('click', function (e) {
			var moveTo = window.innerHeight + window.pageYOffset;
			console.log(moveTo);
			scrollTo(0, moveTo, {
				duration: 500
			});
		});
	}
	
	var bodyEl = document.querySelector('body');
	if (bodyEl.classList.contains('home-page')) {
		(function () {
			var introHeight = document.querySelector('.Intro').offsetHeight;
			var headerHeight = document.querySelector('.Header').offsetHeight;
	
			// detect window scrolling
			window.addEventListener('scroll', function (e) {
				if (window.pageYOffset > headerHeight && window.pageYOffset < introHeight) {
					bodyEl.classList.add('hide-header');
					bodyEl.classList.remove('show-header');
				} else if (window.pageYOffset > introHeight) {
					bodyEl.classList.add('show-header');
					bodyEl.classList.add('hide-header');
				} else {
					bodyEl.classList.remove('hide-header');
					bodyEl.classList.remove('show-header');
				}
			});
		})();
	}

/***/ },
/* 3 */
/*!******************************!*\
  !*** ./~/scroll-to/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Tween = __webpack_require__(/*! tween */ 4);
	var raf = __webpack_require__(/*! raf */ 9);
	
	/**
	 * Expose `scrollTo`.
	 */
	
	module.exports = scrollTo;
	
	/**
	 * Scroll to `(x, y)`.
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @api public
	 */
	
	function scrollTo(x, y, options) {
	  options = options || {};
	
	  // start position
	  var start = scroll();
	
	  // setup tween
	  var tween = Tween(start)
	    .ease(options.ease || 'out-circ')
	    .to({ top: y, left: x })
	    .duration(options.duration || 1000);
	
	  // scroll
	  tween.update(function(o){
	    window.scrollTo(o.left | 0, o.top | 0);
	  });
	
	  // handle end
	  tween.on('end', function(){
	    animate = function(){};
	  });
	
	  // animate
	  function animate() {
	    raf(animate);
	    tween.update();
	  }
	
	  animate();
	  
	  return tween;
	}
	
	/**
	 * Return scroll position.
	 *
	 * @return {Object}
	 * @api private
	 */
	
	function scroll() {
	  var y = window.pageYOffset || document.documentElement.scrollTop;
	  var x = window.pageXOffset || document.documentElement.scrollLeft;
	  return { top: y, left: x };
	}


/***/ },
/* 4 */
/*!************************************!*\
  !*** ./~/component-tween/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(/*! emitter */ 5);
	var clone = __webpack_require__(/*! clone */ 6);
	var type = __webpack_require__(/*! type */ 7);
	var ease = __webpack_require__(/*! ease */ 8);
	
	/**
	 * Expose `Tween`.
	 */
	
	module.exports = Tween;
	
	/**
	 * Initialize a new `Tween` with `obj`.
	 *
	 * @param {Object|Array} obj
	 * @api public
	 */
	
	function Tween(obj) {
	  if (!(this instanceof Tween)) return new Tween(obj);
	  this._from = obj;
	  this.ease('linear');
	  this.duration(500);
	}
	
	/**
	 * Mixin emitter.
	 */
	
	Emitter(Tween.prototype);
	
	/**
	 * Reset the tween.
	 *
	 * @api public
	 */
	
	Tween.prototype.reset = function(){
	  this.isArray = 'array' === type(this._from);
	  this._curr = clone(this._from);
	  this._done = false;
	  this._start = Date.now();
	  return this;
	};
	
	/**
	 * Tween to `obj` and reset internal state.
	 *
	 *    tween.to({ x: 50, y: 100 })
	 *
	 * @param {Object|Array} obj
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.to = function(obj){
	  this.reset();
	  this._to = obj;
	  return this;
	};
	
	/**
	 * Set duration to `ms` [500].
	 *
	 * @param {Number} ms
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.duration = function(ms){
	  this._duration = ms;
	  return this;
	};
	
	/**
	 * Set easing function to `fn`.
	 *
	 *    tween.ease('in-out-sine')
	 *
	 * @param {String|Function} fn
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.ease = function(fn){
	  fn = 'function' == typeof fn ? fn : ease[fn];
	  if (!fn) throw new TypeError('invalid easing function');
	  this._ease = fn;
	  return this;
	};
	
	/**
	 * Stop the tween and immediately emit "stop" and "end".
	 *
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.stop = function(){
	  this.stopped = true;
	  this._done = true;
	  this.emit('stop');
	  this.emit('end');
	  return this;
	};
	
	/**
	 * Perform a step.
	 *
	 * @return {Tween} self
	 * @api private
	 */
	
	Tween.prototype.step = function(){
	  if (this._done) return;
	
	  // duration
	  var duration = this._duration;
	  var now = Date.now();
	  var delta = now - this._start;
	  var done = delta >= duration;
	
	  // complete
	  if (done) {
	    this._from = this._to;
	    this._update(this._to);
	    this._done = true;
	    this.emit('end');
	    return this;
	  }
	
	  // tween
	  var from = this._from;
	  var to = this._to;
	  var curr = this._curr;
	  var fn = this._ease;
	  var p = (now - this._start) / duration;
	  var n = fn(p);
	
	  // array
	  if (this.isArray) {
	    for (var i = 0; i < from.length; ++i) {
	      curr[i] = from[i] + (to[i] - from[i]) * n;
	    }
	
	    this._update(curr);
	    return this;
	  }
	
	  // objech
	  for (var k in from) {
	    curr[k] = from[k] + (to[k] - from[k]) * n;
	  }
	
	  this._update(curr);
	  return this;
	};
	
	/**
	 * Set update function to `fn` or
	 * when no argument is given this performs
	 * a "step".
	 *
	 * @param {Function} fn
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.update = function(fn){
	  if (0 == arguments.length) return this.step();
	  this._update = fn;
	  return this;
	};

/***/ },
/* 5 */
/*!********************************************************!*\
  !*** ./~/component-tween/~/component-emitter/index.js ***!
  \********************************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 6 */
/*!************************************!*\
  !*** ./~/component-clone/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var type;
	try {
	  type = __webpack_require__(/*! component-type */ 7);
	} catch (_) {
	  type = __webpack_require__(/*! type */ 7);
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = clone;
	
	/**
	 * Clones objects.
	 *
	 * @param {Mixed} any object
	 * @api public
	 */
	
	function clone(obj){
	  switch (type(obj)) {
	    case 'object':
	      var copy = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          copy[key] = clone(obj[key]);
	        }
	      }
	      return copy;
	
	    case 'array':
	      var copy = new Array(obj.length);
	      for (var i = 0, l = obj.length; i < l; i++) {
	        copy[i] = clone(obj[i]);
	      }
	      return copy;
	
	    case 'regexp':
	      // from millermedeiros/amd-utils - MIT
	      var flags = '';
	      flags += obj.multiline ? 'm' : '';
	      flags += obj.global ? 'g' : '';
	      flags += obj.ignoreCase ? 'i' : '';
	      return new RegExp(obj.source, flags);
	
	    case 'date':
	      return new Date(obj.getTime());
	
	    default: // string, number, boolean, …
	      return obj;
	  }
	}


/***/ },
/* 7 */
/*!***********************************!*\
  !*** ./~/component-type/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * toString ref.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
	
	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object Error]': return 'error';
	  }
	
	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val !== val) return 'nan';
	  if (val && val.nodeType === 1) return 'element';
	
	  val = val.valueOf
	    ? val.valueOf()
	    : Object.prototype.valueOf.apply(val)
	
	  return typeof val;
	};


/***/ },
/* 8 */
/*!***********************************!*\
  !*** ./~/ease-component/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	
	// easing functions from "Tween.js"
	
	exports.linear = function(n){
	  return n;
	};
	
	exports.inQuad = function(n){
	  return n * n;
	};
	
	exports.outQuad = function(n){
	  return n * (2 - n);
	};
	
	exports.inOutQuad = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n;
	  return - 0.5 * (--n * (n - 2) - 1);
	};
	
	exports.inCube = function(n){
	  return n * n * n;
	};
	
	exports.outCube = function(n){
	  return --n * n * n + 1;
	};
	
	exports.inOutCube = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n;
	  return 0.5 * ((n -= 2 ) * n * n + 2);
	};
	
	exports.inQuart = function(n){
	  return n * n * n * n;
	};
	
	exports.outQuart = function(n){
	  return 1 - (--n * n * n * n);
	};
	
	exports.inOutQuart = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n;
	  return -0.5 * ((n -= 2) * n * n * n - 2);
	};
	
	exports.inQuint = function(n){
	  return n * n * n * n * n;
	}
	
	exports.outQuint = function(n){
	  return --n * n * n * n * n + 1;
	}
	
	exports.inOutQuint = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n * n;
	  return 0.5 * ((n -= 2) * n * n * n * n + 2);
	};
	
	exports.inSine = function(n){
	  return 1 - Math.cos(n * Math.PI / 2 );
	};
	
	exports.outSine = function(n){
	  return Math.sin(n * Math.PI / 2);
	};
	
	exports.inOutSine = function(n){
	  return .5 * (1 - Math.cos(Math.PI * n));
	};
	
	exports.inExpo = function(n){
	  return 0 == n ? 0 : Math.pow(1024, n - 1);
	};
	
	exports.outExpo = function(n){
	  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
	};
	
	exports.inOutExpo = function(n){
	  if (0 == n) return 0;
	  if (1 == n) return 1;
	  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
	};
	
	exports.inCirc = function(n){
	  return 1 - Math.sqrt(1 - n * n);
	};
	
	exports.outCirc = function(n){
	  return Math.sqrt(1 - (--n * n));
	};
	
	exports.inOutCirc = function(n){
	  n *= 2
	  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
	};
	
	exports.inBack = function(n){
	  var s = 1.70158;
	  return n * n * (( s + 1 ) * n - s);
	};
	
	exports.outBack = function(n){
	  var s = 1.70158;
	  return --n * n * ((s + 1) * n + s) + 1;
	};
	
	exports.inOutBack = function(n){
	  var s = 1.70158 * 1.525;
	  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
	  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
	};
	
	exports.inBounce = function(n){
	  return 1 - exports.outBounce(1 - n);
	};
	
	exports.outBounce = function(n){
	  if ( n < ( 1 / 2.75 ) ) {
	    return 7.5625 * n * n;
	  } else if ( n < ( 2 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
	  } else if ( n < ( 2.5 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
	  } else {
	    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
	  }
	};
	
	exports.inOutBounce = function(n){
	  if (n < .5) return exports.inBounce(n * 2) * .5;
	  return exports.outBounce(n * 2 - 1) * .5 + .5;
	};
	
	// aliases
	
	exports['in-quad'] = exports.inQuad;
	exports['out-quad'] = exports.outQuad;
	exports['in-out-quad'] = exports.inOutQuad;
	exports['in-cube'] = exports.inCube;
	exports['out-cube'] = exports.outCube;
	exports['in-out-cube'] = exports.inOutCube;
	exports['in-quart'] = exports.inQuart;
	exports['out-quart'] = exports.outQuart;
	exports['in-out-quart'] = exports.inOutQuart;
	exports['in-quint'] = exports.inQuint;
	exports['out-quint'] = exports.outQuint;
	exports['in-out-quint'] = exports.inOutQuint;
	exports['in-sine'] = exports.inSine;
	exports['out-sine'] = exports.outSine;
	exports['in-out-sine'] = exports.inOutSine;
	exports['in-expo'] = exports.inExpo;
	exports['out-expo'] = exports.outExpo;
	exports['in-out-expo'] = exports.inOutExpo;
	exports['in-circ'] = exports.inCirc;
	exports['out-circ'] = exports.outCirc;
	exports['in-out-circ'] = exports.inOutCirc;
	exports['in-back'] = exports.inBack;
	exports['out-back'] = exports.outBack;
	exports['in-out-back'] = exports.inOutBack;
	exports['in-bounce'] = exports.inBounce;
	exports['out-bounce'] = exports.outBounce;
	exports['in-out-bounce'] = exports.inOutBounce;


/***/ },
/* 9 */
/*!**********************************!*\
  !*** ./~/component-raf/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Expose `requestAnimationFrame()`.
	 */
	
	exports = module.exports = window.requestAnimationFrame
	  || window.webkitRequestAnimationFrame
	  || window.mozRequestAnimationFrame
	  || fallback;
	
	/**
	 * Fallback implementation.
	 */
	
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime();
	  var ms = Math.max(0, 16 - (curr - prev));
	  var req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}
	
	/**
	 * Cancel.
	 */
	
	var cancel = window.cancelAnimationFrame
	  || window.webkitCancelAnimationFrame
	  || window.mozCancelAnimationFrame
	  || window.clearTimeout;
	
	exports.cancel = function(id){
	  cancel.call(window, id);
	};


/***/ },
/* 10 */
/*!**************************************!*\
  !*** ./_assets/js/modules/Slider.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Flickity = __webpack_require__(/*! flickity-imagesloaded */ 11);
	// const imagesLoaded = require('imagesloaded');
	var Sliders = document.querySelectorAll('.Slider');
	var flk = [];
	
	if (Sliders) {
		for (var i = 0; i < Sliders.length; i++) {
			var sliderEl = Sliders[i];
			flk[i] = new Flickity(sliderEl, {
				cellSelector: '.Slider-slide',
				prevNextButtons: false,
				wrapAround: true,
				imagesLoaded: true
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

/***/ },
/* 11 */
/*!**********************************************************!*\
  !*** ./~/flickity-imagesloaded/flickity-imagesloaded.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity imagesLoaded v2.0.0
	 * enables imagesLoaded option for Flickity
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! flickity/js/index */ 12),
	      __webpack_require__(/*! imagesloaded/imagesloaded */ 30)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, imagesLoaded ) {
	      return factory( window, Flickity, imagesLoaded );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('flickity'),
	      require('imagesloaded')
	    );
	  } else {
	    // browser global
	    window.Flickity = factory(
	      window,
	      window.Flickity,
	      window.imagesLoaded
	    );
	  }
	
	}( window, function factory( window, Flickity, imagesLoaded ) {
	'use strict';
	
	Flickity.createMethods.push('_createImagesLoaded');
	
	var proto = Flickity.prototype;
	
	proto._createImagesLoaded = function() {
	  this.on( 'activate', this.imagesLoaded );
	};
	
	proto.imagesLoaded = function() {
	  if ( !this.options.imagesLoaded ) {
	    return;
	  }
	  var _this = this;
	  function onImagesLoadedProgress( instance, image ) {
	    var cell = _this.getParentCell( image.img );
	    _this.cellSizeChange( cell && cell.element );
	    if ( !_this.options.freeScroll ) {
	      _this.positionSliderAtSelected();
	    }
	  }
	  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
	};
	
	return Flickity;
	
	}));


/***/ },
/* 12 */
/*!********************************!*\
  !*** ./~/flickity/js/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity v2.0.5
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * http://flickity.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! ./drag */ 21),
	      __webpack_require__(/*! ./prev-next-button */ 24),
	      __webpack_require__(/*! ./page-dots */ 26),
	      __webpack_require__(/*! ./player */ 27),
	      __webpack_require__(/*! ./add-remove-cell */ 28),
	      __webpack_require__(/*! ./lazyload */ 29)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('./flickity'),
	      require('./drag'),
	      require('./prev-next-button'),
	      require('./page-dots'),
	      require('./player'),
	      require('./add-remove-cell'),
	      require('./lazyload')
	    );
	  }
	
	})( window, function factory( Flickity ) {
	  /*jshint strict: false*/
	  return Flickity;
	});


/***/ },
/* 13 */
/*!***********************************!*\
  !*** ./~/flickity/js/flickity.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ev-emitter/ev-emitter */ 14),
	      __webpack_require__(/*! get-size/get-size */ 15),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16),
	      __webpack_require__(/*! ./cell */ 18),
	      __webpack_require__(/*! ./slide */ 19),
	      __webpack_require__(/*! ./animate */ 20)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
	      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./cell'),
	      require('./slide'),
	      require('./animate')
	    );
	  } else {
	    // browser global
	    var _Flickity = window.Flickity;
	
	    window.Flickity = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      _Flickity.Cell,
	      _Flickity.Slide,
	      _Flickity.animatePrototype
	    );
	  }
	
	}( window, function factory( window, EvEmitter, getSize,
	  utils, Cell, Slide, animatePrototype ) {
	
	'use strict';
	
	// vars
	var jQuery = window.jQuery;
	var getComputedStyle = window.getComputedStyle;
	var console = window.console;
	
	function moveElements( elems, toElem ) {
	  elems = utils.makeArray( elems );
	  while ( elems.length ) {
	    toElem.appendChild( elems.shift() );
	  }
	}
	
	// -------------------------- Flickity -------------------------- //
	
	// globally unique identifiers
	var GUID = 0;
	// internal store of all Flickity intances
	var instances = {};
	
	function Flickity( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // do not initialize twice on same element
	  if ( this.element.flickityGUID ) {
	    var instance = instances[ this.element.flickityGUID ];
	    instance.option( options );
	    return instance;
	  }
	
	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );
	
	  // kick things off
	  this._create();
	}
	
	Flickity.defaults = {
	  accessibility: true,
	  // adaptiveHeight: false,
	  cellAlign: 'center',
	  // cellSelector: undefined,
	  // contain: false,
	  freeScrollFriction: 0.075, // friction when free-scrolling
	  friction: 0.28, // friction when selecting
	  namespaceJQueryEvents: true,
	  // initialIndex: 0,
	  percentPosition: true,
	  resize: true,
	  selectedAttraction: 0.025,
	  setGallerySize: true
	  // watchCSS: false,
	  // wrapAround: false
	};
	
	// hash of methods triggered on _create()
	Flickity.createMethods = [];
	
	var proto = Flickity.prototype;
	// inherit EventEmitter
	utils.extend( proto, EvEmitter.prototype );
	
	proto._create = function() {
	  // add id for Flickity.data
	  var id = this.guid = ++GUID;
	  this.element.flickityGUID = id; // expando
	  instances[ id ] = this; // associate via id
	  // initial properties
	  this.selectedIndex = 0;
	  // how many frames slider has been in same position
	  this.restingFrames = 0;
	  // initial physics properties
	  this.x = 0;
	  this.velocity = 0;
	  this.originSide = this.options.rightToLeft ? 'right' : 'left';
	  // create viewport & slider
	  this.viewport = document.createElement('div');
	  this.viewport.className = 'flickity-viewport';
	  this._createSlider();
	
	  if ( this.options.resize || this.options.watchCSS ) {
	    window.addEventListener( 'resize', this );
	  }
	
	  Flickity.createMethods.forEach( function( method ) {
	    this[ method ]();
	  }, this );
	
	  if ( this.options.watchCSS ) {
	    this.watchCSS();
	  } else {
	    this.activate();
	  }
	
	};
	
	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};
	
	proto.activate = function() {
	  if ( this.isActive ) {
	    return;
	  }
	  this.isActive = true;
	  this.element.classList.add('flickity-enabled');
	  if ( this.options.rightToLeft ) {
	    this.element.classList.add('flickity-rtl');
	  }
	
	  this.getSize();
	  // move initial cell elements so they can be loaded as cells
	  var cellElems = this._filterFindCellElements( this.element.children );
	  moveElements( cellElems, this.slider );
	  this.viewport.appendChild( this.slider );
	  this.element.appendChild( this.viewport );
	  // get cells from children
	  this.reloadCells();
	
	  if ( this.options.accessibility ) {
	    // allow element to focusable
	    this.element.tabIndex = 0;
	    // listen for key presses
	    this.element.addEventListener( 'keydown', this );
	  }
	
	  this.emitEvent('activate');
	
	  var index;
	  var initialIndex = this.options.initialIndex;
	  if ( this.isInitActivated ) {
	    index = this.selectedIndex;
	  } else if ( initialIndex !== undefined ) {
	    index = this.cells[ initialIndex ] ? initialIndex : 0;
	  } else {
	    index = 0;
	  }
	  // select instantly
	  this.select( index, false, true );
	  // flag for initial activation, for using initialIndex
	  this.isInitActivated = true;
	};
	
	// slider positions the cells
	proto._createSlider = function() {
	  // slider element does all the positioning
	  var slider = document.createElement('div');
	  slider.className = 'flickity-slider';
	  slider.style[ this.originSide ] = 0;
	  this.slider = slider;
	};
	
	proto._filterFindCellElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.cellSelector );
	};
	
	// goes through all children
	proto.reloadCells = function() {
	  // collection of item elements
	  this.cells = this._makeCells( this.slider.children );
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	};
	
	/**
	 * turn elements into Flickity.Cells
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Flickity Cells
	 */
	proto._makeCells = function( elems ) {
	  var cellElems = this._filterFindCellElements( elems );
	
	  // create new Flickity for collection
	  var cells = cellElems.map( function( cellElem ) {
	    return new Cell( cellElem, this );
	  }, this );
	
	  return cells;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.getLastSlide = function() {
	  return this.slides[ this.slides.length - 1 ];
	};
	
	// positions all cells
	proto.positionCells = function() {
	  // size all cells
	  this._sizeCells( this.cells );
	  // position all cells
	  this._positionCells( 0 );
	};
	
	/**
	 * position certain cells
	 * @param {Integer} index - which cell to start with
	 */
	proto._positionCells = function( index ) {
	  index = index || 0;
	  // also measure maxCellHeight
	  // start 0 if positioning all cells
	  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
	  var cellX = 0;
	  // get cellX
	  if ( index > 0 ) {
	    var startCell = this.cells[ index - 1 ];
	    cellX = startCell.x + startCell.size.outerWidth;
	  }
	  var len = this.cells.length;
	  for ( var i=index; i < len; i++ ) {
	    var cell = this.cells[i];
	    cell.setPosition( cellX );
	    cellX += cell.size.outerWidth;
	    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
	  }
	  // keep track of cellX for wrap-around
	  this.slideableWidth = cellX;
	  // slides
	  this.updateSlides();
	  // contain slides target
	  this._containSlides();
	  // update slidesWidth
	  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
	};
	
	/**
	 * cell.getSize() on multiple cells
	 * @param {Array} cells
	 */
	proto._sizeCells = function( cells ) {
	  cells.forEach( function( cell ) {
	    cell.getSize();
	  });
	};
	
	// --------------------------  -------------------------- //
	
	proto.updateSlides = function() {
	  this.slides = [];
	  if ( !this.cells.length ) {
	    return;
	  }
	
	  var slide = new Slide( this );
	  this.slides.push( slide );
	  var isOriginLeft = this.originSide == 'left';
	  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';
	
	  var canCellFit = this._getCanCellFit();
	
	  this.cells.forEach( function( cell, i ) {
	    // just add cell if first cell in slide
	    if ( !slide.cells.length ) {
	      slide.addCell( cell );
	      return;
	    }
	
	    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
	      ( cell.size.outerWidth - cell.size[ nextMargin ] );
	
	    if ( canCellFit.call( this, i, slideWidth ) ) {
	      slide.addCell( cell );
	    } else {
	      // doesn't fit, new slide
	      slide.updateTarget();
	
	      slide = new Slide( this );
	      this.slides.push( slide );
	      slide.addCell( cell );
	    }
	  }, this );
	  // last slide
	  slide.updateTarget();
	  // update .selectedSlide
	  this.updateSelectedSlide();
	};
	
	proto._getCanCellFit = function() {
	  var groupCells = this.options.groupCells;
	  if ( !groupCells ) {
	    return function() {
	      return false;
	    };
	  } else if ( typeof groupCells == 'number' ) {
	    // group by number. 3 -> [0,1,2], [3,4,5], ...
	    var number = parseInt( groupCells, 10 );
	    return function( i ) {
	      return ( i % number ) !== 0;
	    };
	  }
	  // default, group by width of slide
	  // parse '75%
	  var percentMatch = typeof groupCells == 'string' &&
	    groupCells.match(/^(\d+)%$/);
	  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
	  return function( i, slideWidth ) {
	    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
	  };
	};
	
	// alias _init for jQuery plugin .flickity()
	proto._init =
	proto.reposition = function() {
	  this.positionCells();
	  this.positionSliderAtSelected();
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	  this.setCellAlign();
	  this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};
	
	var cellAlignShorthands = {
	  // cell align, then based on origin side
	  center: {
	    left: 0.5,
	    right: 0.5
	  },
	  left: {
	    left: 0,
	    right: 1
	  },
	  right: {
	    right: 0,
	    left: 1
	  }
	};
	
	proto.setCellAlign = function() {
	  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
	  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
	};
	
	proto.setGallerySize = function() {
	  if ( this.options.setGallerySize ) {
	    var height = this.options.adaptiveHeight && this.selectedSlide ?
	      this.selectedSlide.height : this.maxCellHeight;
	    this.viewport.style.height = height + 'px';
	  }
	};
	
	proto._getWrapShiftCells = function() {
	  // only for wrap-around
	  if ( !this.options.wrapAround ) {
	    return;
	  }
	  // unshift previous cells
	  this._unshiftCells( this.beforeShiftCells );
	  this._unshiftCells( this.afterShiftCells );
	  // get before cells
	  // initial gap
	  var gapX = this.cursorPosition;
	  var cellIndex = this.cells.length - 1;
	  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
	  // get after cells
	  // ending gap between last cell and end of gallery viewport
	  gapX = this.size.innerWidth - this.cursorPosition;
	  // start cloning at first cell, working forwards
	  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
	};
	
	proto._getGapCells = function( gapX, cellIndex, increment ) {
	  // keep adding cells until the cover the initial gap
	  var cells = [];
	  while ( gapX > 0 ) {
	    var cell = this.cells[ cellIndex ];
	    if ( !cell ) {
	      break;
	    }
	    cells.push( cell );
	    cellIndex += increment;
	    gapX -= cell.size.outerWidth;
	  }
	  return cells;
	};
	
	// ----- contain ----- //
	
	// contain cell targets so no excess sliding
	proto._containSlides = function() {
	  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
	    return;
	  }
	  var isRightToLeft = this.options.rightToLeft;
	  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
	  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
	  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
	  // content is less than gallery size
	  var isContentSmaller = contentWidth < this.size.innerWidth;
	  // bounds
	  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
	  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
	  // contain each cell target
	  this.slides.forEach( function( slide ) {
	    if ( isContentSmaller ) {
	      // all cells fit inside gallery
	      slide.target = contentWidth * this.cellAlign;
	    } else {
	      // contain to bounds
	      slide.target = Math.max( slide.target, beginBound );
	      slide.target = Math.min( slide.target, endBound );
	    }
	  }, this );
	};
	
	// -----  ----- //
	
	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );
	
	  if ( jQuery && this.$element ) {
	    // default trigger with type if no event
	    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
	    var $event = type;
	    if ( event ) {
	      // create jQuery event
	      var jQEvent = jQuery.Event( event );
	      jQEvent.type = type;
	      $event = jQEvent;
	    }
	    this.$element.trigger( $event, args );
	  }
	};
	
	// -------------------------- select -------------------------- //
	
	/**
	 * @param {Integer} index - index of the slide
	 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
	 * @param {Boolean} isInstant - will immediately set position at selected cell
	 */
	proto.select = function( index, isWrap, isInstant ) {
	  if ( !this.isActive ) {
	    return;
	  }
	  index = parseInt( index, 10 );
	  this._wrapSelect( index );
	
	  if ( this.options.wrapAround || isWrap ) {
	    index = utils.modulo( index, this.slides.length );
	  }
	  // bail if invalid index
	  if ( !this.slides[ index ] ) {
	    return;
	  }
	  this.selectedIndex = index;
	  this.updateSelectedSlide();
	  if ( isInstant ) {
	    this.positionSliderAtSelected();
	  } else {
	    this.startAnimation();
	  }
	  if ( this.options.adaptiveHeight ) {
	    this.setGallerySize();
	  }
	
	  this.dispatchEvent('select');
	  // old v1 event name, remove in v3
	  this.dispatchEvent('cellSelect');
	};
	
	// wraps position for wrapAround, to move to closest slide. #113
	proto._wrapSelect = function( index ) {
	  var len = this.slides.length;
	  var isWrapping = this.options.wrapAround && len > 1;
	  if ( !isWrapping ) {
	    return index;
	  }
	  var wrapIndex = utils.modulo( index, len );
	  // go to shortest
	  var delta = Math.abs( wrapIndex - this.selectedIndex );
	  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
	  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
	  if ( !this.isDragSelect && backWrapDelta < delta ) {
	    index += len;
	  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
	    index -= len;
	  }
	  // wrap position so slider is within normal area
	  if ( index < 0 ) {
	    this.x -= this.slideableWidth;
	  } else if ( index >= len ) {
	    this.x += this.slideableWidth;
	  }
	};
	
	proto.previous = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex - 1, isWrap, isInstant );
	};
	
	proto.next = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex + 1, isWrap, isInstant );
	};
	
	proto.updateSelectedSlide = function() {
	  var slide = this.slides[ this.selectedIndex ];
	  // selectedIndex could be outside of slides, if triggered before resize()
	  if ( !slide ) {
	    return;
	  }
	  // unselect previous selected slide
	  this.unselectSelectedSlide();
	  // update new selected slide
	  this.selectedSlide = slide;
	  slide.select();
	  this.selectedCells = slide.cells;
	  this.selectedElements = slide.getCellElements();
	  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
	  // Remove in v3?
	  this.selectedCell = slide.cells[0];
	  this.selectedElement = this.selectedElements[0];
	};
	
	proto.unselectSelectedSlide = function() {
	  if ( this.selectedSlide ) {
	    this.selectedSlide.unselect();
	  }
	};
	
	/**
	 * select slide from number or cell element
	 * @param {Element or Number} elem
	 */
	proto.selectCell = function( value, isWrap, isInstant ) {
	  // get cell
	  var cell;
	  if ( typeof value == 'number' ) {
	    cell = this.cells[ value ];
	  } else {
	    // use string as selector
	    if ( typeof value == 'string' ) {
	      value = this.element.querySelector( value );
	    }
	    // get cell from element
	    cell = this.getCell( value );
	  }
	  // select slide that has cell
	  for ( var i=0; cell && i < this.slides.length; i++ ) {
	    var slide = this.slides[i];
	    var index = slide.cells.indexOf( cell );
	    if ( index != -1 ) {
	      this.select( i, isWrap, isInstant );
	      return;
	    }
	  }
	};
	
	// -------------------------- get cells -------------------------- //
	
	/**
	 * get Flickity.Cell, given an Element
	 * @param {Element} elem
	 * @returns {Flickity.Cell} item
	 */
	proto.getCell = function( elem ) {
	  // loop through cells to get the one that matches
	  for ( var i=0; i < this.cells.length; i++ ) {
	    var cell = this.cells[i];
	    if ( cell.element == elem ) {
	      return cell;
	    }
	  }
	};
	
	/**
	 * get collection of Flickity.Cells, given Elements
	 * @param {Element, Array, NodeList} elems
	 * @returns {Array} cells - Flickity.Cells
	 */
	proto.getCells = function( elems ) {
	  elems = utils.makeArray( elems );
	  var cells = [];
	  elems.forEach( function( elem ) {
	    var cell = this.getCell( elem );
	    if ( cell ) {
	      cells.push( cell );
	    }
	  }, this );
	  return cells;
	};
	
	/**
	 * get cell elements
	 * @returns {Array} cellElems
	 */
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	/**
	 * get parent cell from an element
	 * @param {Element} elem
	 * @returns {Flickit.Cell} cell
	 */
	proto.getParentCell = function( elem ) {
	  // first check if elem is cell
	  var cell = this.getCell( elem );
	  if ( cell ) {
	    return cell;
	  }
	  // try to get parent cell elem
	  elem = utils.getParent( elem, '.flickity-slider > *' );
	  return this.getCell( elem );
	};
	
	/**
	 * get cells adjacent to a slide
	 * @param {Integer} adjCount - number of adjacent slides
	 * @param {Integer} index - index of slide to start
	 * @returns {Array} cells - array of Flickity.Cells
	 */
	proto.getAdjacentCellElements = function( adjCount, index ) {
	  if ( !adjCount ) {
	    return this.selectedSlide.getCellElements();
	  }
	  index = index === undefined ? this.selectedIndex : index;
	
	  var len = this.slides.length;
	  if ( 1 + ( adjCount * 2 ) >= len ) {
	    return this.getCellElements();
	  }
	
	  var cellElems = [];
	  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
	    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
	    var slide = this.slides[ slideIndex ];
	    if ( slide ) {
	      cellElems = cellElems.concat( slide.getCellElements() );
	    }
	  }
	  return cellElems;
	};
	
	// -------------------------- events -------------------------- //
	
	proto.uiChange = function() {
	  this.emitEvent('uiChange');
	};
	
	proto.childUIPointerDown = function( event ) {
	  this.emitEvent( 'childUIPointerDown', [ event ] );
	};
	
	// ----- resize ----- //
	
	proto.onresize = function() {
	  this.watchCSS();
	  this.resize();
	};
	
	utils.debounceMethod( Flickity, 'onresize', 150 );
	
	proto.resize = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.getSize();
	  // wrap values
	  if ( this.options.wrapAround ) {
	    this.x = utils.modulo( this.x, this.slideableWidth );
	  }
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent('resize');
	  // update selected index for group slides, instant
	  // TODO: position can be lost between groups of various numbers
	  var selectedElement = this.selectedElements && this.selectedElements[0];
	  this.selectCell( selectedElement, false, true );
	};
	
	// watches the :after property, activates/deactivates
	proto.watchCSS = function() {
	  var watchOption = this.options.watchCSS;
	  if ( !watchOption ) {
	    return;
	  }
	
	  var afterContent = getComputedStyle( this.element, ':after' ).content;
	  // activate if :after { content: 'flickity' }
	  if ( afterContent.indexOf('flickity') != -1 ) {
	    this.activate();
	  } else {
	    this.deactivate();
	  }
	};
	
	// ----- keydown ----- //
	
	// go previous/next if left/right keys pressed
	proto.onkeydown = function( event ) {
	  // only work if element is in focus
	  if ( !this.options.accessibility ||
	    ( document.activeElement && document.activeElement != this.element ) ) {
	    return;
	  }
	
	  if ( event.keyCode == 37 ) {
	    // go left
	    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
	    this.uiChange();
	    this[ leftMethod ]();
	  } else if ( event.keyCode == 39 ) {
	    // go right
	    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
	    this.uiChange();
	    this[ rightMethod ]();
	  }
	};
	
	// -------------------------- destroy -------------------------- //
	
	// deactivate all Flickity functionality, but keep stuff available
	proto.deactivate = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.element.classList.remove('flickity-enabled');
	  this.element.classList.remove('flickity-rtl');
	  // destroy cells
	  this.cells.forEach( function( cell ) {
	    cell.destroy();
	  });
	  this.unselectSelectedSlide();
	  this.element.removeChild( this.viewport );
	  // move child elements back into element
	  moveElements( this.slider.children, this.element );
	  if ( this.options.accessibility ) {
	    this.element.removeAttribute('tabIndex');
	    this.element.removeEventListener( 'keydown', this );
	  }
	  // set flags
	  this.isActive = false;
	  this.emitEvent('deactivate');
	};
	
	proto.destroy = function() {
	  this.deactivate();
	  window.removeEventListener( 'resize', this );
	  this.emitEvent('destroy');
	  if ( jQuery && this.$element ) {
	    jQuery.removeData( this.element, 'flickity' );
	  }
	  delete this.element.flickityGUID;
	  delete instances[ this.guid ];
	};
	
	// -------------------------- prototype -------------------------- //
	
	utils.extend( proto, animatePrototype );
	
	// -------------------------- extras -------------------------- //
	
	/**
	 * get Flickity instance from element
	 * @param {Element} elem
	 * @returns {Flickity}
	 */
	Flickity.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.flickityGUID;
	  return id && instances[ id ];
	};
	
	utils.htmlInit( Flickity, 'flickity' );
	
	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'flickity', Flickity );
	}
	
	Flickity.Cell = Cell;
	
	return Flickity;
	
	}));


/***/ },
/* 14 */
/*!************************************!*\
  !*** ./~/ev-emitter/ev-emitter.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	
	}( typeof window != 'undefined' ? window : this, function() {
	
	"use strict";
	
	function EvEmitter() {}
	
	var proto = EvEmitter.prototype;
	
	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }
	
	  return this;
	};
	
	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;
	
	  return this;
	};
	
	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }
	
	  return this;
	};
	
	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
	
	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }
	
	  return this;
	};
	
	return EvEmitter;
	
	}));


/***/ },
/* 15 */
/*!********************************!*\
  !*** ./~/get-size/get-size.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */
	
	( function( window, factory ) {
	  'use strict';
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	
	})( window, function factory() {
	'use strict';
	
	// -------------------------- helpers -------------------------- //
	
	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}
	
	function noop() {}
	
	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };
	
	// -------------------------- measurements -------------------------- //
	
	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];
	
	var measurementsLength = measurements.length;
	
	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}
	
	// -------------------------- getStyle -------------------------- //
	
	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See http://bit.ly/getsizebug1' );
	  }
	  return style;
	}
	
	// -------------------------- setup -------------------------- //
	
	var isSetup = false;
	
	var isBoxSizeOuter;
	
	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;
	
	  // -------------------------- box sizing -------------------------- //
	
	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';
	
	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );
	
	  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
	  body.removeChild( div );
	
	}
	
	// -------------------------- getSize -------------------------- //
	
	function getSize( elem ) {
	  setup();
	
	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }
	
	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }
	
	  var style = getStyle( elem );
	
	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }
	
	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;
	
	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
	
	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }
	
	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }
	
	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }
	
	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );
	
	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;
	
	  return size;
	}
	
	return getSize;
	
	});


/***/ },
/* 16 */
/*!***********************************!*\
  !*** ./~/fizzy-ui-utils/utils.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fizzy UI utils v2.0.3
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! desandro-matches-selector/matches-selector */ 17)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
	      return factory( window, matchesSelector );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('desandro-matches-selector')
	    );
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(
	      window,
	      window.matchesSelector
	    );
	  }
	
	}( window, function factory( window, matchesSelector ) {
	
	'use strict';
	
	var utils = {};
	
	// ----- extend ----- //
	
	// extends objects
	utils.extend = function( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	};
	
	// ----- modulo ----- //
	
	utils.modulo = function( num, div ) {
	  return ( ( num % div ) + div ) % div;
	};
	
	// ----- makeArray ----- //
	
	// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	};
	
	// ----- removeFrom ----- //
	
	utils.removeFrom = function( ary, obj ) {
	  var index = ary.indexOf( obj );
	  if ( index != -1 ) {
	    ary.splice( index, 1 );
	  }
	};
	
	// ----- getParent ----- //
	
	utils.getParent = function( elem, selector ) {
	  while ( elem != document.body ) {
	    elem = elem.parentNode;
	    if ( matchesSelector( elem, selector ) ) {
	      return elem;
	    }
	  }
	};
	
	// ----- getQueryElement ----- //
	
	// use element as selector string
	utils.getQueryElement = function( elem ) {
	  if ( typeof elem == 'string' ) {
	    return document.querySelector( elem );
	  }
	  return elem;
	};
	
	// ----- handleEvent ----- //
	
	// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// ----- filterFindElements ----- //
	
	utils.filterFindElements = function( elems, selector ) {
	  // make array of elems
	  elems = utils.makeArray( elems );
	  var ffElems = [];
	
	  elems.forEach( function( elem ) {
	    // check that elem is an actual element
	    if ( !( elem instanceof HTMLElement ) ) {
	      return;
	    }
	    // add elem if no selector
	    if ( !selector ) {
	      ffElems.push( elem );
	      return;
	    }
	    // filter & find items if we have a selector
	    // filter
	    if ( matchesSelector( elem, selector ) ) {
	      ffElems.push( elem );
	    }
	    // find children
	    var childElems = elem.querySelectorAll( selector );
	    // concat childElems to filterFound array
	    for ( var i=0; i < childElems.length; i++ ) {
	      ffElems.push( childElems[i] );
	    }
	  });
	
	  return ffElems;
	};
	
	// ----- debounceMethod ----- //
	
	utils.debounceMethod = function( _class, methodName, threshold ) {
	  // original method
	  var method = _class.prototype[ methodName ];
	  var timeoutName = methodName + 'Timeout';
	
	  _class.prototype[ methodName ] = function() {
	    var timeout = this[ timeoutName ];
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    var args = arguments;
	
	    var _this = this;
	    this[ timeoutName ] = setTimeout( function() {
	      method.apply( _this, args );
	      delete _this[ timeoutName ];
	    }, threshold || 100 );
	  };
	};
	
	// ----- docReady ----- //
	
	utils.docReady = function( callback ) {
	  var readyState = document.readyState;
	  if ( readyState == 'complete' || readyState == 'interactive' ) {
	    // do async to allow for other scripts to run. metafizzy/flickity#441
	    setTimeout( callback );
	  } else {
	    document.addEventListener( 'DOMContentLoaded', callback );
	  }
	};
	
	// ----- htmlInit ----- //
	
	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	};
	
	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
	  utils.docReady( function() {
	    var dashedNamespace = utils.toDashed( namespace );
	    var dataAttr = 'data-' + dashedNamespace;
	    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
	    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var elems = utils.makeArray( dataAttrElems )
	      .concat( utils.makeArray( jsDashElems ) );
	    var dataOptionsAttr = dataAttr + '-options';
	    var jQuery = window.jQuery;
	
	    elems.forEach( function( elem ) {
	      var attr = elem.getAttribute( dataAttr ) ||
	        elem.getAttribute( dataOptionsAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
	          ': ' + error );
	        }
	        return;
	      }
	      // initialize
	      var instance = new WidgetClass( elem, options );
	      // make available via $().data('namespace')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    });
	
	  });
	};
	
	// -----  ----- //
	
	return utils;
	
	}));


/***/ },
/* 17 */
/*!*********************************************************!*\
  !*** ./~/desandro-matches-selector/matches-selector.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v2.0.1
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	( function( window, factory ) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	
	}( window, function factory() {
	  'use strict';
	
	  var matchesMethod = ( function() {
	    var ElemProto = Element.prototype;
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
	
	    for ( var i=0; i < prefixes.length; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();
	
	  return function matchesSelector( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  };
	
	}));


/***/ },
/* 18 */
/*!*******************************!*\
  !*** ./~/flickity/js/cell.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! get-size/get-size */ 15)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( getSize ) {
	      return factory( window, getSize );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Cell = factory(
	      window,
	      window.getSize
	    );
	  }
	
	}( window, function factory( window, getSize ) {
	
	'use strict';
	
	function Cell( elem, parent ) {
	  this.element = elem;
	  this.parent = parent;
	
	  this.create();
	}
	
	var proto = Cell.prototype;
	
	proto.create = function() {
	  this.element.style.position = 'absolute';
	  this.x = 0;
	  this.shift = 0;
	};
	
	proto.destroy = function() {
	  // reset style
	  this.element.style.position = '';
	  var side = this.parent.originSide;
	  this.element.style[ side ] = '';
	};
	
	proto.getSize = function() {
	  this.size = getSize( this.element );
	};
	
	proto.setPosition = function( x ) {
	  this.x = x;
	  this.updateTarget();
	  this.renderPosition( x );
	};
	
	// setDefaultTarget v1 method, backwards compatibility, remove in v3
	proto.updateTarget = proto.setDefaultTarget = function() {
	  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
	  this.target = this.x + this.size[ marginProperty ] +
	    this.size.width * this.parent.cellAlign;
	};
	
	proto.renderPosition = function( x ) {
	  // render position of cell with in slider
	  var side = this.parent.originSide;
	  this.element.style[ side ] = this.parent.getPositionValue( x );
	};
	
	/**
	 * @param {Integer} factor - 0, 1, or -1
	**/
	proto.wrapShift = function( shift ) {
	  this.shift = shift;
	  this.renderPosition( this.x + this.parent.slideableWidth * shift );
	};
	
	proto.remove = function() {
	  this.element.parentNode.removeChild( this.element );
	};
	
	return Cell;
	
	}));


/***/ },
/* 19 */
/*!********************************!*\
  !*** ./~/flickity/js/slide.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Slide = factory();
	  }
	
	}( window, function factory() {
	'use strict';
	
	function Slide( parent ) {
	  this.parent = parent;
	  this.isOriginLeft = parent.originSide == 'left';
	  this.cells = [];
	  this.outerWidth = 0;
	  this.height = 0;
	}
	
	var proto = Slide.prototype;
	
	proto.addCell = function( cell ) {
	  this.cells.push( cell );
	  this.outerWidth += cell.size.outerWidth;
	  this.height = Math.max( cell.size.outerHeight, this.height );
	  // first cell stuff
	  if ( this.cells.length == 1 ) {
	    this.x = cell.x; // x comes from first cell
	    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
	    this.firstMargin = cell.size[ beginMargin ];
	  }
	};
	
	proto.updateTarget = function() {
	  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
	  var lastCell = this.getLastCell();
	  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
	  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
	  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
	};
	
	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};
	
	proto.select = function() {
	  this.changeSelectedClass('add');
	};
	
	proto.unselect = function() {
	  this.changeSelectedClass('remove');
	};
	
	proto.changeSelectedClass = function( method ) {
	  this.cells.forEach( function( cell ) {
	    cell.element.classList[ method ]('is-selected');
	  });
	};
	
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};
	
	return Slide;
	
	}));


/***/ },
/* 20 */
/*!**********************************!*\
  !*** ./~/flickity/js/animate.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( utils ) {
	      return factory( window, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.animatePrototype = factory(
	      window,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, utils ) {
	
	'use strict';
	
	// -------------------------- requestAnimationFrame -------------------------- //
	
	// get rAF, prefixed, if present
	var requestAnimationFrame = window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame;
	
	// fallback to setTimeout
	var lastTime = 0;
	if ( !requestAnimationFrame )  {
	  requestAnimationFrame = function( callback ) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
	    var id = setTimeout( callback, timeToCall );
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}
	
	// -------------------------- animate -------------------------- //
	
	var proto = {};
	
	proto.startAnimation = function() {
	  if ( this.isAnimating ) {
	    return;
	  }
	
	  this.isAnimating = true;
	  this.restingFrames = 0;
	  this.animate();
	};
	
	proto.animate = function() {
	  this.applyDragForce();
	  this.applySelectedAttraction();
	
	  var previousX = this.x;
	
	  this.integratePhysics();
	  this.positionSlider();
	  this.settle( previousX );
	  // animate next frame
	  if ( this.isAnimating ) {
	    var _this = this;
	    requestAnimationFrame( function animateFrame() {
	      _this.animate();
	    });
	  }
	};
	
	
	var transformProperty = ( function () {
	  var style = document.documentElement.style;
	  if ( typeof style.transform == 'string' ) {
	    return 'transform';
	  }
	  return 'WebkitTransform';
	})();
	
	proto.positionSlider = function() {
	  var x = this.x;
	  // wrap position around
	  if ( this.options.wrapAround && this.cells.length > 1 ) {
	    x = utils.modulo( x, this.slideableWidth );
	    x = x - this.slideableWidth;
	    this.shiftWrapCells( x );
	  }
	
	  x = x + this.cursorPosition;
	  // reverse if right-to-left and using transform
	  x = this.options.rightToLeft && transformProperty ? -x : x;
	  var value = this.getPositionValue( x );
	  // use 3D tranforms for hardware acceleration on iOS
	  // but use 2D when settled, for better font-rendering
	  this.slider.style[ transformProperty ] = this.isAnimating ?
	    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';
	
	  // scroll event
	  var firstSlide = this.slides[0];
	  if ( firstSlide ) {
	    var positionX = -this.x - firstSlide.target;
	    var progress = positionX / this.slidesWidth;
	    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
	  }
	};
	
	proto.positionSliderAtSelected = function() {
	  if ( !this.cells.length ) {
	    return;
	  }
	  this.x = -this.selectedSlide.target;
	  this.positionSlider();
	};
	
	proto.getPositionValue = function( position ) {
	  if ( this.options.percentPosition ) {
	    // percent position, round to 2 digits, like 12.34%
	    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
	  } else {
	    // pixel positioning
	    return Math.round( position ) + 'px';
	  }
	};
	
	proto.settle = function( previousX ) {
	  // keep track of frames where x hasn't moved
	  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
	    this.restingFrames++;
	  }
	  // stop animating if resting for 3 or more frames
	  if ( this.restingFrames > 2 ) {
	    this.isAnimating = false;
	    delete this.isFreeScrolling;
	    // render position with translateX when settled
	    this.positionSlider();
	    this.dispatchEvent('settle');
	  }
	};
	
	proto.shiftWrapCells = function( x ) {
	  // shift before cells
	  var beforeGap = this.cursorPosition + x;
	  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
	  // shift after cells
	  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
	  this._shiftCells( this.afterShiftCells, afterGap, 1 );
	};
	
	proto._shiftCells = function( cells, gap, shift ) {
	  for ( var i=0; i < cells.length; i++ ) {
	    var cell = cells[i];
	    var cellShift = gap > 0 ? shift : 0;
	    cell.wrapShift( cellShift );
	    gap -= cell.size.outerWidth;
	  }
	};
	
	proto._unshiftCells = function( cells ) {
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  for ( var i=0; i < cells.length; i++ ) {
	    cells[i].wrapShift( 0 );
	  }
	};
	
	// -------------------------- physics -------------------------- //
	
	proto.integratePhysics = function() {
	  this.x += this.velocity;
	  this.velocity *= this.getFrictionFactor();
	};
	
	proto.applyForce = function( force ) {
	  this.velocity += force;
	};
	
	proto.getFrictionFactor = function() {
	  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
	};
	
	proto.getRestingPosition = function() {
	  // my thanks to Steven Wittens, who simplified this math greatly
	  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
	};
	
	proto.applyDragForce = function() {
	  if ( !this.isPointerDown ) {
	    return;
	  }
	  // change the position to drag position by applying force
	  var dragVelocity = this.dragX - this.x;
	  var dragForce = dragVelocity - this.velocity;
	  this.applyForce( dragForce );
	};
	
	proto.applySelectedAttraction = function() {
	  // do not attract if pointer down or no cells
	  if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
	    return;
	  }
	  var distance = this.selectedSlide.target * -1 - this.x;
	  var force = distance * this.options.selectedAttraction;
	  this.applyForce( force );
	};
	
	return proto;
	
	}));


/***/ },
/* 21 */
/*!*******************************!*\
  !*** ./~/flickity/js/drag.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! unidragger/unidragger */ 22),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, Unidragger, utils ) {
	      return factory( window, Flickity, Unidragger, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('unidragger'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = factory(
	      window,
	      window.Flickity,
	      window.Unidragger,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, Unidragger, utils ) {
	
	'use strict';
	
	// ----- defaults ----- //
	
	utils.extend( Flickity.defaults, {
	  draggable: true,
	  dragThreshold: 3,
	});
	
	// ----- create ----- //
	
	Flickity.createMethods.push('_createDrag');
	
	// -------------------------- drag prototype -------------------------- //
	
	var proto = Flickity.prototype;
	utils.extend( proto, Unidragger.prototype );
	
	// --------------------------  -------------------------- //
	
	var isTouch = 'createTouch' in document;
	var isTouchmoveScrollCanceled = false;
	
	proto._createDrag = function() {
	  this.on( 'activate', this.bindDrag );
	  this.on( 'uiChange', this._uiChangeDrag );
	  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
	  this.on( 'deactivate', this.unbindDrag );
	  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
	  // #457, RubaXa/Sortable#973
	  if ( isTouch && !isTouchmoveScrollCanceled ) {
	    window.addEventListener( 'touchmove', function() {});
	    isTouchmoveScrollCanceled = true;
	  }
	};
	
	proto.bindDrag = function() {
	  if ( !this.options.draggable || this.isDragBound ) {
	    return;
	  }
	  this.element.classList.add('is-draggable');
	  this.handles = [ this.viewport ];
	  this.bindHandles();
	  this.isDragBound = true;
	};
	
	proto.unbindDrag = function() {
	  if ( !this.isDragBound ) {
	    return;
	  }
	  this.element.classList.remove('is-draggable');
	  this.unbindHandles();
	  delete this.isDragBound;
	};
	
	proto._uiChangeDrag = function() {
	  delete this.isFreeScrolling;
	};
	
	proto._childUIPointerDownDrag = function( event ) {
	  event.preventDefault();
	  this.pointerDownFocus( event );
	};
	
	// -------------------------- pointer events -------------------------- //
	
	// nodes that have text fields
	var cursorNodes = {
	  TEXTAREA: true,
	  INPUT: true,
	  OPTION: true,
	};
	
	// input types that do not have text fields
	var clickTypes = {
	  radio: true,
	  checkbox: true,
	  button: true,
	  submit: true,
	  image: true,
	  file: true,
	};
	
	proto.pointerDown = function( event, pointer ) {
	  // dismiss inputs with text fields. #403, #404
	  var isCursorInput = cursorNodes[ event.target.nodeName ] &&
	    !clickTypes[ event.target.type ];
	  if ( isCursorInput ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur && focused != this.element &&
	    // do not blur body for IE9 & 10, #117
	    focused != document.body ) {
	    focused.blur();
	  }
	  this.pointerDownFocus( event );
	  // stop if it was moving
	  this.dragX = this.x;
	  this.viewport.classList.add('is-pointer-down');
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  // track scrolling
	  this.pointerDownScroll = getScrollPosition();
	  window.addEventListener( 'scroll', this );
	
	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};
	
	var touchStartEvents = {
	  touchstart: true,
	  MSPointerDown: true
	};
	
	var focusNodes = {
	  INPUT: true,
	  SELECT: true
	};
	
	proto.pointerDownFocus = function( event ) {
	  // focus element, if not touch, and its not an input or select
	  if ( !this.options.accessibility || touchStartEvents[ event.type ] ||
	      focusNodes[ event.target.nodeName ] ) {
	    return;
	  }
	  var prevScrollY = window.pageYOffset;
	  this.element.focus();
	  // hack to fix scroll jump after focus, #76
	  if ( window.pageYOffset != prevScrollY ) {
	    window.scrollTo( window.pageXOffset, prevScrollY );
	  }
	};
	
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  var isTouchstart = event.type == 'touchstart';
	  var targetNodeName = event.target.nodeName;
	  return !isTouchstart && targetNodeName != 'SELECT';
	};
	
	// ----- move ----- //
	
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > this.options.dragThreshold;
	};
	
	// ----- up ----- //
	
	proto.pointerUp = function( event, pointer ) {
	  delete this.isTouchScrolling;
	  this.viewport.classList.remove('is-pointer-down');
	  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto.pointerDone = function() {
	  window.removeEventListener( 'scroll', this );
	  delete this.pointerDownScroll;
	};
	
	// -------------------------- dragging -------------------------- //
	
	proto.dragStart = function( event, pointer ) {
	  this.dragStartPosition = this.x;
	  this.startAnimation();
	  window.removeEventListener( 'scroll', this );
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	};
	
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	
	  this.previousDragX = this.dragX;
	  // reverse if right-to-left
	  var direction = this.options.rightToLeft ? -1 : 1;
	  var dragX = this.dragStartPosition + moveVector.x * direction;
	
	  if ( !this.options.wrapAround && this.slides.length ) {
	    // slow drag
	    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
	    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
	    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
	    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
	  }
	
	  this.dragX = dragX;
	
	  this.dragMoveTime = new Date();
	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  if ( this.options.freeScroll ) {
	    this.isFreeScrolling = true;
	  }
	  // set selectedIndex based on where flick will end up
	  var index = this.dragEndRestingSelect();
	
	  if ( this.options.freeScroll && !this.options.wrapAround ) {
	    // if free-scroll & not wrap around
	    // do not free-scroll if going outside of bounding slides
	    // so bounding slides can attract slider, and keep it in bounds
	    var restingX = this.getRestingPosition();
	    this.isFreeScrolling = -restingX > this.slides[0].target &&
	      -restingX < this.getLastSlide().target;
	  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
	    // boost selection if selected index has not changed
	    index += this.dragEndBoostSelect();
	  }
	  delete this.previousDragX;
	  // apply selection
	  // TODO refactor this, selecting here feels weird
	  // HACK, set flag so dragging stays in correct direction
	  this.isDragSelect = this.options.wrapAround;
	  this.select( index );
	  delete this.isDragSelect;
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};
	
	proto.dragEndRestingSelect = function() {
	  var restingX = this.getRestingPosition();
	  // how far away from selected slide
	  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
	  // get closet resting going up and going down
	  var positiveResting = this._getClosestResting( restingX, distance, 1 );
	  var negativeResting = this._getClosestResting( restingX, distance, -1 );
	  // use closer resting for wrap-around
	  var index = positiveResting.distance < negativeResting.distance ?
	    positiveResting.index : negativeResting.index;
	  return index;
	};
	
	/**
	 * given resting X and distance to selected cell
	 * get the distance and index of the closest cell
	 * @param {Number} restingX - estimated post-flick resting position
	 * @param {Number} distance - distance to selected cell
	 * @param {Integer} increment - +1 or -1, going up or down
	 * @returns {Object} - { distance: {Number}, index: {Integer} }
	 */
	proto._getClosestResting = function( restingX, distance, increment ) {
	  var index = this.selectedIndex;
	  var minDistance = Infinity;
	  var condition = this.options.contain && !this.options.wrapAround ?
	    // if contain, keep going if distance is equal to minDistance
	    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
	  while ( condition( distance, minDistance ) ) {
	    // measure distance to next cell
	    index += increment;
	    minDistance = distance;
	    distance = this.getSlideDistance( -restingX, index );
	    if ( distance === null ) {
	      break;
	    }
	    distance = Math.abs( distance );
	  }
	  return {
	    distance: minDistance,
	    // selected was previous index
	    index: index - increment
	  };
	};
	
	/**
	 * measure distance between x and a slide target
	 * @param {Number} x
	 * @param {Integer} index - slide index
	 */
	proto.getSlideDistance = function( x, index ) {
	  var len = this.slides.length;
	  // wrap around if at least 2 slides
	  var isWrapAround = this.options.wrapAround && len > 1;
	  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
	  var slide = this.slides[ slideIndex ];
	  if ( !slide ) {
	    return null;
	  }
	  // add distance for wrap-around slides
	  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
	  return x - ( slide.target + wrap );
	};
	
	proto.dragEndBoostSelect = function() {
	  // do not boost if no previousDragX or dragMoveTime
	  if ( this.previousDragX === undefined || !this.dragMoveTime ||
	    // or if drag was held for 100 ms
	    new Date() - this.dragMoveTime > 100 ) {
	    return 0;
	  }
	
	  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
	  var delta = this.previousDragX - this.dragX;
	  if ( distance > 0 && delta > 0 ) {
	    // boost to next if moving towards the right, and positive velocity
	    return 1;
	  } else if ( distance < 0 && delta < 0 ) {
	    // boost to previous if moving towards the left, and negative velocity
	    return -1;
	  }
	  return 0;
	};
	
	// ----- staticClick ----- //
	
	proto.staticClick = function( event, pointer ) {
	  // get clickedCell, if cell was clicked
	  var clickedCell = this.getParentCell( event.target );
	  var cellElem = clickedCell && clickedCell.element;
	  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
	  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
	};
	
	// ----- scroll ----- //
	
	proto.onscroll = function() {
	  var scroll = getScrollPosition();
	  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
	  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
	  // cancel click/tap if scroll is too much
	  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
	    this._pointerDone();
	  }
	};
	
	// ----- utils ----- //
	
	function getScrollPosition() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	}
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ },
/* 22 */
/*!************************************!*\
  !*** ./~/unidragger/unidragger.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unidragger v2.1.0
	 * Draggable base class
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! unipointer/unipointer */ 23)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// -----  ----- //
	
	function noop() {}
	
	// -------------------------- Unidragger -------------------------- //
	
	function Unidragger() {}
	
	// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );
	
	// ----- bind start ----- //
	
	proto.bindHandles = function() {
	  this._bindHandles( true );
	};
	
	proto.unbindHandles = function() {
	  this._bindHandles( false );
	};
	
	var navigator = window.navigator;
	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindHandles = function( isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  // extra bind logic
	  var binderExtra;
	  if ( navigator.pointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.touchAction = isBind ? 'none' : '';
	    };
	  } else if ( navigator.msPointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.msTouchAction = isBind ? 'none' : '';
	    };
	  } else {
	    binderExtra = noop;
	  }
	  // bind each handle
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	  for ( var i=0; i < this.handles.length; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isBind );
	    binderExtra( handle );
	    handle[ bindMethod ]( 'click', this );
	  }
	};
	
	// ----- start event ----- //
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
	  // dismiss range sliders
	  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }
	
	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// base pointer down logic
	proto._dragPointerDown = function( event, pointer ) {
	  // track to see when dragging starts
	  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );
	
	  var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
	  if ( canPreventDefault ) {
	    event.preventDefault();
	  }
	};
	
	// overwriteable method so Flickity can prevent for scrolling
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  return event.target.nodeName != 'SELECT';
	};
	
	// ----- move event ----- //
	
	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};
	
	// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
	  var movePoint = Unipointer.getPointerPoint( pointer );
	  var moveVector = {
	    x: movePoint.x - this.pointerDownPoint.x,
	    y: movePoint.y - this.pointerDownPoint.y
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};
	
	// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};
	
	
	// ----- end event ----- //
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};
	
	proto._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};
	
	// -------------------------- drag -------------------------- //
	
	// dragStart
	proto._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  this.dragStartPoint = Unipointer.getPointerPoint( pointer );
	  // prevent clicks
	  this.isPreventingClicks = true;
	
	  this.dragStart( event, pointer );
	};
	
	proto.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};
	
	// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }
	
	  this.dragMove( event, pointer, moveVector );
	};
	
	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};
	
	// dragEnd
	proto._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  setTimeout( function() {
	    delete this.isPreventingClicks;
	  }.bind( this ) );
	
	  this.dragEnd( event, pointer );
	};
	
	proto.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};
	
	// ----- onclick ----- //
	
	// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    event.preventDefault();
	  }
	};
	
	// ----- staticClick ----- //
	
	// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  // allow click in <input>s and <textarea>s
	  var nodeName = event.target.nodeName;
	  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
	    event.target.focus();
	  }
	  this.staticClick( event, pointer );
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete this.isIgnoringMouseUp;
	    }.bind( this ), 400 );
	  }
	};
	
	proto.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};
	
	// ----- utils ----- //
	
	Unidragger.getPointerPoint = Unipointer.getPointerPoint;
	
	// -----  ----- //
	
	return Unidragger;
	
	}));


/***/ },
/* 23 */
/*!************************************!*\
  !*** ./~/unipointer/unipointer.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unipointer v2.1.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*global define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ev-emitter/ev-emitter */ 14)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	}( window, function factory( window, EvEmitter ) {
	
	'use strict';
	
	function noop() {}
	
	function Unipointer() {}
	
	// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );
	
	proto.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};
	
	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindStartEvent = function( elem, isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	
	  if ( window.navigator.pointerEnabled ) {
	    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
	    elem[ bindMethod ]( 'pointerdown', this );
	  } else if ( window.navigator.msPointerEnabled ) {
	    // IE10 Pointer Events
	    elem[ bindMethod ]( 'MSPointerDown', this );
	  } else {
	    // listen for both, for devices like Chrome Pixel
	    elem[ bindMethod ]( 'mousedown', this );
	    elem[ bindMethod ]( 'touchstart', this );
	  }
	};
	
	// trigger handler methods for events
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
	  for ( var i=0; i < touches.length; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};
	
	// ----- start event ----- //
	
	proto.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};
	
	proto.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};
	
	proto.onMSPointerDown =
	proto.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};
	
	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
	  // dismiss other pointers
	  if ( this.isPointerDown ) {
	    return;
	  }
	
	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;
	
	  this.pointerDown( event, pointer );
	};
	
	proto.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};
	
	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
	};
	
	proto._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // bind events to node
	  events.forEach( function( eventName ) {
	    window.addEventListener( eventName, this );
	  }, this );
	  // save these arguments
	  this._boundPointerEvents = events;
	};
	
	proto._unbindPostStartEvents = function() {
	  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
	  if ( !this._boundPointerEvents ) {
	    return;
	  }
	  this._boundPointerEvents.forEach( function( eventName ) {
	    window.removeEventListener( eventName, this );
	  }, this );
	
	  delete this._boundPointerEvents;
	};
	
	// ----- move event ----- //
	
	proto.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};
	
	proto.onMSPointerMove =
	proto.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};
	
	proto.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};
	
	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};
	
	// public
	proto.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};
	
	// ----- end event ----- //
	
	
	proto.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};
	
	proto.onMSPointerUp =
	proto.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};
	
	proto.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};
	
	// public
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};
	
	// ----- pointer done ----- //
	
	// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	  // remove events
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};
	
	proto.pointerDone = noop;
	
	// ----- pointer cancel ----- //
	
	proto.onMSPointerCancel =
	proto.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};
	
	proto.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};
	
	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};
	
	// public
	proto.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};
	
	// -----  ----- //
	
	// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX,
	    y: pointer.pageY
	  };
	};
	
	// -----  ----- //
	
	return Unipointer;
	
	}));


/***/ },
/* 24 */
/*!*******************************************!*\
  !*** ./~/flickity/js/prev-next-button.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! tap-listener/tap-listener */ 25),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	'use strict';
	
	var svgURI = 'http://www.w3.org/2000/svg';
	
	// -------------------------- PrevNextButton -------------------------- //
	
	function PrevNextButton( direction, parent ) {
	  this.direction = direction;
	  this.parent = parent;
	  this._create();
	}
	
	PrevNextButton.prototype = new TapListener();
	
	PrevNextButton.prototype._create = function() {
	  // properties
	  this.isEnabled = true;
	  this.isPrevious = this.direction == -1;
	  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
	  this.isLeft = this.direction == leftDirection;
	
	  var element = this.element = document.createElement('button');
	  element.className = 'flickity-prev-next-button';
	  element.className += this.isPrevious ? ' previous' : ' next';
	  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
	  element.setAttribute( 'type', 'button' );
	  // init as disabled
	  this.disable();
	
	  element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );
	
	  // create arrow
	  var svg = this.createSVG();
	  element.appendChild( svg );
	  // events
	  this.on( 'tap', this.onTap );
	  this.parent.on( 'select', this.update.bind( this ) );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PrevNextButton.prototype.activate = function() {
	  this.bindTap( this.element );
	  // click events from keyboard
	  this.element.addEventListener( 'click', this );
	  // add to DOM
	  this.parent.element.appendChild( this.element );
	};
	
	PrevNextButton.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.element );
	  // do regular TapListener destroy
	  TapListener.prototype.destroy.call( this );
	  // click events from keyboard
	  this.element.removeEventListener( 'click', this );
	};
	
	PrevNextButton.prototype.createSVG = function() {
	  var svg = document.createElementNS( svgURI, 'svg');
	  svg.setAttribute( 'viewBox', '0 0 100 100' );
	  var path = document.createElementNS( svgURI, 'path');
	  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
	  path.setAttribute( 'd', pathMovements );
	  path.setAttribute( 'class', 'arrow' );
	  // rotate arrow
	  if ( !this.isLeft ) {
	    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
	  }
	  svg.appendChild( path );
	  return svg;
	};
	
	// get SVG path movmement
	function getArrowMovements( shape ) {
	  // use shape as movement if string
	  if ( typeof shape == 'string' ) {
	    return shape;
	  }
	  // create movement string
	  return 'M ' + shape.x0 + ',50' +
	    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
	    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
	    ' L ' + shape.x3 + ',50 ' +
	    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
	    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
	    ' Z';
	}
	
	PrevNextButton.prototype.onTap = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.parent.uiChange();
	  var method = this.isPrevious ? 'previous' : 'next';
	  this.parent[ method ]();
	};
	
	PrevNextButton.prototype.handleEvent = utils.handleEvent;
	
	PrevNextButton.prototype.onclick = function() {
	  // only allow clicks from keyboard
	  var focused = document.activeElement;
	  if ( focused && focused == this.element ) {
	    this.onTap();
	  }
	};
	
	// -----  ----- //
	
	PrevNextButton.prototype.enable = function() {
	  if ( this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = false;
	  this.isEnabled = true;
	};
	
	PrevNextButton.prototype.disable = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = true;
	  this.isEnabled = false;
	};
	
	PrevNextButton.prototype.update = function() {
	  // index of first or last slide, if previous or next
	  var slides = this.parent.slides;
	  // enable is wrapAround and at least 2 slides
	  if ( this.parent.options.wrapAround && slides.length > 1 ) {
	    this.enable();
	    return;
	  }
	  var lastIndex = slides.length ? slides.length - 1 : 0;
	  var boundIndex = this.isPrevious ? 0 : lastIndex;
	  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
	  this[ method ]();
	};
	
	PrevNextButton.prototype.destroy = function() {
	  this.deactivate();
	};
	
	// -------------------------- Flickity prototype -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  prevNextButtons: true,
	  arrowShape: {
	    x0: 10,
	    x1: 60, y1: 50,
	    x2: 70, y2: 40,
	    x3: 30
	  }
	});
	
	Flickity.createMethods.push('_createPrevNextButtons');
	var proto = Flickity.prototype;
	
	proto._createPrevNextButtons = function() {
	  if ( !this.options.prevNextButtons ) {
	    return;
	  }
	
	  this.prevButton = new PrevNextButton( -1, this );
	  this.nextButton = new PrevNextButton( 1, this );
	
	  this.on( 'activate', this.activatePrevNextButtons );
	};
	
	proto.activatePrevNextButtons = function() {
	  this.prevButton.activate();
	  this.nextButton.activate();
	  this.on( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	proto.deactivatePrevNextButtons = function() {
	  this.prevButton.deactivate();
	  this.nextButton.deactivate();
	  this.off( 'deactivate', this.deactivatePrevNextButtons );
	};
	
	// --------------------------  -------------------------- //
	
	Flickity.PrevNextButton = PrevNextButton;
	
	return Flickity;
	
	}));


/***/ },
/* 25 */
/*!****************************************!*\
  !*** ./~/tap-listener/tap-listener.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Tap listener v2.0.0
	 * listens to taps
	 * MIT license
	 */
	
	/*jshint browser: true, unused: true, undef: true, strict: true */
	
	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false*/ /*globals define, module, require */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! unipointer/unipointer */ 23)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.TapListener = factory(
	      window,
	      window.Unipointer
	    );
	  }
	
	}( window, function factory( window, Unipointer ) {
	
	'use strict';
	
	// --------------------------  TapListener -------------------------- //
	
	function TapListener( elem ) {
	  this.bindTap( elem );
	}
	
	// inherit Unipointer & EventEmitter
	var proto = TapListener.prototype = Object.create( Unipointer.prototype );
	
	/**
	 * bind tap event to element
	 * @param {Element} elem
	 */
	proto.bindTap = function( elem ) {
	  if ( !elem ) {
	    return;
	  }
	  this.unbindTap();
	  this.tapElement = elem;
	  this._bindStartEvent( elem, true );
	};
	
	proto.unbindTap = function() {
	  if ( !this.tapElement ) {
	    return;
	  }
	  this._bindStartEvent( this.tapElement, true );
	  delete this.tapElement;
	};
	
	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }
	
	  var pointerPoint = Unipointer.getPointerPoint( pointer );
	  var boundingRect = this.tapElement.getBoundingClientRect();
	  var scrollX = window.pageXOffset;
	  var scrollY = window.pageYOffset;
	  // calculate if pointer is inside tapElement
	  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
	    pointerPoint.x <= boundingRect.right + scrollX &&
	    pointerPoint.y >= boundingRect.top + scrollY &&
	    pointerPoint.y <= boundingRect.bottom + scrollY;
	  // trigger callback if pointer is inside element
	  if ( isInside ) {
	    this.emitEvent( 'tap', [ event, pointer ] );
	  }
	
	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    var _this = this;
	    setTimeout( function() {
	      delete _this.isIgnoringMouseUp;
	    }, 400 );
	  }
	};
	
	proto.destroy = function() {
	  this.pointerDone();
	  this.unbindTap();
	};
	
	// -----  ----- //
	
	return TapListener;
	
	}));


/***/ },
/* 26 */
/*!************************************!*\
  !*** ./~/flickity/js/page-dots.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! tap-listener/tap-listener */ 25),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, TapListener, utils ) {
	
	// -------------------------- PageDots -------------------------- //
	
	'use strict';
	
	function PageDots( parent ) {
	  this.parent = parent;
	  this._create();
	}
	
	PageDots.prototype = new TapListener();
	
	PageDots.prototype._create = function() {
	  // create holder element
	  this.holder = document.createElement('ol');
	  this.holder.className = 'flickity-page-dots';
	  // create dots, array of elements
	  this.dots = [];
	  // events
	  this.on( 'tap', this.onTap );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};
	
	PageDots.prototype.activate = function() {
	  this.setDots();
	  this.bindTap( this.holder );
	  // add to DOM
	  this.parent.element.appendChild( this.holder );
	};
	
	PageDots.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.holder );
	  TapListener.prototype.destroy.call( this );
	};
	
	PageDots.prototype.setDots = function() {
	  // get difference between number of slides and number of dots
	  var delta = this.parent.slides.length - this.dots.length;
	  if ( delta > 0 ) {
	    this.addDots( delta );
	  } else if ( delta < 0 ) {
	    this.removeDots( -delta );
	  }
	};
	
	PageDots.prototype.addDots = function( count ) {
	  var fragment = document.createDocumentFragment();
	  var newDots = [];
	  while ( count ) {
	    var dot = document.createElement('li');
	    dot.className = 'dot';
	    fragment.appendChild( dot );
	    newDots.push( dot );
	    count--;
	  }
	  this.holder.appendChild( fragment );
	  this.dots = this.dots.concat( newDots );
	};
	
	PageDots.prototype.removeDots = function( count ) {
	  // remove from this.dots collection
	  var removeDots = this.dots.splice( this.dots.length - count, count );
	  // remove from DOM
	  removeDots.forEach( function( dot ) {
	    this.holder.removeChild( dot );
	  }, this );
	};
	
	PageDots.prototype.updateSelected = function() {
	  // remove selected class on previous
	  if ( this.selectedDot ) {
	    this.selectedDot.className = 'dot';
	  }
	  // don't proceed if no dots
	  if ( !this.dots.length ) {
	    return;
	  }
	  this.selectedDot = this.dots[ this.parent.selectedIndex ];
	  this.selectedDot.className = 'dot is-selected';
	};
	
	PageDots.prototype.onTap = function( event ) {
	  var target = event.target;
	  // only care about dot clicks
	  if ( target.nodeName != 'LI' ) {
	    return;
	  }
	
	  this.parent.uiChange();
	  var index = this.dots.indexOf( target );
	  this.parent.select( index );
	};
	
	PageDots.prototype.destroy = function() {
	  this.deactivate();
	};
	
	Flickity.PageDots = PageDots;
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pageDots: true
	});
	
	Flickity.createMethods.push('_createPageDots');
	
	var proto = Flickity.prototype;
	
	proto._createPageDots = function() {
	  if ( !this.options.pageDots ) {
	    return;
	  }
	  this.pageDots = new PageDots( this );
	  // events
	  this.on( 'activate', this.activatePageDots );
	  this.on( 'select', this.updateSelectedPageDots );
	  this.on( 'cellChange', this.updatePageDots );
	  this.on( 'resize', this.updatePageDots );
	  this.on( 'deactivate', this.deactivatePageDots );
	};
	
	proto.activatePageDots = function() {
	  this.pageDots.activate();
	};
	
	proto.updateSelectedPageDots = function() {
	  this.pageDots.updateSelected();
	};
	
	proto.updatePageDots = function() {
	  this.pageDots.setDots();
	};
	
	proto.deactivatePageDots = function() {
	  this.pageDots.deactivate();
	};
	
	// -----  ----- //
	
	Flickity.PageDots = PageDots;
	
	return Flickity;
	
	}));


/***/ },
/* 27 */
/*!*********************************!*\
  !*** ./~/flickity/js/player.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ev-emitter/ev-emitter */ 14),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16),
	      __webpack_require__(/*! ./flickity */ 13)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, utils, Flickity ) {
	      return factory( EvEmitter, utils, Flickity );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('ev-emitter'),
	      require('fizzy-ui-utils'),
	      require('./flickity')
	    );
	  } else {
	    // browser global
	    factory(
	      window.EvEmitter,
	      window.fizzyUIUtils,
	      window.Flickity
	    );
	  }
	
	}( window, function factory( EvEmitter, utils, Flickity ) {
	
	'use strict';
	
	// -------------------------- Page Visibility -------------------------- //
	// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API
	
	var hiddenProperty, visibilityEvent;
	if ( 'hidden' in document ) {
	  hiddenProperty = 'hidden';
	  visibilityEvent = 'visibilitychange';
	} else if ( 'webkitHidden' in document ) {
	  hiddenProperty = 'webkitHidden';
	  visibilityEvent = 'webkitvisibilitychange';
	}
	
	// -------------------------- Player -------------------------- //
	
	function Player( parent ) {
	  this.parent = parent;
	  this.state = 'stopped';
	  // visibility change event handler
	  if ( visibilityEvent ) {
	    this.onVisibilityChange = function() {
	      this.visibilityChange();
	    }.bind( this );
	    this.onVisibilityPlay = function() {
	      this.visibilityPlay();
	    }.bind( this );
	  }
	}
	
	Player.prototype = Object.create( EvEmitter.prototype );
	
	// start play
	Player.prototype.play = function() {
	  if ( this.state == 'playing' ) {
	    return;
	  }
	  // do not play if page is hidden, start playing when page is visible
	  var isPageHidden = document[ hiddenProperty ];
	  if ( visibilityEvent && isPageHidden ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityPlay );
	    return;
	  }
	
	  this.state = 'playing';
	  // listen to visibility change
	  if ( visibilityEvent ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	  // start ticking
	  this.tick();
	};
	
	Player.prototype.tick = function() {
	  // do not tick if not playing
	  if ( this.state != 'playing' ) {
	    return;
	  }
	
	  var time = this.parent.options.autoPlay;
	  // default to 3 seconds
	  time = typeof time == 'number' ? time : 3000;
	  var _this = this;
	  // HACK: reset ticks if stopped and started within interval
	  this.clear();
	  this.timeout = setTimeout( function() {
	    _this.parent.next( true );
	    _this.tick();
	  }, time );
	};
	
	Player.prototype.stop = function() {
	  this.state = 'stopped';
	  this.clear();
	  // remove visibility change event
	  if ( visibilityEvent ) {
	    document.removeEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	};
	
	Player.prototype.clear = function() {
	  clearTimeout( this.timeout );
	};
	
	Player.prototype.pause = function() {
	  if ( this.state == 'playing' ) {
	    this.state = 'paused';
	    this.clear();
	  }
	};
	
	Player.prototype.unpause = function() {
	  // re-start play if paused
	  if ( this.state == 'paused' ) {
	    this.play();
	  }
	};
	
	// pause if page visibility is hidden, unpause if visible
	Player.prototype.visibilityChange = function() {
	  var isPageHidden = document[ hiddenProperty ];
	  this[ isPageHidden ? 'pause' : 'unpause' ]();
	};
	
	Player.prototype.visibilityPlay = function() {
	  this.play();
	  document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
	};
	
	// -------------------------- Flickity -------------------------- //
	
	utils.extend( Flickity.defaults, {
	  pauseAutoPlayOnHover: true
	});
	
	Flickity.createMethods.push('_createPlayer');
	var proto = Flickity.prototype;
	
	proto._createPlayer = function() {
	  this.player = new Player( this );
	
	  this.on( 'activate', this.activatePlayer );
	  this.on( 'uiChange', this.stopPlayer );
	  this.on( 'pointerDown', this.stopPlayer );
	  this.on( 'deactivate', this.deactivatePlayer );
	};
	
	proto.activatePlayer = function() {
	  if ( !this.options.autoPlay ) {
	    return;
	  }
	  this.player.play();
	  this.element.addEventListener( 'mouseenter', this );
	};
	
	// Player API, don't hate the ... thanks I know where the door is
	
	proto.playPlayer = function() {
	  this.player.play();
	};
	
	proto.stopPlayer = function() {
	  this.player.stop();
	};
	
	proto.pausePlayer = function() {
	  this.player.pause();
	};
	
	proto.unpausePlayer = function() {
	  this.player.unpause();
	};
	
	proto.deactivatePlayer = function() {
	  this.player.stop();
	  this.element.removeEventListener( 'mouseenter', this );
	};
	
	// ----- mouseenter/leave ----- //
	
	// pause auto-play on hover
	proto.onmouseenter = function() {
	  if ( !this.options.pauseAutoPlayOnHover ) {
	    return;
	  }
	  this.player.pause();
	  this.element.addEventListener( 'mouseleave', this );
	};
	
	// resume auto-play on hover off
	proto.onmouseleave = function() {
	  this.player.unpause();
	  this.element.removeEventListener( 'mouseleave', this );
	};
	
	// -----  ----- //
	
	Flickity.Player = Player;
	
	return Flickity;
	
	}));


/***/ },
/* 28 */
/*!******************************************!*\
  !*** ./~/flickity/js/add-remove-cell.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	
	'use strict';
	
	// append cells to a document fragment
	function getCellsFragment( cells ) {
	  var fragment = document.createDocumentFragment();
	  cells.forEach( function( cell ) {
	    fragment.appendChild( cell.element );
	  });
	  return fragment;
	}
	
	// -------------------------- add/remove cell prototype -------------------------- //
	
	var proto = Flickity.prototype;
	
	/**
	 * Insert, prepend, or append cells
	 * @param {Element, Array, NodeList} elems
	 * @param {Integer} index
	 */
	proto.insert = function( elems, index ) {
	  var cells = this._makeCells( elems );
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  var len = this.cells.length;
	  // default to append
	  index = index === undefined ? len : index;
	  // add cells with document fragment
	  var fragment = getCellsFragment( cells );
	  // append to slider
	  var isAppend = index == len;
	  if ( isAppend ) {
	    this.slider.appendChild( fragment );
	  } else {
	    var insertCellElement = this.cells[ index ].element;
	    this.slider.insertBefore( fragment, insertCellElement );
	  }
	  // add to this.cells
	  if ( index === 0 ) {
	    // prepend, add to start
	    this.cells = cells.concat( this.cells );
	  } else if ( isAppend ) {
	    // append, add to end
	    this.cells = this.cells.concat( cells );
	  } else {
	    // insert in this.cells
	    var endCells = this.cells.splice( index, len - index );
	    this.cells = this.cells.concat( cells ).concat( endCells );
	  }
	
	  this._sizeCells( cells );
	
	  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
	  this._cellAddedRemoved( index, selectedIndexDelta );
	};
	
	proto.append = function( elems ) {
	  this.insert( elems, this.cells.length );
	};
	
	proto.prepend = function( elems ) {
	  this.insert( elems, 0 );
	};
	
	/**
	 * Remove cells
	 * @param {Element, Array, NodeList} elems
	 */
	proto.remove = function( elems ) {
	  var cells = this.getCells( elems );
	  var selectedIndexDelta = 0;
	  var len = cells.length;
	  var i, cell;
	  // calculate selectedIndexDelta, easier if done in seperate loop
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
	    selectedIndexDelta -= wasBefore ? 1 : 0;
	  }
	
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    cell.remove();
	    // remove item from collection
	    utils.removeFrom( this.cells, cell );
	  }
	
	  if ( cells.length ) {
	    // update stuff
	    this._cellAddedRemoved( 0, selectedIndexDelta );
	  }
	};
	
	// updates when cells are added or removed
	proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
	  // TODO this math isn't perfect with grouped slides
	  selectedIndexDelta = selectedIndexDelta || 0;
	  this.selectedIndex += selectedIndexDelta;
	  this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );
	
	  this.cellChange( changedCellIndex, true );
	  // backwards compatibility
	  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
	};
	
	/**
	 * logic to be run after a cell's size changes
	 * @param {Element} elem - cell's element
	 */
	proto.cellSizeChange = function( elem ) {
	  var cell = this.getCell( elem );
	  if ( !cell ) {
	    return;
	  }
	  cell.getSize();
	
	  var index = this.cells.indexOf( cell );
	  this.cellChange( index );
	};
	
	/**
	 * logic any time a cell is changed: added, removed, or size changed
	 * @param {Integer} changedCellIndex - index of the changed cell, optional
	 */
	proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
	  var prevSlideableWidth = this.slideableWidth;
	  this._positionCells( changedCellIndex );
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent( 'cellChange', [ changedCellIndex ] );
	  // position slider
	  if ( this.options.freeScroll ) {
	    // shift x by change in slideableWidth
	    // TODO fix position shifts when prepending w/ freeScroll
	    var deltaX = prevSlideableWidth - this.slideableWidth;
	    this.x += deltaX * this.cellAlign;
	    this.positionSlider();
	  } else {
	    // do not position slider after lazy load
	    if ( isPositioningSlider ) {
	      this.positionSliderAtSelected();
	    }
	    this.select( this.selectedIndex );
	  }
	};
	
	// -----  ----- //
	
	return Flickity;
	
	}));


/***/ },
/* 29 */
/*!***********************************!*\
  !*** ./~/flickity/js/lazyload.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ./flickity */ 13),
	      __webpack_require__(/*! fizzy-ui-utils/utils */ 16)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }
	
	}( window, function factory( window, Flickity, utils ) {
	'use strict';
	
	Flickity.createMethods.push('_createLazyload');
	var proto = Flickity.prototype;
	
	proto._createLazyload = function() {
	  this.on( 'select', this.lazyLoad );
	};
	
	proto.lazyLoad = function() {
	  var lazyLoad = this.options.lazyLoad;
	  if ( !lazyLoad ) {
	    return;
	  }
	  // get adjacent cells, use lazyLoad option for adjacent count
	  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
	  var cellElems = this.getAdjacentCellElements( adjCount );
	  // get lazy images in those cells
	  var lazyImages = [];
	  cellElems.forEach( function( cellElem ) {
	    var lazyCellImages = getCellLazyImages( cellElem );
	    lazyImages = lazyImages.concat( lazyCellImages );
	  });
	  // load lazy images
	  lazyImages.forEach( function( img ) {
	    new LazyLoader( img, this );
	  }, this );
	};
	
	function getCellLazyImages( cellElem ) {
	  // check if cell element is lazy image
	  if ( cellElem.nodeName == 'IMG' &&
	    cellElem.getAttribute('data-flickity-lazyload') ) {
	    return [ cellElem ];
	  }
	  // select lazy images in cell
	  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
	  return utils.makeArray( imgs );
	}
	
	// -------------------------- LazyLoader -------------------------- //
	
	/**
	 * class to handle loading images
	 */
	function LazyLoader( img, flickity ) {
	  this.img = img;
	  this.flickity = flickity;
	  this.load();
	}
	
	LazyLoader.prototype.handleEvent = utils.handleEvent;
	
	LazyLoader.prototype.load = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  // load image
	  this.img.src = this.img.getAttribute('data-flickity-lazyload');
	  // remove attr
	  this.img.removeAttribute('data-flickity-lazyload');
	};
	
	LazyLoader.prototype.onload = function( event ) {
	  this.complete( event, 'flickity-lazyloaded' );
	};
	
	LazyLoader.prototype.onerror = function( event ) {
	  this.complete( event, 'flickity-lazyerror' );
	};
	
	LazyLoader.prototype.complete = function( event, className ) {
	  // unbind events
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	
	  var cell = this.flickity.getParentCell( this.img );
	  var cellElem = cell && cell.element;
	  this.flickity.cellSizeChange( cellElem );
	
	  this.img.classList.add( className );
	  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
	};
	
	// -----  ----- //
	
	Flickity.LazyLoader = LazyLoader;
	
	return Flickity;
	
	}));


/***/ },
/* 30 */
/*!****************************************!*\
  !*** ./~/imagesloaded/imagesloaded.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
	
	( function( window, factory ) { 'use strict';
	  // universal module definition
	
	  /*global define: false, module: false, require: false */
	
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(/*! ev-emitter/ev-emitter */ 14)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }
	
	})( window,
	
	// --------------------------  factory -------------------------- //
	
	function factory( window, EvEmitter ) {
	
	'use strict';
	
	var $ = window.jQuery;
	var console = window.console;
	
	// -------------------------- helpers -------------------------- //
	
	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}
	
	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}
	
	// -------------------------- imagesLoaded -------------------------- //
	
	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }
	
	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );
	
	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }
	
	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }
	
	  this.getImages();
	
	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }
	
	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}
	
	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
	
	ImagesLoaded.prototype.options = {};
	
	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];
	
	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};
	
	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }
	
	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }
	
	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};
	
	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};
	
	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};
	
	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};
	
	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};
	
	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }
	
	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }
	
	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};
	
	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }
	
	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};
	
	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};
	
	// --------------------------  -------------------------- //
	
	function LoadingImage( img ) {
	  this.img = img;
	}
	
	LoadingImage.prototype = Object.create( EvEmitter.prototype );
	
	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }
	
	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};
	
	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};
	
	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};
	
	// ----- events ----- //
	
	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};
	
	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};
	
	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	// -------------------------- Background -------------------------- //
	
	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}
	
	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );
	
	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};
	
	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};
	
	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};
	
	// -------------------------- jQuery -------------------------- //
	
	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();
	
	// --------------------------  -------------------------- //
	
	return ImagesLoaded;
	
	});


/***/ },
/* 31 */
/*!************************************!*\
  !*** ./_assets/js/modules/iPad.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Flickity = __webpack_require__(/*! flickity-imagesloaded */ 11);
	
	var iPad = document.querySelector('.iPad');
	
	if (iPad) {
		var flk = new Flickity('.iPad-slider', {
			cellSelector: '.iPad-slide',
			prevNextButtons: false,
			wrapAround: true,
			autoPlay: 3000,
			pageDots: false,
			imagesLoaded: true
		});
	}

/***/ },
/* 32 */
/*!*************************************!*\
  !*** ./_assets/js/modules/Video.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _helpers = __webpack_require__(/*! ./helpers */ 33);
	
	var Player = __webpack_require__(/*! @vimeo/player */ 34);
	
	// auto play when in view
	var videos = document.querySelectorAll('.Video');
	
	var checkElements = function checkElements() {
		var triggerPoint = window.pageYOffset + window.innerHeight * 0.99;
		for (var i = 0; i < videos.length; i++) {
			if ((0, _helpers.getTopOffset)(videos[i]) < triggerPoint) {
				videos[i].classList.add('play');
				playVideo(videos[i]);
			}
		}
	};
	
	var playVideo = function playVideo(videoEl) {
		var player = new Player(videoEl.querySelector('.Video-embed'));
		player.play();
	};
	
	if (videos) {
		checkElements();
	}
	window.addEventListener('scroll', function (e) {
		checkElements();
	});

/***/ },
/* 33 */
/*!***************************************!*\
  !*** ./_assets/js/modules/helpers.js ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var getTopOffset = exports.getTopOffset = function getTopOffset(el) {
		var val = 0;
		var currentEl = el;
	
		while (currentEl.offsetParent) {
			val = val + currentEl.offsetTop;
			currentEl = currentEl.offsetParent;
		}
	
		return val;
	};

/***/ },
/* 34 */
/*!****************************************!*\
  !*** ./~/@vimeo/player/dist/player.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! @vimeo/player v2.0.1 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vimeo = global.Vimeo || {}, global.Vimeo.Player = factory());
	}(this, (function () { 'use strict';
	
	var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
	var postMessageSupport = typeof window.postMessage !== 'undefined';
	
	if (!arrayIndexOfSupport || !postMessageSupport) {
	    throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
	}
	
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	
	
	
	
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var index = createCommonjsModule(function (module, exports) {
	(function (exports) {
	  'use strict';
	  //shared pointer
	
	  var i;
	  //shortcuts
	  var defineProperty = Object.defineProperty,
	      is = function is(a, b) {
	    return a === b || a !== a && b !== b;
	  };
	
	  //Polyfill global objects
	  if (typeof WeakMap == 'undefined') {
	    exports.WeakMap = createCollection({
	      // WeakMap#delete(key:void*):boolean
	      'delete': sharedDelete,
	      // WeakMap#clear():
	      clear: sharedClear,
	      // WeakMap#get(key:void*):void*
	      get: sharedGet,
	      // WeakMap#has(key:void*):boolean
	      has: mapHas,
	      // WeakMap#set(key:void*, value:void*):void
	      set: sharedSet
	    }, true);
	  }
	
	  if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
	    exports.Map = createCollection({
	      // WeakMap#delete(key:void*):boolean
	      'delete': sharedDelete,
	      //:was Map#get(key:void*[, d3fault:void*]):void*
	      // Map#has(key:void*):boolean
	      has: mapHas,
	      // Map#get(key:void*):boolean
	      get: sharedGet,
	      // Map#set(key:void*, value:void*):void
	      set: sharedSet,
	      // Map#keys(void):Iterator
	      keys: sharedKeys,
	      // Map#values(void):Iterator
	      values: sharedValues,
	      // Map#entries(void):Iterator
	      entries: mapEntries,
	      // Map#forEach(callback:Function, context:void*):void ==> callback.call(context, key, value, mapObject) === not in specs`
	      forEach: sharedForEach,
	      // Map#clear():
	      clear: sharedClear
	    });
	  }
	
	  if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
	    exports.Set = createCollection({
	      // Set#has(value:void*):boolean
	      has: setHas,
	      // Set#add(value:void*):boolean
	      add: sharedAdd,
	      // Set#delete(key:void*):boolean
	      'delete': sharedDelete,
	      // Set#clear():
	      clear: sharedClear,
	      // Set#keys(void):Iterator
	      keys: sharedValues, // specs actually say "the same function object as the initial value of the values property"
	      // Set#values(void):Iterator
	      values: sharedValues,
	      // Set#entries(void):Iterator
	      entries: setEntries,
	      // Set#forEach(callback:Function, context:void*):void ==> callback.call(context, value, index) === not in specs
	      forEach: sharedForEach
	    });
	  }
	
	  if (typeof WeakSet == 'undefined') {
	    exports.WeakSet = createCollection({
	      // WeakSet#delete(key:void*):boolean
	      'delete': sharedDelete,
	      // WeakSet#add(value:void*):boolean
	      add: sharedAdd,
	      // WeakSet#clear():
	      clear: sharedClear,
	      // WeakSet#has(value:void*):boolean
	      has: setHas
	    }, true);
	  }
	
	  /**
	   * ES6 collection constructor
	   * @return {Function} a collection class
	   */
	  function createCollection(proto, objectOnly) {
	    function Collection(a) {
	      if (!this || this.constructor !== Collection) return new Collection(a);
	      this._keys = [];
	      this._values = [];
	      this._itp = []; // iteration pointers
	      this.objectOnly = objectOnly;
	
	      //parse initial iterable argument passed
	      if (a) init.call(this, a);
	    }
	
	    //define size for non object-only collections
	    if (!objectOnly) {
	      defineProperty(proto, 'size', {
	        get: sharedSize
	      });
	    }
	
	    //set prototype
	    proto.constructor = Collection;
	    Collection.prototype = proto;
	
	    return Collection;
	  }
	
	  /** parse initial iterable argument passed */
	  function init(a) {
	    var i;
	    //init Set argument, like `[1,2,3,{}]`
	    if (this.add) a.forEach(this.add, this);
	    //init Map argument like `[[1,2], [{}, 4]]`
	    else a.forEach(function (a) {
	        this.set(a[0], a[1]);
	      }, this);
	  }
	
	  /** delete */
	  function sharedDelete(key) {
	    if (this.has(key)) {
	      this._keys.splice(i, 1);
	      this._values.splice(i, 1);
	      // update iteration pointers
	      this._itp.forEach(function (p) {
	        if (i < p[0]) p[0]--;
	      });
	    }
	    // Aurora here does it while Canary doesn't
	    return -1 < i;
	  }
	
	  function sharedGet(key) {
	    return this.has(key) ? this._values[i] : undefined;
	  }
	
	  function has(list, key) {
	    if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");
	    //NaN or 0 passed
	    if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
	    return -1 < i;
	  }
	
	  function setHas(value) {
	    return has.call(this, this._values, value);
	  }
	
	  function mapHas(value) {
	    return has.call(this, this._keys, value);
	  }
	
	  /** @chainable */
	  function sharedSet(key, value) {
	    this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
	    return this;
	  }
	
	  /** @chainable */
	  function sharedAdd(value) {
	    if (!this.has(value)) this._values.push(value);
	    return this;
	  }
	
	  function sharedClear() {
	    (this._keys || 0).length = this._values.length = 0;
	  }
	
	  /** keys, values, and iterate related methods */
	  function sharedKeys() {
	    return sharedIterator(this._itp, this._keys);
	  }
	
	  function sharedValues() {
	    return sharedIterator(this._itp, this._values);
	  }
	
	  function mapEntries() {
	    return sharedIterator(this._itp, this._keys, this._values);
	  }
	
	  function setEntries() {
	    return sharedIterator(this._itp, this._values, this._values);
	  }
	
	  function sharedIterator(itp, array, array2) {
	    var p = [0],
	        done = false;
	    itp.push(p);
	    return {
	      next: function next() {
	        var v,
	            k = p[0];
	        if (!done && k < array.length) {
	          v = array2 ? [array[k], array2[k]] : array[k];
	          p[0]++;
	        } else {
	          done = true;
	          itp.splice(itp.indexOf(p), 1);
	        }
	        return { done: done, value: v };
	      }
	    };
	  }
	
	  function sharedSize() {
	    return this._values.length;
	  }
	
	  function sharedForEach(callback, context) {
	    var it = this.entries();
	    for (;;) {
	      var r = it.next();
	      if (r.done) break;
	      callback.call(context, r.value[1], r.value[0], this);
	    }
	  }
	})(typeof exports != 'undefined' && typeof commonjsGlobal != 'undefined' ? commonjsGlobal : window);
	});
	
	var npo_src = createCommonjsModule(function (module) {
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! Native Promise Only
	    v0.8.1 (c) Kyle Simpson
	    MIT License: http://getify.mit-license.org
	*/
	
	(function UMD(name, context, definition) {
		// special form of UMD for polyfilling across evironments
		context[name] = context[name] || definition();
		if (typeof module != "undefined" && module.exports) {
			module.exports = context[name];
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function $AMD$() {
				return context[name];
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
		/*jshint validthis:true */
		"use strict";
	
		var builtInProp,
		    cycle,
		    scheduling_queue,
		    ToString = Object.prototype.toString,
		    timer = typeof setImmediate != "undefined" ? function timer(fn) {
			return setImmediate(fn);
		} : setTimeout;
	
		// dammit, IE8.
		try {
			Object.defineProperty({}, "x", {});
			builtInProp = function builtInProp(obj, name, val, config) {
				return Object.defineProperty(obj, name, {
					value: val,
					writable: true,
					configurable: config !== false
				});
			};
		} catch (err) {
			builtInProp = function builtInProp(obj, name, val) {
				obj[name] = val;
				return obj;
			};
		}
	
		// Note: using a queue instead of array for efficiency
		scheduling_queue = function Queue() {
			var first, last, item;
	
			function Item(fn, self) {
				this.fn = fn;
				this.self = self;
				this.next = void 0;
			}
	
			return {
				add: function add(fn, self) {
					item = new Item(fn, self);
					if (last) {
						last.next = item;
					} else {
						first = item;
					}
					last = item;
					item = void 0;
				},
				drain: function drain() {
					var f = first;
					first = last = cycle = void 0;
	
					while (f) {
						f.fn.call(f.self);
						f = f.next;
					}
				}
			};
		}();
	
		function schedule(fn, self) {
			scheduling_queue.add(fn, self);
			if (!cycle) {
				cycle = timer(scheduling_queue.drain);
			}
		}
	
		// promise duck typing
		function isThenable(o) {
			var _then,
			    o_type = typeof o === "undefined" ? "undefined" : _typeof(o);
	
			if (o != null && (o_type == "object" || o_type == "function")) {
				_then = o.then;
			}
			return typeof _then == "function" ? _then : false;
		}
	
		function notify() {
			for (var i = 0; i < this.chain.length; i++) {
				notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
			}
			this.chain.length = 0;
		}
	
		// NOTE: This is a separate function to isolate
		// the `try..catch` so that other code can be
		// optimized better
		function notifyIsolated(self, cb, chain) {
			var ret, _then;
			try {
				if (cb === false) {
					chain.reject(self.msg);
				} else {
					if (cb === true) {
						ret = self.msg;
					} else {
						ret = cb.call(void 0, self.msg);
					}
	
					if (ret === chain.promise) {
						chain.reject(TypeError("Promise-chain cycle"));
					} else if (_then = isThenable(ret)) {
						_then.call(ret, chain.resolve, chain.reject);
					} else {
						chain.resolve(ret);
					}
				}
			} catch (err) {
				chain.reject(err);
			}
		}
	
		function resolve(msg) {
			var _then,
			    self = this;
	
			// already triggered?
			if (self.triggered) {
				return;
			}
	
			self.triggered = true;
	
			// unwrap
			if (self.def) {
				self = self.def;
			}
	
			try {
				if (_then = isThenable(msg)) {
					schedule(function () {
						var def_wrapper = new MakeDefWrapper(self);
						try {
							_then.call(msg, function $resolve$() {
								resolve.apply(def_wrapper, arguments);
							}, function $reject$() {
								reject.apply(def_wrapper, arguments);
							});
						} catch (err) {
							reject.call(def_wrapper, err);
						}
					});
				} else {
					self.msg = msg;
					self.state = 1;
					if (self.chain.length > 0) {
						schedule(notify, self);
					}
				}
			} catch (err) {
				reject.call(new MakeDefWrapper(self), err);
			}
		}
	
		function reject(msg) {
			var self = this;
	
			// already triggered?
			if (self.triggered) {
				return;
			}
	
			self.triggered = true;
	
			// unwrap
			if (self.def) {
				self = self.def;
			}
	
			self.msg = msg;
			self.state = 2;
			if (self.chain.length > 0) {
				schedule(notify, self);
			}
		}
	
		function iteratePromises(Constructor, arr, resolver, rejecter) {
			for (var idx = 0; idx < arr.length; idx++) {
				(function IIFE(idx) {
					Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
						resolver(idx, msg);
					}, rejecter);
				})(idx);
			}
		}
	
		function MakeDefWrapper(self) {
			this.def = self;
			this.triggered = false;
		}
	
		function MakeDef(self) {
			this.promise = self;
			this.state = 0;
			this.triggered = false;
			this.chain = [];
			this.msg = void 0;
		}
	
		function Promise(executor) {
			if (typeof executor != "function") {
				throw TypeError("Not a function");
			}
	
			if (this.__NPO__ !== 0) {
				throw TypeError("Not a promise");
			}
	
			// instance shadowing the inherited "brand"
			// to signal an already "initialized" promise
			this.__NPO__ = 1;
	
			var def = new MakeDef(this);
	
			this["then"] = function then(success, failure) {
				var o = {
					success: typeof success == "function" ? success : true,
					failure: typeof failure == "function" ? failure : false
				};
				// Note: `then(..)` itself can be borrowed to be used against
				// a different promise constructor for making the chained promise,
				// by substituting a different `this` binding.
				o.promise = new this.constructor(function extractChain(resolve, reject) {
					if (typeof resolve != "function" || typeof reject != "function") {
						throw TypeError("Not a function");
					}
	
					o.resolve = resolve;
					o.reject = reject;
				});
				def.chain.push(o);
	
				if (def.state !== 0) {
					schedule(notify, def);
				}
	
				return o.promise;
			};
			this["catch"] = function $catch$(failure) {
				return this.then(void 0, failure);
			};
	
			try {
				executor.call(void 0, function publicResolve(msg) {
					resolve.call(def, msg);
				}, function publicReject(msg) {
					reject.call(def, msg);
				});
			} catch (err) {
				reject.call(def, err);
			}
		}
	
		var PromisePrototype = builtInProp({}, "constructor", Promise,
		/*configurable=*/false);
	
		// Note: Android 4 cannot use `Object.defineProperty(..)` here
		Promise.prototype = PromisePrototype;
	
		// built-in "brand" to signal an "uninitialized" promise
		builtInProp(PromisePrototype, "__NPO__", 0,
		/*configurable=*/false);
	
		builtInProp(Promise, "resolve", function Promise$resolve(msg) {
			var Constructor = this;
	
			// spec mandated checks
			// note: best "isPromise" check that's practical for now
			if (msg && (typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object" && msg.__NPO__ === 1) {
				return msg;
			}
	
			return new Constructor(function executor(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}
	
				resolve(msg);
			});
		});
	
		builtInProp(Promise, "reject", function Promise$reject(msg) {
			return new this(function executor(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}
	
				reject(msg);
			});
		});
	
		builtInProp(Promise, "all", function Promise$all(arr) {
			var Constructor = this;
	
			// spec mandated checks
			if (ToString.call(arr) != "[object Array]") {
				return Constructor.reject(TypeError("Not an array"));
			}
			if (arr.length === 0) {
				return Constructor.resolve([]);
			}
	
			return new Constructor(function executor(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}
	
				var len = arr.length,
				    msgs = Array(len),
				    count = 0;
	
				iteratePromises(Constructor, arr, function resolver(idx, msg) {
					msgs[idx] = msg;
					if (++count === len) {
						resolve(msgs);
					}
				}, reject);
			});
		});
	
		builtInProp(Promise, "race", function Promise$race(arr) {
			var Constructor = this;
	
			// spec mandated checks
			if (ToString.call(arr) != "[object Array]") {
				return Constructor.reject(TypeError("Not an array"));
			}
	
			return new Constructor(function executor(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}
	
				iteratePromises(Constructor, arr, function resolver(idx, msg) {
					resolve(msg);
				}, reject);
			});
		});
	
		return Promise;
	});
	});
	
	/**
	 * @module lib/callbacks
	 */
	
	var callbackMap = new WeakMap();
	
	/**
	 * Store a callback for a method or event for a player.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {Player} player The player object.
	 * @param {string} name The method or event name.
	 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
	 *        The callback to call or an object with resolve and reject functions for a promise.
	 * @return {void}
	 */
	function storeCallback(player, name, callback) {
	    var playerCallbacks = callbackMap.get(player.element) || {};
	
	    if (!(name in playerCallbacks)) {
	        playerCallbacks[name] = [];
	    }
	
	    playerCallbacks[name].push(callback);
	    callbackMap.set(player.element, playerCallbacks);
	}
	
	/**
	 * Get the callbacks for a player and event or method.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {Player} player The player object.
	 * @param {string} name The method or event name
	 * @return {function[]}
	 */
	function getCallbacks(player, name) {
	    var playerCallbacks = callbackMap.get(player.element) || {};
	    return playerCallbacks[name] || [];
	}
	
	/**
	 * Remove a stored callback for a method or event for a player.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {Player} player The player object.
	 * @param {string} name The method or event name
	 * @param {function} [callback] The specific callback to remove.
	 * @return {boolean} Was this the last callback?
	 */
	function removeCallback(player, name, callback) {
	    var playerCallbacks = callbackMap.get(player.element) || {};
	
	    if (!playerCallbacks[name]) {
	        return true;
	    }
	
	    // If no callback is passed, remove all callbacks for the event
	    if (!callback) {
	        playerCallbacks[name] = [];
	        callbackMap.set(player.element, playerCallbacks);
	
	        return true;
	    }
	
	    var index = playerCallbacks[name].indexOf(callback);
	
	    if (index !== -1) {
	        playerCallbacks[name].splice(index, 1);
	    }
	
	    callbackMap.set(player.element, playerCallbacks);
	    return playerCallbacks[name] && playerCallbacks[name].length === 0;
	}
	
	/**
	 * Return the first stored callback for a player and event or method.
	 *
	 * @param {Player} player The player object.
	 * @param {string} name The method or event name.
	 * @return {function} The callback, or false if there were none
	 */
	function shiftCallbacks(player, name) {
	    var playerCallbacks = getCallbacks(player, name);
	
	    if (playerCallbacks.length < 1) {
	        return false;
	    }
	
	    var callback = playerCallbacks.shift();
	    removeCallback(player, name, callback);
	    return callback;
	}
	
	/**
	 * Move callbacks associated with an element to another element.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {HTMLElement} oldElement The old element.
	 * @param {HTMLElement} newElement The new element.
	 * @return {void}
	 */
	function swapCallbacks(oldElement, newElement) {
	    var playerCallbacks = callbackMap.get(oldElement);
	
	    callbackMap.set(newElement, playerCallbacks);
	    callbackMap.delete(oldElement);
	}
	
	/**
	 * @module lib/functions
	 */
	
	/**
	 * Get the name of the method for a given getter or setter.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {string} prop The name of the property.
	 * @param {string} type Either “get” or “set”.
	 * @return {string}
	 */
	function getMethodName(prop, type) {
	    if (prop.indexOf(type.toLowerCase()) === 0) {
	        return prop;
	    }
	
	    return '' + type.toLowerCase() + prop.substr(0, 1).toUpperCase() + prop.substr(1);
	}
	
	/**
	 * Check to see if the object is a DOM Element.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {*} element The object to check.
	 * @return {boolean}
	 */
	function isDomElement(element) {
	    return element instanceof window.HTMLElement;
	}
	
	/**
	 * Check to see whether the value is a number.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
	 * @param {*} value The value to check.
	 * @param {boolean} integer Check if the value is an integer.
	 * @return {boolean}
	 */
	function isInteger(value) {
	    // eslint-disable-next-line eqeqeq
	    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
	}
	
	/**
	 * Check to see if the URL is a Vimeo url.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {string} url The url string.
	 * @return {boolean}
	 */
	function isVimeoUrl(url) {
	    return (/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(url)
	    );
	}
	
	/**
	 * Get the Vimeo URL from an element.
	 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {object} oEmbedParameters The oEmbed parameters.
	 * @return {string}
	 */
	function getVimeoUrl() {
	    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var id = oEmbedParameters.id;
	    var url = oEmbedParameters.url;
	    var idOrUrl = id || url;
	
	    if (!idOrUrl) {
	        throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
	    }
	
	    if (isInteger(idOrUrl)) {
	        return 'https://vimeo.com/' + idOrUrl;
	    }
	
	    if (isVimeoUrl(idOrUrl)) {
	        return idOrUrl.replace('http:', 'https:');
	    }
	
	    if (id) {
	        throw new TypeError('\u201C' + id + '\u201D is not a valid video id.');
	    }
	
	    throw new TypeError('\u201C' + idOrUrl + '\u201D is not a vimeo.com url.');
	}
	
	/**
	 * @module lib/embed
	 */
	
	var oEmbedParameters = ['id', 'url', 'width', 'maxwidth', 'height', 'maxheight', 'portrait', 'title', 'byline', 'color', 'autoplay', 'autopause', 'loop', 'responsive'];
	
	/**
	 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {HTMLElement} element The element.
	 * @param {Object} [defaults={}] The default values to use.
	 * @return {Object<string, string>}
	 */
	function getOEmbedParameters(element) {
	    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return oEmbedParameters.reduce(function (params, param) {
	        var value = element.getAttribute('data-vimeo-' + param);
	
	        if (value || value === '') {
	            params[param] = value === '' ? 1 : value;
	        }
	
	        return params;
	    }, defaults);
	}
	
	/**
	 * Make an oEmbed call for the specified URL.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {string} videoUrl The vimeo.com url for the video.
	 * @param {Object} [params] Parameters to pass to oEmbed.
	 * @return {Promise}
	 */
	function getOEmbedData(videoUrl) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return new Promise(function (resolve, reject) {
	        if (!isVimeoUrl(videoUrl)) {
	            throw new TypeError('\u201C' + videoUrl + '\u201D is not a vimeo.com url.');
	        }
	
	        var url = 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(videoUrl);
	
	        for (var param in params) {
	            if (params.hasOwnProperty(param)) {
	                url += '&' + param + '=' + encodeURIComponent(params[param]);
	            }
	        }
	
	        var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
	        xhr.open('GET', url, true);
	
	        xhr.onload = function () {
	            if (xhr.status === 404) {
	                reject(new Error('\u201C' + videoUrl + '\u201D was not found.'));
	                return;
	            }
	
	            if (xhr.status === 403) {
	                reject(new Error('\u201C' + videoUrl + '\u201D is not embeddable.'));
	                return;
	            }
	
	            try {
	                var json = JSON.parse(xhr.responseText);
	                resolve(json);
	            } catch (error) {
	                reject(error);
	            }
	        };
	
	        xhr.onerror = function () {
	            var status = xhr.status ? ' (' + xhr.status + ')' : '';
	            reject(new Error('There was an error fetching the embed code from Vimeo' + status + '.'));
	        };
	
	        xhr.send();
	    });
	}
	
	/**
	 * Create an embed from oEmbed data inside an element.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {object} data The oEmbed data.
	 * @param {HTMLElement} element The element to put the iframe in.
	 * @return {HTMLIFrameElement} The iframe embed.
	 */
	function createEmbed(_ref, element) {
	    var html = _ref.html;
	
	    if (!element) {
	        throw new TypeError('An element must be provided');
	    }
	
	    if (element.getAttribute('data-vimeo-initialized') !== null) {
	        return element.querySelector('iframe');
	    }
	
	    var div = document.createElement('div');
	    div.innerHTML = html;
	
	    element.appendChild(div.firstChild);
	    element.setAttribute('data-vimeo-initialized', 'true');
	
	    return element.querySelector('iframe');
	}
	
	/**
	 * Initialize all embeds within a specific element
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {HTMLElement} [parent=document] The parent element.
	 * @return {void}
	 */
	function initializeEmbeds() {
	    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
	
	    var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));
	
	    var handleError = function handleError(error) {
	        if ('console' in window && console.error) {
	            console.error('There was an error creating an embed: ' + error);
	        }
	    };
	
	    elements.forEach(function (element) {
	        try {
	            // Skip any that have data-vimeo-defer
	            if (element.getAttribute('data-vimeo-defer') !== null) {
	                return;
	            }
	
	            var params = getOEmbedParameters(element);
	            var url = getVimeoUrl(params);
	
	            getOEmbedData(url, params).then(function (data) {
	                return createEmbed(data, element);
	            }).catch(handleError);
	        } catch (error) {
	            handleError(error);
	        }
	    });
	}
	
	/**
	 * @module lib/postmessage
	 */
	
	/**
	 * Parse a message received from postMessage.
	 *
	 * @param {*} data The data received from postMessage.
	 * @return {object}
	 */
	function parseMessageData(data) {
	    if (typeof data === 'string') {
	        data = JSON.parse(data);
	    }
	
	    return data;
	}
	
	/**
	 * Post a message to the specified target.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {Player} player The player object to use.
	 * @param {string} method The API method to call.
	 * @param {object} params The parameters to send to the player.
	 * @return {void}
	 */
	function postMessage(player, method, params) {
	    if (!player.element.contentWindow.postMessage) {
	        return;
	    }
	
	    var message = {
	        method: method
	    };
	
	    if (params !== undefined) {
	        message.value = params;
	    }
	
	    // IE 8 and 9 do not support passing messages, so stringify them
	    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));
	    if (ieVersion >= 8 && ieVersion < 10) {
	        message = JSON.stringify(message);
	    }
	
	    player.element.contentWindow.postMessage(message, player.origin);
	}
	
	/**
	 * Parse the data received from a message event.
	 *
	 * @author Brad Dougherty <brad@vimeo.com>
	 * @param {Player} player The player that received the message.
	 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
	 * @return {void}
	 */
	function processData(player, data) {
	    data = parseMessageData(data);
	    var callbacks = [];
	    var param = void 0;
	
	    if (data.event) {
	        if (data.event === 'error') {
	            var promises = getCallbacks(player, data.data.method);
	
	            promises.forEach(function (promise) {
	                var error = new Error(data.data.message);
	                error.name = data.data.name;
	
	                promise.reject(error);
	                removeCallback(player, data.data.method, promise);
	            });
	        }
	
	        callbacks = getCallbacks(player, 'event:' + data.event);
	        param = data.data;
	    } else if (data.method) {
	        var callback = shiftCallbacks(player, data.method);
	
	        if (callback) {
	            callbacks.push(callback);
	            param = data.value;
	        }
	    }
	
	    callbacks.forEach(function (callback) {
	        try {
	            if (typeof callback === 'function') {
	                callback.call(player, param);
	                return;
	            }
	
	            callback.resolve(param);
	        } catch (e) {
	            // empty
	        }
	    });
	}
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var playerMap = new WeakMap();
	var readyMap = new WeakMap();
	
	var Player = function () {
	    /**
	    * Create a Player.
	    *
	    * @author Brad Dougherty <brad@vimeo.com>
	    * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
	    *        player iframe, and id, or a jQuery object.
	    * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
	    * @return {Player}
	    */
	    function Player(element) {
	        var _this = this;
	
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        _classCallCheck(this, Player);
	
	        /* global jQuery */
	        if (window.jQuery && element instanceof jQuery) {
	            if (element.length > 1 && window.console && console.warn) {
	                console.warn('A jQuery object with multiple elements was passed, using the first element.');
	            }
	
	            element = element[0];
	        }
	
	        // Find an element by ID
	        if (typeof element === 'string') {
	            element = document.getElementById(element);
	        }
	
	        // Not an element!
	        if (!isDomElement(element)) {
	            throw new TypeError('You must pass either a valid element or a valid id.');
	        }
	
	        // Already initialized an embed in this div, so grab the iframe
	        if (element.nodeName !== 'IFRAME') {
	            var iframe = element.querySelector('iframe');
	
	            if (iframe) {
	                element = iframe;
	            }
	        }
	
	        // iframe url is not a Vimeo url
	        if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
	            throw new Error('The player element passed isn’t a Vimeo embed.');
	        }
	
	        // If there is already a player object in the map, return that
	        if (playerMap.has(element)) {
	            return playerMap.get(element);
	        }
	
	        this.element = element;
	        this.origin = '*';
	
	        var readyPromise = new npo_src(function (resolve, reject) {
	            var onMessage = function onMessage(event) {
	                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
	                    return;
	                }
	
	                if (_this.origin === '*') {
	                    _this.origin = event.origin;
	                }
	
	                var data = parseMessageData(event.data);
	                var isReadyEvent = 'event' in data && data.event === 'ready';
	                var isPingResponse = 'method' in data && data.method === 'ping';
	
	                if (isReadyEvent || isPingResponse) {
	                    _this.element.setAttribute('data-ready', 'true');
	                    resolve();
	                    return;
	                }
	
	                processData(_this, data);
	            };
	
	            if (window.addEventListener) {
	                window.addEventListener('message', onMessage, false);
	            } else if (window.attachEvent) {
	                window.attachEvent('onmessage', onMessage);
	            }
	
	            if (_this.element.nodeName !== 'IFRAME') {
	                var params = getOEmbedParameters(element, options);
	                var url = getVimeoUrl(params);
	
	                getOEmbedData(url, params).then(function (data) {
	                    var iframe = createEmbed(data, element);
	                    _this.element = iframe;
	                    swapCallbacks(element, iframe);
	
	                    return data;
	                }).catch(function (error) {
	                    return reject(error);
	                });
	            }
	        });
	
	        // Store a copy of this Player in the map
	        readyMap.set(this, readyPromise);
	        playerMap.set(this.element, this);
	
	        // Send a ping to the iframe so the ready promise will be resolved if
	        // the player is already ready.
	        if (this.element.nodeName === 'IFRAME') {
	            postMessage(this, 'ping');
	        }
	
	        return this;
	    }
	
	    /**
	     * Get a promise for a method.
	     *
	     * @author Brad Dougherty <brad@vimeo.com>
	     * @param {string} name The API method to call.
	     * @param {Object} [args={}] Arguments to send via postMessage.
	     * @return {Promise}
	     */
	
	
	    _createClass(Player, [{
	        key: 'callMethod',
	        value: function callMethod(name) {
	            var _this2 = this;
	
	            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            return new npo_src(function (resolve, reject) {
	                // We are storing the resolve/reject handlers to call later, so we
	                // can’t return here.
	                // eslint-disable-next-line promise/always-return
	                return _this2.ready().then(function () {
	                    storeCallback(_this2, name, {
	                        resolve: resolve,
	                        reject: reject
	                    });
	
	                    postMessage(_this2, name, args);
	                });
	            });
	        }
	
	        /**
	         * Get a promise for the value of a player property.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} name The property name
	         * @return {Promise}
	         */
	
	    }, {
	        key: 'get',
	        value: function get(name) {
	            var _this3 = this;
	
	            return new npo_src(function (resolve, reject) {
	                name = getMethodName(name, 'get');
	
	                // We are storing the resolve/reject handlers to call later, so we
	                // can’t return here.
	                // eslint-disable-next-line promise/always-return
	                return _this3.ready().then(function () {
	                    storeCallback(_this3, name, {
	                        resolve: resolve,
	                        reject: reject
	                    });
	
	                    postMessage(_this3, name);
	                });
	            });
	        }
	
	        /**
	         * Get a promise for setting the value of a player property.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} name The API method to call.
	         * @param {mixed} value The value to set.
	         * @return {Promise}
	         */
	
	    }, {
	        key: 'set',
	        value: function set(name, value) {
	            var _this4 = this;
	
	            return npo_src.resolve(value).then(function (val) {
	                name = getMethodName(name, 'set');
	
	                if (val === undefined || val === null) {
	                    throw new TypeError('There must be a value to set.');
	                }
	
	                return _this4.ready().then(function () {
	                    return new npo_src(function (resolve, reject) {
	                        storeCallback(_this4, name, {
	                            resolve: resolve,
	                            reject: reject
	                        });
	
	                        postMessage(_this4, name, val);
	                    });
	                });
	            });
	        }
	
	        /**
	         * Add an event listener for the specified event. Will call the
	         * callback with a single parameter, `data`, that contains the data for
	         * that event.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} eventName The name of the event.
	         * @param {function(*)} callback The function to call when the event fires.
	         * @return {void}
	         */
	
	    }, {
	        key: 'on',
	        value: function on(eventName, callback) {
	            if (!eventName) {
	                throw new TypeError('You must pass an event name.');
	            }
	
	            if (!callback) {
	                throw new TypeError('You must pass a callback function.');
	            }
	
	            if (typeof callback !== 'function') {
	                throw new TypeError('The callback must be a function.');
	            }
	
	            var callbacks = getCallbacks(this, 'event:' + eventName);
	            if (callbacks.length === 0) {
	                this.callMethod('addEventListener', eventName).catch(function () {
	                    // Ignore the error. There will be an error event fired that
	                    // will trigger the error callback if they are listening.
	                });
	            }
	
	            storeCallback(this, 'event:' + eventName, callback);
	        }
	
	        /**
	         * Remove an event listener for the specified event. Will remove all
	         * listeners for that event if a `callback` isn’t passed, or only that
	         * specific callback if it is passed.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} eventName The name of the event.
	         * @param {function} [callback] The specific callback to remove.
	         * @return {void}
	         */
	
	    }, {
	        key: 'off',
	        value: function off(eventName, callback) {
	            if (!eventName) {
	                throw new TypeError('You must pass an event name.');
	            }
	
	            if (callback && typeof callback !== 'function') {
	                throw new TypeError('The callback must be a function.');
	            }
	
	            var lastCallback = removeCallback(this, 'event:' + eventName, callback);
	
	            // If there are no callbacks left, remove the listener
	            if (lastCallback) {
	                this.callMethod('removeEventListener', eventName).catch(function (e) {
	                    // Ignore the error. There will be an error event fired that
	                    // will trigger the error callback if they are listening.
	                });
	            }
	        }
	
	        /**
	         * A promise to load a new video.
	         *
	         * @promise LoadVideoPromise
	         * @fulfill {number} The video with this id successfully loaded.
	         * @reject {TypeError} The id was not a number.
	         */
	        /**
	         * Load a new video into this embed. The promise will be resolved if
	         * the video is successfully loaded, or it will be rejected if it could
	         * not be loaded.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {number} id The id of the video.
	         * @return {LoadVideoPromise}
	         */
	
	    }, {
	        key: 'loadVideo',
	        value: function loadVideo(id) {
	            return this.callMethod('loadVideo', id);
	        }
	
	        /**
	         * A promise to perform an action when the Player is ready.
	         *
	         * @todo document errors
	         * @promise LoadVideoPromise
	         * @fulfill {void}
	         */
	        /**
	         * Trigger a function when the player iframe has initialized. You do not
	         * need to wait for `ready` to trigger to begin adding event listeners
	         * or calling other methods.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {ReadyPromise}
	         */
	
	    }, {
	        key: 'ready',
	        value: function ready() {
	            var readyPromise = readyMap.get(this);
	            return npo_src.resolve(readyPromise);
	        }
	
	        /**
	         * A promise to add a cue point to the player.
	         *
	         * @promise AddCuePointPromise
	         * @fulfill {string} The id of the cue point to use for removeCuePoint.
	         * @reject {RangeError} the time was less than 0 or greater than the
	         *         video’s duration.
	         * @reject {UnsupportedError} Cue points are not supported with the current
	         *         player or browser.
	         */
	        /**
	         * Add a cue point to the player.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {number} time The time for the cue point.
	         * @param {object} [data] Arbitrary data to be returned with the cue point.
	         * @return {AddCuePointPromise}
	         */
	
	    }, {
	        key: 'addCuePoint',
	        value: function addCuePoint(time) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            return this.callMethod('addCuePoint', { time: time, data: data });
	        }
	
	        /**
	         * A promise to remove a cue point from the player.
	         *
	         * @promise AddCuePointPromise
	         * @fulfill {string} The id of the cue point that was removed.
	         * @reject {InvalidCuePoint} The cue point with the specified id was not
	         *         found.
	         * @reject {UnsupportedError} Cue points are not supported with the current
	         *         player or browser.
	         */
	        /**
	         * Remove a cue point from the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} id The id of the cue point to remove.
	         * @return {RemoveCuePointPromise}
	         */
	
	    }, {
	        key: 'removeCuePoint',
	        value: function removeCuePoint(id) {
	            return this.callMethod('removeCuePoint', id);
	        }
	
	        /**
	         * A representation of a text track on a video.
	         *
	         * @typedef {Object} VimeoTextTrack
	         * @property {string} language The ISO language code.
	         * @property {string} kind The kind of track it is (captions or subtitles).
	         * @property {string} label The human‐readable label for the track.
	         */
	        /**
	         * A promise to enable a text track.
	         *
	         * @promise EnableTextTrackPromise
	         * @fulfill {VimeoTextTrack} The text track that was enabled.
	         * @reject {InvalidTrackLanguageError} No track was available with the
	         *         specified language.
	         * @reject {InvalidTrackError} No track was available with the specified
	         *         language and kind.
	         */
	        /**
	         * Enable the text track with the specified language, and optionally the
	         * specified kind (captions or subtitles).
	         *
	         * When set via the API, the track language will not change the viewer’s
	         * stored preference.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} language The two‐letter language code.
	         * @param {string} [kind] The kind of track to enable (captions or subtitles).
	         * @return {EnableTextTrackPromise}
	         */
	
	    }, {
	        key: 'enableTextTrack',
	        value: function enableTextTrack(language, kind) {
	            if (!language) {
	                throw new TypeError('You must pass a language.');
	            }
	
	            return this.callMethod('enableTextTrack', {
	                language: language,
	                kind: kind
	            });
	        }
	
	        /**
	         * A promise to disable the active text track.
	         *
	         * @promise DisableTextTrackPromise
	         * @fulfill {void} The track was disabled.
	         */
	        /**
	         * Disable the currently-active text track.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {DisableTextTrackPromise}
	         */
	
	    }, {
	        key: 'disableTextTrack',
	        value: function disableTextTrack() {
	            return this.callMethod('disableTextTrack');
	        }
	
	        /**
	         * A promise to pause the video.
	         *
	         * @promise PausePromise
	         * @fulfill {void} The video was paused.
	         */
	        /**
	         * Pause the video if it’s playing.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {PausePromise}
	         */
	
	    }, {
	        key: 'pause',
	        value: function pause() {
	            return this.callMethod('pause');
	        }
	
	        /**
	         * A promise to play the video.
	         *
	         * @promise PlayPromise
	         * @fulfill {void} The video was played.
	         */
	        /**
	         * Play the video if it’s paused. **Note:** on iOS and some other
	         * mobile devices, you cannot programmatically trigger play. Once the
	         * viewer has tapped on the play button in the player, however, you
	         * will be able to use this function.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {PlayPromise}
	         */
	
	    }, {
	        key: 'play',
	        value: function play() {
	            return this.callMethod('play');
	        }
	
	        /**
	         * A promise to unload the video.
	         *
	         * @promise UnloadPromise
	         * @fulfill {void} The video was unloaded.
	         */
	        /**
	         * Return the player to its initial state.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {UnloadPromise}
	         */
	
	    }, {
	        key: 'unload',
	        value: function unload() {
	            return this.callMethod('unload');
	        }
	
	        /**
	         * A promise to get the autopause behavior of the video.
	         *
	         * @promise GetAutopausePromise
	         * @fulfill {boolean} Whether autopause is turned on or off.
	         * @reject {UnsupportedError} Autopause is not supported with the current
	         *         player or browser.
	         */
	        /**
	         * Get the autopause behavior for this player.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetAutopausePromise}
	         */
	
	    }, {
	        key: 'getAutopause',
	        value: function getAutopause() {
	            return this.get('autopause');
	        }
	
	        /**
	         * A promise to set the autopause behavior of the video.
	         *
	         * @promise SetAutopausePromise
	         * @fulfill {boolean} Whether autopause is turned on or off.
	         * @reject {UnsupportedError} Autopause is not supported with the current
	         *         player or browser.
	         */
	        /**
	         * Enable or disable the autopause behavior of this player.
	         *
	         * By default, when another video is played in the same browser, this
	         * player will automatically pause. Unless you have a specific reason
	         * for doing so, we recommend that you leave autopause set to the
	         * default (`true`).
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {boolean} autopause
	         * @return {SetAutopausePromise}
	         */
	
	    }, {
	        key: 'setAutopause',
	        value: function setAutopause(autopause) {
	            return this.set('autopause', autopause);
	        }
	
	        /**
	         * A promise to get the color of the player.
	         *
	         * @promise GetColorPromise
	         * @fulfill {string} The hex color of the player.
	         */
	        /**
	         * Get the color for this player.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetColorPromise}
	         */
	
	    }, {
	        key: 'getColor',
	        value: function getColor() {
	            return this.get('color');
	        }
	
	        /**
	         * A promise to set the color of the player.
	         *
	         * @promise SetColorPromise
	         * @fulfill {string} The color was successfully set.
	         * @reject {TypeError} The string was not a valid hex or rgb color.
	         * @reject {ContrastError} The color was set, but the contrast is
	         *         outside of the acceptable range.
	         * @reject {EmbedSettingsError} The owner of the player has chosen to
	         *         use a specific color.
	         */
	        /**
	         * Set the color of this player to a hex or rgb string. Setting the
	         * color may fail if the owner of the video has set their embed
	         * preferences to force a specific color.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {string} color The hex or rgb color string to set.
	         * @return {SetColorPromise}
	         */
	
	    }, {
	        key: 'setColor',
	        value: function setColor(color) {
	            return this.set('color', color);
	        }
	
	        /**
	         * A representation of a cue point.
	         *
	         * @typedef {Object} VimeoCuePoint
	         * @property {number} time The time of the cue point.
	         * @property {object} data The data passed when adding the cue point.
	         * @property {string} id The unique id for use with removeCuePoint.
	         */
	        /**
	         * A promise to get the cue points of a video.
	         *
	         * @promise GetCuePointsPromise
	         * @fulfill {VimeoCuePoint[]} The cue points added to the video.
	         * @reject {UnsupportedError} Cue points are not supported with the current
	         *         player or browser.
	         */
	        /**
	         * Get an array of the cue points added to the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetCuePointsPromise}
	         */
	
	    }, {
	        key: 'getCuePoints',
	        value: function getCuePoints() {
	            return this.get('cuePoints');
	        }
	
	        /**
	         * A promise to get the current time of the video.
	         *
	         * @promise GetCurrentTimePromise
	         * @fulfill {number} The current time in seconds.
	         */
	        /**
	         * Get the current playback position in seconds.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetCurrentTimePromise}
	         */
	
	    }, {
	        key: 'getCurrentTime',
	        value: function getCurrentTime() {
	            return this.get('currentTime');
	        }
	
	        /**
	         * A promise to set the current time of the video.
	         *
	         * @promise SetCurrentTimePromise
	         * @fulfill {number} The actual current time that was set.
	         * @reject {RangeError} the time was less than 0 or greater than the
	         *         video’s duration.
	         */
	        /**
	         * Set the current playback position in seconds. If the player was
	         * paused, it will remain paused. Likewise, if the player was playing,
	         * it will resume playing once the video has buffered.
	         *
	         * You can provide an accurate time and the player will attempt to seek
	         * to as close to that time as possible. The exact time will be the
	         * fulfilled value of the promise.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {number} currentTime
	         * @return {SetCurrentTimePromise}
	         */
	
	    }, {
	        key: 'setCurrentTime',
	        value: function setCurrentTime(currentTime) {
	            return this.set('currentTime', currentTime);
	        }
	
	        /**
	         * A promise to get the duration of the video.
	         *
	         * @promise GetDurationPromise
	         * @fulfill {number} The duration in seconds.
	         */
	        /**
	         * Get the duration of the video in seconds. It will be rounded to the
	         * nearest second before playback begins, and to the nearest thousandth
	         * of a second after playback begins.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetDurationPromise}
	         */
	
	    }, {
	        key: 'getDuration',
	        value: function getDuration() {
	            return this.get('duration');
	        }
	
	        /**
	         * A promise to get the ended state of the video.
	         *
	         * @promise GetEndedPromise
	         * @fulfill {boolean} Whether or not the video has ended.
	         */
	        /**
	         * Get the ended state of the video. The video has ended if
	         * `currentTime === duration`.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetEndedPromise}
	         */
	
	    }, {
	        key: 'getEnded',
	        value: function getEnded() {
	            return this.get('ended');
	        }
	
	        /**
	         * A promise to get the loop state of the player.
	         *
	         * @promise GetLoopPromise
	         * @fulfill {boolean} Whether or not the player is set to loop.
	         */
	        /**
	         * Get the loop state of the player.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetLoopPromise}
	         */
	
	    }, {
	        key: 'getLoop',
	        value: function getLoop() {
	            return this.get('loop');
	        }
	
	        /**
	         * A promise to set the loop state of the player.
	         *
	         * @promise SetLoopPromise
	         * @fulfill {boolean} The loop state that was set.
	         */
	        /**
	         * Set the loop state of the player. When set to `true`, the player
	         * will start over immediately once playback ends.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {boolean} loop
	         * @return {SetLoopPromise}
	         */
	
	    }, {
	        key: 'setLoop',
	        value: function setLoop(loop) {
	            return this.set('loop', loop);
	        }
	
	        /**
	         * A promise to get the paused state of the player.
	         *
	         * @promise GetLoopPromise
	         * @fulfill {boolean} Whether or not the video is paused.
	         */
	        /**
	         * Get the paused state of the player.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetLoopPromise}
	         */
	
	    }, {
	        key: 'getPaused',
	        value: function getPaused() {
	            return this.get('paused');
	        }
	
	        /**
	         * A promise to get the text tracks of a video.
	         *
	         * @promise GetTextTracksPromise
	         * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
	         */
	        /**
	         * Get an array of the text tracks that exist for the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetTextTracksPromise}
	         */
	
	    }, {
	        key: 'getTextTracks',
	        value: function getTextTracks() {
	            return this.get('textTracks');
	        }
	
	        /**
	         * A promise to get the embed code for the video.
	         *
	         * @promise GetVideoEmbedCodePromise
	         * @fulfill {string} The `<iframe>` embed code for the video.
	         */
	        /**
	         * Get the `<iframe>` embed code for the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoEmbedCodePromise}
	         */
	
	    }, {
	        key: 'getVideoEmbedCode',
	        value: function getVideoEmbedCode() {
	            return this.get('videoEmbedCode');
	        }
	
	        /**
	         * A promise to get the id of the video.
	         *
	         * @promise GetVideoIdPromise
	         * @fulfill {number} The id of the video.
	         */
	        /**
	         * Get the id of the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoIdPromise}
	         */
	
	    }, {
	        key: 'getVideoId',
	        value: function getVideoId() {
	            return this.get('videoId');
	        }
	
	        /**
	         * A promise to get the title of the video.
	         *
	         * @promise GetVideoTitlePromise
	         * @fulfill {number} The title of the video.
	         */
	        /**
	         * Get the title of the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoTitlePromise}
	         */
	
	    }, {
	        key: 'getVideoTitle',
	        value: function getVideoTitle() {
	            return this.get('videoTitle');
	        }
	
	        /**
	         * A promise to get the native width of the video.
	         *
	         * @promise GetVideoWidthPromise
	         * @fulfill {number} The native width of the video.
	         */
	        /**
	         * Get the native width of the currently‐playing video. The width of
	         * the highest‐resolution available will be used before playback begins.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoWidthPromise}
	         */
	
	    }, {
	        key: 'getVideoWidth',
	        value: function getVideoWidth() {
	            return this.get('videoWidth');
	        }
	
	        /**
	         * A promise to get the native height of the video.
	         *
	         * @promise GetVideoHeightPromise
	         * @fulfill {number} The native height of the video.
	         */
	        /**
	         * Get the native height of the currently‐playing video. The height of
	         * the highest‐resolution available will be used before playback begins.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoHeightPromise}
	         */
	
	    }, {
	        key: 'getVideoHeight',
	        value: function getVideoHeight() {
	            return this.get('videoHeight');
	        }
	
	        /**
	         * A promise to get the vimeo.com url for the video.
	         *
	         * @promise GetVideoUrlPromise
	         * @fulfill {number} The vimeo.com url for the video.
	         * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
	         */
	        /**
	         * Get the vimeo.com url for the video.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVideoUrlPromise}
	         */
	
	    }, {
	        key: 'getVideoUrl',
	        value: function getVideoUrl() {
	            return this.get('videoUrl');
	        }
	
	        /**
	         * A promise to get the volume level of the player.
	         *
	         * @promise GetVolumePromise
	         * @fulfill {number} The volume level of the player on a scale from 0 to 1.
	         */
	        /**
	         * Get the current volume level of the player on a scale from `0` to `1`.
	         *
	         * Most mobile devices do not support an independent volume from the
	         * system volume. In those cases, this method will always return `1`.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @return {GetVolumePromise}
	         */
	
	    }, {
	        key: 'getVolume',
	        value: function getVolume() {
	            return this.get('volume');
	        }
	
	        /**
	         * A promise to set the volume level of the player.
	         *
	         * @promise SetVolumePromise
	         * @fulfill {number} The volume was set.
	         * @reject {RangeError} The volume was less than 0 or greater than 1.
	         */
	        /**
	         * Set the volume of the player on a scale from `0` to `1`. When set
	         * via the API, the volume level will not be synchronized to other
	         * players or stored as the viewer’s preference.
	         *
	         * Most mobile devices do not support setting the volume. An error will
	         * *not* be triggered in that situation.
	         *
	         * @author Brad Dougherty <brad@vimeo.com>
	         * @param {number} volume
	         * @return {SetVolumePromise}
	         */
	
	    }, {
	        key: 'setVolume',
	        value: function setVolume(volume) {
	            return this.set('volume', volume);
	        }
	    }]);
	
	    return Player;
	}();
	
	initializeEmbeds();
	
	return Player;
	
	})));
	
	//# sourceMappingURL=player.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../../../timers-browserify/main.js */ 35).setImmediate))

/***/ },
/* 35 */
/*!*************************************!*\
  !*** ./~/timers-browserify/main.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(/*! setimmediate */ 36);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 36 */
/*!****************************************!*\
  !*** ./~/setimmediate/setImmediate.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../process/browser.js */ 37)))

/***/ },
/* 37 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 38 */
/*!**************************************!*\
  !*** ./_assets/js/modules/LoadIn.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _helpers = __webpack_require__(/*! ./helpers */ 33);
	
	var imagesLoaded = __webpack_require__(/*! imagesloaded */ 30);
	var loadInEls = document.querySelectorAll('.Arrow, .Image, .Video, .iPad, .Slider');
	
	var checkElements = function checkElements() {
		var triggerPoint = window.pageYOffset + window.innerHeight * 0.96;
		for (var i = 0; i < loadInEls.length; i++) {
			var yPos = (0, _helpers.getTopOffset)(loadInEls[i]);
			if (yPos < triggerPoint) {
				loadInEls[i].classList.add('is-in-view');
			}
		}
	};
	
	imagesLoaded('body > main', function () {
		checkElements();
	});
	
	window.addEventListener('scroll', function (e) {
		checkElements();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map