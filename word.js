var Letter = require("./letter");

var Word = function(secretWord){

    this.lettersArray = [];
    this.secretWord = secretWord;
    this.displayWord = function(){
        for (var i = 0; i < secretWord.length; i++) {
            this.lettersArray.push(new Letter(secretWord[i]));
            this.lettersArray[i].display(); 
        }
    }


}

var palabra = new Word("hola");

palabra.displayWord();
