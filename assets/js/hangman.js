// Array of disney movies options
var options = ["moana", "aladdin", "mulan", "frozen", "tarzan", "cars", "lionking"];

// Number of guesses
var left = 15;
document.getElementById("left").innerHTML = left;

// Wins counter
var wins = 0;
document.getElementById("wins").innerHTML = wins;

// Randomly select word from array 
var randomPick = options[Math.floor(Math.random()*options.length)];

// Split the word picked into letters array
var word = randomPick.split([]);

// Array to store "_" and fill in with correct letters
var blankword = [];
// Array for storing wrong letters
var wrongArray = [];
// Array to match user with word
var userArray = [];

// Counts length of the word that is split
var length = word.length;

// Display length of word in HTML
window.onload = function() {
	for (var i = 0; i < length; i++) {
    	blankword[i] = "_";
        console.log(blankword)
	}
	document.getElementById("display").innerHTML = blankword.join(" ");
}

function init() {
    document.getElementById("youwin").innerHTML = '';
    blankword = [];
    wrongArray = [];
    document.getElementById("wrong").innerHTML = wrongArray.join(" , ");
    userArray = [];
    left = 15;
    document.getElementById("left").innerHTML = left;

    // Randomly select word from array 
    randomPick = options[Math.floor(Math.random()*options.length)];

    // Split the word picked into letters array
    word = randomPick.split([]);
    length = word.length

    for (var i = 0; i < length; i++) {
        blankword[i] = "_";
        console.log(blankword)
    }
    document.getElementById("display").innerHTML = blankword.join(" "); 
}

// Store users inputs into userArray 
document.onkeyup = function(input) {

    var userInput = (input.key).toLowerCase();
        
        // Record Countdown and start game over if left = 0
        if (input.key) {
            left--;
            document.getElementById("left").innerHTML = left;
            if (left === 0) {
                alert("Game Over!")
                init();
            }
        }

        if (input.which >= '65' && input.which <= '90') {
            var match = false;

            for (var i = 0; i < length; i++) {
                // if (word[i] === " ") {
                //     blankword[i] = "&nbsp;";
                // }
                if (userInput === word[i]) {
                    blankword[i] = userInput;
                    userArray.push(userInput);
                    match = true;
                    document.getElementById("display").innerHTML = blankword.join(" ")
                    } 
                }
            
            if (match === false) {
                if (wrongArray.includes(userInput)) {
                    alert("You already guessed that")
                } else {
                    wrongArray.push(userInput);
                    document.getElementById("wrong").innerHTML = wrongArray.join(" , ");
                }
            }
        } else if (input.which == '13') {
            init();
        }
        else {
            alert("Only use keys a-z");
        }
        // If userArray length = word length player wins           
        if (userArray.length === word.length) {  
            wins++;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("display").innerHTML = blankword.join(" ")
            document.getElementById("youwin").innerHTML = 'You win! Press enter to start the next game.';
                // if (input.keyCode == '13') {
                //     init();
                // }
        } 
            // if (userArray.join() == word) {
            //     document.getElementById("display").innerHTML = blankword.join(" ")
            //         document.getElementById("wins").innerHTML = wins;
            //         document.getElementById("youwin").innerHTML = 'You win! Press enter to start the next game.';
            //     if (input.keyCode == '13') {
            //         wins++;
            //         userArray = [];
            //         word = [];
            //         init();
            //     }
            // }       
}