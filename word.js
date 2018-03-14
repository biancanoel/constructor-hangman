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
        console.log(this.letterArray);
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
            console.log("dont remove a guess")
        } else {
            this.guesses--;
            console.log(`${this.guesses} guesses remaining, we removed a guess`);

        }



    };

    //display string represenging word (_ or letter depending on if guessed or not)
    this.display = function () {
        var showString;
        for (i = 0; i < this.letterArray.length; i++) {
            showString += " " + this.letterArray[i].toString();
        };
        console.log(showString);

    };
}

module.exports = Word;



