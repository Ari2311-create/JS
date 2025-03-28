//Задание №1
console.log('Hello, World!');
//Задание №2
// You know nothing, Jon Snow!
//Задание №3
console.log('Robert');
console.log('Stannis');
console.log('Renly');
//Задание №4
console.log(9780262531962)
//Задание №5
console.log('What Is Dead May Never Die');
//Задание №6
console.log(81 / 9);
//Задание №7
console.log(6 - -81);
//Задание №8
console.log(3 ** 5);
console.log(-8 / -4);
//Задание №9
console.log(8 / 2 + 5 - -3 / 2);
//Задание №10
console.log(70 * (3 + 4) / (8 + 2))
//Задание №11
console.log(0.39 * 0.22);
//Задание №12
console.log(Infinity / 10);
//Задание №13
console.log(NaN + 7);
//Задание №14
console.log((5 ** 2) - (3 * 7));
//Задание №15
console.log("\"Khal Drogo's favorite word is \"athjahakar\"\"");  
//Задание №16
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');
//Задание №17
console.log('Win' + 'ter ' + 'came ' + 'for ' + 'the ' + 'House ' + 'of ' + 'Frey.');
//Задание №18
console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

//Задание №19
let motto = 'What Is Dead May Never Die!';
console.log(motto);

//Задание №20
let name = 'Brienna';
name = 'anneirB';
// BEGIN (write your solution here)

// END

console.log(name);

//Заданиие №21
const numbermybrothers = 2;
console.log(numbermybrothers);

//Заданиие №22
let family = 'Targaryen';
let pet = 'Dragon';
// BEGIN (write your solution here)

// END

console.log(family);
console.log('and');
console.log(pet);

//Заданиие №23
let eurosCount = 100;
let yuansPerDollar = 6.91;
let dollarsCount = 100 * 1.25;
console.log(dollarsCount);
let yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);

//Заданиие №24
let info = "We couldn't verify your mother's maiden name.";
let intro = 'Here is important information about your account security.';

let firstName = 'Joffrey';
let greeting = 'Hello';
console.log(greeting + ', ' + firstName + '!');
console.log(intro + '\n' + info);

//Заданиие №25  ?*
let firstname = 11;
let secondname = -100;
console.log(firstname * secondname);

//Заданиие №26
let king = 'King Balon the 6th';
let platform = 102;
console.log(king + ' has ' + platform + ' rooms.');

//Заданиие №27
const army = 'the white walkers';
console.log(army);

//Заданиие №28
const stark = 'Arya';
console.log(`Do you want to eat, ${stark}?`);

//Заданиие №29
const name = 'Na\nharis';
console.log(name[7]);

//Заданиие №30
console.log(-0.304);

//Заданиие №31
console.log(undefined);

//Заданиие №32
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(one[2] + two[1] + three[3] + two[4] + two[2]);

//Заданиие №33
console.log('7' - (-8 - -2));

//Заданиие №34
import { length } from 'hexlet-basics/string';

const company1 = length('Apple');
const company2 = length('Samsung');
const result = company1 + company2;
console.log(result);


//Заданиие №35
const soldiersCount = Math.abs(-2309);
console.log(soldiersCount);

//Заданиие №36
const number = 923.2238;
console.log(Math.ceil(number));

//Заданиие №37
import { round } from 'hexlet-basics/math';

const number = round(10.1234, 2);
console.log(number);

//Заданиие №38
import { length } from 'hexlet-basics/string';

const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text[0]}`);
console.log(`Last: ${text[length(text)-1]}`);

//Заданиие №39
console.log(Math.min(3, 10, 22, -3, 0));

//Заданиие №40
const number = Math.random(0, 10);

console.log(Math.round(number));

//Заданиие №41
const motto = 'Family, Duty, Honor';
console.log(typeof motto);

//Заданиие №42
import { length } from 'hexlet-basics/string';
const text = 'a mind needs books as a sword needs a whetstone, if it is to keep its edge.';
console.log(length(text));

//Заданиие №43
const text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
const down = text.toLowerCase();
console.log(down);

//Заданиие №44
let firstName = '  Grigor   \n';
let secondname = firstName.trim();
console.log(secondname);

//Заданиие №45
const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text[0]}`);
console.log(`Last: ${text[text.length - 1]}`);

//Заданиие №46
const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text.slice(5, 15).trim().length);


//Заданиие №47
const printMotto = () => {
    console.log('Winter is coming');
  };

//Заданиие №48
const sayHurrayThreeTimes = () => {
    const word = 'hurray!';
    return `${word} ${word} ${word}`;
  };
  
  export default sayHurrayThreeTimes;
  

//Заданиие №49
const truncate = (text, length) => {
    // BEGIN
    const result = `${text.slice(0, length)}...`;
    return result;
    // END
  };
  
  export default truncate;


//Заданиие №50
// BEGIN
const getHiddenCard = (cardNumber, starsCount = 4) => {
    const visibleDigitsLine = cardNumber.slice(12);
    return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
  };
  // END
  
  export default getHiddenCard;
  

//Заданиие №51



//Заданиие №52



//Заданиие №53



//Заданиие №54



//Заданиие №55



//Заданиие №56



//Заданиие №57



//Заданиие №58



//Заданиие №60

function whoIsThisHouseToStarks(family) {
    if (family === 'Karstark' || family === 'Tally') {
      return 'friend'
    } else if (family === 'Lannister' || family === 'Frey') {
      return 'enemy'
    } else return 'neutral'
  }

  
//Заданиие №61

//* сделала несколько вариантов решений - ничего не подошло, toUpperCase выдает что нет такой функции

1. function convertText(string) {
  const firstChar = string.slice[0, 1]
  if (firstChar.toUpperCase()) {
   return string.reverse()
  }
     return string
 }
  
 2. function convertText(string) {
  const firstChar = string.slice[0, 1]
  if (firstChar.toUpperCase()) {
   return string
  } else return string.reverse()
 }

 3. function convertText(string) {
  const firstChar = string.slice[0, 1]
  const upp = firstChar.toUpperCase()
  if (string === upp) {
    return string
  } if (string === '') {
    return ''
  }
  else return string.reverse()
}

4.  function convertText(string) {
  const firstChar = string.slice[0, 1]
  const upp = firstChar.toUpperCase
  return (upp) ? string : string.reverse()
}

// 5.  тут выдает что нет токена '{'
function convertText(string) {
  const firstChar = string.slice[0, 1]
if (firstChar !== firstChar.toUpperCase()) {
  return string.reverse()
} 
else (string === '') {
  return ''
}
return string
}

6. function convertText(string) {
  const firstChar = string.slice[0, 1]
    if (string === '') {
      return ''
    }
return (firstChar !== firstChar.toUpperCase) ? string.reverse() : string
}
  // сделала примерно как в решении но опять выдает что не читает toUpperCase
// пробовала просто хотя бы сделать только чтобы без заглавной было наоборот, но на ответ отвечают что он не defined

function f1(word) {
   
    return word.toUpperCase()
}
// это тоже...

//Заданиие №62




//Заданиие №63

function printNumbers(number) {
let i = 1

while (number >= i) {
  console.log(number)
  number = number - 1

}
console.log('finished!')

  }


//Заданиие №64

function multiplyNumbersFromRange(start, finish) {
let i = start
let sum = 1

while (i <= finish) {
sum = sum * i
i = i + 1
}
return sum
}

//Заданиие №65




//Заданиие №66





//Заданиие №67




//Заданиие №68




//Заданиие №69



//Заданиие №70




//Заданиие №71




//Заданиие №72

