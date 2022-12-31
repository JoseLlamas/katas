
export class NumeroPerdidoException extends Error {}

/*
* Dado un array de enteros ordenados y sin repetir, crea una función que calcule
* y retorne todos los enteros que faltan entre el mayor y el menor
* Lana un error si el array de entrada no es correcto
*/
export function obtenerNumerosPerdidos(numeros) {
  if(numeros.length < 2) {
    throw new NumeroPerdidoException('lista vacía o con sólo un elemento');
  }
  const primerElemento = numeros.at(0);
  const ultimoElemento = numeros.at(-1);
  const asc = primerElemento < ultimoElemento;
  
  let prev = null;
  for(let numero of numeros) {
    if(prev !== null) {
      if(!((asc && prev < numero) || (!asc && prev > numero))) {
        throw new NumeroPerdidoException('elementos duplicados o lista no ordenada');
      }
    }
    prev = numero;
  }
  const lostNumbers = [];
  let ii = 0;
  for(let i = primerElemento;asc ? i < ultimoElemento : i > ultimoElemento; asc ? i++ : i--) {
    if(i !== numeros[ii]) {
      lostNumbers.push(i);
      ii++;
    }
  }
  return lostNumbers;
}
