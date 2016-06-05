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

function volunteerDrop(section) {
	switch(section) {
		case "mentor-full":
			if (mentor == 0) {
				document.getElementById(section).appendChild(mentor_blurb);
				mentor = 1;
			} else {
				document.getElementById(section).removeChild(mentor_blurb);
				mentor = 0;
			};
		case "instructor-full":
			if (instruc == 0) {
				document.getElementById(section).appendChild(instructor_blurb);
				instruc = 1;
			} else {
				document.getElementById(section).removeChild(instructor_blurb);
				instruc = 0;
			};
		case "team-full":
			if (instruc == 0) {
				document.getElementById(section).appendChild(team_blurb);
				team = 1;
			} else {
				document.getElementById(section).removeChild(team_blurb);
				team = 0;
			};
	}
}