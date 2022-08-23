const talkingCalendar = function(date) {
  // Your code here
  let month = date.split('/')[1];
  let day = date.split('/')[2];
  if(day[0] === '0' && day[1] === '1'){
    day = day[1] + 'st';
  }else if(day[0] > 1 && day[1] === '1'){
    day = day + 'st';
  }else if(day[0] === '0' && day[1] === '2'){
    day = day[1] + 'nd';
  }else if(day[0] > 1 && day[1] === '2'){
    day = day + 'nd';
  }else if(day[0] === '0' && day[1] === '3'){
    day = day[1] + 'rd';
  }else if(day[0] > 1 && day[1] === '3'){
    day = day + 'rd';
  }else if(day[0] === '0' && day[1] > 3){
    day = day[1] + 'th';
  }else if(day[0] === '1'){
    day = day + 'th';
  }else if(day[0] > 1 && day[1] > 3){
    day = day + 'th';
  }else if(day[0] > 1 && day[1] === '0'){
    day = day + 'th';
  }


  switch(month){
    case '01' :
      month = 'January'
    break;
    case '02' :
      month = 'February'
    break;
    case '03' :
      month = 'March'
    break;
    case '04' :
      month = 'April'
    break;
    case '05' :
      month = 'May'
    break;
    case '06' :
      month = 'June'
    break;
    case '07' :
      month = 'July'
    break;
    case '08' :
      month = 'August'
    break;
    case '09' :
      month = 'September'
    break;
    case '10' :
      month = 'October'
    break;
    case '11' :
      month = 'November'
    break;
    case '12' :
      month = 'December'
    break;
  }

  return month + ' '+ day + ', ' + date.split('/')[0] ;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));