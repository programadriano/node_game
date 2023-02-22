const playGame = require('./index');
const readline = require('readline');

describe('playGame', () => {
    let rl;
    beforeEach(() => {
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
        // Mock the output stream
        jest.spyOn(process.stdout, 'write').mockImplementation(() => {});
    });
    afterEach(() => {
        rl.close();
        // Restore the original implementation
        process.stdout.write.mockRestore();
    });
    test('should return "Guess a number between 1 and 100:"', async() => {
        // Mock the input stream with the correct number
        jest.spyOn(rl, 'question').mockImplementationOnce((query, callback) => {
            callback(`${secretNumber}\n`);
        });
        await playGame(rl);
        expect(process.stdout.write).toHaveBeenCalledWith('Guess a number between 1 and 100: ');
    });
});