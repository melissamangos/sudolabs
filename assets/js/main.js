"use strict";

// Global Variables
var mentor_blurb;
var instructor_blurb;
var team_blurb;

var work_left;
var work_middle;
var work_right;

var hidden_left;
var hidden_middle;
var hidden_right;

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

	hidden_left = document.getElementById("hidden-left");
	hidden_middle = document.getElementById("hidden-middle");
	hidden_right = document.getElementById("hidden-right");

	hidden_left.parentNode.removeChild(hidden_left);
	hidden_middle.parentNode.removeChild(hidden_middle);
	hidden_right.parentNode.removeChild(hidden_right);

	work_left = document.getElementById("workshop-left");
	work_middle = document.getElementById("workshop-middle");
	work_right = document.getElementById("workshop-right");


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

function closeAnimation(elem) {
    var height = 177;
    var id = setInterval(frame, 1);
    function frame() {
        if (height <= 42) {
            clearInterval(id);
        } else {
            height = height - 5; 
            elem.style.height = height + 'px'; 
        }
    }
}

function extendWorkshop(elem) {
	// elem.parentNode.toggleClass("expand");
	if (elem.classList.contains("expand")) {
		elem.classList.remove("expand");
	} else {
		elem.classList.add("expand");
	}
	// switch (elem.id) {
	// 	case "workshop-left":
	// 		// console.log(hidden_left);
	// 		elem.appendChild(hidden_left);
	// 		// openWorkshop(hidden_left);
	// 		// document.getElementById("workshop-list").removeChild(work_middle);
	// 		// document.getElementById("workshop-list").removeChild(work_right);
	// 		break;
	// 	case "workshop-right":
	// 		elem.appendChild(hidden_right);
	// 		document.getElementById("workshop-list").removeChild(work_middle);
	// 		document.getElementById("workshop-list").removeChild(work_left);
	// 		break;
	// 	case "workshop-middle":
	// 		elem.appendChild(hidden_middle);
	// 		document.getElementById("workshop-list").removeChild(work_left);
	// 		document.getElementById("workshop-list").removeChild(work_right);
	// 		break;
	// }

	// // elem.appendChild(child);
	// openWorkshop(elem);

}

// function openWorkshop(elem) {
// 	var text_stay = elem.childNodes[1];
// 	var width = 30;
// 	var id = setInterval(frame, 5);
// 	text_stay.style.width = "30vw";
// 	// text_stay.style.marginLeft = "0px";
// 	function frame() {
// 		if (width == 80) {
// 			clearInterval(id);
// 		} else {
// 			width++;
// 			elem.style.width = width + "vw";
// 			text_stay.style.width = "30vw";
// 		}
// 	}
// }