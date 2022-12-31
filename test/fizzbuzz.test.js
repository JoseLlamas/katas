//const { fizzBuzz } = require('./../fizzbuzz');

import { fizzBuzz, FizzBuzzError } from './../fizzbuzz.js';

describe.skip('FizzBuzz', () => {
  test('should print empty array if they recive x <= 2', () => {
    const expected = [];
    const result = fizzBuzz(2);

    expect(result).toStrictEqual(expected);
  });

  test('debe imprimir un arreglo con un sólo elemento cuando se pase 3', () => {
    const expected = [[3, 'fizz']];
    const result = fizzBuzz(3);

    expect(result).toStrictEqual(expected);
  });

  test('debe imprimir un arreglo con dos elementos, uno para fizz y otro para buzz cuando se le pase 5', () => {
    const expected = [
      [3, 'fizz'],
      [5, 'buzz'],
    ];
    const result = fizzBuzz(5);

    expect(result).toStrictEqual(expected);
  });

  test('debe imprimir un arreglo con 7 elementos cuando se envie 15 y el último debe tener fizzbazz', () => {
    const expected = [
      [3, 'fizz'],
      [5, 'buzz'],
      [6, 'fizz'],
      [9, 'fizz'],
      [10, 'buzz'],
      [12, 'fizz'],
      [15, 'fizzbuzz'],
    ];
    const result = fizzBuzz(15);
    expect(result).toStrictEqual(expected);
  });

  test('si se manda 0 o un número negativo se arroja una excepción', () => {
    expect(() => fizzBuzz(0)).toThrowError(FizzBuzzError);
  });

  test('si se envía algo diferente a un número o número entero, se lanza una excepción', () => {
    expect(() => fizzBuzz('dsfs')).toThrowError(FizzBuzzError);
  });
});
