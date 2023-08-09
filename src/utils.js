const numbs = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

function sumNumbers(num){
  let result = '';
  let count = 0;
  for (let generic in numbs) {
    count = 0;
    while(num >= numbs[generic]){
      count++;
      if(count >3) return null;
      result += generic;
      num -= numbs[generic];
    }
  }
  return result
}
function substractNumbers(num){
  let minDiff = Infinity;
  let closerNum;
  let result;

  switch (true) {
    case (num > 9):
      result = 'X'
      break;
    default:
      result = 'I'
      break;
  }

  for (let generic in numbs) {
    let actualDiff = Math.abs(numbs[generic] - num) ;

    if (actualDiff < minDiff) {
      minDiff = actualDiff;
      closerNum = generic;
    }

   }
   
  return result + closerNum 
}


function convertToRoman(num) {
  let arr = decomposeNumber(num)
  let romanNumber = '';
  arr.forEach(arrNum => {
    romanNumber = romanNumber + (sumNumbers(arrNum) || substractNumbers(arrNum));
  })
  return romanNumber;
}

function decomposeNumber(num) {

  let number = num;
  let arr = []
  for (let i = 1; i < num.toString().length + 1; i++) {
    let remainder = number % Math.pow(10, i);
    number = number - remainder;
    if (remainder !== 0) arr.push(remainder);
  }

  return arr.reverse()
}


module.exports = convertToRoman 