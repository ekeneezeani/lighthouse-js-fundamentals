var str = 'Ekene solomon ezeani patrick';
//str = str + ' ';
const camelCase = function(input) {
  // Your code here

  let word = ''
  //count = 0;
  let results = [];
  for(let i = 0; i < input.length; i++){

    word = word + input.charAt(i)
    if(input[i] === ' ' || i === input.length-1){
    results.push(word.trim());
      word ='';
    }
  
  }
  let camel = '';

  for(let result of results){
    camel += result.replace(result[0], result[0].toUpperCase())
  } 
  return camel.replace(camel[0],camel[0].toLowerCase());
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("Let us Get his Name"));
