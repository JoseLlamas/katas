/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 *
 * format for expressing an ordered list of integers is to use a comma separated list of either
 * individual integers
 * or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
 * @param list: number[]
 * @returns string
 */
function rangeExtraction (list: number[]): string {
  const accu: Array<number | number[]> = [list.at(0)!]
  for (let i = 1; i < list.length; i++) {
    const previous = accu.at(-1)!
    const actual = list.at(i)!
    if (typeof previous === 'number') {
      if (Math.abs(previous - actual) === 1) {
        accu[accu.length - 1] = [previous, actual]
      } else {
        accu.push(actual)
      }
    } else {
      const lastPrevious = previous.at(-1)!
      if (Math.abs(lastPrevious - actual) === 1) {
        previous.push(actual)
      } else {
        accu.push(actual)
      }
    }
  }
  return accu.flatMap(itm => {
    if (Array.isArray(itm)) {
      if (itm.length === 2) {
        return itm.join(',')
      } else {
        return [itm.at(0), itm.at(-1)].join('-')
      }
    }
    return itm
  }).join(',')
}

export { rangeExtraction }
