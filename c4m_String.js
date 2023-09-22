//                                        Строки и регулярки

// Интерполяция ${}
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`

// Разделение строк
"My name is John".split(" "); //=> [ 'My', 'name', 'is', 'John' ]
"My name is John".split(" ", 3); //=> [ 'My', 'name', 'is' ]  // 2й аргумент берет первые сколькото элементов разбитой строки(если их получилось меньше чем аргумент то просто будет меньше и в массиве)
"My name is John".split(""); //=> [ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
// сложение строк альтер вместо +
"My".concat("name","is","John"); //=> MynameisJohn
'Aa'.repeat(5); //=> "AaAaAaAaAa"
'roun'.length; //=> 4 // length это не функция поэтому скобки не надо иначе выдаст ошибку (втф??)
"Your Name".toLowerCase(); //=> your name
"Your Name".toUpperCase();
"Your Name".includes('english'); //=> false  // Содержит ли строка данную подстроку
"Your Name".replace(/[^a-z]/g, ""); //=> ourame
'aaa!!'.replace('!', ""); //=> aaa!

// Функчия находящая в строке индекс подстроки
'product_dddggg'.indexOf('product_') //=> 0
'product_dddggg'.indexOf('product_') == 0 //=> true
'bbbbbaaa'.indexOf('aaa') //=> 5
'aaa'.indexOf('aaacc') //=> -1   если строка не содержит подстроку

// Срез slice() substring() substr()
// slice() и substring() бернут диапазон из 2х параметров(не включая последний). substr() начинает с индекса равному 1му параметру и берет число элементов равному 2му параметру
"Hello World!".slice(6) //=> 'World!' // substring() substr() ведут себя так же
"Hello World!".slice(0,5) //=> 'Hello' // substring() substr() ведут себя так же
"Hello World!".slice(6,9) //=> 'Wor' // substring() ведет себя так же
"Hello World!".substr(6,9) //=> 'World!'
"Hello beautiful World!".slice(16,21) //=> 'World' // substring() ведет себя так же
"Hello beautiful World!".slice(16,-1) //=> 'World' // параметры slice() могут быть отрицательными числами. Отрицательное значение начинается справа. -1 - первая позиция справа.

// Каждая строка представляет из себя массив символов. По этой причине можно работать с любой строкой как с обычным массивом.
var string = "Строка";
console.log(string[0]); //=> "C"
console.log(string[3] + string[1]); //=> "от" (4 и 2 символ)

// каждый символ в троке имеет индекс
var str = "codewars";
for (var i=0; i<str.length; i++) console.log(str[i])  // выведет побуквенно

// Удалить элемент по индексу
str = str.slice(0, i) + str.slice(i + 1);

// Рег выражения
/english/i.test('This English lesson') //=> true // содержит ли строка слово english вне зависимости от региста
'1a2Bb3c'.replace(/[0-9]/g, "-") //=> -a-Bb-c // g без него заменит только 1й совпадающий символ
















//
