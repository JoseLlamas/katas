function manufacture (gifts: string[], materials: string): string[] {
  const canGifts: string[] = []
  for (let i = 0; i < gifts.length; i++) {
    let flag = true
    for (const letter of gifts[i]) {
      if (!materials.includes(letter)) {
        flag = false
        break
      }
    }
    if (flag) {
      canGifts.push(gifts[i])
    }
  }
  return canGifts
}

export { manufacture }
