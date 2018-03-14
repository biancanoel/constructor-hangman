var Letter = require("./letter.js");


function Word (word) {
    //what the word is
    this.word= word;
    this.letterArray =[]
    //array of Letter objects (1 for each letter in word)
    this.makeLetterArray = function (word) {
        
        for (var i=0; i< this.word.length; i++ ) {
            this.letterArray.push(new Letter(this.word[i]));   
        };
        console.log(this.letterArray);
    };
    //check each item in letter array to see if guess was made
    this.guessed = function (guess) {
        for (i=0; i<this.letterArray.length; i++) {
            this.letterArray[i].check(guess);
        }
    };

    //display string represenging word (_ or letter depending on if guessed or not)
    this.display = function () {
        var showString;
        for (i=0; i<this.letterArray.length; i++) {
            showString += " "+this.letterArray[i].toString();
        };
        console.log(showString);
       
    };
}

var cat = new Word("cat");

cat.makeLetterArray();
cat.guessed("c");
cat.guessed("h");
cat.display();




