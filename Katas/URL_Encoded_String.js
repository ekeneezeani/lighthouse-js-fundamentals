const urlDecode = function(text) {
  let returnObject = {}
  let propertyValue = [];
  textArray = [];
  if(text.includes('&')){
    let proVal = '';
    textArray = text.trim().split('&');
    for (let eachText of textArray){
      propertyValue.push(eachText.split('='))
    }
    for(let i = 0; i < propertyValue.length; i++){
      let tempArr = propertyValue[i][1].split('%20');
      for( let j = 0; j < tempArr.length; j++){
        proVal += tempArr[j] + ' '
      }
      returnObject[propertyValue[i][0]]=proVal.trim()
    }

  }
  else{
    textArray = text.trim().split('=')
    let proVal = '';
    let tempArr = textArray[1].split('%20');
    for( let i = 0; i < tempArr.length; i++){
      proVal += tempArr[i] + ' '
    }
    returnObject[textArray[0]]=proVal.trim()

  }


return returnObject;;
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);