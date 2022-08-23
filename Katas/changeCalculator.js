
const calculateChange = function(total, cash) {
  let change = {};
  remainingCash = cash - total;
  let changeTypes = ['twentyDollar','tenDollar','fiveDollar','twoDollar','oneDollar','quarter','dime','nickel','penny'];
  let changeAmounts =[2000,1000,500,200,100,25,10,5,1];
  let numberOfTimes = 0
  for( let i = 0; i < changeTypes.length; i++){
    numberOfTimes = Math.floor(remainingCash/changeAmounts[i]);
    if(numberOfTimes > 0){
      change[changeTypes[i]] = numberOfTimes;
      remainingCash = remainingCash % changeAmounts[i]
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));