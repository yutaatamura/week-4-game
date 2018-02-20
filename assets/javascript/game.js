//random number generated betwween 19 - 120


var minRandomNumber = 19;
var maxRandomNumber = 120;

var randomNumber;

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};
//display randomNumber in HTML



//4 crystals; each with a random value between 1-12
var crystalRandomNumber = [];
var crystalRedValue;
var crystalGreenValue;
var crystalYellowValue;
var crystalBlueValue;

var crystalMinRandomNumber = 1;
var crystalMaxRandomNumber = 12;

$('#newGame').click(function() {

    totalValue = 0;
    

    for (var i = 0; i < 4; i++) {
        crystalRandomNumber[i] = randomNumberGenerator(crystalMinRandomNumber, crystalMaxRandomNumber);
        randomNumberGenerator(crystalMinRandomNumber, crystalMaxRandomNumber);
    };
    randomNumber = randomNumberGenerator(minRandomNumber, maxRandomNumber);
    $('#randomNumberDisplay').text("Number to match: " + randomNumber);
    console.log("random number=" + randomNumber);
    crystalRedValue = crystalRandomNumber[0];
    crystalGreenValue = crystalRandomNumber[1];
    crystalYellowValue = crystalRandomNumber[2];
    crystalBlueValue = crystalRandomNumber[3];
        console.log("red=" + crystalRedValue);
        console.log("green=" + crystalGreenValue);
        console.log("yellow=" + crystalYellowValue);
        console.log("blue=" + crystalBlueValue);
    refresh();
    compare();
    enableCrystalButton();
})
//assign crystal value to the associated button
   


//click event on crystal; adds value to total score
//total score counter; sum variable
var totalValue = 0; 
compare();
$('#totalScoreDisplay').text("Total Score: " + totalValue);
$('.red').click(function(){
    
    totalValue = Number(totalValue) + crystalRedValue;
    $('#totalScoreDisplay').text("Total Score: " + totalValue);
    compare();
});
$('.green').click(function(){
    
    totalValue = Number(totalValue) + crystalGreenValue;
    $('#totalScoreDisplay').text("Total Score: " + totalValue);
    compare();
});
$('.yellow').click(function(){
    
    totalValue = Number(totalValue) + crystalYellowValue;
    $('#totalScoreDisplay').text("Total Score: " + totalValue);
    compare();
});
$('.blue').click(function(){
    
    totalValue = Number(totalValue) + crystalBlueValue;
    $('#totalScoreDisplay').text("Total Score: " + totalValue);
    compare();
});




//player wins when total score counter = random number; display player win or loss message; 
function compare() {
if (totalValue === 0) {
    $('#statusMessage').text("Try and collect enough crystals to equal exactly the pot!");
} else if (totalValue === randomNumber) {
    $('#statusMessage').text("Congratulations! You got it!");
    disableCrystalButton();
} else if (totalValue > randomNumber) {
    $('#statusMessage').text("Too bad, you went over! Try again!"); 
    disableCrystalButton();

}
};

function refresh() {
    $('#totalScoreDisplay').text("Total Score: " + totalValue);
    $('#randomNumberDisplay').text("Number to match: " + randomNumber);


}

function disableCrystalButton() {
    $('.crystal').prop("disabled", true);
}

function enableCrystalButton() {
    $('.crystal').prop("disabled", false);
}
//game restarts when player clicks new game

//RESET new game: new random number; new crystal values; users score and score counter will reset to zero

//score board; track of # of games player wins and loses

