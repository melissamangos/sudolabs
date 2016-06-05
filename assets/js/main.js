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
	switch(parent.id) {
		case "mentor-full":
			if (mentor == 0) {
				parent.appendChild(mentor_blurb);
				mentor = 1;
			} else {
				parent.removeChild(mentor_blurb);
				mentor = 0;
			}
			removeGlyphClass("mentor-glyph");
			break;
		case "instructor-full":
			if (instruc == 0) {
				parent.appendChild(instructor_blurb);
				instruc = 1;
			} else {
				parent.removeChild(instructor_blurb);
				instruc = 0;
			}
			removeGlyphClass("instructor-glyph");
			break;
		case "team-full":
			if (team == 0) {
				parent.appendChild(team_blurb);
				team = 1;
			} else {
				parent.removeChild(team_blurb);
				team = 0;
			}
			removeGlyphClass("team-glyph");
			break;
	}
}

function removeGlyphClass(glyphID) {
	var elem = document.getElementById(glyphID);
	console.log(elem.classList)
	if (elem.classList.contains("glyphicon-chevron-right")) {
		elem.classList.remove("glyphicon-chevron-right");
		elem.classList.add("glyphicon-chevron-down");
	} else {
		elem.classList.remove("glyphicon-chevron-down");
		elem.classList.add("glyphicon-chevron-right");
	}
}