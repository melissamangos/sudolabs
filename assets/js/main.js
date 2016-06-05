"use strict";

// Global Variables
var mentor_blurb;
var instructor_blurb;
var team_blurb;

var mentor = 0;
var instruc = 0;
var team = 0;

window.onload = function() {
	mentor_blurb = document.getElementById("mentors");
	instructor_blurb = document.getElementById("instructors");
	team_blurb = document.getElementById("team");

	mentor_blurb.parentNode.removeChild(mentor_blurb);
	instructor_blurb.parentNode.removeChild(instructor_blurb);
	team_blurb.parentNode.removeChild(team_blurb);
}

function volunteerDrop(parent) {
	makeActive(parent);
	switch(parent.id) {
		case "mentor-full":
			if (mentor == 0) {
				openAnimation(parent);
				parent.appendChild(mentor_blurb);

				mentor = 1;
			} else {
				closeAnimation(parent);
				parent.removeChild(mentor_blurb);
				mentor = 0;
			}
			break;
		case "instructor-full":
			if (instruc == 0) {
				openAnimation(parent);
				parent.appendChild(instructor_blurb);
				instruc = 1;
			} else {
				closeAnimation(parent);
				parent.removeChild(instructor_blurb);
				instruc = 0;
			}
			break;
		case "team-full":
			if (team == 0) {
				openAnimation(parent);
				parent.appendChild(team_blurb);
				team = 1;
			} else {
				closeAnimation(parent);
				parent.removeChild(team_blurb);
				team = 0;
			}
			break;
	}
}

function makeActive(elem) {
	if (elem.classList.contains("active")) {
		elem.classList.remove("active");
	} else {
		elem.classList.add("active");
	}
}

function openAnimation(elem) {
    var height = 42;
    var id = setInterval(frame, 3);
    function frame() {
        if (height == 150) {
            clearInterval(id);
        } else {
            height++; 
            elem.style.height = height + 'px'; 
        }
    }
}

function closeAnimation(elem) {
    var height = 150;
    var id = setInterval(frame, 3);
    function frame() {
        if (height == 42) {
            clearInterval(id);
        } else {
            height-- 
            elem.style.height = height + 'px'; 
        }
    }
}