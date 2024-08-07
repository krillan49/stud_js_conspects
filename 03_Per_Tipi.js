//                                            Переменные и типы данных.

// Переменная - ячейка в памяти компьютера в которую можно записывать данные
// В JS нет строгой типизации, поэтому для переменной не нужно указывать тип данных и можно переопределять в любой тип
// нельзя начинать переменные со спец символов вроде % $ или цифр

// var - ключевое слово, сокращение от variable, оно переводится соотв как - переменная

// Значение null не является пустым значением в жс
var pusto = null;
console.log(pusto); //=> null

// переменная в которой нет значения
var num;
console.log(num); //=> undefined
// создание переменной со значением undefined для последующей инициальзации и использования, называется поднятием

num = 5; // присваиваем в переменную значение
num = 'aaa'; // Переопределение переменной

var num2 = 7; // создаем и присваиваем значение сразу

var a = 2, b = 10; // содание нескольких переменных в 1 строку


// можно называть с большой буквы(имена переменных чувствительны к регистру)
var Num = 'aaa';
console.log(Num); //=> aaa


// Замена значений переменных друг на друга
var a = 1, b = 2;
[a, b] = [b, a];
console.log(a); //=> 2
console.log(b); //=> 1



//                                        Определить тип данных typeof

// целые(Integer)(максимум 53 бита), с плавающей точкой(Float), строки(String), true и false(Boolean) итд

// Определить тип при помощи typeof
typeof 42;                 //=> "number"
typeof 2.5;                //=> number
typeof NaN;                //=> number
typeof('blubber');         //=> "string"
typeof true;               //=> "boolean"
typeof undeclaredVariable; //=> "undefined"
typeof null                //=> object
typeof []                  //=> object
typeof new Object()        //=> object
typeof function some() {}  //=> function


// Определение типов и классов
function Foo() {}
typeof Foo;             // == "function"
let foo = new Foo();
typeof foo;             // == "object"
foo instanceof Foo;     // == true
foo.constructor.name;   // == "Foo"
Foo.name                // == "Foo"
Foo.prototype.isPrototypeOf(foo);   // == true


// Вывести класс объекта
console.log({}.toString.call(null)); //=> '[object Null]'
console.log({}.toString.call([1, 2, 3])); //=> '[object Array]'
console.log({}.toString.call(new Date())); //=> '[object Date]'



//                                            Изменить тип данных

// Оператор + со строкой преобразует и другое слогаемое в строку(тут из Integer)
5 + '5' //=> '55'

// Альтернативный перевод строки в число. чтобы преобразовать String в Int в JS. ('523' * 1 == 523)
'53' * 1 //=> 53  // number
'53.6' * 1 //=> 53.6  // number

//
true * 1 //=> 1

// перевод в формат денег ??
console.log((12345.6789).toLocaleString()); // 12 345,679



//                                              Область видимости.

// В Javascript, имеются 2 типа областей видимости — глобальная область видимости, и область видимости функции(локальная). Глобальная переменная видна повсюду и с ней можно работать отовсюду в документе. Если объявление переменной происходит внутри области функции, переменная определяется только в локальной области видимости этой функции.

var num = 10; // Данная переменная будет глобальной, тк определена вне функциями

function info() {
  var num2 = 5; // Данная переменная будет локальной, тк определена в теле функции
  console.log(num); // глобальная переменная работает и внутри функций
  console.log(num2); // локальная переменная работает только внутри функции в которой определена
}
info();
console.log(num2); // Uncaught ReferenceError: num2 is not defined


// Фича
var num = 10;
function info() {
  var num = 5;      // Присваиваем в переменную с тем же именем
  console.log(num); // тут сработает для локальной
	return num;
}
info(); // тут сработает для локальной
console.log(num); // тут сработает для глобальной



//                                          Отличия var, let и const

// https://habr.com/ru/articles/438880/


// var:
//   ограничена областью видимости функции (переменные var объявленные внутри For, доступны и за его пределами, они входят в область видимости функции и вы можете получить к ним доступ вне блока)
//   undefined  - если обратиться к ней без её объявления.

// let:
//   ограничена областью видимости блока
//   ReferenceError - если обратиться к ней без её объявления.

// const:
//   ограничена областью видимости блока
//   ReferenceError - если обратиться к ней без её объявления.
//   не может быть перезаписана


// Ключевое отличие между var и let это то, что let помимо глобальной области видимости и области видимости функции позволяет определять переменные в области видимости блока. Переменная let созданная в блоке(области окруженное фигурными скобками {}, например цикл for или оператор if.) доступна только внутри этого “блока”.
function discountPrices(prices) {
  for (let n = 0; n < prices; n++) {
    let perLet = 'perLet';
    var perVar = 'perVar';
  }

  for (var k = 0; k < prices; k++) {}

  console.log(perVar) //=> 'perVar'
  console.log(perLet) //=> ReferenceError: perLet is not defined   // говорит нам о том, что переменная, объявленная при помощи let, ограничена областью видимости блока, а не функции
  console.log(n) //=> ReferenceError: n is not defined
  console.log(k) //=> 1
}
discountPrices(1)


// const — это не константа, а именно read-only переменная
// const почти такая же как и let. Но если однажды присвоили ей значение, уже нельзя его изменить на другое.
let name = 'Tyler'
const handle = 'tylermcginnis'
name = 'Tyler McGinnis' // OK
handle = '@tylermcginnis' // NOT OK: TypeError: Assignment to constant variable.

// Но изменения свойства объекта не является его перезаписью
const person = {
  name: 'Kim Kardashian'
}
person.name = 'Kim Kardashian West' // OK
person = {} // NOT OK: Assignment to constant variable.


// var, let или const? Самое распространенное мнение - это использовать всегда const, пока вы не знаете будет ли переменная изменяться. Причина этого в том, что используя const вы даете понять себе и другим разработчикам, что эта переменная не должна изменяться. Если её потребуется изменить (например в цикле for), просто используйте let. var используется редко

















//
