function lastIndexOf(arr, element){
  let num = null;
  if (arr.length === 0){
    num = -1;
  }
  else{
    for (let i = 0; i < arr.length; i++){
      
      if (arr[i] === element){
        let index = i;
        num = index;
        if(num >= 0){
          num = index;
        }
        else{
          num = -1;
        }
      }else if(num === null){
        num = -1;
      }
    }
  }
return num;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);