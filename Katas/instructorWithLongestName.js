var names = [' ',' ',' ',' ','ekene','soam','sam','soma','chus',' ', 'chris','elvis','elino','ebano',' ',' ',' ']
function trim(arr){
  var count = 0;
  var countback = 0;
  for(let i = 0; i <arr.length; i++ ){
    if(names[i]=== ' '){
      count += 1;
    }
    else{
      break;
    }
  }
  arr.splice(0,count)
  var len = arr.length -1
  for(let i = len; i >= 0; i-- ){
    if(arr[i]=== ' '){
      countback += 1;
    }
    else{
      break;
    }

  }
  arr.splice(-countback,len);
return arr;
}

console.log(trim(names))
