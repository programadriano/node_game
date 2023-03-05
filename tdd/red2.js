test('retorna "Buzz" para múltiplos de 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
});

test('retorna "FizzBuzz" para múltiplos de 3 e 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).toBe("FizzBuzz");
});

test('retorna o próprio número caso não seja múltiplo de 3 ou 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(17)).toBe(17);
});