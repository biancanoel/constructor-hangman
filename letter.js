

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
    this.show = function () {
        if (this.guessed) {
            console.log(this.letter);
            return this.letter;
        } else {
            console.log(" _ ");
            return " _ ";
        }
    }
}

var c = new Letter ("c");
//console.log(c);
c.check("k");
c.show();

module.export = {
    letter: Letter
}
