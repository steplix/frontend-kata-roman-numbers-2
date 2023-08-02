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
  if (num > 10 && (num.toString().endsWith('4') || num.toString().endsWith('9'))){
     let restNumber = num.toString().slice(-1);
     let newNumber = num - restNumber;
     return convertToRoman(newNumber) + substractNumbers(restNumber);
  }
  
  return sumNumbers(num) || substractNumbers(num);
}

function decomposeNumber(num) {

  let number = num;
  for (let i = 1; i < num.toString().length + 1; i++) {
    let res = number % Math.pow(10, i);
    // number = number - res;
    number = number / 10;
    console.log('divisor', number);
    number = number * Math.pow(10, i);
    
    console.log(number);
  }
}

decomposeNumber(325);


module.exports = convertToRoman 