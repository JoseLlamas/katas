/* eslint-disable no-empty */
/* eslint-disable no-unreachable-loop */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
console.log('para hacer katas')

/*
    #####
   #+++##
  #+++#+#
 #+++#++#
#####+++#
#+++#++#
#+++#+#
#+++##
#####
*/

function drawGift (size: number, symbol: string): string {
  let result: string = ''
  let numero = size - 3
  const tamReal = size * 2 - 1
  for (let i = 1; i <= tamReal; i++) {
    if (i < size) {
      result += ' '.repeat(size - i)
      if (i === 1) {
        result += '#'.repeat(size) + '\n'
      } else {
        result += '#' + symbol.repeat(size - 2) + '#'
        result += symbol.repeat(i - 2) + '#\n'
      }
    } else if (i === size) {
      if (size === 1) {
        return '#\n'
      }
      result += '#'.repeat(size) + symbol.repeat(size - 2) + '#\n'
    } else {
      if (i < tamReal) {
        result += '#' + symbol.repeat(size - 2) + '#'
        result += symbol.repeat(numero--) + '#\n'
      } else {
        result += '#'.repeat(size) + '\n'
      }
    }
  }
  return result
}

console.log(drawGift(30, '+'))

/*
  ###
 #+##
###+#
#+##
###
*/

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/
