var Word = require("./word.js")
var inquirer = require("inquirer");

var abcd = "abcdfghijklmnnrstuvwxyz";

var abcdUp = abcd.toUpperCase();

var dogBreeds = ["DALMATA", "BOXER", "LABRADOR", "CHIHUAHUA", "SALCHICHA", "DOBERMAN", "PUG", "ALASKA", "GRAN DANES", "PASTOR ALEMAN", "AFGANO", "GALGO", "CORGI", "SABUESO", "SCHNAUZER", "PASTOR INGLES", "SAN BERNARDO"]; 

var correctLetters = [];
var noCorrect = [];

var wordGuessed = [];
//it's pretty hard to guess, so let's give 12 chances!
var guessesLeft = 12;
var start = true;

// ===== Constructor Time! ====

// ===== THIS IS THE GAME FUNCTION =====! 

function game(){

    if(start === true){
        var randomIndex = Math.floor(Math.random()*dogBreeds.length);
        var randomBreed = dogBreeds[randomIndex];
        breedWord = new Word(randomBreed);
        start = true;
    }

    var wordGuessed = [];
    breedWord.lettersArray.forEach(theCheck);


    if(start === true){
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter between A-Z!",
                name: "guess"
            }
        ]).then(function(input){

            if(!abcdUp.includes(input.guess)){
                console.log("Nope, try again");
                game();
            }else{
                if(noCorrect.includes(input.guess)|| 
                correctLetters.includes(input.guess) ||
                input.guess === ""
                ){
                    console.log("You typed alredy! Try another one");
                    game();
                }else{
                    var wordCheck = [];
                    breedWord.userGuess(input.guess);
                    breedWord.lettersArray.forEach(wordCheck);
                    if(wordCheck.join("") === wordGuessed.join("")){
                        console.log("INCORRECT")
                        noCorrect.push(input.guess);
                        guessesLeft--;
                    }else{
                        console.log("CORRECT!");
                        correctLetters.push(input.guess);
                    }
                    breedWord.displayWord()
                    console.log(breedWord);
                    console.log("Remaining guess" + guessesLeft);
                    console.log("Letters already guessed" + noCorrect.join(""));

                    if(guessesLeft > 0){
                        game();
                    }else{
                        console.log("You lost")
                        //newGame();
                    }

                    function check(key){
                        wordCheck.push(key.guessed);
                    }
                }
            }

        });
    //Cierra if del prompt
    } else{
        console.log("You won!")
        //newGame()
    }
}; //Cierra funcion


function theCheck(key){
    wordGuessed.push(key.guessed);
}

/*
function newGame(){
    inquirer
    .prompt([
        {
            type:"list",
            message: "Pick up one option:",
            choices:["Play again", "No, thanks!"],
            name: "newGame"
        }
    ]).then(function(input){
        if (input.newGame === "Plat again"){
            start === true;
            noCorrect =[];
            correctLetters =[];
            guessesLeft = 12;
            game();
        }else{
            return;
        }
    })
} */

game();
