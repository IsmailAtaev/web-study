/** Author Ismayyl*/

// Task 1.1
/*function highAndLow(numbers) {

  let arrNumStr = numbers.split(" ");
  console.log(arrNumStr);
  const arrNum = arrNumStr.map((str) => {
    return Number(str);
  });
  arrNum.sort((a, b) => {return a - b});
  console.log(arrNum)
  let str = arrNum[arrNum.length-1] + " " + arrNum[0];
  return str
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))*/

//Task 1.7
/*
function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let min = seconds / 60;
  //console.log("" +)
  console.log("min "+ min )
  if (min >= 0.6) {
    let hour = min / 60;
    console.log("hour " +hour)
    if (hour >= 24) {
      let days = hour / 24;

      if (days >= 365) {
        let years = days / 365;
        let tempDay = years.toString().split(".")[1][0];
        if (tempDay == 0) {
          return Math.trunc(years) + " years";
        }
        return Math.trunc(years) + " years, days  " + tempDay;
      }

      if (days >= 1) {
        console.log(days)
        if (days % 2) {
          return Math.trunc(days) + " days ";
        }
        return (
          Math.trunc(days) +
          " days and minutes " +
          days.toString().split(".")[1][0] +
          days.toString().split(".")[1][1]
        );
      }

      if (days % 2) return Math.trunc(days) + " hours";

      return (
        Math.trunc(days) +
        " hours and  minutes " +
        days.toString().split(".")[1][0]
      );
    }

    if (hour >= 1) {
      if (hour % 2) return Math.trunc(hour) + " hour";

      return (
        Math.trunc(hour) +
        " hour and minutes " +  hour.toString().split(".")[1][0]
      );
    }

    if (min % 2 === 0) return Math.trunc(min) + " minutes";

    let MinTemp = min.toString().split(".")[1][0] + min.toString().split(".")[1][1];
    return (
      Math.trunc(min) +
      " minutes and seconds " + MinTemp
      
    );
  }
  return seconds + " second";
}
*/


/*function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let d = new Date(seconds * 1000);
  
  console.log(d);

  let arrDate = d.toLocaleString().split(",");
  let date = arrDate[0];
  let time = arrDate[1];
  let [h, m, s] = time.split(":");
  let [da, mon, y] = date.split("/");

  let second = Number(s.split(" ")[0]);
  let minutes = Number(m);
  let hour = Number(h);
  
  let day = Number(da);
  let month = Number(mon);
  let year = Number(y);

  hour -= 3;
  day -= 1;
  month -= 1;
  year -= 1970;
  debugger
  if (year > 00 && day > 00 && hour > 00 && minutes > 00 && second > 00) {
    return year + " years, " + day + " days, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
  } else if (day > 00 && hour > 00 && minutes > 00 && second > 00) {
    return  day + " days, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
  } else if(hour > 00 && minutes > 00 && second > 00){
    return + hour + " hours, " + minutes + " minutes and " + second + " seconds";
  } else if(minutes > 00 && second > 00 ) {

    return minutes + " minutes and " + second + " seconds";
  } else if (second > 00){
    return  second + " seconds";
  } 
  return d;
}*/



function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let d = new Date(seconds * 1000);

  let arrDate = d.toLocaleString().split(",");
  let date = arrDate[0];
  let time = arrDate[1];
  let [h, m, s] = time.split(":");
  let [da, mon, y] = date.split("/");

  let second = Number(s.split(" ")[0]);
  let minutes = Number(m);
  let hour = Number(h);
  
  let day = Number(da);
  let month = Number(mon);
  let year = Number(y);

  hour -= 3;
  day -= 1;
  month -= 1;
  year -= 1970;
  
  if (year > 00) {
    if(day > 00 ) {
      if(hour > 00) {
        if(minutes > 00 ) {
          if(second > 00) {
            return year + " years, " + day + " days, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
          }
          return year + " years, " + day + " days, " + hour + " hours and " + minutes + " minutes ";
        } else {
          if(second > 00){
            return year + " years, " + day + " days, " + hour + " hours and " + second + " seconds";
          }
          return year + " years, " + day + " days, " + hour + " hours";
        }
      }else {
        if(minutes > 00){
          if(second > 00) {
            return year + " years, " + day + " days, " + minutes + " minutes and " + second + " seconds";
          }
          return year + " years, " + day + " days and " + minutes + " minutes" ;
        } else {
          if(second > 00) {
            return year + " years, " + day + " days and " + second + " seconds";
          }
          return year + " years and " + day + " days ";
        }
        return year + " years, " + day + " days, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
    }
  } else {
    if(hour > 00) {
      if(minutes > 00){
        if(second > 00){
          return year + " years, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
        } else {
          return year + " years, " + hour + " hours, " + minutes + " minutes";
        }
        } else {
          if(second > 00){
            return year + " years, " + hour + " hours and " + second + " seconds";
          }   
          return year + " years and " + hour + " hours ";
        }
    }
  }
  } else {
    if(day > 00){
      if(hour > 00) {
        if(minutes > 00) {
          if (second > 00) {
            return day + " days, " + hour + " hours, " + minutes + " minutes and " + second + " seconds";
          }
          return day + " days, " + hour + " hours and " + minutes + " minutes ";
        } else {
          if(second > 00) {
            return day + " days, " + hour + " hours and " + second + " seconds";
          }
          return day + " days and " + hour + " hours ";
        }
      } else {
        if(minutes > 00) {
          if(second > 00) {
            return day + " days, " + minutes + " minutes and " + second + " seconds";
          }
          return day + " days and "+ minutes + " minutes";
        } else {
          if(second > 00) {
            return day + " days and " + second + " seconds";
          }
          return day + " days ";
        }
      }
    } else {
      if(hour >00) {
        if(minutes > 00) {
          if(second > 0) {
            return hour + " hours, " + minutes + " minutes and " + second + " seconds";
          }
          return hour + " hours and " + minutes + " minutes";
        } else {
          if(second > 0) {
            return hour + " hours and " + second + " seconds";
          }
          return hour + " hours";
        }
      } else {
        if(minutes > 00) {
          if(second > 00) {
            return minutes + " minutes and " + second + " seconds";
          }
          return minutes + " minutes";
        } else {
          if(second > 00) {
            return second + " seconds";
          }
          return "now";
        }
      }
    }
  }
  return d;
}

console.log(formatDuration(3662));



