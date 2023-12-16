/* eslint-disable no-empty */
/* eslint-disable no-unreachable-loop */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
console.log('para hacer katas')

function createChristmasTree (ornaments: string, height: number): string {
  let arbolNavidad = ''
  const canCaracteres = (height * (height + 1)) / 2
  const canRepeticiones = Math.ceil(canCaracteres / ornaments.length)
  let ornamentsTotal = ornaments.repeat(Math.ceil(canRepeticiones))
  ornamentsTotal = ornamentsTotal.slice(0, canCaracteres)
  let inicioIndex = 0
  for (let i = height - 1, ii = 1; i >= 0; i--, ii++) {
    arbolNavidad += ' '.repeat(i)
    let row = ornamentsTotal.slice(inicioIndex, ii + inicioIndex)
    row = row.replace(/(.)/g, '$1 ').trim()
    arbolNavidad += row + '\n'
    inicioIndex += ii
  }
  const repVacio = Math.floor((height + (height - 1)) / 2)
  return arbolNavidad + (' '.repeat(repVacio) + '|\n').repeat(height)
}

console.log(createChristmasTree('@^|°¬)(91{[{]}+*', 50))
