//Initializes all the variables that will be used in the game
var crystalNames = ["Earth", "Fire", "Water", "Wind"];
var crystalImages = ["assets/images/Earth.png", "assets/images/Fire.png", "assets/images/Water.png", "assets/images/Wind.png"];
var playerNumber = 0;
var game;
var wins = 0;
var losses = 0;
var computerNumber = 0;

//Makes sure the html loads fully before starting the Javascript
$(document).ready(function(){

//Assigns a random number to the Computer Goal the player must match
function compGoal(){
  computerNumber = Math.floor(Math.random()*120 + 19);
};

//Displays all the stats in the game
function dispAll(){
$("#playerScore").text(playerNumber);
$("#toMatch").text(computerNumber);
$("#pWin").text(wins);
$("#pLoss").text(losses);
};

//Resets the values to begin a new game
function resetIt(){
playerNumber = 0;
computerNumber = 0;
$("#crystals").empty();
};

//Starts a new game
function newGame() {

compGoal();
dispAll();

//Generates each of the Crystals and assigns a random value to them
for (var i = 0; i < crystalNames.length; i++)
{
    var crystalValue = Math.floor(Math.random()*12 + 2);
    var crystalCol = $("<div>").addClass("col-3").addClass("col-sm-3");
    var imageCrystal = $("<img>");
    imageCrystal.addClass("cImg");
    imageCrystal.attr("src", crystalImages[i]);
    imageCrystal.attr("crystalvalue", crystalValue);
    $(crystalCol).append(imageCrystal);
    $("#crystals").append(crystalCol);
};

//Reacts to each click on a crystal
$(".cImg").on("click",function(){

    var addValue = ($(this).attr("crystalvalue"));
    addValue = parseInt(addValue);
    playerNumber = playerNumber + addValue;
    dispAll();

//Verifies if the player has won
    if(playerNumber===computerNumber)
{
    console.log("You win!");
    wins++;
    resetIt();
    dispAll();
    newGame();
    
    
} else if (playerNumber > computerNumber) {
   console.log("You lose!");
   losses++;
   resetIt();
   dispAll();
   newGame();

};
});
};

//Starts a new game
game = newGame();
});

