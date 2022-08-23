const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let X ;
  let Y ;
  availableSpot = [];
  for(let i = 0; i < spots.length; i++){
    for(let j = 0; j < spots[i].length; j++){
      let parkingSpot = spots[i][j];
      if(parkingSpot === parkingSpot.toUpperCase()){
        if(vehicle === 'regular' && parkingSpot === 'R'){
          X = j;
          Y = i;
        return[X,Y];
        }
        else if(vehicle === 'small' && (parkingSpot === 'R' || parkingSpot === 'S')){
          X = j;
          Y = i;
        return[X,Y];
        }
        else if(vehicle === 'motorcycle' && (parkingSpot === 'R' || parkingSpot === 'S' || parkingSpot === 'M')){
          X = j;
          Y = i;
        return[X,Y];
        }

      }
    }
  }
  
};



console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 's', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['s', 'r', 's', 'M', 'm', 'S']
  ],
  'motorcycle'
))
