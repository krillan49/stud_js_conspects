//                                        Строки и регулярки

var str1 = '12';
var str2 = '2';
console.log(str1 + str2); //=> '122' // сложение строк

// charAt() - возвращает символ по индексу, аналог для str[index]
"abc".charAt(0); //=> 'a'
"abc".charAt(1); //=> 'b'

// Каждая строка представляет из себя массив символов. По этой причине можно работать с любой строкой как с обычным массивом.
var string = "Строка";
string[0]; //=> "C"
string[string.length-1]; //=> "а" В строках ЖС нет отрицательных индексов в синтаксисе с []
string[3] + string[1]; //=> "от" (4 и 2 символ)
for (var i=0; i<string.length; i++) console.log(stringr[i])  // выведет побуквенно

// Строки в JS не мутируемые соотв исходная строка не меняется оператором []=
var str1 = "Hello world";
var str2 = str1;
str1[0] = 'A'
console.log([str1, str2]); //=> [ 'Hello world', 'Hello world' ]

// Нет отрицательных индексов ??

// Удалить элемент по индексу
str = str.slice(0, i) + str.slice(i + 1);

// Интерполяция ${}. Возможна только в таких кавычках ``, в обычных одинарных и 2йных могут быть только фиксированные строки
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`



//                                             Методы строк

'roun'.length; //=> 4 // length это не функция поэтому скобки не надо иначе выдаст ошибку (втф??)

"Your Name".toLowerCase(); //=> your name
"Your Name".toUpperCase(); //=> YOUR NAME
"Your Name".includes('english'); //=> false  // Содержит ли строка данную подстроку
"My".concat("name","is","John"); //=> MynameisJohn  // сложение строк альтер вместо +
'Aa'.repeat(5); //=> "AaAaAaAaAa"
" \n  \n\n\na  b  c\t\t\t ".trim(); //=> 'a  b  c'  // удаляет все пробельные элементы в начале и конце

// Разделение строк
"My name is John".split(" "); //=> [ 'My', 'name', 'is', 'John' ]
"My name is John".split(" ", 3); //=> [ 'My', 'name', 'is' ]  // 2й аргумент берет первые сколькото элементов разбитой строки(если их получилось меньше чем аргумент то просто будет меньше и в массиве)
"My name is John".split(""); //=> [ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]

// slice() и substring() бернут диапазон из 2х параметров(не включая последний).
// substr() начинает с индекса равному 1му параметру и берет число элементов равному 2му параметру
"Hello World!".slice(6); //=> 'World!' // substring() substr() ведут себя так же
"Hello World!".slice(6,9); //=> 'Wor' // substring() ведет себя так же
"Hello World!".substr(6,9); //=> 'World!'
"Hello beautiful World!".slice(16,21); //=> 'World' // substring() ведет себя так же
"Hello beautiful World!".slice(16,-1); //=> 'World' // параметры slice() могут быть отрицательными числами(!!!тоже невсключительно!!!). Отрицательное значение начинается справа. -1 - первая позиция справа.
"Hello beautiful World!".slice(-1); //=> "!"

// Замена подстрок в строке
'aaa!!'.replace('!', ""); //=> aaa!
"Your Name".replace(/[^a-z]/g, ""); //=> ourame
"this is an example".replace(/\b\w/g, x=>x.toUpperCase())); //=> 'This Is An Example'  // с функцией
t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]))
'vavas'.replaceAll('a', '~'); //=> v~v~s

// indexOf()  -  функция находящая в строке индекс подстроки. Ищет с начала те слева направо(если 2й параметр опущен, поиск начинается с индекса 0).
'product_dddggg'.indexOf('product_'); //=> 0
'product_dddggg'.indexOf('product_') == 0; //=> true
'aaabbb'.indexOf('aaacc'); //=> -1   если строка не содержит подстроку
"Hello World!".indexOf("e"); //=> 1
"Hello World!".indexOf("o");  //=> 4
"Hello World!".indexOf("o",5); //=> 7 // начинает выборку с индекса 5 и идет вправо
// LastIndexOf()  -  функция находящая в строке индекс подстроки. Ищет с конца те справа налево(если 2й параметр опущен, поиск начинается с последнего символа).
"Hello World!".lastIndexOf("o"); //=> 7
"Hello World!".lastIndexOf("o",5); //=> 4   // начинает выборку с индекса 5 и идет влево;
"Hello World!".lastIndexOf("world"); //=> -1
// search()  -  аналогично indexOf(), но характеризуется поддержкой регулярных выражений, но всегда возвращает позицию первого совпадения с левой стороны(не поддерживает опцию «g» регулярных выражений).
"Hello World!".search("o"); //=> 4
"Hello World!".search(/world/i); //=> 6  // опция i позволяет игнорировать регистр


// Рег выражения
/english/i.test('This English lesson'); //=> true // содержит ли строка слово english вне зависимости от региста
'1a2Bb3c'.replace(/[0-9]/g, "-"); //=> -a-Bb-c // g без него заменит только 1й совпадающий символ

// Замена на подвыражения при помощи $ вместо \
"is (555) 867-5309".replace(/.*\((\d+)\).*/, "\1"); //=> 
"is (555) 867-5309".replace(/.*\((\d+)\).*/, "$1")); //=> 555
// альтернатива тому что выше
"is (555) 867-5309".match(/\((\d+)\)/); //=> ['(555)', '555', index: 3, input: 'is (555) 867-5309', groups: undefined ]
"is (555) 867-5309".match(/\((\d+)\)/)[1]; //=> '555'

// найти 2йной символ идущий подряд
'abbc'.match(/(.)\1/)[1] //=> 'b'

// разбиение
[-1,6,-2,3,5,-7].join(' ').split(/-\d/) //=> [ '', ' 6 ', ' 3 5 ', '' ]



//                                        Перевод других типов в строку

// Числа
(111).toString(); //=> '111'
(111).toLocaleString(); //=> '111'
111 + ""; //=> '111'
(111.1).toString(); //=> '111.1'
(111.1).toLocaleString(); //=> '111.1'
111.1 + ""; //=> '111.1'
(NaN).toString(); //=> 'NaN'
(NaN).toLocaleString(); //=> 'не число'
NaN + ""; //=> 'NaN'
// boolean
(true).toString(); //=> 'true'
(true).toLocaleString(); //=> 'true'
true + ""; //=> 'true'
// object
(null).toString(); //=> выдаст ошибку
(null).toLocaleString(); //=> выдаст ошибку
null + ""; //=> 'null'
(new Object()).toString(); //=> '[object Object]'
(new Object()).toLocaleString(); //=> '[object Object]'
new Object() + ""; //=> '[object Object]'
// function
(function some() {}).toString(); //=> 'function some() {}'
(function some() {}).toLocaleString(); //=> 'function some() {}'
function some() {} + ""; //=> 'function some() {}'


String(1234) //=> '1234'



//                                      charCodeAt() fromCharCode()

// Юникод — это отраслевой стандарт вычислительной техники, обеспечивающий единообразное кодирование текста в большинстве мировых систем письма.

// charCodeAt() - возвращает номер символа в кодировке Unicode от 0 до 65535.
"abc".charCodeAt(0); //=> 97
"abc".charCodeAt(1); //=> 98
"abc".charCodeAt(); //=> 97  // если не указфвать параметр выдаст код первого символа строки
'z'.charCodeAt(); //=> 122  // данное применение удобно для 1го символа

// fromCharCode() может значения Unicode, а затем возвращать строку. Этот метод является статическим методом String.
String.fromCharCode(97); //=> 'a'
String.fromCharCode(99, 111, 120); //=> 'cox'

// Пример сдвига
String.fromCharCode('a'.charCodeAt()+1); //=> 'b'
















//
