var wins = 0;
var losses = 0;
var game = function () {
    newGame();
}

var newGame = function () {
    var marioCharacters = ["mario", "luigi", "bowser", "peach", "warrio", "waluigi", "toad", "yoshi", "goomba", "koopatroopa", "toadette", "daisy", "birdo", "koopa", "kingboo", "donkeykong"];
        
    var currentWord = marioCharacters[Math.floor(Math.random() * marioCharacters.length)];

    var cWrdLttrs = currentWord.split("");

    var rightLetters = [];

    var wrongLetters = [];

    var attempts = 7;

    var letterCount = cWrdLttrs.length;

    var rightGuessLetterCount = 0;
    
    for (var i = 0; i < currentWord.length; i++) {
        rightLetters.push("_ ");
        document.getElementById("theWord").innerHTML = rightLetters.join("");
        document.getElementById("remLives").innerHTML = attempts;
        document.getElementById("lettersGuessed").innerHTML = wrongLetters;
    }
    document.onkeyup = function(event) {
        var playerGuess = event.key;
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            if (cWrdLttrs.indexOf(playerGuess) > -1) {
                for (var i = 0; i < letterCount; i++) {
                    if (cWrdLttrs[i] === playerGuess) {
                        rightLetters[i] = playerGuess;
                        document.getElementById("theWord").innerHTML = rightLetters.join("");
                        rightGuessLetterCount++;
                    }
                }    
            }
            else {
                attempts--;
                wrongLetters.push(playerGuess);
                document.getElementById("remLives").innerHTML = attempts;
                document.getElementById("lettersGuessed").innerHTML = wrongLetters;
                    if (attempts <= 6) {
                        document.getElementById("mPuMario").style.opacity = "0.1";
                    }
                    if (attempts <= 5) {
                        document.getElementById("mStar").style.opacity = "0.1";
                    }
            
                    if (attempts <= 4) {
                        document.getElementById("mRgMario").style.opacity = "0.1";
                    }
            
                    if (attempts <= 3) {
                        document.getElementById("mCoin").style.opacity = "0.1";
                    }
            
                    if (attempts <= 2) {
                        document.getElementById("mSmMario").style.opacity = "0.1";
                    }
            
                    if (attempts <= 1) {
                        document.getElementById("mSmMario").style.opacity = "0.1";
                    }
            
                    if (attempts <= 0) {
                        document.getElementById("mPuMario").style.opacity = ".99";
                        document.getElementById("mStar").style.opacity = ".99";
                        document.getElementById("mRgMario").style.opacity = ".99";
                        document.getElementById("mCoin").style.opacity = ".99";
                        document.getElementById("mSmMario").style.opacity = ".99";
                        document.getElementById("mPeach").style.opacity = ".99";
                        newGame();
                    }
    
            }

            if (rightGuessLetterCount === cWrdLttrs.length) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                alert("You Win! Word: " + cWrdLttrs.join(''));
                game();
            }
            if (attempts === 0) {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                alert("You Lost! Word: " + cWrdLttrs.join(''));
                game();
            }
        }  
        else {
            alert("Please select a letter from the Alphabet (a to z)");
        }  
    }

}


newGame();