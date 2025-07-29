function validateNumbers(...numbers) {
  numbers.forEach((element, index) => {
    if(typeof numbers[index] != 'number')
      return false;
  });
  return true;
}

const add = function(...numbers) {
  if(validateNumbers(numbers))
    return numbers.reduce((total, num) => total + num);
  else 
    return 'ERROR';
};

const subtract = function(...numbers) {
	if(validateNumbers(numbers)) {
    let outputNum = numbers[0];
    numbers.slice(1).forEach((num) => {
      outputNum -= num;
    });
    return outputNum;
  }
  else
    return 'ERROR';
    
};

const sum = function(...numbers) { 
  if(validateNumbers(numbers)) {
    outputNums = numbers.reduce((total, num) => total + num);
    if(outputNums.length == 0)
      return 0;
    return outputNums.reduce((total, num) => total + num);
  }

  else 
    return 'ERROR';

}; 


const multiply = function(...numbers) {
  if(validateNumbers(numbers)) {
    let outputNums = numbers.reduce((total, num) => total + num);
    if(outputNums.length == 0) 
      return 0;
    let outputNumber = outputNums[0];
    outputNums.slice(1).forEach((num) => {
      outputNumber *= num;
    });
    return outputNumber;
  }

  else 
    return 'ERROR';
};

const power = function(num1, num2) {
	if(validateNumbers(num1, num2)) {
    let outputNumber = num1;
    for(let i = 1; i<num2; i++)
      outputNumber *= num1;
    return outputNumber;
  }

  else 
    return 'ERROR';
};

const factorial = function(num) {
  let counterNum = num;
  let outputNum = num;
  if(num == 0) 
    return 1;
  while(counterNum > 1) {
    counterNum -= 1;
    outputNum *= counterNum;
  }
  return outputNum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
