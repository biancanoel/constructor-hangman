

function Letter (letter) {
    this.letter= letter;
    this.guessed = false;
    this.check = function (guess) {
        if (this.letter === guess) {
            console.log(guess + " was a correct guess!");
            this.guessed = true;
            return true;
        } else {
            console.log(guess+ " was incorrect.");
            return false;
        }
    };
    this.toString = function () {
        if (this.guessed) {
            //console.log(this.letter);
            return this.letter;
        } else {
            //console.log(" _ ");
            return " _ ";
        }
    }
}




module.exports = Letter;
