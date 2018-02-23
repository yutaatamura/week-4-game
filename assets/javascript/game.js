$(document).ready(function() {

    //random number generated betwween 19 - 120

    var minRandomNumber = 19;
    var maxRandomNumber = 120;
    var randomNumber;

    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    //4 crystals; each with a random value between 1-12
    var crystalRandomNumber = [];
    var crystalMinRandomNumber = 1;
    var crystalMaxRandomNumber = 12;

    var crystal = {
        red : ""
        ,
        green : ""
        ,
        yellow : ""
        ,
        blue : ""
        
    }
   
    //hide crystals at load until 'new game' clicked
    disableCrystalButton();

    //START & RESET new game: new random number; new crystal values; users score and score counter will reset to zero
    $('#newGame').click(function() {

        totalValue = 0;
        
        //iterate generator function through crystal array to assign value to each crystal
        for (var i = 0; i < 4; i++) {
            crystalRandomNumber[i] = randomNumberGenerator(crystalMinRandomNumber, crystalMaxRandomNumber);
        };

        //generate random number; display random number
        randomNumber = randomNumberGenerator(minRandomNumber, maxRandomNumber);
        $('#randomNumber').text(randomNumber);
        console.log("random number=" + randomNumber);

        crystal.red = crystalRandomNumber[0];
        crystal.green = crystalRandomNumber[1];
        crystal.yellow = crystalRandomNumber[2];
        crystal.blue = crystalRandomNumber[3];
            console.log("red=" + crystal.red);
            console.log("green=" + crystal.green);
            console.log("yellow=" + crystal.yellow);
            console.log("blue=" + crystal.blue);
        refresh();
        compare();
        enableCrystalButton();
    })
    //assign crystal value to the associated button
    


    //click event on crystal; adds value to total score
    //total score counter; sum variable
    var totalValue = 0; 
    compare();
    $('#totalScore').text(totalValue);

    $('.red').click(function(){
        
        totalValue = Number(totalValue) + crystal.red;
        $('#totalScore').text(totalValue);
        compare();
    });
    $('.green').click(function(){
        
        totalValue = Number(totalValue) + crystal.green;
        $('#totalScore').text(totalValue);
        compare();
    });
    $('.yellow').click(function(){
        
        totalValue = Number(totalValue) + crystal.yellow;
        $('#totalScore').text(totalValue);
        compare();
    });
    $('.blue').click(function(){
        
        totalValue = Number(totalValue) + crystal.blue;
        $('#totalScore').text(totalValue);
        compare();
    });


    //player wins when total score counter = random number; display player win or loss message; 

    var userWins=0;
    var userLosses=0;
    $('#userWinCount').text(userWins);
    $('#userLossCount').text(userLosses);


    //score board; track of # of games player wins and loses
    function compare() {
    if (totalValue === 0) {
        $('#statusMessage').text("Try and collect enough crystals to match the pot!");
    } else if (totalValue === randomNumber) {
        $('#statusMessage').text("Congratulations! You snuck the treasure by the dragon!");
        disableCrystalButton();
        userWins++;
        $('#userWinCount').text(userWins);
    } else if (totalValue > randomNumber) {
        $('#statusMessage').text("Too selfish! The dragon caught you. Try again!"); 
        disableCrystalButton();
        userLosses++;
        $('#userLossCount').text(userLosses);

    }
    };

    function refresh() {
        $('#totalScore').text(totalValue);
        $('#randomNumber').text(randomNumber);
        $('#userWinCount').text(userWins);
        $('#userLossCount').text(userLosses);


    }

    function disableCrystalButton() {
        $('.crystal').prop("disabled", true);
    }

    function enableCrystalButton() {
        $('.crystal').prop("disabled", false);
    }

});
