const multiplicationTable = function(maxValue) {
let outcome = '';
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      outcome = outcome + i * j + ' ';
    }
    outcome = outcome + '\n';
  }
  return outcome;
};
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
