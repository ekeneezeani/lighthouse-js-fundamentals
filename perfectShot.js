const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(moves){
  let x = 0;
  let y = 0;
  let presentSpot = [];

    for (const move of moves){
    /*if (move === "east"){
      x = x + 1;
    }else if(move === "west"){
      x = x - 1;
    }else if (move === "north"){
      y = y + 1;
    }else if (move === "south"){
      y = y - 1;
    }*/
    switch(move){
      case "east":
        x = x + 1;
        break;
      case "west":
        x = x - 1;
        break;
      case "south":
        y = y - 1;
        break;
      case "north":
        y = y + 1
        break;
    }
  }
  presentSpot.push(x,y);
  return presentSpot;


}
console.log(finalPosition(moves));

