//                                               Условные операторы

// Условные конструкции позволяют проверить некое выражение и в зависимости от его результата выполнить необходимый код


//                                               if - else

// Можно сравнивать операторами == != > < >= <=  и мб еще чемто
// Логическое и - &&; логическое или - ||

var a = 2, b = 10;
var isHas = true;
var isNot = false;

if (a == b) {                         // условие пишем в скобках, далее фигурные скобки для тела условия
  console.log("a равно b");
	console.log("a == b");
} else if (a <= b) {                  // аналог рубишного elsif, условие тоже в скобках
	console.log("a <= b");
} else if (a != b && a > b) {         // два условия с &&
  console.log("a != b && a > b");
} else if (a < b || a == b) {         // два условия с ||
  console.log("a < b || a == b");
} else if (isHas == true || isNot == false) {  // проверка булевых значений
  console.log("some");
} else if (!isHas || isNot) {        // сокращенная проверка булевых значений
  console.log("some");
} else {
	console.log("a > b");
}
//=> a <= b

// Сокращенный синтаксис
if (a == b)
	// Если в теле условия всего одна строка кода, то фигурные скобки {} можно не ставить
	console.log("a == b");
else if (a != b && a > b)
  console.log("a != b && a > b");
else
	console.log("a < b");
//=> a < b


//                                               Тернарная операция

// Тернарная операция - это сокращенная форма if else
var y = 90, z = 8;
var res = y < z ? (y + z) : (y - z);
console.log(res); //=> 82


//                                              if в одну строку

var n = 5;
if (n == 5) console.log(n + 'a'); //=> 5a
if (n < 7) console.log(n + 'b'); //=> 5b


//                                               switch - case

// Конструкция case обладает более удобным форматом для проверки множественных условий на совпадение значения(только на равенство тк невозможно применить операторы сравнения).

var x = 23;
switch (x) { // Проверяем переменную x
	case 1: // Если переменная будет равна 1, то здесь сработает код
		// Может быть множество строк, а не только одна
		console.log("Переменная равна 1");
		break; // Указываем конец для кода для этой проверки, те вместо { } в case используется : break;
	case 56:
		console.log("Переменная равна 56");
		break;
	default: // аналог else для оператора case
		console.log("Что-то другое");
	//	break; // Можно и не ставить break; в самом последнем условии
}
//=>'Что-то другое'


// Сокращенная запись
switch ( month ){
  case 2: return 28
  case 4: case 6: case 9: case 11: return 30 // если результат такой же
  default: return 31
}



//                                                Особенности условий

function trueOrFalse(val){
  if (val)    return 'true';
  else     return 'false';
}
trueOrFalse(0); // "false"
trueOrFalse(""); // "false"











//
