test('returns Fizz when the number is divisible by 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
});

test('returns Buzz when the number is divisible by 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
});

test('returns FizzBuzz when the number is divisible by 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
});

test('returns the number when the number is not divisible by 3 or 5', () => {
    const result = fizzBuzz(7);
    expect(result).toBe(7);
});