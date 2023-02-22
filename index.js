const readline = require('readline');

// Generate random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the game function
function playGame() {
    rl.question('Guess a number between 1 and 100: ', (answer) => {
        const guess = parseInt(answer);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('Invalid input. Please enter a number between 1 and 100.');
            playGame();
            return;
        }
        if (guess === secretNumber) {
            console.log('Congratulations, you guessed the number!');
            rl.close();
            return;
        }
        if (guess < secretNumber) {
            console.log('Too low!');
        } else {
            console.log('Too high!');
        }
        playGame();
    });
}

// Start the game
console.log('I\'m thinking of a number between 1 and 100...');
playGame();

module.exports = playGame;