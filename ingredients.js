const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i += 1;
}
// Write a for loop that prints out the contents of ingredients
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let fromLast = ingredients.length;
for(let j = 0; j < ingredients.length; j++){
  console.log(ingredients[fromLast]);
  fromLast = fromLast - 1;
}
