
var Letter = function (letter){

    this.letter = letter;
    this.guessed = false;
    this.display = function(){
        if (guessed === false){
            this.letter = "_";
        }else{
            this.letter = letter;
        };
    this.check = function(keyChar){
        if (letter === keyChar){
            guessed = true;
        }else{
            guessed = false
        };
    }
    }
};

var letterObject = new Letter("w");

console.log(letterObject);