/*

HTML file can't connect to the file atm. File doesn't run the functions. I put in a alert() to check if both my 
functions are working. I also double checked by putting them under <script> tag. 

*/

function loadHome(){
	window.location = "header.html"
}

function loadUniversity(){
	retval = confirm("You will be redirected to the university website. Do you wish to continue?");
	if (retval == true) window.location = "https://www.utoronto.ca/";
	

	}


function loadBackground(){
	window.location = "background.html";
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
	window.location ="projects.html";
}

function loadHelp(){
	window.location = "help.html";
}

function loadHistory(){
	window.location = "history.html";
}

function contactMe(){
	window.location = "contactMe.html";
}