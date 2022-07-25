function loopyLighthouse(range, multiples, words){

  if((range.length !== 2) || (multiples.length !== 2) || (words.length !== 2)){
    console.log("Can't be done");
  }
  else{
    for (i = range[0]; i <= range[1]; i++){
      
      if((i % multiples[0] === 0) && (i % multiples[1] === 0)){
        //console.log("Multiple of both " + i );
        console.log(words[0] + words[1]);
      }else if(i % multiples[1] === 0){
        //console.log("it is a multiple of " + multiples[1] + " " + i);
        console.log(words[1]);
      }else if(i % multiples[0] === 0){
        //console.log("it is a multiple of " + multiples[0] + " " + i);
        console.log(words[0]);
      }
      else{
        console.log(i);
      }
    }

  }
}

function concat(arrOne, arrTwo){
  let arrThree = [];
    for (let i = 0; i < arrOne.length; i++){
      arrThree.push(arrOne[i]);
    }
    for(let j = 0; j < arrTwo.length; j++){
      arrThree.push(arrTwo[j]);
    }
  return arrThree
}


/*console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);*/

function merge(arrOne, arrTwo){
  let arrThree = [];
    for (let i = 0; i < arrOne.length; i++){
      arrThree.push(arrOne[i]);
    }
    for(let j = 0; j < arrTwo.length; j++){
      arrThree.push(arrTwo[j]);
    }
  return arrThree.sort()
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);