var gameBoard = ['e','e','e','e','e','e','e','e','e'];


var playerTurn = "X";
var flipTurn = function() {
  if(playerTurn === "X") {
    playerTurn = "O";
  }  else {
    playerTurn = "X";
  }
}


//check gameboard to see if that spot has already been marked
var updateCell = function(cellNum, playerTurn) {
  if (gameBoard[cellNum -1] !== 'X' && gameBoard[cellNum -1] !== 'O') {
    var cellId = "cell" + cellNum;
    document.getElementById(cellId).innerHTML = playerTurn;  
  } else {
    alert ("Choose a different box!");
  }
}





// var updateCell = function(cellNum) {
//     var cellId = "cell" + cellNum;
//     document.getElementById(cellId).innerHTML = playerTurn;       
//     }



var savePlay = function(playerTurn, cellNum) {
  gameBoard[(cellNum -1)] = playerTurn;
  console.log("The gameBoard is: " + gameBoard);
}



//gameLoop will be called by each event listener
//gameLoop consists several functions
var gameLoop = function(cellNum) {
  console.log("you clicked on "+ cellNum);

  console.log("it is playerTurn " + playerTurn);
   updateCell(cellNum, playerTurn);
   savePlay(playerTurn, cellNum); 
   flipTurn();   

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