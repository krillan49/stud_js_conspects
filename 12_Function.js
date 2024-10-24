//                                                 Функции

// функции из js фаила можно подключать в разные html(каджую функцию в любоу количество страниц) если подключить фаил js в эти html, либо поместить саму функцию в тело тега script
// Функции с одним именем размещенные на разных страницах никак не влияют друг на друга, тк обрабатываются каждая на своей странице. Разные страницы для браузера это как разные приложения независимые друг от друга

function test() {
  // function - ключевое слово для создания функции
  // test()   - название функции, в названии нельзя использовать спец символы. () - обязательно даже без параметров
  // {}       - обязательно, нет сокращений для 1й строчки кода при мменованном синтаксисе
	console.log("Вывод чего-либо в консоль");
  console.log("Вывод еше чегото");
}
test(); // Вызов функции, чтобы она отработала
test(); // Можно вызывать многократно


// Функции с параметрами
function test2(word=0) {     // тут 0 - значение по умолчанию
	console.log(word + '!');
}
test2();         //=> 0!
test2('Kroker'); //=> Kroker!


// запись переданного массива по переменным сразу
function to1D(x, y, [w, h]) { return w; }
to1D(1, 2, [3, 4]); //=> 3


// Вызов оператора одной функции внутри тела другой
function summa(a, b) {
  let res = a + b; // переменная заданная внутри метода, задается заново при новом вызове
  console.log(test2(res)); //=> 12!
}
summa(5, 7);



//                                          Свойства функций

// В ЖС и функция является особым объектом с типом 'function' и соответсвенно можно объявить для нее какоето поле:
function some(arr) { console.log('hello') }
some.someField = 123;
console.log(some.someField); //=> 123


// Встроенное свойство функций length возвращает колличество аргументов у функции
const sum = (a, b, c) => a + b + c;
console.log(sum.length); //=> 3



//                                  Посмотреть код функции по ее оператору

// вызов функции без () передает ее как переменную
function derp() { return 1; }
console.log(derp);            //=> [Function: derp]
console.log(derp.toString()); //=> function derp() { return 1; }



//                                                 return

// return - возвращает результат к оператору вызова функции, например чтобы поместить его в переменную
function return_test(n) {
	n *= 2;
	return n;
}
console.log(return_test(4));   //=> 8
let res = return_test(6);      // теперь в переменной будет 12
console.log('Result: ' + res); //=> Result: 12



//                                      Неопределенное число аргументов

// 1. arguments - объект, который ведет себя аналогично массиву(ES3 или ES5 метод)
function args() {
  return arguments;
}
// соотв в JS не будет ошибки если передавать аргументы в функцию без параметров
console.log(args(1, 2, 3, 4))        //=> [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
console.log(typeof args(1, 2, 3, 4)) //=> object
console.log(args(1, 2, 3, 4)[0])     //=> 1


// 2. Spread Operator для множественных параметров(ES6/ES2015) (аналог рубишного *args)
function args(...nums) {
  return nums;
}
console.log(args(1, 2, 3, 4)) //=> [ 1, 2, 3, 4 ]



//                                              Функция без имени

// Можно присвоить функцию без измени в переменную
rev = function(arr) {  // присваивая функцию в переменную, создается функция с именем этой переменной
  return arr.reverse();
}
// Тк переменная фозвращает функцию то можем применить (), чтобы ее вызвать
rev([1,2,3]); //=> [ 3, 2, 1 ]



//                                               Стрелочные функции

// Синтаксис: (параметры) => {оператор} или выражение
const plus = (a, b) => a + b;
plus(3, 4); //=> 7

// Если слева от стрелки существует только один параметр, скобки можно опустить. Если с правой стороны стрелки существует только одно выражение, фигурные скобки также можно опустить.
const add = x => x + 1;

// Без параметров
const title = () => '<h1>Hello</h1>';

// Если правая часть стрелки представляет собой сложный оператор, необходимо использовать фигурные скобки:
const pushElement = (arr, el1, el2) => {
  arr.push(el1);
  arr.push(el2);
  return arr;
}
pushElement([1],2,3); //=> [ 1, 2, 3 ]


// Стрелочную функцию удобно использовать в качестве параметра в операторе вызова другой функции. При использовании в качестве параметра стрелочная функция не требует имени.
[1, 2, 3].map(x => Math.pow(x, 3));             //=> [1,8,27]
"abababab".replace(/a/g, x => x.toUpperCase()); //=> 'AbAbAbAb'   // Тут функция вызывается для каждой совпавшей подстроки



//                                         Определение функции внутри функции

// Можно определить и использовать любую функцию, в том числе и именованную внутри функции
function channellingPrimes(n) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return isPrime(n) ? 'Prime' : 'Not Prime';
}
console.log(channellingPrimes(2)); //=> Prime
console.log(channellingPrimes(4)); //=> Not Prime


