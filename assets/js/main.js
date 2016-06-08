"use strict";

// Global Variables
var mentor_blurb;
var instructor_blurb;
var team_blurb;

var mentor = 0;
var instruc = 0;
var team = 0;


/**************************************
FUNCTION: 	window.onload

PURPOSE: 	Removes paragraphs in 
			Volunteer section to be
			added once clicked
**************************************/
window.onload = function() {
	mentor_blurb = document.getElementById("mentors");
	instructor_blurb = document.getElementById("instructors");
	team_blurb = document.getElementById("team");

	mentor_blurb.parentNode.removeChild(mentor_blurb);
	instructor_blurb.parentNode.removeChild(instructor_blurb);
	team_blurb.parentNode.removeChild(team_blurb);
}

/**************************************
FUNCTION: 	volunteerDrop

ARGUEMENTS: elem - sends the current 
			element clicked to append
			or remove the respective 
			volunteer paragraph

PURPOSE: 	Append or remove the blurb
			under each volunteer tab
**************************************/
function volunteerDrop(elem) {
	makeActive(elem);
	switch(elem.id) {
		case "mentor-full":
			if (mentor == 0) {
				openAnimation(elem);
				elem.appendChild(mentor_blurb);

				mentor = 1;
			} else {
				closeAnimation(elem);
				elem.removeChild(mentor_blurb);
				mentor = 0;
			}
			break;
		case "instructor-full":
			if (instruc == 0) {
				openAnimation(elem);
				elem.appendChild(instructor_blurb);
				instruc = 1;
			} else {
				closeAnimation(elem);
				elem.removeChild(instructor_blurb);
				instruc = 0;
			}
			break;
		case "team-full":
			if (team == 0) {
				openAnimation(elem);
				elem.appendChild(team_blurb);
				team = 1;
			} else {
				closeAnimation(elem);
				elem.removeChild(team_blurb);
				team = 0;
			}
			break;
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
FUNCTION: 	makeActive

ARGUEMENTS: elem - sends current element 

PURPOSE: 	Add or remove the 'active' 
			class from an element to
			check if a volunteer tab 
			is open or closed
**************************************/
function makeActive(elem) {
	if (elem.classList.contains("active")) {
		elem.classList.remove("active");
	} else {
		elem.classList.add("active");
	}
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

/**************************************
NOTE: THE FOLLOWING FUNCTIONS ARE NOT OURS
**************************************/

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
