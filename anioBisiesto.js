function isBisiesto(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function obtenerAniosBisiestos(desde, cantidad) {
  let encontrados = [];
  let contador = desde;
  while (encontrados.length < cantidad) {
    if (isBisiesto(contador)) {
      encontrados.push(contador);
    }
    contador++;
  }
  return encontrados;
}

export { isBisiesto, obtenerAniosBisiestos };
