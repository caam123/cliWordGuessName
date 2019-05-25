/* var keyChar = process.argv[2]; */


var Letter = function (letter){

    this.letter = letter;
    this.guessed = false;

    this.toString = function(){

        if(this.letter === " "){
            this.guessed = true;
            return " "
        }else{
            if(this.guessed === false){
                return "_";                
            }else{
                return this.letter;
            }
        }
    };
    this.check = function(guess){
        if (this.letter === guess){
            this.guessed = true;
        }else{
            this.guessed = false
        };
    };
};

/* Letter.prototype.toString = function(){
    var underscore = this.letter +' soy una *** eme';
    return underscore;
}

var eme = new Letter("m");
 */

//console.log(eme + "");

/*

eme.display(); */

/* === TESTING AREA === */
/* var letra = new Letter("h");

console.log("letra", letra.letter);

letra.display();

letra.check("h");
letra.display();
 */
module.exports = Letter;