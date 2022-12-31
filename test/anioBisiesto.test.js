import {
  isBisiesto,
  obtenerAniosBisiestos,
} from '../anioBisiesto';

describe.skip('Calcular anios bisiestos', () => {
  test('el anio 2000 es bisiesto', () => {
    const expected = true;
    const result = isBisiesto(2000);

    expect(result).toBe(expected);
  });
  test('el anio 2005 es bisiesto', () => {
    const expected = false;
    const result = isBisiesto(2005);

    expect(result).toBe(expected);
  });
  test('obtener los anios siguientes 10 anios bisiestos dado el anio 2000', () => {
    const expected = [
      2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036,
    ];
    const result = obtenerAniosBisiestos(2000, 10);

    expect(result).toStrictEqual(expected);
  });
});
