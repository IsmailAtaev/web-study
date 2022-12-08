// Author Ismayyl

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

/* 
1.0
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
    let 
  })
}*/

// Task 1.8
/*
function head(arr) {
  if (arr.length === 0) return [];
  return arr[0];
}

function tail(arr) {
  if (arr.length === 0 || arr.length === 1) return [];
  return arr.slice(1, arr.length);
}

function init(arr) {
  if (arr.length === 0 || arr.length === 1) return [];
  return arr.slice(0, arr.length - 1);
}

function last(arr) {
  if (arr.length === 0) return [];
  return arr[arr.length - 1];
}
*/

// task 1.9
/*
function deepCount(a) {
  totalCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      totalCount += deepCount(a[i]);
      ++totalCount;
    } else {
      ++totalCount;
    }
  }
  return totalCount;
}*/

/*
const details = {
  name: 'John!',
}
function getMessage (msg) {
  return `${msg} ${this.name}`;
}

console.log(getMessage.apply(details,['Hello']))

function foo() {console.log(this)}
foo.call(null);


var a =1, b =function a(x) {x&& a(--x);};
console.log(a);

var name = 'John';

function printName() {
  console.log(name);
  var name = 'Peter';
  console.log(name);

}

printName();

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


function foo(a, b) {
  return a*b;
}

const bar = foo.bind(null,2);

console.log(bar(2));

function getThis() {
  return this;
}

function f1() {
  console.log(Function.getArguments(this));
}


function f2() {
  console.log(arguments);
}




function f3() {
  console.log(f3.getArguments());
}


function f4() {
  console.log(this.arguments);
}


console.log(f4());

function getNumberOfOnes(binaryStr) {
  let totalCount = 0;
  for (let k = 0; k < binaryStr.length; k++) {
    if (binaryStr[k] == "1") ++totalCount;
  }
  return totalCount;
}

function sortByBit(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let totalCountBinOne = getNumberOfOnes(arr[j].toString(2));
      let totalCountBinTwo = getNumberOfOnes(arr[j + 1].toString(2));

      if (totalCountBinOne > totalCountBinTwo) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else if (totalCountBinOne === totalCountBinTwo) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));
*/
/*
function myLanguages(results) {

    let entries = Object.entries(results);
    console.log(entries)
    entries.sort((a, b) =>  a[1] - b[1]);
    console.log(entries);
    let arr = new Array();
    entries.map(([key, val] = entry) => {
        if (val >= 60) arr.push(key);
    });
    return arr.reverse();
}

let ee = myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93});
console.log(ee);*/

