function adjustLights (lights: string[]): number {
  let cantidad = 0
  const pares: [number, number] = [0, 0]
  const impares: [number, number] = [0, 0]
  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0) {
      if (lights[i] === '🟢') {
        pares[0]++
      } else {
        pares[1]++
      }
    } else {
      if (lights[i] === '🟢') {
        impares[0]++
      } else {
        impares[1]++
      }
    }
  }
  if (pares[0] > pares[1]) {
    cantidad += pares[1]
    cantidad += impares[0]
  } else {
    cantidad += pares[0]
    cantidad += impares[1]
  }
  return cantidad
}

export { adjustLights }
