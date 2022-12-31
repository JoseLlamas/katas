import {
  obtenerNumerosPerdidos,
  NumeroPerdidoException,
} from '../numerosPerdidos';

describe.skip('numerosPerdidos', () => {
  test('parámetro de lista de enteros, repetidos y no ordenados', () => {
    const expected = NumeroPerdidoException;
    const params = [4, 5, 4, 3, 2];
    expect(() => obtenerNumerosPerdidos(params)).toThrowError(expected);
  });
  test('lista 5,3,1, falta el 4 y el 2', () => {
    const expected = [4, 2];
    const result = obtenerNumerosPerdidos([5,3,1]);
    expect(result).toStrictEqual(expected);
  });
  test('lista 10, 1, falta el 9, 8, 7, 6, 5, 4, 3, 2', () => {
    const expected = [9, 8, 7, 6, 5, 4, 3, 2];
    const result = obtenerNumerosPerdidos([10,1,]);
    expect(result).toStrictEqual(expected);
  });
  test('lista 5, 4, 2, 6, 1, lanza un excepción, no está ordenado', () => {
    expect(() => obtenerNumerosPerdidos([5, 4, 2, 6, 1])).toThrowError(NumeroPerdidoException);
  });
  test('lista 1, 5, 8, 10, 25', () => {
    const expected = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,];
    const result = obtenerNumerosPerdidos([1, 5, 8, 10, 25]);
    expect(result).toStrictEqual(expected);
  });
  test('lista 10, 5, 5, 2, lanza error, valores repetidos', () => {
    expect(() => obtenerNumerosPerdidos([10, 5, 5, 2])).toThrowError(NumeroPerdidoException);
  })
});