// Тут возвращает массив функций без имени, каждая из которых возвращает индекс
function createFunctions(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(function() { return i;});
  }
  return arr;
}
let callbacks = createFunctions(5);
console.log(callbacks[0]()); //=> 0 // просто поставив скобки вконце, интерпритатор поймет что функция
console.log(callbacks[3]()); //=> 3



//                                      Передача функции как параметра

// использоавание функции через ее переменную как параметра в другой функции
function notEmpty(item) {
	return item !== undefined && item !== null;
}
let arr = [1, undefined, 2, null, 3];
// возвращаем саму функцию
console.log(arr.filter(notEmpty));               //=> [ 1, 2, 3 ]
// тоже самое что и
console.log(arr.filter(item => notEmpty(item))); //=> [ 1, 2, 3 ]



//                                            Замыкание(Closure)

// В JavaScript область действия переменной определяется по её расположению в коде и вложенные функции имеют доступ к переменным, объявленным в той же области выше. Этот механизм и называется Lexical scoping (область действия, ограниченная лексически).

// Замыкание(Closure) — это комбинация функции и лексического окружения, в котором эта функция была определена. Это окружение состоит из произвольного количества локальных переменных, которые были в области действия функции во время создания замыкания. Замыкание даёт доступ к внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции.

function init() {
  let name = "Mozilla"; // name - локальная переменная, созданная в init
  function displayName() {
    // displayName() — это внутренняя функция — она определена внутри init() и доступна только внутри тела функции init()
    // замыкание - displayName() может иметь доступ к переменной name, объявленной в родительской функции init()
    console.log(name); // displayName() использует переменную, объявленную в родительской функции
  }
  displayName(); // вызываем внутреннюю функцию
}
init(); //=> 'Mozilla'

// dвариант с возвратом
function init() {
  let name = "Mozilla";
  function displayName() { return name; }
  return displayName();
}
console.log(init()); //=> 'Mozilla'


// В некоторых языках программирования локальные переменные функции существуют только во время выполнения этой функции, но это не так в случае JavaScrip, тк функции в JavaScript формируют замыкания.
function makeFunc() {
  let name = "Mozilla";
  function displayName() { console.log(name); }
  return displayName; // внутренняя функция displayName() была возвращена из внешней до того, как была выполнена
}
let myFunc = makeFunc(); // myFunc — это ссылка на экземпляр функции displayName, созданной в результате выполнения makeFunc. Экземпляр функции displayName в свою очередь сохраняет ссылку на своё лексическое окружение, в котором есть переменная name.
myFunc(); //=> 'Mozilla'
// соответсвенно при вызове функции myFunc, переменная name остаётся доступной для использования и сохранённый в ней текст "Mozilla" передаётся в console.log.


// Здесь мы определили функцию makeAdder(x), которая получает единственный аргумент x и возвращает новую функцию. Эта функция получает единственный аргумент y и возвращает сумму x и y. Получилась фабрика функций: она создаёт функции, которые могут прибавлять определённое значение к своему аргументу
function makeAdder(x) {
  return function (y) { return x + y; };
}
let add5 = makeAdder(5);        // передаем аргумент в makeAdder(x)
console.log(add5(2));  //=> 7   // передаем аргумент в function (y)
let add10 = makeAdder(10);
console.log(add10(2)); //=> 12
// add5 и add10 — это примеры замыканий. Эти функции делят одно определение тела функции, но при этом они сохраняют различные окружения. В окружении функции add5 x — это 5, в то время как в окружении add10 x — это 10.


// счетчик при помощи замыкания, возвращает 1, потом 2, потом 3 итд (меморизация внутри функции)
function counter(){
  let y = 0;
  function count() {
    y += 1;
    return y;
  }
  return count;
}
let c = counter();
console.log(c()); //=> 1
console.log(c()); //=> 2
console.log(c()); //=> 3


// Возвращаем функцию, которую можно вызвать только 1 раз
function once(fn) {
  let call = true;
  return function(p) {
    if (call) {
      call = false;
      return fn(p);
    };
  }
}
logOnce = once(console.log);
logOnce("foo"); //=> "foo"
logOnce("bar"); // no effect



//                              Кастомные стрелочные функции-аргументы для встроенных функций

// Тоесть можно пихать любую функцию аргументом во встроенные функции если число и тип параметров подойдут

