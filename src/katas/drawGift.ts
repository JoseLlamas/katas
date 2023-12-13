/**
 * Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
 *
 * Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
 *
 * Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
 *
 * drawGift(4, '+')
 *
 *
 *    ####
 *   #++##
 *  #++#+#
 * ####++#
 *#++#+#
 *#++##
 *####
 *
 *
 *drawGift(5, '*')
 *
 *    #####
 *   #***##
 *  #***#*#
 * #***#**#
 *#####***#
 *#***#**#
 *#***#*#
 *#***##
 *#####
 *
 *
 * drawGift(1, '^')
 *
 * #
 *
 * Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
 *
 *Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
 */
function drawGift (size: number, symbol: string): string {
  if (size === 1) {
    return '#\n'
  }
  let result = ''
  const realSize = size - 1
  for (let i = realSize; i >= -realSize; i--) {
    result += i > 0 ? ' '.repeat(i) : ''
    if (i === realSize || i === 0 || i === -realSize) {
      result += '#'.repeat(size)
      if (i === 0) {
        result += symbol.repeat(size - 2) + '#'
      }
    } else {
      result += '#' + symbol.repeat(size - 2) + '#'
      result += symbol.repeat(size - 2 - Math.abs(i)) + '#'
    }
    result += '\n'
  }
  return result
}

export { drawGift }
