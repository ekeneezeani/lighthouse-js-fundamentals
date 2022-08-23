const repeatNumbers = function(data) {
  let repeat = ''
  let repeatArr = '';
  if(typeof(data[0]) === 'number'){
    for (let i = 0; i < data[1]; i++){
      repeatArr += data[0];
    }
    repeatArr = repeatArr + ' ';
  }
  else{
    for (let i = 0; i < data.length; i++){
      for (j = 0; j < data[i][1]; j++){
        repeat += data[i][0];
      }
      repeatArr = repeatArr + repeat + ','
      repeat = '';
    }
  }

  return repeatArr.slice(0, -1)
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));