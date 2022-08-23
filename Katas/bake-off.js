const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  bakeryARecipe = [];
  bakeryBRecipe = [];
  let commonRecipe = '';
  /*for(let i = 0; i < recipes.length; i++){
    let ingredients = recipes[i].ingredients;
    for(let ing = 0; ing < ingredients.length; ing++){
      for(let a = 0; a < bakeryA.length; a++){
        if(bakeryA[a] === ingredients[ing]){
          bakeryARecipe.push(bakeryA[a])
        }
      }
    }
  }
  for(let i = 0; i < recipes.length; i++){
    let ingredients = recipes[i].ingredients;
    for(let ing = 0; ing < ingredients.length; ing++){
      for(let b = 0; b < bakeryB.length; b++){
        if(bakeryB[b] === ingredients[ing]){
          bakeryBRecipe.push(bakeryB[b])
        }
      }
    }
  }*/
  for(let a = 0; a < bakeryA.length; a++){
    for(let b = 0; b < bakeryB.length; b++){
      for(let recipe of recipes){
        let ing = recipe.ingredients;
        //console.log(recipe)
        if(ing.includes(bakeryA[a]) && ing.includes(bakeryB[b]) ){
          commonRecipe = recipe.name
          break;
        }
      }
    }
  }
  return commonRecipe;
}




let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];


console.log(chooseRecipe(bakeryA, bakeryB, recipes));
//console.log()
//chooseRecipe(bakeryA, bakeryB, recipes)
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));