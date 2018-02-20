//random number generated betwween 19 - 120


var minRandomNumber = 19;
var maxRandomNumber = 120;

var randomNumber = randomNumberGenerator(minRandomNumber, maxRandomNumber);

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
};

console.log(randomNumber);

//4 crystals; each with a random value between 1-12
var crystalRandomNumber = [];
var crystalRedValue;
var crystalGreenValue;
var crystalYellowValue;
var crystalBlueValue;

var crystalMinRandomNumber = 1;
var crystalMaxRandomNumber = 12;

$('#newGame').click(function() {
    for (var i = 0; i < 4; i++) {
        crystalRandomNumber[i] = randomNumberGenerator(crystalMinRandomNumber, crystalMaxRandomNumber);
    };
    crystalRedValue = crystalRandomNumber[0];
    crystalGreenValue = crystalRandomNumber[1];
    crystalYellowValue = crystalRandomNumber[2];
    crystalBlueValue = crystalRandomNumber[3];
        console.log(crystalRedValue);
        console.log(crystalGreenValue);
        console.log(crystalYellowValue);
        console.log(crystalBlueValue);
    
})
//assign crystal value to the associated button
   


//click event on crystal; adds value to total score
var totalValue = 0; 
$('.red').click(function(){
    
    totalValue = Number(totalValue) + crystalRedValue;
    $('#totalScore').text("Total Score: " + totalValue);
});
$('.green').click(function(){
    
    totalValue = Number(totalValue) + crystalGreenValue;
    $('#totalScore').text("Total Score: " + totalValue);
});
$('.yellow').click(function(){
    
    totalValue = Number(totalValue) + crystalYellowValue;
    $('#totalScore').text("Total Score: " + totalValue);
});
$('.blue').click(function(){
    
    totalValue = Number(totalValue) + crystalBlueValue;
    $('#totalScore').text("Total Score: " + totalValue);
});


//total score counter; sum variable

//game restarts when player wins or loses

//RESET new game: new random number; new crystal values; users score and score counter will reset to zero

//score board; track of # of games player wins and loses

