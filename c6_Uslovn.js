//                                            Особенности условий

function trueOrFalse(val){
  if (val)    return 'true';
  else     return 'false';
}
trueOrFalse(0); // "false"
trueOrFalse(""); // "false"
trueOrFalse([]); //=> "true"
trueOrFalse(new Object()); //=> "true"
trueOrFalse(function some() {}); //=> "true"



//                                               if - else

// Можно сравнивать операторами == != > < >= <=  и мб еще чемто
// Логическое и - &&; логическое или - ||

var a = 2, b = 10, isHas = true, isNot = false;

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
var y = 90, z = 8;
var res = y < z ? (y + z) : (y - z); // скобки только для действий??
console.log(res); //=> 82

var son = y > z && z < 5 ? 'third' : y > z ? 'second' : 'first'; // несколько действий



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
switch ( month ){
  case 2: return 28
  case 4: case 6: case 9: case 11: return 30 // если результат такой же
  default: return 31
}















//
