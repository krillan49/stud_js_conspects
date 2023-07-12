// Интерполяция ${}
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`


// В javascript объект(это походу хэш ??) является одним из основных типов данных. Определить объект можно:
var obj = new Object()
var obj = {} // или так
// Вы можете определить атрибуты объекта во время инициализации, например:
var animal = {name:"dog"}
// вы также можете установить/получить некоторые свойства после определения объекта, например:
var animal = {}
animal.name = "dog" // так
animal["name"] = "dog" //или так


// Определить тип
console.log(typeof 42); // Expected output: "number"
console.log(typeof 'blubber'); // Expected output: "string"
console.log(typeof true); // Expected output: "boolean"
console.log(typeof undeclaredVariable); // Expected output: "undefined"


// Методы
var lowerCaseName = "Your Name".toLowerCase(); //=> your name
var inc = "Your Name".includes('english'); //=> false  // Содержит ли строка данную подстроку
"Your Name".replace(/[^a-z]/g, ""); //=> ourame
'aaa!!'.replace('!', ""); //=> aaa!

// parseFloat(string)
var s = ' 3   ';
console.log(parseFloat(s)); //=> 3
s = ' -5.66 '
console.log(parseFloat(s)); //=> -5.66
s = '4 5'
console.log(parseFloat(s)); //=> 4

// Number(string)
var s = ' 3   ';
console.log(Number(s)); //=> 3
s = ' -5.66 '
console.log(Number(s)); //=> -5.66
s = '4 5'
console.log(Number(s)); //=> NaN


// Рег выражения
function spEng(s){
  return /english/i.test(s) // содержит ли строка слово english вне зависимости от региста
}


// Символ из его непронумера ascii
String.fromCharCode(97) //=> a


















//
