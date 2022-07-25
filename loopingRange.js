
function range(start, end, step){

  let rangeArray = [];
  let i = start;

  if((start === undefined) || (end === undefined) || (step === undefined) || (step < 1) || (start > end)){
    rangeArray = [];
  }
  else{
    while(i <= end){
      rangeArray.push(i)
      i = i + step;
    }
  }
  return rangeArray;
}
console.log(range(25,2, 4));