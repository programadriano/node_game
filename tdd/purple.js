function fizzBuzz(num) {
    //Aqui, declaramos duas constantes para verificar se o número é divisível por 3 e 5, tornando o código mais legível.
    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
        return 'FizzBuzz';
    } else if (isDivisibleBy3) {
        return 'Fizz';
    } else if (isDivisibleBy5) {
        return 'Buzz';
    } else {
        return num;
    }
}