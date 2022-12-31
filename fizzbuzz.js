class FizzBuzzError extends Error {}

function fizzBuzz(until) {
  if (!Number.isInteger(until) || until <= 0) {
    throw new FizzBuzzError('el parámetro debe ser un número natural', {
      cause: 'until not number',
    });
  }

  const result = [];
  for (let i = 1; i <= until; i++) {
    if (i % 15 === 0) {
      result.push([i, 'fizzbuzz']);
    } else if (i % 3 === 0) {
      result.push([i, 'fizz']);
    } else if (i % 5 === 0) {
      result.push([i, 'buzz']);
    }
  }
  return result;
}

export { fizzBuzz, FizzBuzzError };
