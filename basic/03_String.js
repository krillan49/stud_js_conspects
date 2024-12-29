//                                                 Строки

// length - свойство объекта строки, возвращает длинну строки
'roun'.length; //=> 4

// Каждая строка представляет из себя массив символов. По этой причине можно работать со строкой почти как с массивом.
let string = "Строка";
string[0];                //=> "C"
string[-1];               //=> undefined   // ЖС не поддерживает отрицательные индексы в синтаксисе с []
string[string.length-1];  //=> "а"
string[3] + string[1];    //=> "от"        // (4й и 2й символ)

// charAt() - возвращает символ по индексу, аналог для str[index]
"abc".charAt(0); //=> 'a'
"abc".charAt(1); //=> 'b'

// Строки в JS не мутируемые соответсвенно исходная строка не меняется оператором []=
let str1 = "Hello world";
let str2 = str1;
str1[0] = 'A';
console.log([str1, str2]); //=> [ 'Hello world', 'Hello world' ]

// Проход массивом по строке при помощи индексов
const arr = [];
for (let i=0; i<string.length; i++) {
  arr.push(string[i]);
}
console.log(arr)  //=> [ 'С', 'т', 'р', 'о', 'к', 'а' ]


// Интерполяция в строку ${}. Возможна только в таких кавычках ``, в обычных одинарных и 2йных могут быть только фиксированные строки
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`



//                                   Срезы. slice(), substring(), substr()

let str = "Hello beautiful World!";

// slice() применяют диапазон индексов из 2х параметров (не включая последний). Может применять отрицательные параметры(тоже невсключительно). Отрицательное значение начинается справа. -1 - первая позиция справа.
str.slice(6);      //=> 'beautiful World!'
str.slice(6,9);    //=> 'bea'
str.slice(16,21);  //=> 'World'
str.slice(16,27);  //=> 'World!'            // может выходить за границы строки
str.slice(16,-1);  //=> 'World'
str.slice(-2);     //=> 'd!'
str.slice(-12,-5); //=> 'tiful W'

// substring() применяют диапазон индексов из 2х параметров (не включая последний). Отличие от slice() только в работе с отрицательными индексами
str.substring(16,-1);  //=> 'Hello beautiful'
str.substring(-2);     //=> 'Hello beautiful World!'
str.substring(-12,-5); //=> ''

// substr() начинает с индекса равному 1му параметру и берет число элементов равному 2му параметру
str.substr(6);     //=> 'beautiful World!'  // без 2го параметра берет все элементы от индекса
str.substr(6,9);   //=> 'beautiful'
str.substr(16,21); //=> 'World!'            // может выходить за границы строки
str.substr(16,-1); //=> ''                  // тк не может быть отрицательного числа элементов
str.substr(-2);    //=> 'd!'
str.substr(-12,3); //=> 'tif'


// Удалить элемент по индексу
str = str.slice(0, 4) + str.slice(5);
console.log(str); //=> 'Hell beautiful World!'



//                                             Методы генерации строк

// конкатенация строк
"My".concat("name","is","John");    //=> MynameisJohn
// конкатенация строк через +
'12' + '2';   //=> '122'

'Aa'.repeat(5);         //=> "AaAaAaAaAa"
'aa'.padStart(8, '0')   //=> "000000aa"    // добавляет в начало 2й аргумент в колличестве 2й аргумент минус длинна строки



//                                         Методы преобразования строк

"Your Name".toLowerCase();          //=> 'your name'
"Your Name".toUpperCase();          //=> 'YOUR NAME'

// удаляет все пробельные элементы в начале и/или в конце
" \n  \n\na  b  c\t\t\t ".trim();       //=> 'a  b  c'
" \n  \n\na  b  c\t\t\n ".trimRight()); //=> " \n  \n\na  b  c"
" \n  \n\na  b  c\t\t\n ".trimLeft());  //=> "a  b  c\t\t\n "



//                                                 split()

// Разделение строк. split()
"My name is John".split();       //=> [ 'My name is John' ]   // без параметра оборачивает всю строку в массив
"My name is John".split(" ");    //=> [ 'My', 'name', 'is', 'John' ]
"My name is John".split(" ", 3); //=> [ 'My', 'name', 'is' ]  // 2й аргумент берет первые сколькото элементов разбитой строки (если их получилось меньше чем аргумент то возьмет все)
"My name is John".split("");     //=> [ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]


//                                              Методы поиска

// Содержит ли строка данную подстроку
"Your Name".includes('english');    //=> false

// indexOf()  -  функция находящая в строке индекс подстроки. Ищет с начала тоесть слева-направо (если 2й параметр опущен, поиск начинается с индекса 0)
'product_dddggg'.indexOf('product_'); //=> 0
'aaabbb'.indexOf('aaacc');            //=> -1    // строка не содержит подстроку
"Hello World!".indexOf("o");          //=> 4
"Hello World!".indexOf("o", 5);       //=> 7     // начинает выборку с элемента с индексом 5 и идет от него вправо

// LastIndexOf()  -  функция находящая в строке индекс подстроки. Ищет с конца те справа-налево (если 2й параметр опущен, поиск начинается с последнего символа)
"Hello World!".lastIndexOf("o");      //=> 7
"Hello World!".lastIndexOf("o", 5);   //=> 4     // начинает выборку с индекса 5 и идет влево;
"Hello World!".lastIndexOf("world");  //=> -1

// search()  -  аналогично indexOf(), но характеризуется поддержкой регулярных выражений, всегда возвращает позицию первого совпадения с левой стороны (не поддерживает опцию «g» регулярных выражений)
"Hello World!".search("o");           //=> 4
"Hello World!".search(/world/i);      //=> 6  // опция i позволяет игнорировать регистр



//                                           replace() replaceAll()

// replace() - замена подстроки в строке, можно использовать регулярки как параметры определения и функции как параметры замены
'aaa!!'.replace('!', "");                                   //=> aaa!
"Your Name".replace(/[^a-z]/g, "");                         //=> ourame
"this is an example".replace(/\b\w/g, x=>x.toUpperCase());  //=> 'This Is An Example'
"this is an example".replace(/\b\w/g, (x, i) => i);         //=> '0his 5s 8n 11xample' // итерация поддерживает индексы

// replaceAll() - замена всех подстрок в строе. Не принимает регулярки ??
'vavas'.replaceAll('a', '~'); //=> v~v~s



//                                    toString() Перевод других типов в строку

// toString(), toLocaleString(), +""  - способы перевода других типов данных в строку

// Числа
(111).toString();         //=> '111'
(111).toLocaleString();   //=> '111'
111 + "";                 //=> '111'

(111.1).toString();       //=> '111.1'
(111.1).toLocaleString(); //=> '111.1'
111.1 + "";               //=> '111.1'

(NaN).toString();         //=> 'NaN'
(NaN).toLocaleString();   //=> 'не число'
NaN + "";                 //=> 'NaN'

// boolean
(true).toString();        //=> 'true'
(true).toLocaleString();  //=> 'true'
true + "";                //=> 'true'

// null
(null).toString();        //=> выдаст ошибку
(null).toLocaleString();  //=> выдаст ошибку
null + "";                //=> 'null'

// object
(new Object()).toString();       //=> '[object Object]'
(new Object()).toLocaleString(); //=> '[object Object]'
new Object() + "";               //=> '[object Object]'

// function
(function some() {}).toString();       //=> 'function some() {}'
(function some() {}).toLocaleString(); //=> 'function some() {}'
function some() {} + "";               //=> 'function some() {}'

// Какаято альтернатива
String(1234) //=> '1234'



//                                         charCodeAt() fromCharCode()

// Юникод — это отраслевой стандарт вычислительной техники, обеспечивающий единообразное кодирование текста в большинстве мировых систем письма.

// charCodeAt() - возвращает номер символа в кодировке Unicode от 0 до 65535.
"abc".charCodeAt(0); //=> 97
"abc".charCodeAt(1); //=> 98
"abc".charCodeAt();  //=> 97   // если не указфвать параметр выдаст код первого символа строки
'z'.charCodeAt();    //=> 122  // данное применение удобно для 1го символа

// fromCharCode() может значения Unicode, а затем возвращать строку. Этот метод является статическим методом String.
String.fromCharCode(97);           //=> 'a'
String.fromCharCode(99, 111, 120); //=> 'cox'

// Пример сдвига
String.fromCharCode('a'.charCodeAt() + 1); //=> 'b'



//                                                  Разное

[...'abc'] //=> ['a', 'b', 'c']














//
