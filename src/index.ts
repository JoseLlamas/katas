/* eslint-disable no-empty */
/* eslint-disable no-unreachable-loop */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
console.log('para hacer katas')

function calculateTime (deliveries: string[]): string {
  return '00:00:00'
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
