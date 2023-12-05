/**
 * Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 * @param message:string ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
 * @returns string
 */
function rot13 (message: string): string {
  const result = message.replace(/[a-z]/gi, (letter: string) => {
    const oldCharCode = letter.charCodeAt(0)
    const caracter = letter.toLowerCase()
    const charCode = +caracter.charCodeAt(0)
    const index = charCode === 122 ? 25 : (3 + charCode) % 25
    let newCaracter
    if (index < 13) {
      newCaracter = String.fromCodePoint(97 + index + 13)
    } else {
      newCaracter = String.fromCodePoint(97 + 13 - (25 - index) - 1)
    }
    return oldCharCode >= 97 && oldCharCode <= 122 ? newCaracter : newCaracter.toUpperCase()
  })
  return result
}

export { rot13 }
