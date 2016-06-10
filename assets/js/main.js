"use strict";

/**************************************
FUNCTION: 	volunteerDrop

ARGUEMENTS: elem - sends the current 
			element clicked to append
			or remove the respective 
			volunteer paragraph

PURPOSE: 	Adds 'active' if opening
			element, and 'inactive' if
			closing element
			By default, adds 'active'
**************************************/
function volunteerDrop(elem) {
	if (elem.classList.contains("active")) {
		elem.classList.remove("active");
		elem.classList.add("inactive");
	} else if (elem.classList.contains("active"))  {
		elem.classList.remove("inactive");
		elem.classList.add("active");
	} else {
		elem.classList.add("active");
	}
}

/**************************************
FUNCTION: 	forceOpen

ARGUEMENTS: id - id of the volunteer
			element that is forced 
			to open

PURPOSE: 	Force a volunteer element
			open when redirected to
			volunteer
**************************************/
function forceOpen(id) {
	var elem = document.getElementById(id);
	volunteerDrop(elem);
}

/**************************************
FUNCTION: 	openAnimation

ARGUEMENTS: elem - sends current element 

PURPOSE: 	Animates a volunteer element
			expanding. Uses height in 
			pixels & setInterval determines
			to length of animation
**************************************/
function openAnimation(elem) {
	var height = 42;
	var id = setInterval(frame, 1);
	function frame() {
		if (height == 177) {
			clearInterval(id);
		} else {
			height = height + 5; 
			elem.style.height = height + 'px'; 
		}
	}
}

/**************************************
FUNCTION: 	closeAnimation

ARGUEMENTS: elem - sends current element 

PURPOSE: 	Animates a volunteer element
			closing. Uses height in 
			pixels & setInterval determines
			to length of animation
**************************************/
function closeAnimation(elem) {
	var height = 178;
	var id = setInterval(frame, 1);
	function frame() {
		if (height <= 42) {
			clearInterval(id);
		} else {
			height = height - 2; 
			elem.style.height = height + 'px'; 
		}
	}
}

/**************************************
FUNCTION: 	extendWorkshop

ARGUEMENTS: elem - sends current element 

PURPOSE: 	Adds or removes class 'expand'
			to a workshop element
**************************************/
function extendWorkshop(elem) {
	if (elem.classList.contains("expand")) {
		elem.classList.remove("expand");
	} else {
		elem.classList.add("expand");
	}
}

/***************************************************
NOTE: THE FOLLOWING FUNCTIONS ARE FROM THE INTERNET
***************************************************/

/**************************************
FUNCTION: 	currentYPosition

PURPOSE: 	Determines Y position on 
			the page for scrolling
**************************************/
function currentYPosition() {
	// Firefox, Chrome, Opera, Safari
	if (self.pageYOffset) return self.pageYOffset;
	// Internet Explorer 6 - standards mode
	if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	// Internet Explorer 6, 7 and 8
	if (document.body.scrollTop) return document.body.scrollTop;
	return 0;
}

/**************************************
FUNCTION: 	elmYPosition

ARGUEMENTS: eID - ID of element to 
			scroll to

PURPOSE: 	Determines Y coordinate of
			destination element
**************************************/
function elmYPosition(eID) {
	var elem = document.getElementById(eID);
	var y = elem.offsetTop;
	var node = elem;
	while (node.offsetParent && node.offsetParent != document.body) {
		node = node.offsetParent;
		y += node.offsetTop;
	} return y;
}

/**************************************
FUNCTION: 	smoothScroll

ARGUEMENTS: eID - ID of element to 
			scroll to

PURPOSE: 	Takes the current position,
			and the position of the 
			destination, determines 
			speed to scroll and animates
			page scrolling
**************************************/
function smoothScroll(eID) {
	var startY = currentYPosition();
	var stopY = elmYPosition(eID) - 60;
	var distance = stopY > startY ? stopY - startY : startY - stopY;
	if (distance < 100) {
		scrollTo(0, stopY); return;
	}
	var speed = Math.round(distance / 100);
	if (speed >= 20) speed = 20;
	var step = Math.round(distance / 25);
	var leapY = stopY > startY ? startY + step : startY - step;
	var timer = 0;
	if (stopY > startY) {
		for ( var i=startY; i<stopY; i+=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		} return;
	}
	for ( var i=startY; i>stopY; i-=step ) {
		setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	}
}
