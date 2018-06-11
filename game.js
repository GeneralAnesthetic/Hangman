document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
    alert("Or Not!");
}
// one way of doing it could be...
var wordBank = ["hornet", "sulky", "soup", "suace", "whisp", "moth", "clam", "powders", "insect", "lame"];
var gameWord;
var gameArray;
var gameDashArray;
var correctGuessArray;
var guessesRemaining;
var guessesRemaining = 6;
// var hiddenWord = wordBank[Math.floor(Math.random() * wordBank.length)]
// console.log(hiddenWord)
// <!-- in the function below: we're passing array as a parameter as a placeholder-->


function startGame(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var hiddenWord = array[randomIndex];
    correctGuessArray = [];

    gameWord = hiddenWord;
    gameArray = hiddenWord.split("")
    var dashArray = [];
    for (var i = 0; i < gameWord.length; i++) {
        dashArray.push("_")

    }

    gameDashArray = dashArray;

    document.getElementById("Display").textContent = dashArray.join(" ")
    document.getElementById("remainingGuesses").textContent = "You have this many guesses remaining: " +
        guessesRemaining;

}
startGame(wordBank)



document.onkeyup = function (event) {
    var userGuess = event.key;
    if (gameArray.includes(userGuess)) {

        for (var y = 0; y < gameWord.length; y++) {
            if (userGuess === gameArray[y]) {
                gameDashArray[y] = userGuess;
                correctGuessArray.push(userGuess);

                document.getElementById("Display").textContent = gameDashArray.join(" ")
                if (gameDashArray.length == correctGuessArray.length) {
                    alert("You Win! The word was: " + gameWord);
                    startGame(wordBank);
                }
            }
        }


    } else {
        guessesRemaining--;
        if (guessesRemaining < 1) {
            alert(
                "You Lose Sucka! I'd say something like 'Try Again!' but you know... I mean, hey, we both know that you wouldn't stand a chance, right?! So, stop being kind-of lame! Click 'refresh' if you're not scared!"
            )

            location.reload(startGame(wordBank));

        }

        document.getElementById("remainingGuesses").textContent =
            "You have this many guesses remaining: " +
            guessesRemaining;

    }

};

// var userGuess = ["h", "o", "r", "n", "e" , "t"];

// var Blanks = ["_", "_", "_", "_","_", "_",]
// document.onKeyup = function(event) {var }

// for 
// if (userGuess === "h") {
//     alert ("You guessed a correct letter! Now,your'e reving up like a Rusted-Out Studebaker from 1973")

//     else if (userGuess === "o")
//     alert ("You're on the right trak)
//     alert (")
// } || userGuess === "o" || userguess === "u" || userGuess === "s" || userGuess === "s"

// if userGuess > 6) alert ("Game Over you tardy-farty coding transfuser!")


// or....

// var Blank = array["_", "_", "_", "_","_", "_",]

// if (userGuess0 = "h")
// replace (Blank[0], "h")


// if (userGuess1 = "0")
// replace (Blank[1], "o")

// if (userGuess2 = "r")
// replace (Blank[2], "r")

// if (userGuess3 = "n")
// replace (Blank[3], "n")

// if (userGuess4 = "e")
// replace (Blank[4], "e")

// else ("you loose sucker!)


// or....


// if (userGuess0 === "h" && userGuess1 === "o" && userGuess3 === "r" && userGuess4 === "n") print ("you win lamo!") 




// // or a variable list....

// var = {
//     UserGuess,
//     placeholer,
//     correctGuess,
//     wrongGuess = true
// }

// if