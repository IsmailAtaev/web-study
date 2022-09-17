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

//Task 1.7
/*
function formatDuration(totalSeconds) 
{
  if (totalSeconds === 0)
  {
    return "now";
  }

  let resultArray = [];
  let result = "";

  let secs = totalSeconds % 60;

  let totalMins = (totalSeconds - secs) / 60;
  let mins = totalMins % 60;
  let totalHours = (totalMins - mins) / 60;
  let hours = totalHours % 24;
  let totalDays = (totalHours - hours) / 24;
  let days = totalDays % 365;
  let years = (totalDays - days) / 365;

  if (years !== 0)
  {
    resultArray.push(`${years}`  + (years > 1 ? " years" : " year"));
  }

  if (days !== 0)
  {
    resultArray.push(`${days}`  + (days > 1 ? " days" : " day"));
  }

  if (hours !== 0)
  {
    resultArray.push(`${hours}`  + (hours > 1 ? " hours" : " hour"));
  }

  if (mins !== 0)
  {
    resultArray.push(`${mins}`  + (mins > 1 ? " minutes" : " minute"));
  }

  if (secs !== 0)
  {
    resultArray.push(`${secs}`  + (secs > 1 ? " seconds" : " second"));
  }

  let len = resultArray.length;
  if (len === 1)
  {
    return resultArray[0];
  }

  if (len === 2)
  {
    return resultArray[0] + " and " + resultArray[1];
  }

  for (let i = 0; i < len; i++)
  {
    if (i === 0)
    {
      result += resultArray[i];
      continue;
    }

    if (i === len - 1)
    {
      result += " and " + resultArray[i];
      continue;
    }

    result += ", " + resultArray[i];
  }

  return result;
}*/


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}



function brightest(colors){
  
  let maxColor = null;
  colors.forEach(element => {
    let rgbColor = hexToRgb(element);
    
  })



}
