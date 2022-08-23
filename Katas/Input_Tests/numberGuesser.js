let prompt = require("prompt-sync")();
let answer;
const randomNumber = Math.ceil(Math.random()*10);
let i = 1;
console.log(randomNumber);
let attempts = [];
while(i > 0){
   answer = prompt("Guess a number: ");
  if(randomNumber === Number(answer)){
    console.log('You got it! You took ' + i + ' attempts!');
    break;
  }
  else if(attempts.includes(answer)){
    console.log('Already Guessed!')
  }
  else if(randomNumber > Number(answer)){
    console.log('Too Low!');
    attempts.push(answer);
  }
  else if(randomNumber < Number(answer)){
    console.log('Too High!');
    attempts.push(answer);
  }
  else if(typeof(answer) !== 'number'){
    console.log('Not a number! Try again!')
  }

  i++
}

//console.log(randomNumber + " "+ answer + ' ' + typeof(answer))

