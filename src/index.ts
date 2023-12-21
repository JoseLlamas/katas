/* eslint-disable no-empty */
/* eslint-disable no-unreachable-loop */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
console.log('para hacer katas')

function calculateTime (deliveries: string[]): string {
  let horas = 0
  let minutos = 0
  let segundos = 0
  for (const delivery of deliveries) {
    const [h, m, s] = delivery.split(':')
    horas += (+h)
    minutos += (+m)
    segundos += (+s)
  }
  const segundosR = segundos % 60
  const minutosR = (minutos + (Math.floor(segundos / 60))) % 60
  const horasR = horas + Math.floor(minutos / 60)
  if (horasR >= 7) {
    return `0${horasR - 7}:${minutosR}:${segundosR}`
  } else {
    return `-${7 - horasR - 1}:${60 - minutosR}:${segundosR > 0 ? 60 - segundosR : 0}`
  }
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])) // '-05:29:00'
