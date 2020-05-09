const Letter = require("./Letter")

class Word extends Letter {
    constructor(currentWord) {
       

        this.letter = currentWord.split("").map(function(char) {
            return new Letter(char);
        }) 

        
    }
}