function sumLargestNumbers(numbers){
  let a = 0;
  let b = 0;
  let index = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > a){
      a = numbers[i];
      index = i;
    }
  }
  for(let i = 0; i < numbers.length; i++){
    if((numbers[i] <= a) && (numbers[i] > b) && index !== i){
      b = numbers[i];
    }
  }
  return a + b;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 92]));