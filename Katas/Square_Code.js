/*const squareCode = function(message) {
  //Removing all spaces in the sentence
  let messageWithoutSpaces = '';
  for(let i= 0; i < message.length; i++){
    let char = message.charAt(i);
    if(char === ' '){
      char = '';
    }
    messageWithoutSpaces += char;
  }
  //Splitting the the single sentence without spaces into rows and savin them in an array.
  let count = messageWithoutSpaces.length;
  let column = Math.ceil(Math.sqrt(count));
  let rows = Math.ceil(count/column);
  let eachWord = '';
  let wordArray = [];
  for(let i = 0; i < count; i++){
    eachWord += messageWithoutSpaces[i];
    if((i % column === 0 && i > 0 || i === count-1)){
      let actualWord = eachWord.slice(0,-1);
      if(i === count-1){
        actualWord =eachWord
      }
      wordArray.push(actualWord)
      eachWord = '';
      eachWord += messageWithoutSpaces[i];
    }
  }
  //taking the character in thesame index on individual row to form a word
  let newWord = '';
  let rowCount = 0;
  let columnCount = 0
  let returnValue = '';
  

  for( let i = 0; i <= rows; i++){
    for (let j = 0; j < wordArray.length; j++){
      let char =wordArray[j][columnCount];
      if(char !== undefined){
        newWord += char
        rowCount = j;
      }
    }
    if(columnCount < column){
      columnCount += 1;
    }
    else{
      columnCount = 0
    }
    returnValue += newWord + ' '
    newWord = '';
  }
  for (let i = 0; i < returnValue.length; i++){
    
  }

return returnValue.trim(); 
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));*/

let message = 'ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots'
const arr = message.split(5);
let newmess ='';
for(let i = 0; i<message.length; i++){
  if(i % 8 === 0 && i !== 0){
    newmess += '/' + message[i];
  }
  else{
    newmess  += message[i]
  }
}
console.log(newmess.split('/'))