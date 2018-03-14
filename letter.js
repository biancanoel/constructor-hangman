

function Letter (letter) {
    this.letter= letter;
    this.guessed = false;
    this.correctGuesses =0;
    this.check = function (guess) {
        if (this.letter === guess) {
            this.guessed = true;
            return true;
        } else {
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
