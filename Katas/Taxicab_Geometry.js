const blocksAway = function(directions) {
  //let grid =[5,5];
  let currentLocation = {};
  let currRow = 0;
  let currCol = 0;
  let direction;
  if(directions[0] === 'right'){
    //console.log(directions[i+1])
    currRow = 0;
    currCol = directions[1];
    direction = 'east';
  }
  else if(directions[0] === 'left'){
    currRow = directions[1];
    currCol = 0;
    direction = 'north'
  }
  let i = 2;
  while(i < directions.length){
    if((directions[i] === 'left') && (currRow === 0 && currCol > 0) && (direction === 'east')){
      currRow += directions[i+1];
      direction = 'north'
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol > 0) && (direction === 'north')){
      currCol -= directions[i+1];
      direction = 'west'
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol > 0) && (direction === 'west')){
      currRow -= directions[i+1];
      direction = 'south'
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol > 0) && (direction === 'south')){
      currCol -= directions[i+1];
      direction = 'west'
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol === 0) && (direction ==='west')){
      currRow -= directions[i+1];
      direction = 'north';
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol > 0) && (direction ==='east')){
      currRow += directions[i+1];
      direction = 'north';
    }
    else if((directions[i] === 'left') && (currRow > 0 && currCol === 0) && (direction ==='south')){
      currCol += directions[i+1];
      direction = 'east';
    }
    else if(directions[i] === 'right' && (currCol === 0 && currRow > 0) && direction === 'north'){
      currCol += directions[i+1];
      direction = 'east';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow > 0) && direction === 'north'){
      currCol += directions[i+1];
      direction = 'east';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow > 0) && direction === 'east'){
      currRow -= directions[i+1];
      direction = 'south';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow > 0) && direction === 'south'){
      currCol -= directions[i+1];
      direction = 'west';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow === 0) && direction === 'south'){
      currCol -= directions[i+1];
      direction = 'west';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow > 0) && direction === 'west'){
      currRow += directions[i+1];
      direction = 'north';
    }
    else if(directions[i] === 'right' && (currCol > 0 && currRow > 0) && direction === 'north'){
      currCol += directions[i+1];
      direction = 'east';
    }

    i += 2
  }
  currentLocation['east'] = currCol;
  currentLocation['north'] = currRow;
  currentLocation['direction'] = direction
  return currentLocation;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1,"right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));