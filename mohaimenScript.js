/*

HTML file can't connect to the file atm. File doesn't run the functions. I put in a alert() to check if both my 
functions are working. I also double checked by putting them under <script> tag. 

*/

function userName(){
	

}

function loadUniversity(){
	retval = confirm("You will be redirected to the university website. Do you wish to continue?");
	if (retval == true) window.location = "https://www.utoronto.ca/";
	

	}


function loadMinor(){
	retval = confirm("You will be redirected to the minor website. Do you wish to continue?");
	if (retval == true) window.location = "http://undergrad.engineering.utoronto.ca/academics-registration/minors-certificates/undergraduate-engineering-minors/robotics-and-mechatronics-minor/";
}

function loadProgram(){
	retval = confirm("You will be redirected to the program website. Do you wish to continue?");
	if (retval == true) window.location = "https://www.ece.utoronto.ca/";
}


function loadProjects(){
	alert("Loading Projects");
	window.location ="projects.html";
}

function loadHelp(){
	alert("You are being redirected to help");
	window.location = "help.html";
}

function loadHistory(){
	alert("Loading Mohaimen's History");
	window.location = "history.html";
}

function newLine(){
	
}