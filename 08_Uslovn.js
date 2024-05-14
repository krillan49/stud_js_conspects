//                                           Логические операторы

// Можно сравнивать операторами == != > < >= <=  и мб еще чемто
// Логическое и - &&; логическое или - ||



//                                            Особенности условий

// Истинность/ложность типов данных
const trueOrFalse = (val) => val ? 'true' : 'false';
trueOrFalse(undefined);          //=> "false"
trueOrFalse(null);               //=> "false"
trueOrFalse(NaN);                //=> "false"
trueOrFalse(0);                  //=> "false"
trueOrFalse("");                 //=> "false"
trueOrFalse("0");                //=> "true"
trueOrFalse([]);                 //=> "true"
trueOrFalse(new Object());       //=> "true"
trueOrFalse(function some() {}); //=> "true"

// Условие || и типы данных
console.log(undefined || null);       //=> null
console.log(null || undefined);       //=> undefined
console.log(NaN || 1);                //=> 1
console.log(false || 1);              //=> 1
console.log(undefined || 1);          //=> 1
console.log(null || 1);               //=> 1
console.log([] || 1);                 //=> []
console.log('' || 1);                 //=> 1
console.log(0 || 1);                  //=> 1
console.log(new Object() || 1);       //=> {}
console.log(function some() {} || 1); //=> [Function: some]
console.log(undeclaredVariable || 1); //=> ReferenceError

// Особенности равенств
console.log(1 == '1');  //=> true
console.log(1 === '1'); //=> false
console.log([ 'five', 'seven' ] == 'five,seven')  //=> true
console.log([ 'five', 'seven' ] === 'five,seven') //=> false



//                                               if - else

let a = 2, b = 10, isHas = true, isNot = false;

if (a == b) {                                  // условие пишем в скобках, далее фигурные скобки для тела условия
  console.log("a равно b");
	console.log("a == b");
} else if (a <= b) {                           // аналог рубишного elsif, условие тоже в скобках
	console.log("a <= b");
} else if (a != b && a > b) {                  // два условия с &&
  console.log("a != b && a > b");
} else if (a < b || a == b) {                  // два условия с ||
  console.log("a < b || a == b");
} else if (isHas == true || isNot == false) {  // проверка булевых значений
  console.log("some");
} else if (!isHas || isNot) {                  // сокращенная проверка булевых значений
  console.log("some");
} else {
	console.log("a > b");
}
//=> a <= b

// Сокращенный синтаксис(Если в теле условия всего одна строка кода, то фигурные скобки {} можно не ставить)
if (a == b)
	console.log("a == b");
else if (a != b && a > b)
  console.log("a != b && a > b");
else
	console.log("a < b");
//=> a < b

// Еще более сокращенный в однострочники
if (a == b) console.log("a == b");
else if (a != b && a > b) console.log("a != b && a > b");
else console.log("a < b");
//=> a < b

// Отдельные if в одну строку
if (a == 2) console.log(a + 'a'); //=> 2a
if (a < 7) console.log(a + 'b'); //=> 2b



//                                               Тернарная операция

// Тернарная операция - это сокращенная форма if else
let y = 90, z = 8;
let res = y < z ? (y + z) : y - z; // скобки не обязательны(нужны только для некоторых действий)
console.log(res); //=> 82

// Несколько действий
let son = y > z && z < 5 ? 'third' : y > z ? 'second' : 'first';



//                                               Новые операторы

// Аналог & в руби но только для свлйств объекта (?)
// https://habr.com/ru/companies/ruvds/articles/353446/ - еще похожие новые операторы
const data = {}
console.log(data.user?.address?.street); // undefined


// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.
const foo = null ?? 'default string';
console.log(foo); // Expected output: "default string"
const baz = 0 ?? 42;
console.log(baz); // Expected output: 0



//                                                switch - case

// Конструкция case обладает более удобным форматом для проверки множественных условий на совпадение значения(только на равенство тк невозможно применить операторы сравнения).

var x = 23;
switch (x) { // Проверяем переменную x
	case 1: // Если переменная будет равна 1, то ...
		console.log("Переменная равна 1");
    console.log("Может быть множество строк");
		break; // Указываем конец для кода для этой проверки, те вместо { } в case используется : break;
	case 56:
		console.log("Переменная равна 56");
		break;
	default: // аналог else для оператора case тоже необязателен
		console.log("Что-то другое");
	//	break; // Можно и не ставить break; в самом последнем условии
}
//=>'Что-то другое'


// Сокращенная запись(не используем break тк есть return ??)
switch ( month ) {
  case 2: return 28
  case 4: case 6: case 9: case 11: return 30 // если результат такой же
  default: return 31
}















//
