const stations = [['Big Bear Donair', 10, 'restaurant'],['Bright Lights Elementary', 50, 'school'],
['Moose Mountain Community Centre', 45, 'community centre']];
const moose =[1, 23, 4, 6, 7]

/*function chooseStations(stations){
  let selectedStations = [];
  for(let i = 0; i < stations.length; i++){
    if((stations[i][1] > 20) && (stations[i][2] === "school" || "community centre'")){
      selectedStations.push(stations[i][0]);
    }
  }
  return console.log(selectedStations)
}*/

//another way to do it
function chooseStations(nearByStations){
  const goodStation = [];
  for(const station of nearByStations){
    const capacity =station[1];
    if (capacity >= 20){
      const type = station[2];
      if (type === 'school' || type === 'community centre'){
        goodStation.push(station[0]);
      }
    }
  }
  return goodStation;
}
  
console.log(chooseStations(stations))



