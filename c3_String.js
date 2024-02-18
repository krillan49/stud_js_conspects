//                                                 Строки

// Каждая строка представляет из себя массив символов. По этой причине можно работать со строкой почти как с массивом.
let string = "Строка";
string[0];                //=> "C"
string[-1];               //=> undefined   // В строках ЖС нет отрицательных индексов в синтаксисе с []
string[string.length-1];  //=> "а"
string[3] + string[1];    //=> "от"        // (4й и 2й символ)
for (let i=0; i<string.length; i++) console.log(stringr[i])  // выведет побуквенно

// Строки в JS не мутируемые соотв исходная строка не меняется оператором []=
let str1 = "Hello world";
let str2 = str1;
str1[0] = 'A'
console.log([str1, str2]); //=> [ 'Hello world', 'Hello world' ]

// Удалить элемент по индексу
str = str.slice(0, i) + str.slice(i + 1);

// charAt() - возвращает символ по индексу, аналог для str[index]
"abc".charAt(0); //=> 'a'
"abc".charAt(1); //=> 'b'

// сложение строк
'12' + '2'; //=> '122'

// Интерполяция ${}. Возможна только в таких кавычках ``, в обычных одинарных и 2йных могут быть только фиксированные строки
`Oi! Sheep number ${n}! You are about to be eaten by a wolf!`



//                                                Методы строк

// length это не функция поэтому скобки не надо иначе выдаст ошибку (втф??)
'roun'.length; //=> 4

// Разные
"Your Name".toLowerCase();          //=> 'your name'
"Your Name".toUpperCase();          //=> 'YOUR NAME'
"Your Name".includes('english');    //=> false         // Содержит ли строка данную подстроку
"My".concat("name","is","John");    //=> MynameisJohn  // сложение строк альтер вместо +
'Aa'.repeat(5);                     //=> "AaAaAaAaAa"
" \n  \n\n\na  b  c\t\t\t ".trim(); //=> 'a  b  c'     // удаляет все пробельные элементы в начале и конце
trimRight()


//                                                 split()

// Разделение строк. split() без параметра не разбивает ??
"My name is John".split(" ");    //=> [ 'My', 'name', 'is', 'John' ]
"My name is John".split(" ", 3); //=> [ 'My', 'name', 'is' ]  // 2й аргумент берет первые сколькото элементов разбитой строки (если их получилось меньше чем аргумент то возьмет все)
"My name is John".split("");     //=> [ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]


//                                    indexOf() LastIndexOf() search()

// indexOf()  -  функция находящая в строке индекс подстроки. Ищет с начала тоесть слева-направо (если 2й параметр опущен, поиск начинается с индекса 0).
'product_dddggg'.indexOf('product_'); //=> 0
'aaabbb'.indexOf('aaacc');            //=> -1    // строка не содержит подстроку
"Hello World!".indexOf("o");          //=> 4
"Hello World!".indexOf("o", 5);       //=> 7     // начинает выборку с элемента с индексом 5 и идет от него вправо

// LastIndexOf()  -  функция находящая в строке индекс подстроки. Ищет с конца те справа-налево (если 2й параметр опущен, поиск начинается с последнего символа).
"Hello World!".lastIndexOf("o");      //=> 7
"Hello World!".lastIndexOf("o", 5);   //=> 4     // начинает выборку с индекса 5 и идет влево;
"Hello World!".lastIndexOf("world");  //=> -1

// search()  -  аналогично indexOf(), но характеризуется поддержкой регулярных выражений, всегда возвращает позицию первого совпадения с левой стороны (не поддерживает опцию «g» регулярных выражений).
"Hello World!".search("o");           //=> 4
"Hello World!".search(/world/i);      //=> 6  // опция i позволяет игнорировать регистр


//                                   slice() substring() substr()

// slice() и substring() применяют диапазон индексов из 2х параметров (не включая последний).
// substr() начинает с индекса равному 1му параметру и берет число элементов равному 2му параметру
"Hello World!".slice(6);               //=> 'World!' // substring() substr() ведут себя так же
"Hello World!".slice(6,9);             //=> 'Wor'    // substring() ведет себя так же
"Hello World!".substr(6,9);            //=> 'World!'
"Hello beautiful World!".slice(16,21); //=> 'World'  // substring() ведет себя так же
"Hello beautiful World!".slice(16,-1); //=> 'World'  // параметры slice() могут быть отрицательными числами (!!!тоже невсключительно!!!). Отрицательное значение начинается справа. -1 - первая позиция справа.
"Hello beautiful World!".slice(-1);    //=> "!"


//                                           replace() replaceAll()

// replace() - замена подстроки в строке, можно использовать регулярки как параметры определения и функции как параметры замены
'aaa!!'.replace('!', "");                                   //=> aaa!
"Your Name".replace(/[^a-z]/g, "");                         //=> ourame
"this is an example".replace(/\b\w/g, x=>x.toUpperCase())); //=> 'This Is An Example'

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
















//
