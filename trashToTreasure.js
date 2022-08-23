
function smartGarbage(trash, bin){
  if (trash === 'waste'){
    bin.waste += 1;
    return bin;
  }else if(trash === 'recycling'){
    bin.recycling += 1;
    return bin;
  }
  else{
    bin.compost += 1;
    return bin;
  }
}


//console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

function carPassing(cars, speed){
  cars.push({time: Date.now(),speed});
  return cars;
}

//console.log(carPassing(cars, 67));

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

/*function judgeVegetable(vegetables, metric){
  let j = 0;
 
  let submitter = "";
  if(metric === 'redness'){
    
    for(let i = 0; i < vegetables.length; i ++){
      if(vegetables[i].redness > j){
        j = (vegetables[i].redness);
        submitter = vegetables[i].submitter;
      }else{
        j = j;
        submitter = submitter;
      }
    }
    return submitter;
  }
  else if(metric === 'plumpness'){
    for(let i = 0; i < vegetables.length; i ++){
      if(vegetables[i].plumpness > j){
        j = (vegetables[i].plumpness);
        submitter = vegetables[i].submitter;
      }else{
        j = j;
        submitter = submitter;
      }
    }
  }
  return submitter;
}
console.log(judgeVegetable(vegetables, "plumpness"));*/

function judgeVegetable(vegetables, metric){
  //const key = Object.keys(vegetables);
  let j = 0;
  let submitter = "";
  for(let i = 0; i < vegetables.length; i ++){
    let propertyName = Object.keys(vegetables[i])
    let vegetable = Object.keys(vegetables)[i];
    for(let k = 0; k < propertyName.length; k++){
      if(propertyName[k] === metric){
        if (vegetables[vegetable][metric] > j){
          j = vegetables[vegetable][metric];
          submitter = vegetables[vegetable]["submitter"];
        }else{
          j = j;
          submitter = submitter;
        }
      }
    }

   // console.log(vegetables[vegetable][metric]+ propertyName[1])
   // + propertyName[1]
  }
  return submitter;
}

judgeVegetable(vegetables, "redness");

/*var person = [{village: "Ukpo", name: "ekene", state: "Anam"},
{village: "Dunu", name: "Sam", state: "Imo"}];
var vill = Object.keys(person)[1];
var na = "name"
console.log(person[vill][na]);*/