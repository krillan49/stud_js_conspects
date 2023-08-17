// Странная херня
console.log(1 == '1'); //=> true


// Интерполяция ${}
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
// Разделение строк
"My name is John".split(" "); //=> [ 'My', 'name', 'is', 'John' ]
"My name is John".split(" ", 3); //=> [ 'My', 'name', 'is' ]  // 2й аргумент берет первые сколькото элементов разбитой строки(если их получилось меньше чем аргумент то просто будет меньше и в массиве)
"My name is John".split(""); //=> [ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
// сложение строк альтер вместо +
"My".concat("name","is","John"); //=> MynameisJohn
'Aa'.repeat(5) //=> "AaAaAaAaAa"
'roun'.length //=> 4
// Срез slice() substring() substr()
// slice() и substring() берут диапазон из 2х параметров(не включая последний). substr() начинает с индекса равному 1му параметру и берет число элементов равному 2му параметру
"Hello World!".slice(6) //=> 'World!' // substring() substr() ведут себя так же
"Hello World!".slice(0,5) //=> 'Hello' // substring() substr() ведут себя так же
"Hello World!".slice(6,9) //=> 'Wor' // substring() ведет себя так же
"Hello World!".substr(6,9) //=> 'World!'
"Hello beautiful World!".slice(16,21) //=> 'World' // substring() ведет себя так же
"Hello beautiful World!".slice(16,-1) //=> 'World' // параметры slice() могут быть отрицательными числами. Отрицательное значение начинается справа. -1 - первая позиция справа.


// каждый символ в троке имеет индекс
var str = "codewars";
for (var i=0; i<str.length; i++) console.log(str[i])  // выведет побуквенно

// Перевод числа в строку
111.toString(); //=> '111'
111.toLocaleString(); //=> '111'
111 + ""; //=> '111'

// Перевод в другую систему исчисления
111.toString(2); //=> '1101111'
111.toString(8);  //=> '157'
111.toString(16);  //=> '6f'


// В javascript объект(это походу хэш ??) является одним из основных типов данных. Определить объект можно:
var obj = new Object()
var obj = {} // или так
// Вы можете определить атрибуты объекта во время инициализации, например:
var animal = {name:"dog"}
// вы также можете установить/получить некоторые свойства после определения объекта, например:
var animal = {}
animal.name = "dog" // так
animal["name"] = "dog" //или так

// Многомерный хэш-объект
var rooms = {
  kroker: {name:"Kroker", item:"Sword", status:"Gigant"},
  gonzik: {name:"Gonzik", item:"Vljenka", status:"Krutitsa"},
  rS: {name:"Robot Serenka", item:"Pistol", status:"On repair"}
}

// Методы хэшей
console.log(Object.keys(rooms)) //=> [ 'kroker', 'gonzik', 'rS' ]


// Определить тип
console.log(typeof 42); //=> "number"
console.log(typeof 'blubber'); //=> "string"
console.log(typeof true); //=> "boolean"
console.log(typeof undeclaredVariable); //=> "undefined"


// Методы
'bbb'.length; //=> 3 // length это не функция поэтому скобки не надо иначе выдаст ошибку (втф??)
"Your Name".toLowerCase(); //=> your name
"Your Name".includes('english'); //=> false  // Содержит ли строка данную подстроку
"Your Name".replace(/[^a-z]/g, ""); //=> ourame
'aaa!!'.replace('!', ""); //=> aaa!

// parseFloat(string)
parseFloat(' 3   '); //=> 3
console.log(parseFloat(' -5.66 ')); //=> -5.66
console.log(parseFloat('4 5')); //=> 4

// Number(string)
console.log(Number(' 3   ')); //=> 3
console.log(Number(' -5.66 ')); //=> -5.66
console.log(Number('4 5')); //=> NaN


// Рег выражения
/english/i.test('This English lesson') //=> true // содержит ли строка слово english вне зависимости от региста
'1a2Bb3c'.replace(/[0-9]/g, "-") //=> -a-Bb-c // g без него заменит только 1й совпадающий символ



// Символ из его непронумера ascii
String.fromCharCode(97) //=> a


















//