const filterUsersByField = (field, value) => (user) => user[field] === value;  // возвращает функцию-фргумент фильтр по любому полю
const sumUsersByField = (field) => (sum, user) => sum + user[field]; // возвращает функцию аргумент суммирующую по любому полю
function calcUsersSumFieldByField(users, fieldForFilter, valueForFilter, fieldForSum) {
  return users.filter(filterUsersByField(fieldForFilter, valueForFilter))
              .reduce(sumUsersByField(fieldForSum), 0);
}
const users = [
  {money:1000, age:20, country:'RU'}, {money:5000, age:50, country:'RU'},
  {money:100, age:100, country:'UA'}, {money:300, age:200, country:'UA'}
]
console.log(calcUsersSumFieldByField(users, 'country', 'RU', 'age'));  //=> 70
console.log(calcUsersSumFieldByField(users, 'country', 'UA', 'money')); //=> 400



//                               func(arg1)(arg2) Цепной вызов аргуметов (цепочке прототипов)

// Тоесть мы должны после обработки аргумента вернуть функцию которая объединится со скобкой со след аргументами:

const start = 'A';
console.log((start)); //=> 'A'  тоесть это просто переменная в скобках


// Один дополнительный аргумент можно выразить как функцию
function sum(a){
  return function(x) { return a + x; }; // Вариант 1 - возвращаем обычную функцию
  return x => a + x;                    // Вариант 2 - возвращаем стрелочную функцию
}
console.log(sum(3)(6)); //=> 8


// Универсальный вариант чтобы можно было вызвать и 2 аргумента и 1 + 1 цепной
function sum(a, b) {
  return arguments.length == 2 ? a+b : (n)=>a+n;
};
console.log(sum(3)(6)); //=> 8
console.log(sum(3, 6)); //=> 8


// Пример: передача цепного параметра в передаваемую в первый пораметр - функцию fn
function flip(fn) {
	// сначала вызываем функцию без имени с параметрами 4, 5
  return function(...args) { return fn(...args.reverse()); };
}
function print(a,b) { return a + " -> " + b;}
flip(print)(4,5) // returns "5 -> 4"


// Пример: прогон цепного параметра по списку функций
function chained(functions) {
  return function(input) { // сначала вызываем функцию без имени с параметром 'ABC'
    functions.forEach(f => input = f(input));
    return input;
  };
}
console.log(chained([(x)=>x.split(''), (x)=>x.reverse(), (x)=>x.join('+')])('ABC')); //=> 'C+B+A'


// Многозвенная цепочка
function add(a){ // обернем функцию sum в «замыкание».
  function sum(b){ // принимает следующий параметр в цепочке
    if (typeof(b) == 'undefined') return a; // undefined будет когда функция получит () те не будет аргумента
    a += b; // параметр a из надфункции add, он меняется, тк каждый раз sum вызывается из той же области add
    return sum; // возвращаем функцию, которая примет след параметр в цепочке
  }
  return sum; // возвращаем то что в итоге вернет функция sum (тоже если написать return в начале перед ней)
}
console.log(add(1)(2)(3)(4)()); //=> 10


// Многозвенная цепочка при помощи рекурсии
function add(sum){
  return m => m ? add(sum + m) : sum;
}
console.log(add(1)(2)(3)(4)()); //=> 10


// Сложная цепочка с любым числом параметров
function sum(a, b){
  return a.reduce((pre, cur) => pre + cur, b);
}
function add(...a){
  return (...b) => b.length ? add(sum(b, sum(a, 0))) : sum(a, 0);
}
console.log(add(2,3,4)(5)(2)(8,6,3,5)()) //=> 38


// Передаем функции которые обрабатывают цепной аргумент по очереди, одна над результатом другой multTwo(addOne(5))
function compose(...fns) {
  return function(x) { // принимаем цепной аргумент этой возвращенной функцией
    for (let i = fns.length-1; i >= 0 ; i--) {
      x = fns[i](x); // обрабатываем фргумент/рез прошлой функции очередной функцией
    }
    return x;
  };
}
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
console.log(compose(multTwo, addOne)(5)); //=> 12 // multTwo(addOne(5))  - получаем аналог этого



//                                                    bind()

// bind() - метод создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.

// bind() - метод создаёт новую "привязанную функцию" (ПФ). ПФ - это "необычный функциональный объект" ( термин из ECMAScript 6 ), который является обёрткой над исходным функциональным объектом. Вызов ПФ приводит к исполнению кода обёрнутой функции.

// метод bind, позволяет зафиксировать this. (При передаче методов объекта в качестве колбэков, например для setTimeout, возникает известная проблема – потеря this.)


// Пример: создание привязанной функции, которая, вне зависимости от способа её вызова, вызывается с определённым значением this:
let modul = {
  x: 81,
  getX: function () {
    return this.x;
  },
};
console.log(modul.getX()); //=> 81

let getX = modul.getX; // без специальной обработки, оригинальный объект зачастую теряется
console.log(getX()); //=> undefined // поскольку в этом случае this ссылается на глобальный объект

let boundGetX = getX.bind(modul); // создаём новую функцию с this, привязанным к module
console.log(boundGetX()); //=> 81











//
