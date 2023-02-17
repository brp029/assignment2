document.getElementById("gameboard").innerHTML = grid;document.getElementById("gameboard").innerHTML = grid;document.getElementById("gameboard").innerHTML = grid;document.getElementById("gameboard").innerHTML = grid;document.getElementById("gameboard").innerHTML = grid;//margin object
let margin = {top: 20, right: 10, bottom: 20, left: 10};

let width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

let turncounter, currentPlayer, box1val, box2val, box3val, box4val, box5val, box6val, box7val, box8val, box9val;
let gamestatus = "gameoff";
let gamewon = "no";

/* window.onload = function() {
	let btn = document.getElementById("myButton");
	btn.addEventListener("click", startGame());
} */

function startGame() {
	// set start values for boxes
	box1val = 1;
	box2val = 2;
	box3val = 3;
	box4val = 4;
	box5val = 5;
	box6val = 6;
	box7val = 7;
	box8val = 8;
	box9val = 9;
	
	// start turn counter
	turncounter = 1;
	
	//set game status to on
	gamestatus = "gameon";
	
	//clear board from previous game, if needed
	for (i = 0; i<9; i++) {
		x=i+1;
		square = "box"+x;
		document.getElementById(square).innerHTML = " ";
	}
	
	// write instructions to screen
	document.getElementById("directions").innerHTML = "Click any open square to claim it."
	
	// call turn indicator function
	yourTurn();
}

function yourTurn() {
	if (turncounter % 2 == 0) {
		currentPlayer = "0";
		document.getElementById("whoseTurn").innerHTML = "Player 2's Turn (0)";
		
	}
	else {
		currentPlayer = "X";
		document.getElementById("whoseTurn").innerHTML = "Player 1's Turn (X)";
	}
	
	turncounter++;
	
}

gameboard.onclick = function(event) {
	
	//check id of clicked square
	let clickedElement = event.target.id;
	
	// check to see if a game is in progress
	if (gamestatus == "gameon") {
		
		//write X or O to chosen square
		document.getElementById(clickedElement).innerHTML = '<span class="letters">' + currentPlayer + '</span>';
		
		//set boxval
		if (clickedElement == "box1") {
			box1val = currentPlayer;
		} 
		else if (clickedElement == "box2") {
			box2val = currentPlayer;
		}
		else if (clickedElement == "box3") {
			box3val = currentPlayer;
		}
		else if (clickedElement == "box4") {
			box4val = currentPlayer;
		}
		else if (clickedElement == "box5") {
			box5val = currentPlayer;
		}
		else if (clickedElement == "box6") {
			box6val = currentPlayer;
		}
		else if (clickedElement == "box7") {
			box7val = currentPlayer;
		}
		else if (clickedElement == "box8") {
			box8val = currentPlayer;
		}
		else if (clickedElement == "box9") {
			box9val = currentPlayer;
		}

	//else write nothing to gameboard if the game is not in progress
	
		checkEnd();
	}
} //end function

function checkEnd() {

	//if win, write win message
	winCheck();
	
	//if stalemate, write stalemate message
	stalemateCheck();
		
	//else continue play
	yourTurn();
}

function winCheck() {
	
	//check for win condition top row	
	if (box1val == box2val && box2val == box3val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition middle row	
	if (box4val == box5val && box5val == box6val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition bottom row	
	if (box7val == box8val && box8val == box9val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition left col	
	if (box1val == box4val && box4val == box7val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition middle col	
	if (box2val == box5val && box5val == box8val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition right col	
	if (box3val == box6val && box6val == box9val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition diag1	
	if (box1val == box5val && box5val == box9val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
	
	//check for win condition diag2	
	if (box7val == box5val && box5val == box3val){
		alert(currentPlayer+" Wins!");
		gamewon = "yes";
	}
}

function stalemateCheck() {
	
	if (turncounter > 9 && gamewon = "no") {
		alert("Stalemate! Better luck next time.");
	}
	
}
