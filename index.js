const readline = require('readline');

// Generate random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let gessError = 0;
// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the game function
function playGame() {
    rl.question('Agora você, adivinhe um número de 1 a 100:', (answer) => {
        const guess = parseInt(answer);


        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('Número inválido. Por favor, digite um número de 1 a 100.');
            playGame();
            return;
        }
        if (guess === secretNumber) {
            console.log(`Parabéns, você acertou o número! O número que eu escolhi foi ${guess}`);
            rl.close();
            return;
        }

        if (gessError == 10) {
            console.log(`Um dica, o número esta entre ${guess - 13} ou  ${guess + 17}`);
            gessError = 0;
        } else if (guess + 10 < secretNumber) {
            console.log('Ta muito frio');
            gessError += 1;
        } else if (guess + 5 < secretNumber) {
            console.log('Ta  frio');
            gessError += 1;
        } else if (guess + 2 < secretNumber) {
            console.log('Ta esquentando');
            gessError += 1;
        } else if (guess + 1 > secretNumber && guess + 1 < secretNumber) {
            console.log('Ta pelando');
            gessError += 1;
        } else {
            console.log('Ta quente...');
            gessError += 1;
        }
        playGame();
    });
}

// Start the game
console.log('Estou pensando em um número de 1 a 100...');
setTimeout(() => {
    // console.log('pronto escolhi :)');
    playGame();

}, 1000);



module.exports = playGame;