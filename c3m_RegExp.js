//                                             Регулярки

// Объект RegExp может создавать регулярные выражения, используемые для сопоставления определенного содержимого строки.

// Есть 2 способа создать новое регулярное выражение:
var reg1 = new RegExp("abc") // удобно использовать с переменными
var reg2 = /abc/
console.log(reg1,reg2)  //=> /abc/ /abc/
console.log(typeof reg2) //=> object

// Флаги:
new RegExp("abc","g");
/abc/g;
// g - глобальное соответствие
// i - игнорировать регистр
// m - многострочное совпадение
// u - Юникод
// y - прикрепленный



//                                       Методы экземпляра регулярок

// метод Object RegExp: test(). Он используется для проверки того, соответствует ли строка объекту RegExp. Он возвращает логическое значение: true/false
/a/.test("abc");  //=> true
/ab/.test("abc");  //=> true
/ac/.test("abc");  //=> false

/^a.c$/.test("abc");   //=> true
/^a.c$/.test("abbc");  //=> false



//                                 Специальные строковые методы для регулярок

// 1. match() -  когда результатов сопоставления больше одного, выходные данные представляют собой массив строк, содержащий все результаты сопоставления; Если результат сопоставления один, выходные данные представляют собой список, содержащий совпадающую строку, соответствующий индекс и исходную строку. Если результата совпадения нет, вывод будет null.
var str = "ABABCDEababcde";
str.match(/a/)    //=> [ 'a', index: 7, input: 'ABABCDEababcde' ]
str.match(/a/i)   //=> [ 'A', index: 0, input: 'ABABCDEababcde' ]
str.match(/a/ig)  //=> [ 'A', 'A', 'a', 'a' ]
str.match(/ab/)   //=> [ 'ab', index: 7, input: 'ABABCDEababcde' ]
str.match(/ab/i)  //=> [ 'AB', index: 0, input: 'ABABCDEababcde' ]
str.match(/ab/ig) //=> [ 'AB', 'AB', 'ab', 'ab' ]
str.match(/xyz/)  //=> null
str.match(/./)  //=> [ 'A', index: 0, input: 'ABABCDEababcde', groups: undefined ]
str.match(/.../g) //=> [ 'ABA', 'BCD', 'Eab', 'abc' ]

// считаем число совпадений
str.match(new RegExp('ab',"ig")).length; //=> 4
(str.match(new RegExp('xyz')) || []).length; //=> 0  // тк при отсутсвии совпадений length применился бы null



//                          Общие строковые методы которые так же могут использовать регулярки

// 1. search()
var str = "ABCDEabcde";
str.search(/abc/)  //=> 5  // аналогично str.search("abc")
str.search(/cde/)  //=> 7  // аналогично str.search("cde")
str.search(/abc/i) //=> 0
str.search(/cde/ig) //=> 2 // search() не поддерживает флаг «g»


// 2. replace()  позволяет использовать «i» и «g»
var str = "Hello World! Hello CodeWars!";
str.replace(/world/, "javascript") //=> Hello World! Hello CodeWars!   // Нет совпадений
str.replace(/world/i,"Javascript") //=> Hello Javascript! Hello CodeWars!
str.replace(/Hello/g,"I love") //=> I love World! I love CodeWars!  // "g" применяет замену к каждому "Hello"

var str = "abcabc";
str.replace(/^a/,"A")  //=> Abcabc
str.replace(/^./,"A")  //=> Abcabc
str.replace(/c$/,"C")  //=> abcabC
str.replace(/.$/,"C")  //=> abcabC

// Принимает стрелочную функцию 2м параметром
"my name is John".replace(/\b./g, x => x.toUpperCase()); //=> My Name Is John.


// 3. split()  По умолчанию используется опция «g», независимо от того, указали вы ее или нет
var str = "ababaBa"
str.split(/b/)   //=> [ 'a', 'a', 'aBa' ]
str.split(/b/i)  //=> [ 'a', 'a', 'a', 'a' ]















//
