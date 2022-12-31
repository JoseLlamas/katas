import { obtenerSegundoMayor } from "../segundoMayor";

describe.skip('el segundo mayor de una lista de números', () => {
  test('de la lista 4, 6, 1, 8, 2', () => {
    const expected = 6;
    const result = obtenerSegundoMayor([4, 6, 1, 8, 2]);
   
    expect(result).toBe(expected);
  });
  test('de la lista 4, 6, 8, 8, 6', () => {
    const expected = 6;
    const result = obtenerSegundoMayor([4, 6, 8, 8, 6]);

    expect(result).toBe(expected);
  });
  test('de la lista 4, 4', () => {
    const expected = null;
    const result = obtenerSegundoMayor([4, 4]);
    expect(result).toBe(expected);
  });
  test('de una lista vacía', () => {
    const expected = null;
    const result = obtenerSegundoMayor([]);
    expect(result).toBe(expected);
  });
});
