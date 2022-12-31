import { fromBinaryToDecimal, BinaryToDecimalError } from './../binarioADecimal';

describe('de binario a decimal', () => {
  test('Pasar 1010101 a decimal', () => {
    const expected = 85;
    const result = fromBinaryToDecimal('1010101');

    expect(result).toBe(expected);
  });
  test('Pasar 0b0 a decimal', () => {
    const expected = 0;
    const result = fromBinaryToDecimal('0');

    expect(result).toBe(expected);
  });
  test('Pasar 0b11111111111111111111111111111111 a decimal', () => {
    const expected = 4294967295;
    const result = fromBinaryToDecimal('11111111111111111111111111111111');

    expect(result).toBe(expected);
  });
  test('no es una cadena en formato binario (con sólo 1 y 0)', () => {
    expect(() => fromBinaryToDecimal('222')).toThrowError(BinaryToDecimalError);
  });
});