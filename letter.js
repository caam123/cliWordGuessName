/* var keyChar = process.argv[2]; */


var Letter = function (letter){

    this.letter = letter;
    this.guessed = false;
    this.check = function(letra){
        if (this.letter === letra){
            this.guessed = true;
            this.display();
        }else{
            this.guessed = false
            this.display();
        };
    };
    this.display = function(){
        if (this.guessed === false){
            this.letter = "_";
            console.log("FALSE:", this.letter)
        }else{
            this.letter = letra;
            console.log("TRUE:", letter);
        };
    };
};

/* === TESTING AREA === */
var letra = new Letter("h");

console.log("letra", letra.letter);

letra.display();

letra.check("h");
letra.display();

module.exports = Letter;