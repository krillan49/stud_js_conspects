//                                            Переменные и типы данных.

// Переменная - ячейка в памяти компьютера в которую можно записывать данные

// В переменную можно присваивать любые типы данных: целые(Integer), с плавающей точкой(Float), строки(String), true и false(Boolean) итд
// В JS нет строгой типизации, поэтому для переменной не нужно указывать тип данных(как в Си) и можно переопределять в любой тип

// нельзя начинать переменные со спец символов вроде % $ или цифр

// var - ключевое слово, сокращение от variable, оно переводится соотв как - переменная
// let - альтернатива var ??

var pusto = null; // переменная в которой нет значения

var num; // переменная в которой нет значения( = null писать не обязательно)
num = 5; // присваиваем в переменную значение

var num2 = 7; // создаем и присваиваем значение в одну строку


// Переопределение переменной
num2 = 3; //=> 3
num2 = 'aaa' //=> aaa

// можно называть с большой буквы(имена переменных чувствительны к регистру)
var Num = 'aaa';
console.log(Num); //=> aaa


// Создание константы. Константу нельзя переопределить, при попытке переопределения будет ошибка.
const num3 = 5;



//                                        Определить тип данных

// Определить тип при помощи typeof
console.log(typeof 42); //=> "number"
typeof 2.5 //=> number
typeof NaN //=> number
typeof 'blubber'; //=> "string"
typeof true; //=> "boolean"
typeof undeclaredVariable; //=> "undefined"
typeof null //=> object
typeof [] //=> object
typeof new Object() //=> object
typeof function some() {} //=> function


//                                         Изменить тип данных

// Оператор + со строкой преобразует и другое слогаемое в строку(тут из Integer)
5 + '5' //=> '55'

// Альтернативный перевод строки в число. чтобы преобразовать String в Int в JS. ('523' * 1 == 523)
'53' * 1 //=> 53  // number
'53.6' * 1 //=> 53.6  // number



//                                             Особенности

// Странная херня
console.log(1 == '1'); //=> true
console.log(1 === '1'); //=> false
console.log(1 === 1); //=> true















//
