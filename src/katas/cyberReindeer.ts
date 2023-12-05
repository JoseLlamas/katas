/**
 * Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
*/
function cyberReindeer (road: string, time: number): string[] {
  const result: string[] = [road]
  let pastCaracter = '.'
  let index = 1
  for (let i = 1; i < time; i++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastRoad = result.at(-1)!.split('')
    if (lastRoad[index] === 'S') {
      index++
      continue
    }
    if (lastRoad[index] === '.' || lastRoad[index] === '*') {
      lastRoad[index] = 'S'
      lastRoad[index - 1] = pastCaracter
      pastCaracter = road.charAt(index) === '|' ? '*' : '.'
      result.push(lastRoad.join(''))
      index++
    } else if (lastRoad[index] === '|') {
      if (i <= 4) {
        result.push(lastRoad.join(''))
        continue
      } else {
        lastRoad[index] = 'S'
        lastRoad[index - 1] = pastCaracter
        pastCaracter = road.charAt(index) === '|' ? '*' : '.'
        index++
        result.push(lastRoad.join('').replace(/\|/g, '*'))
      }
    }
  }
  return result
}

export { cyberReindeer }
