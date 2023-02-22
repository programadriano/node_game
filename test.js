// const { expect, test } = require('@jest/globals');
// const { createInterface } = require('readline');
// const { stdout, stdin } = require('process');



// // Mock the readline interface
// jest.mock('readline', () => ({
//     createInterface: jest.fn(() => ({
//         question: jest.fn(),
//         close: jest.fn(),
//     })),
// }));

// // Import the playGame function from the main file
// const playGame = require('./index');

// describe('playGame', () => {
//     test('correctly handles a correct guess', () => {
//         // Set up mock readline interface to return the secret number
//         const mockReadline = createInterface({ input: stdin, output: stdout });
//         mockReadline.question.mockImplementationOnce((_, callback) => callback('50'));
//         // Call playGame and check the output
//         expect.assertions(1);
//         return playGame().then(result => expect(result).toEqual('Congratulations, you guessed the number!'));
//     });

//     test('correctly handles an incorrect guess', () => {
//         // Set up mock readline interface to return a too low guess, then a correct guess
//         const mockReadline = createInterface({ input: stdin, output: stdout });
//         mockReadline.question.mockImplementationOnce((_, callback) => callback('25'));
//         mockReadline.question.mockImplementationOnce((_, callback) => callback('50'));
//         // Call playGame and check the output
//         expect.assertions(1);
//         return playGame().then(result => expect(result).toEqual('Congratulations, you guessed the number!'));
//     });

//     test('correctly handles invalid input', () => {
//         // Set up mock readline interface to return an invalid guess, then a correct guess
//         const mockReadline = createInterface({ input: stdin, output: stdout });
//         mockReadline.question.mockImplementationOnce((_, callback) => callback('abc'));
//         mockReadline.question.mockImplementationOnce((_, callback) => callback('50'));
//         // Call playGame and check the output
//         expect.assertions(1);
//         return playGame().then(result => expect(result).toEqual('Congratulations, you guessed the number!'));
//     });
// });