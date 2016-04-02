var gameBoard = ['','','','','','','','',''];

var count = 0;
var gameRunning = true;

var playerTurn = "X"
var winnerX = 0;
var winnerO = 0;
var winnerTie =0;


var flipTurn = function() {
  if(playerTurn === "X") {
    playerTurn = "O";
  }  else {
    playerTurn = "X";
  }
}

var playerXscore = 0;
var playerOscore = 0;


//check gameboard to see if that spot has already been marked
var updateCell = function(cellNum, playerTurn) {
  if (gameBoard[cellNum -1] !== 'X' && gameBoard[cellNum -1] !== 'O') {
    var cellId = "cell" + cellNum;
    document.getElementById(cellId).innerHTML = playerTurn;  
      document.getElementById('pX').innerHTML = "TURN: " + playerTurn;
    count ++;
    console.log(count);
  } else {
    alert ("Choose a different box!");
  }
}



var savePlay = function(playerTurn, cellNum) {
  gameBoard[(cellNum -1)] = playerTurn;
  console.log("The gameBoard is: " + gameBoard);
}

var whoWon = function() {
if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') ||
    (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') ||
    (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') ||
    (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') ||
    (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') ||
    (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') ||
    (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') ||
    (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '')
) {
  document.getElementById('whoWon').innerHTML = "Player: " + playerTurn + " won"; 
  // alert(playerTurn + " has won!");
  if (playerTurn === "X") {
    winnerX = winnerX + 1;
    document.getElementById('scoreX').innerHTML = winnerX; 
  } else if (playerTurn === "O") {
    winnerO = winnerO + 1;
    document.getElementById('scoreO').innerHTML = winnerO; 
  } else {
    winnerTie = winnerTie +1;
  }
  gameRunning = false;
} else if ( count === 9) {
  document.getElementById('whoWon').innerHTML = "It's a tie!" 
  // alert("It's a TIE!");
  gameRunning = false;
}
};



//gameLoop will be called by each event listener
//gameLoop consists of several functions
var gameLoop = function(cellNum) {
    if (gameRunning === true) {

  console.log("you clicked on "+ cellNum);

  console.log("it is playerTurn " + playerTurn);
   updateCell(cellNum, playerTurn);
   savePlay(playerTurn, cellNum); 
   whoWon();
   flipTurn(); 
  //alert("IT IS PLAYER " + playerTurn + " 'S TURN!"); 
  } else {
    // startGame();   
    //alert ("GAME OVER");
//alert for playerTurn still shows up here after the game is over 

    gameRunning = false;
  }
}



document.getElementById("square1").addEventListener("click", function() {  
        gameLoop(1);

})

document.getElementById("square2").addEventListener("click", function() {  
        gameLoop(2);

})
document.getElementById("square3").addEventListener("click", function() {  
        gameLoop(3);

})
document.getElementById("square4").addEventListener("click", function() {  
        gameLoop(4);

})
document.getElementById("square5").addEventListener("click", function() {  
        gameLoop(5);

})
document.getElementById("square6").addEventListener("click", function() {  
        gameLoop(6);

})
document.getElementById("square7").addEventListener("click", function() {  
        gameLoop(7);

})
document.getElementById("square8").addEventListener("click", function() {  
        gameLoop(8);

})
document.getElementById("square9").addEventListener("click", function() {  
        gameLoop(9);

})

document.getElementById("reset").addEventListener("click", function(){
  document.getElementById('cell1').innerHTML ="";
  document.getElementById('cell2').innerHTML ="";
  document.getElementById('cell3').innerHTML ="";
  document.getElementById('cell4').innerHTML ="";
  document.getElementById('cell5').innerHTML ="";
  document.getElementById('cell6').innerHTML ="";
  document.getElementById('cell7').innerHTML ="";
  document.getElementById('cell8').innerHTML ="";
  document.getElementById('cell9').innerHTML ="";
  gameBoard = ['','','','','','','','',''];
  count = 0;
  gameRunning = true;
  document.getElementById('pX').innerHTML = "";
  document.getElementById('whoWon').innerHTML = ""; 
})




