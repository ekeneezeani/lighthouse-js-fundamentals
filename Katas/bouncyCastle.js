const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let volume = (4/3) * PI * Math.pow(radius,3)
  return volume;
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let volume = PI * Math.pow(radius,2) * (height/3)
  return volume;
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let area = width * depth;
  let volume = area * height;
  return volume;
}
console.log(prismVolume(3, 4, 5) === 60);

const largeSphere = {
  type: 'sphere',
  radius: 40,
  volume: function(){
    var vol = sphereVolume(40)
  return vol ;
  }
}

const smallSphere = {
  type: 'sphere',
  radius: 10,
  volume: function(){
    var vol = sphereVolume(10)
  return vol ;
  }
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
  volume: function(){
    var vol = coneVolume(3,5)
    return vol;
  }
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

const totalVolume = function (solids) {
  let volume = 0;
  for(let i = 0; i < solids.length; i++){
    volume = volume + solids[i].volume();
  }
  return volume;
}
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);