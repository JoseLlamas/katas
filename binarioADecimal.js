export class BinaryToDecimalError extends Error {}

export function fromBinaryToDecimal(binaryNumber) {
  if(!/[0-1]/g.test(binaryNumber)) {
    throw new BinaryToDecimalError;
  }
  
  let newBinaryNumber = binaryNumber;

  let decimal = 0;
  for(let i = newBinaryNumber.length - 1; i >= 0; i--) {
    const bit = newBinaryNumber.at(i);    
    if(bit === '1') {
      decimal += 2 ** (newBinaryNumber.length - i - 1);
    }
  }
  return decimal;
}