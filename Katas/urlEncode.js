const urlEncode = function(text){
  const trimedText = text.trim();
  let char = '';
  let url ='';
  for(let i =0; i < trimedText.length; i++){
    if(trimedText.charAt(i) === ' '){
      char = '%20';
    }
    else{
      char = trimedText.charAt(i);
    }
    url += char
  }
  return url;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));