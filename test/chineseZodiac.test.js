import { calcularAnioChino } from '../chineseZodiac';

describe.skip('test para calendario chino', () => {
  test('para el año 1804', () => {
    const expected = ['madera', 'rata'];
    const result = calcularAnioChino(1804);
    expect(result).toStrictEqual(expected);
  });
  test('para el año 1814', () => {
    const expected = ['madera', 'perro'];
    const result = calcularAnioChino(1814);
    expect(result).toStrictEqual(expected);
  });
  test('para un año anterior a 604', () => {
    const expected = Error;
    expect(() => calcularAnioChino(1)).toThrowError(Error);
  });
  test('para el anio 2023', () => {
    const expected = ['agua', 'conejo'];
    const result = calcularAnioChino(2023);
    expect(result).toStrictEqual(expected);
  });
});
