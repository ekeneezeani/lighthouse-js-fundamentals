
let whiteQueen = [0, 5];
let blackQueen = [5, 0];

const generateBoard = function(whiteQueen, blackQueen){
  let returnValue = [];
  for(let i = 0; i < 8; i++){
    let row =[];
    for(let j = 0; j < 8; j++){
      if( ((i === whiteQueen[0]) && (j === whiteQueen[1])) || ((i === blackQueen[0]) && (j === blackQueen[1]))){
        row.push(1)
      }
      else{
        row.push(0);
      }
    }
    returnValue.push(row)
  }
  return returnValue;
}


const queenThreat = function(input){
  let value =[];
  let queenPositions = []
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(input[i][j] === 1){
        value.push(i);
        value.push(j);
        queenPositions.push(value);
        value = [];
      }
    }
  }

  var queenThreat = false;
  let rowOneColOne = queenPositions[0][0];
  let rowTwoColOne = queenPositions[1][0];
  let rowOneColTwo = queenPositions[0][1]
  let rowTwoColTwo = queenPositions[1][1];

  if( (rowOneColOne === rowTwoColOne) || (rowOneColTwo ===  rowTwoColTwo) || ((rowOneColOne - rowTwoColOne)/(rowOneColTwo - rowTwoColTwo) === -1)|| ((rowOneColOne - rowTwoColOne)/(rowOneColTwo - rowTwoColTwo) === 1) ){
    queenThreat = true
  }


  return queenThreat;
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard))

whiteQueen = [0, 0];
blackQueen = [5, 7];

generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard))