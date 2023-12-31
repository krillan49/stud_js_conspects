//                                                 Функции

// Функции что записаны вне классов называют функциями, а функции что записаны внутри классов называются методами
// В теле функции можно писать условия, циклы, вызов функций, любые операции, единственное что нельзя так это определение функции(но можно стрелочные и синтаксис через переменную)

// функции из js фаила можно подключать в разные html(каджую функцию в любоу количество страниц) если подключить фаил js в эти html, либо поместить саму функцию в тело тега script
// Функции с одним именем размещенные на разных страницах никак не влияют друг на друга, тк обрабатываются каждая на своей странице. Разные страницы для браузера это как разные приложения независимые друг от друга

function test() {
  // function - ключевое слово для создания функции
  // test() - название функции, в названии нельзя использовать спец символы. () - обязательно даже без параметров
  // {} - обязательно, нет сокращений для 1й строчки кода
	console.log("Вывод чего-либо в консоль");
  console.log("Вывод еше чегото");
}
test(); // Вызов функции, чтобы она отработала
test(); // Можно вызывать многократно


// Функции с параметрами
function test2(word=0) { //  =0  значение по умолчанию
	console.log(word + '!');
}
test2(); //=> 0!
test2('Kroker'); //=> Kroker!


// Вызов одной функции внутри тела другой
function summa(a, b) {
  var res = a + b; // переменная заданная внутри метода, задается заново при новом вызове
  console.log(test2(res)); //=> 12!
}
summa(5, 7);



//                                        Посмотреть код функции по ее оператору

// вызов функции без () передает ее как текст
function derp() { return 1; }
console.log(derp); //=> [Function: derp]
console.log(derp.toString()); //=> function derp() { return 1; }



//                                                 return

function return_test(some_number) {
	some_number *= 2;
	return some_number; // возвращаем результат к оператору вызова, например чтобы поместить его в переменную
}
var res = return_test(6); // теперь в переменной будет 12
console.log('Result: ' + res); //=> Result: 12


// Возврат без переменной
function check(a, x){
  return a.includes(x);
}
var a = [6, 8, 1, 'a'];
check(a, 8); //=> true



//                                      Неопределенное число аргументов

// 1. arguments - объект, который ведет себя аналогично массиву(ES3 или ES5 метод)
function args() {
  return arguments;
}
// соотв в JS не будет ошибки если передавать аргументы в функцию без параметров
console.log(args(1, 2, 3, 4)) //=> [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
console.log(typeof args(1, 2, 3, 4)) //=> object
console.log(args(1, 2, 3, 4)[0]) //=> 1


// 2. Синтаксис остальных параметров(ES6/ES2015) (аналог рубишного *args)
function args(...nums) {
  return nums;
}
console.log(args(1, 2, 3, 4)) //=> [ 1, 2, 3, 4 ]



//                                Альтернативный синтаксис(из переменной и функции без измени)

rev = function(arr) {  // присваивая функцию в переменную, создается функция с именем этой переменной
  return arr.reverse();
}
console.log(rev([1,2,3])) //=> [ 3, 2, 1 ]



//                                             => Стрелочные функции

// Синтаксис: (параметры) => {оператор} или выражение
const plus = (a, b) => a + b;
console.log(plus(3, 4)); //=> 7

// Если слева от стрелки существует только один параметр, скобки можно опустить. Если с правой стороны стрелки существует только одно выражение, фигурные скобки также можно опустить.
var add = x => x + 1;

// Если правая часть стрелки представляет собой сложный оператор, необходимо использовать фигурные скобки:
var pushElement = (arr, el1, el2) => {
  arr.push(el1);
  arr.push(el2);
  return arr;
}
console.log( pushElement([1],2,3) ); //=> [ 1, 2, 3 ]

// стрелочную функцию также можно использовать в качестве параметра оператора вызова функции. При использовании в качестве параметра стрелочная функция не требует имени.
[1,2,3].map(x=>Math.pow(x,3)); //=> [1,8,27]
"abababab".replace(/a/g, x=>x.toUpperCase()); //=> 'AbAbAbAb' // принимает параметры - регулярное выражение и функцию. Функция вызывается для каждой подстроки, соответствующей регулярному выражению

var ArrowFunc = (arr) => arr.map(n => String.fromCharCode(n));
// n каждый элемент массива arr

// Без параметров
const Title=()=>'<h1>Hello</h1>';



//                                             Spread Operator

// Spread Operator (Оператор расширения) - озволяет расширить выражение в тех местах, где ожидается несколько аргументов (для вызовов функций) или несколько элементов (для литералов массива)
// Это выглядит так: ...obj. Его можно использовать в трёх местах:

// 1. При вызовах функций:
function plus(a, b, c, d, e){
  return a + b + c + d + e;
}
var arg1 = [1,2,3,4,5];
var arg2 = [2,3];
console.log(plus(...arg1)); //=> 15 // ...arg1 распределяет все элементы arg1 по отдельным параметрам в plus()
console.log(plus(1, ...arg2, 4, 5)); //=> 15 // также можно использовать оператор расширения в середине списка параметров


// 2. Создание литералов массива (JS и Ruby):
var arr = [1, 2, 3]
var res = [...a, 4, 5] // ...arr распределяет элементы массива, делая их отдельными элементами в res.
console.log(res); //=> [ 1, 2, 3, 4, 5 ]


// 3. Используется для деконструкции (является новым элементом ES6)
var [a, b] = [1, 2];
console.log(a, b); //=> 1 2
[b, a] = [a, b];
console.log(a, b); //=> 2 1
// Оператор распространения для деструктуризации
var [a, ...b] = [1, 2, 3, 4, 5];
console.log(a); //=> 1
console.log(b); //=> [ 2, 3, 4, 5 ]


// 4. Позволяет нам представлять неопределенное количество аргументов в виде массива
function plus(...num){
  return num;
}
console.log(plus(3,4,5)); //=> [ 3, 4, 5 ]

function mul(a, ...b){
  return b;
}
console.log(mul(0,1,2,3,4)); //=> [ 1, 2, 3, 4 ]



//                                         Определение функции внутри функции

// возвращает массив функций без имени, каждая из которых возвращает индекс
function createFunctions(n) {
  let callbacks = [];
  for (let i = 0; i < n; i++) {
    callbacks.push(function() { return i;});
  }
  return callbacks;
}

var callbacks = createFunctions(5);

console.log(callbacks[0]()); //=> 0 // просто поставив скобки вконце, интерпритатор поймет что функция
console.log(callbacks[3]()); //=> 3



//                                    func(arg1)(arg2) Цепной вызов аргуметов (цепочке прототипов)

// Тоесть мы должны после обработки аргумента вернуть функцию которая объединится со скобкой со след аргументами:
// func(arg1)(arg2) -> func(arg1) вернет новую func которая и примет (arg2) -> func(arg2)

// 1 дополнительный аргумент можно выразить как функцию
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
function add(a){ // обернем функцию sum в «замыкание»/closure.
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
  return a.reduce((pre, cur)=> pre + cur , b);
}
function add(...a){
  return (...b) => b.length ? add(sum(b, sum(a, 0))) : sum(a, 0)
}
console.log(add(2,3,4)(5)(2)(8,6,3,5)()) //=> 38












//
