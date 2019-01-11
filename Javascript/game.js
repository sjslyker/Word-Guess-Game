
var marioCharacters = ["mario", "luigi", "bowser", "peach", "warrio", "waluigi", "toad", "yoshi", "goomba", "KoopaTroopa", "toadette", "daisy", "birdo", "koopa", "KingBoo", "DonkeyKong"];
    
var currentWord ="";

var cWrdLttrs ="";

var blanks="";

var wrongLetters="";



var wins = 0;
var losses = 0;
var guessesLeft = 6;

console.log("test")
document.write("HELLLOOOOOOOOOOOOOO")

function newGame() {
    currentWord = marioCharacters[Math.floor(Math.random() * marioCharacters.length)];
    console.log('Current Word: ' + currentWord);

    currentWord = currentWord.split("");
    console.log('Current Word Letters:' + currentWord);

}