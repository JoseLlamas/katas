/**
 * Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.
 *
 * Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.
 *
 * Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.
 *
 * Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
 *
 * calculateTime(['00:10:00', '01:00:00', '03:30:00'])
 * // '-02:20:00'
 *
 * calculateTime(['02:00:00', '05:00:00', '00:30:00'])
 * // '00:30:00'
 *
 * calculateTime([
 *  '00:45:00',
 *  '00:45:00',
 *  '00:00:30',
 *  '00:00:30'
 * ]) // '-05:29:00'
 *
 *
 * @param deliveries string[]
 * @returns string
 */
function calculateTime (deliveries: string[]): string {
  let segundosTotal = 0
  const horaFinal = 7 * 3600
  for (const delivery of deliveries) {
    const [horas, minutos, segundos] = delivery.split(':')
    segundosTotal += (+horas * 3600) + (+minutos * 60) + (+segundos)
  }
  let result = segundosTotal < horaFinal ? '-' : ''
  segundosTotal = Math.abs(segundosTotal - horaFinal)
  const horas = '' + Math.floor(segundosTotal / 3600)
  const minutos = '' + Math.floor(segundosTotal % 3600 / 60)
  const segundos = '' + segundosTotal % 3600 % 60
  result += `${horas.padStart(2, '0')}`
  result += `:${minutos.padStart(2, '0')}`
  result += `:${segundos.padStart(2, '0')}`
  return result
}

export { calculateTime }
