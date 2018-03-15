var Letter = require("./letter.js");


function Word(word) {
    //what the word is
    this.guesses = 10;
    this.word = word;
    this.letterArray = []
    //array of Letter objects (1 for each letter in word)
    this.makeLetterArray = function (word) {

        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new Letter(this.word[i]));
        };
        //console.log(this.letterArray);
    };
    //check each item in letter array to see if guess was made
    this.guessed = function (guess) {
        var counter = 0;
        for (i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].check(guess);
            if (this.letterArray[i].check(guess) === true) {
                counter++
            };
        }
        if (counter > 0) {
            console.log("Correct!")
            console.log("-------------");
        } else {
            this.guesses--;
            console.log(`Wrong guess, ${this.guesses} guesses remaining.`);
            console.log("-------------")

        }



    };

    //display string represenging word (_ or letter depending on if guessed or not)
    this.display = function () {
        var showString="";
        for (i = 0; i < this.letterArray.length; i++) {
            showString += " " + this.letterArray[i].toString();
        };
        console.log("Make a guess!");
        console.log(showString);

    };
}

module.exports = Word;



