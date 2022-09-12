//alert("Hello");
/*let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//confirm

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK


//Преобразование типов

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);
*/

//Численное преобразование

//alert("6" / "2");

/*let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num);


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

let name ='Visia';
name.lenght = 50;*/
/*
let i = 0; 
let c = 0;
const str = 'Rolling Scopes School';

while (i < str.length) {
     if (str[i] === 'o') {
          c++; 
        } 
        i++; 
    }
 
    console.log(c);
//alert(Math.min(10, 222, -5, 0, '-33'));
const name = 'Vasia'; 
alert(Math.abs(name.length - 15));

let num = "1 2 -3 4 5";

// example 1
function highAndLow(numbers) {
  const myArr = numbers.split(' ').map( k => Number(k));
 
  for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr.length; j++) {
      if (myArr[j] > myArr[j + 1]) {
        let tmp = myArr[j];
        myArr[j] = myArr[j + 1];
        myArr[j + 1] = tmp;
      }
    }
  }
  return String(myArr[0]) + ' ' + String(myArr[myArr.length - 1]);
};

const minMaxElem = highAndLow(num);
alert(minMaxElem)*/
/*
console.log(0 === 1);
console.log(1 === '1');
console.log(1 == '1');
console.log(4 === 1 + 3);
console.log('A' > 'a');
console.log('B' < 'b');
console.log('13' > 12);
console.log('13px' > 12);
console.log('13px' < '14');
*/

//const sum = {a, b} => a + b

//const sum = (a, b) => a + b

//const sum = a, b => a + b

//const sum = {a, b} => ( return a + b )

//const sum = (a, b) => { return a + b }

/*
let sum = (q, yes, no) = (confirm(q)) ? 
() => yes() : 
() => no(); 




sum(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

*/

/*
let str = 'Mr Blue has a blue house and a blue car Ali Omor Ilya Encript';
let result = str.replace(/a|e|i|o|u/gi,"");
alert(result);


function RemoveTheVowels(str = 'mr') {
  return str.replace(/a|e|i|o|u/gi,"");
}

*/

/*
function calculate() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

const elem = calculate(22,33,4,1,3);
console.log(elem);

function fibo(n) {  
  const limit = BigInt(9007199254740991);
  let next = BigInt(0);
  let last = BigInt(1);
  let count = 0;

  while(next < limit / 2){
    count += 1;
    if(last == n){
      return count;
    }

    let sum = BigInt(0);
    sum = next + last;
    next = last;
    last = sum;


   }
  return count;
}
*/

/*var calculate = function(nums){
	var sum = 0;
	for(var i=0; i<arguments.length; i++){
		sum += arguments[i]
	}
	return function(nums2) {
		for(var j=0; j<arguments.length; j++){
		sum += arguments[j];
	}
	return sum;
	}	
};

// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17 */

/*function nthFibo(n) {
  if( n <= 2) return --n;
  return nthFibo(n-1) + nthFibo(n-2); 
}*/
/*
function nthFibo(n) {
  
  const limit = 9007199254740991;
  let next = 0;
  let last = 1;
  let count = 0;

  while(next < n / 2){
    if(last == n){
      return count;
    }
    count += 1;
    let sum = 0;
    sum = next + last;
    next = last;
    last = sum;


   }
  return count;
}

 * function isIsogram(str){
  const str1 = str.toLowerCase();
  for(let i = 0; i < str1.length; i++){
    const elem = str1[i];
    for(let j = i+1; j < str1.length; j++){
      if(elem == str1[j]) return false;
    }
  }
  return true;  
}
 */
/** 
 * function explode(s) {
  let str = "";
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s[i]; j++){
      str += s[i];
    }
  }
  return str;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 let longDate1 = new Date(currentDate);
 let longDate2 = new Date(expirationDate);
 return (enteredCode === correctCode && longDate1 <= longDate2) ? true : false;  
}

alert(Number.NEGATIVE_INFINITY)

function find_max(nums){
  let max_num = Number.NEGATIVE_INFINITY;
  for (let num of nums){
    if (num > max_num){

    }
  }
  return max_num;
}
*/

// https://velog.io/@hemtory/CodeWars20210412 Arefmeticeskaya posledowatelnost
function getParticipants(handshakes) {
  if (!handshakes) return 1;

  let answer = 0;
  let sum = 0;

  while (handshakes > sum) {
    sum = (answer * (answer + 1)) / 2;

    answer++;
  }

  return answer;
}

alert(getParticipants(10))
/*
Если вы посмотрите правило, каждый раз, когда количество людей увеличивается на одного, оно увеличивается в виде иерархической последовательности.

Что такое арифметическая последовательность?

Если арифметическая последовательность имеет постоянную разность между каждой последовательностью, арифметическая последовательность означает, что разность между элементами последовательности является арифметической последовательностью.

EX)
арифметическая последовательность: 0, 1, 2, 3, 4, ...
Разница между элементами последовательности постоянна как 1.

Арифметическая последовательность: 0, 1, 3, 6, 10, ...
Разница между элементами последовательности равна 1, 2, 3, 4, ... и обладает свойством арифметической последовательности

В задаче каждый элемент равен сумме арифметической прогрессии с разностью 1.

Поэтому, во-первых, когда он равен 0, он равен 1, используя то, что есть в примере, а когда он равен return1 и более, можно найти ответ, используя сумму арифметической последовательности.
*/
