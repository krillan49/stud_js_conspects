//                                                 Функции

// Функции что записаны вне классов называют функциями, а функции что записаны внутри классов называются методами
// В теле функции можно писать условия, циклы, вызов функций, любые операции, единственное что нельзя так это определение функции

function test() {
  // function - ключевое слово для создания функции
  // test() - название функции, в названии нельзя использовать спец символы. () - обязательно даже без параметров
  // {} - обязательно, нет сокращений для 1й строчки кода
	console.log("Вывод чего-либо в консоль");
  console.log("Вывод еше чегото");
}
test(); // Вызов функции, чтобы она отработала(тут вывела в консоль то что в теле)
test(); // Можно вызывать многократно


// Функции с параметрами
function test2(word) { // параметры как в Руби
	console.log(word + '!');
}
test2('Kroker'); //=> Kroker!
test2(6); //=> 6!
test2(5.5); //=> 5.5!
test2(true); //=> true!

function summa(a, b) {
  var res = a + b;
  console.log(res);
}
summa(5, 7); //=> 12


// Вызов одной функции внутри тела другой
function summa2(a, b) {
  var res = a + b;
  test2(res);
}
summa2(5, 7); //=> 12!


// Пример с массивом
function arr_sum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum)
}
var arr = [6, 8, 1]; // придется сперва определить
arr_sum(arr); //=> 15



//                                                 return

function return_test(some_number) {
	some_number *= 2;
	return some_number; // возвращаем результат к оператору вызова, чтобы поместить его в переменную
}
var res = return_test(6); // теперь в переменной вар будет 12
console.log('Result: ' + res); //=> Result: 12


// Возврат без переменной
function check(a, x){
  return a.includes(x);
}
var a = [6, 8, 1, 'a'];
check(a, 8); //=> true



//                                      Локальные и глобальные переменные

// В JavaScript есть несколько полей видимости: локальная и глобальная. Глобальная переменная видна повсюду и с ней можно работать отовсюду в документе. Локальная переменная видна лишь в той области, где она записана.

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
  var num = 5;
  console.log(num); // сработает для локальной
}
info(); // сработает для локальной
console.log(num); // сработает для глобальной



//                                                 => Функции

var ArrowFunc = (arr) => arr.map( n => String.fromCharCode(n) ).join('');
// n каждый элемент массива arr



















//
