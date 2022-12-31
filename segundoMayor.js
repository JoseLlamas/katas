export function obtenerSegundoMayor(numeros) {
  const numerosCopy = new Set([...numeros].sort((a, b) => b - a));
  return numerosCopy.size >= 2 ? [...numerosCopy.values()][1] : null;
}
