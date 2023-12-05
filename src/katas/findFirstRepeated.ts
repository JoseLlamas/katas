function findFirstRepeated (gifts: number[]): number {
  let index = -1
  for (let i = 0; i < gifts.length; i++) {
    for (let ii = gifts.length - 1; ii >= 0; ii--) {
      if (i < ii) {
        if (gifts[i] === gifts[ii]) {
          if (index === -1) {
            index = ii
          } else {
            if (ii < index) {
              index = ii
            }
          }
        }
        continue
      }
      break
    }
  }
  return index === -1 ? index : gifts[index]
}

export { findFirstRepeated }
