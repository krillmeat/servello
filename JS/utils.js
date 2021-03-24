/**
* SET HERO TO WINDOW HEIGHT
* ----------------------------------------------------------------------------------
* Sets the Hero Section to the Height of the Window +- the Passed in value
* ----------------------------------------------------------------------------------
* @param {Number} heightMod The difference to modify the height by
* --------------------------------------------------------------------------------*/
function setHeroToWindowHeight(heightMod){
    let windowHeight = window.innerHeight;
    let heroElem = document.getElementById("hero");

    heroElem.style.height = ( windowHeight + heightMod ) + "px";
}

/**
* DEBOUNCE
* ----------------------------------------------------------------------------------
* This code was taken from the internet - from Underscore.js
* It only calls your event function every X number of miliseconds
* ----------------------------------------------------------------------------------
* @param {Function} func        The function being debounced
* @param {Number}   wait        The time to wait between each call
* @param {Boolean}  immediate   If true, function calls on leading edge, rather than following
* --------------------------------------------------------------------------------*/
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};