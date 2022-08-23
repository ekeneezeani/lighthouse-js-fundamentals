const makeCase = function(input, caseType) {
const vowels = ['a','e','i','o','u'];
let lowerCaseInput = input.trim().toLowerCase();
let splitInput = lowerCaseInput.split(' ');
returnValue ='';

  if(caseType === 'camel'){
    for(let word of splitInput){
      returnValue += word.replace(word[0], word[0].toUpperCase())
    }
    returnValue = returnValue.replace(returnValue[0], returnValue[0].toLowerCase());
    return returnValue;
  }
  else if(caseType === 'pascal'){
    for(let word of splitInput){
      returnValue += word.replace(word[0], word[0].toUpperCase())
    }
    return returnValue;
  }
  else if(caseType === 'snake'){
    let i = 0;
    while(i < splitInput.length){

      if(i === splitInput.length - 1){
        returnValue += splitInput[i];
      }
      else{
      returnValue += splitInput[i] + '_';
      }
      i = i + 1;
    }
    return returnValue
  }
  else if(caseType === 'kebab'){
    let i = 0;
    while(i < splitInput.length){

      if(i === splitInput.length - 1){
        returnValue += splitInput[i];
      }
      else{
      returnValue += splitInput[i] + '-';
      }
      i = i + 1;
    }
    return returnValue;
  }
  else if(caseType === 'title'){

    let i = 0;
    while(i < splitInput.length){

      if(i === splitInput.length - 1){
        returnValue += splitInput[i].replace(splitInput[i][0], splitInput[i][0].toUpperCase());
      }
      else{
      returnValue += splitInput[i].replace(splitInput[i][0], splitInput[i][0].toUpperCase()) + ' ';
      }
      i = i + 1;
    }
    return returnValue;
  }
  else if( caseType === 'vowel'){
    for(let i = 0; i < lowerCaseInput.length; i++){
      if(vowels.includes(lowerCaseInput.charAt(i))){
        returnValue += lowerCaseInput.charAt(i).toUpperCase();
      }
      else{
        returnValue += lowerCaseInput.charAt(i);
      }
    }
    return returnValue;
  }
  else if( caseType === 'consonant'){
    for(let i = 0; i < lowerCaseInput.length; i++){
      if(!vowels.includes(lowerCaseInput.charAt(i))){
        returnValue += lowerCaseInput.charAt(i).toUpperCase();
      }
      else{
        returnValue += lowerCaseInput.charAt(i);
      }
    }
    return returnValue;
  }

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));