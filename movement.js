//initial position of the header

function init(){
	movedImg.style.position = 'relative';
	movedImg.style.left = '11em';
	movedImg.style.up = '2em';
}

function moveRight(){
	movedImg.style.left = parseInt(movedImg.style.left)+2+'px';
}

function moveDown(){
	movedImg.style.up = parseInt(movedImg.stlye.up)+2+'px';
}

function moveUp(){
	movedImg.style.up = parseInt(movedImg.style.up)-2+'px';
}

function moveLeft() {
	movedImg.style.left = parseInt(movedImg.style.left)-2+'px';
}

function movement() {
	if ( ( movedImg.style.left >= '11em') and (movedImg.style.left <= '20em') ) {

		if (movedImg.style.up <= '2em')
			moveRight();
		if (movedImg.style.up >= '20em')
			moveLeft();

		if (movedImg.style.left <= '11em')
		{
			movedImg.style.up = parseInt(movedImg.style.up) - 2 + 'px'; 
		}

		if (movedImg.style.left >= '20em')
		{
			movedImg.style.up = parseInt(movedImg.style.up) + 2+'px';
		}
	}

	if ( ( movedImg.style.up > '2em') and ( movedImg.style.up <= '20em' ) ){

		if (movedImg.style.left >= '20em')
			moveDown();
		if (movedImg.style.left <= '11em')
			moveUp();

		if (movedImg.style.up >= '20em')
		{
			movedImg.style.left = parseInt(movedImg.style.left) - 2 + 'px';
		}

		if (movedImg.style.up <= '2em')
		{
			movedImg.style.left = parseInt(movedImg.style.left) + 2 + 'px';
		}
	}



}