var Word = require("./word.js");
var inquirer = require("inquirer");

//Array of words which are possible 'current words. Wins and losses set to 0.
var possibleWords = ["Brussels", "Cordoba", "Encinitas", "Barcelona", "Kingston", "Whistler", "Honolulu", "Temecula", "Lagos", "Portland"];

//When page starts, the nextWord function will pick a word, remove that word from the possible words array, and display that word as string to user with _ . # of guesses set to 10. 
var word;   
var currentWord
nextWord();

function nextWord() {
    //Select word from array and then remove it from array
    var randy = Math.floor(Math.random() * possibleWords.length);
    currentWord = possibleWords[randy];
    //console.log(`the curent word is ${currentWord}`)
    possibleWords.splice(randy, 1);
    //console.log(possibleWords);

    //Create new word object
    word = new Word(currentWord);
    //console.log(word);
    //Make an array of objects (1 object for each letter of the word)
    word.makeLetterArray();
    //Dispplay word as either _ or letter to user (depending on if guessed or not yet)
    word.display();
    nextGuess(word);
}


function nextGuess() {
    //User will input a guess. Check if guess is right, check if game won or loss. if game still on, update string shown to user. If game won, display win update wins by 1. If game lost, display lose and update losses by 1. 
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter"
        },
    ]).then(function (data) {
        //check if guess is right and update number of guesses
        word.guessed(data.guess);

        //display updated string to user
        word.display();

        //check if game is over. 
        if (word.guesses < 1) { //Lose: Out of turns. 
            console.log("sorry game over! you are out of turns. The word was " + currentWord);
        } else { 
            var unGuessedLetters = word.letterArray.filter(word => word.guessed === false);

            if (unGuessedLetters.length === 0) {
                console.log("you have guessed the word");

            } else {
                nextGuess();
            }
        }

    })
}


