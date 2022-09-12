/** Author Ismayyl*/

// Task 1.1
function highAndLow(numbers) {

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
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

//Task 1.2
