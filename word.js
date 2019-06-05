var Letter = require("./letter");

var Word = function(secretWord){
    //this.newArray = [];
    this.lettersArray = [];
    this.secretWord = secretWord;
/*     this.displayWord = function(){
        for (var i = 0; i < secretWord.length; i++) {
            this.lettersArray.push(new Letter(secretWord[i]));
            this.lettersArray[i].display(); 
        }
    } */
    this.pushWord = function(){
        for (var i = 0; i < secretWord.length; i++) {
            var letterObj = new Letter(secretWord[i]);
            this.lettersArray.push(letter);
            //console.log(this.lettersArray); 
        };
    };
    this.displayWord = function(){
        blanks = "";
        for (var j = 0; j < this.lettersArray.length; j++) {
             blanks += this.lettersArray[j] + " ";            
        };
     console.log((blanks.toUpperCase() + "plis"));   
    };

    this.checkGuess = function(guess){
        for (var i = 0; i < this.lettersArray.length; i++) {
            this.lettersArray[i].check(guess)
            
        }
    }

};

// ==== After a lot of effort, thinking and nosebleed, these lines are for testing that the word, kinda runs! ===== 

/*

var palabra = new Word("hola");

palabra.pushWord();

palabra.displayWord();
*/

module.exports = Word;

