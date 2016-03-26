var playerTurn = "X";
var flipTurn = function() {
  if(playerTurn === "X") {
    playerTurn = "O";
  }  else {
    playerTurn = "X";
  }
}
var updateCell = function(cellNum, playerTurn) {
  var cellId = "cell" + cellNum;
  document.getElementById(cellId).innerHTML = playerTurn;
}


var gameLoop = function(cellNum) {
  console.log("you clicked on "+ cellNum);

  console.log("it is playerTurn " + playerTurn);
   updateCell(cellNum, playerTurn);
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