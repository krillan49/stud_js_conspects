//                                          Математические действия

var num1 = 5;
var num2 = 15;
console.log(num1 + num2); //=> 20
num1 - num2; //=> -10
num1 * num2; //=> 75
num1 / num2; //=> 0.3333333333333333 // в отличие от Руби автоматически преобразует во float, на ноль делить нельзя
num1 % num2; //=> 5 // остаток при делении
num1 ** 3; // возведение в степень

// Сокращенные формы математических действий(Если операция проходит над одной и той же переменной, то можно сократить запись):
var x = 10;
x = x + 20; //=> 30
x += 20; //=> 50 // Эта запись аналогична той, что находиться выше(работает для любых дейсвий пр: -, *, /, %)
// Если необходимо увеличить или уменьшить число на 1, то мы можем прописать ++ и -- соответсвенно:
var z = 10;
z++; //=> 12 // Аналогично z += 1
z--; //=> 11


// дробная часть числа
console.log(654.12 % 1); //=> 0.1230000000000473



//                                        Изменение типов чисел и строк

// Оператор + со строкой преобразует и другое слогаемое в строку(тут из Integer)
5 + '5' //=> '55'

console.log("Вычитание: " + num1 - num2); //=> NaN   // Интерпритатору непонятно как отнимать из строки число
// Чтобы всетаки получить результат можно либо присвоить его в отдельную переменную, либо взять в скобки, либо разделить запятой
console.log("Вычитание: ", num1 - num2); //=> Вычитание:  -10
var res = num1 - num2;
console.log("Вычитание: " + res); //=> Вычитание: -10
console.log("Вычитание: " + (num1 - num2)); //=> Вычитание: -10


// Альтернативный перевод строки в число. чтобы преобразовать String в Int в JS. ('523' * 1 == 523)
'53' * 1 //=> 53  // number
'53.6' * 1 //=> 53.6  // number


// применяя методы к целому числу например 11911.toFixed(), выйдет ошибка нужно добавить скобки (11911).toFixed(), с дробными числами скобки можно не писать


// Глобальные методы перевода строки в число
parseInt('111.12'); //=> 111

// parseFloat(string)
parseFloat('111.12'); //=> 111.12
parseFloat(' 3   '); //=> 3
parseFloat(' -5.66 '); //=> -5.66
console.log(parseFloat('4 5')); //=> 4
+'111.12'; //=> 111.12 // «+» — упрощенная форма parseFloat() (когда используется перед строкой)
+'a'; //=> NaN

// Number(string)
console.log(Number(' 3   ')); //=> 3
Number(' -5.66 '); //=> -5.66
Number('4 5'); //=> NaN



//                                                 Объект Number

// Число — это базовый тип данных в js. js также поддерживает числовые объекты. При необходимости JS автоматически выполняет преобразование между исходными данными и объектами. Вы можете явно создать объект Number с помощью конструктора Number().

var num = new Number(5); // Значение параметра — это значение создаваемого объекта Number или значение, которое необходимо преобразовать в числовое значение.
console.log(num); //=> [Number: 5]

// Конструктор Number() можно использовать без оператора new и непосредственно как функцию преобразования. Таким образом, когда вызывается Number, он преобразуется в число, а затем возвращает преобразованное значение(или NaN).
var num = Number('12'); // Объект Number имеет два общих свойства объекта JS: конструктор и прототип.
console.log(num); //=> 12 // Встроенный класс Number переводит строку в число


// В дополнение к двум указанным выше, объекты Number имеют пять атрибутов(или называемых константами):
Number.MAX_VALUE //=> 1.7976931348623157e+308 максимальное число в JS.
Number.MIN_VALUE //=> 5e-324 минимальное число в JS(близко к 0, но не отрицательно).
Number.NaN //=> NaN нечисловое значение. Сокращение от «Не число». Например, извлечение квадратного корня из отрицательного числа вернет NaN. Результаты сравнения NaN с другими значениями всегда не равны(в том числе и с собственными).
NaN == NaN //=> false
isNaN(NaN) //=> true
Number.NEGATIVE_INFINITY //=> -Infinity значение представляет отрицательную бесконечность.
Number.POSITIVE_INFINITY //=> Infinity значение представляет положительную бесконечность..

Number.MAX_SAFE_INTEGER //=> 9007199254740991 максимально возможное целое число JS
Number.isSafeInteger(n) // проверяет доступно ли это целое число (53 бита или меньше)


// методы объектов Number: toFixed(), toExponential() и toPrecision()
1.11911.toFixed(2) //=> '1.12'  округление до 2х знаков
[(111).toFixed(), (111).toExponential(), (111).toPrecision()]       //=> [ '111', '1.11e+2', '111' ]
[111.11.toFixed(1), 111.11.toExponential(1), 111.11.toPrecision(1)] //=> [ '111.1', '1.1e+2', '1e+2' ]
[111.11.toFixed(6), 111.11.toExponential(6), 111.11.toPrecision(6)] //=> [ '111.110000', '1.111100e+2', '111.110' ]




//                                        Системы исчисления

// Перевод в другую систему исчисления
(111).toString(2); //=> '1101111'
(111).toString(8);  //=> '157'
(111).toString(16);  //=> '6f'

// Перевод в десятичную
parseInt('f', 16) //=> 15  // из 16ричной



//                                            Объект Math

// Math - это встроенный статический объект позволяющий обращаться к своим методам и значениям

Math.PI; //=> 3.141592653589793
Math.E; //=> 2.718281828459045
Math.LN2 //=> 0.6931471805599453 // натуральный логарифм 2
Math.LN10 //=> 2.302585092994046 // натуральный логарифм 10
Math.LOG2E //=> 1.4426950408889634 // логарифм по основанию 2 от e
Math.LOG10E //=> 0.4342944819032518 // десятичный логарифм e

// Math.log() - метод возвращает натуральный логарифм (по основанию e ) числа.
Math.log(5); //=> 1.6094379124341003
Math.log(Math.E); //=> 1
Math.log(8) / Math.log(2); //=> 3  //Использование Math.log() с другой базой (тут логарифм 8 по основанию 2)
// Math.log10() - метод возвращает десятичный логарифм числа
Math.log10(100000) //=> 5
// Math.log2() - метод возвращает логарифм числа по основанию 2
Math.log2(2) //=> 1

Math.min(1, 0, 5, -3, 6, 2); //=> -3
Math.max(1, 0, 5, -3, 6, 2); //=> 6
var arr = [1,2,3,4,5];
Math.max(...arr);  //=> 5

Math.abs(-5); //=> 5  // модуль
Math.abs(-5, -7, -1) //=> 5  // возвращает только абсолютное значение первого параметра

Math.floor(5.95); //=> 5
Math.floor(-1.1); //=> -2
~~1.7 //=> 1  // Упрощенная форма Math.floor
Math.ceil(1.1);  //=> 2
Math.ceil(-1.9);  //=> -1
Math.round(20.49); //=> 20
Math.round(20.5); //=> 21
Math.round(-1.55); //=> -2
Math.round(3.141592653589793 * 100) / 100 //=> 3.14  // округление до 2х знаков
Math.round(4.2 * 2) / 2  //=> 4.5 // округление до ближайших 0.5


Math.sqrt(4); //=> 2 // возвращает квадратный корень числа
Math.cbrt(27); //=> 3 // возвращает кубический корень числа
Math.pow(3, 2); //=> 9 // возведение в степень
Math.pow(64, 0.5);  //=> 8 // возведение в степень 0.5 == корень квадратный
Math.pow(64, 1/2); //=> 8 // возведение в степень 1/2 == корень квадратный

// Из-за numerical точности JS в расчете будет возникать ошибка. Это проблема, которой невозможно избежать. Нам следует обратить внимание на эту проблему при использовании, посмотрите на следующий пример:
Math.cbrt(64);                      //=> 4
Math.pow(64, 0.333333333333333333);  //=> 3.9999999999999996
Math.pow(64, 1/3);                   //=> 3.9999999999999996


Math.random(); //=> 0.47251104492355345   // рандом >= 0 и < 1
Math.floor(Math.random() * 12);  //  случайное целое число от 0 до 11
~~(100*Math.random()) // случайное от 0 до 100
// Случайное десятичное число между двумя значениями:
var a = 10, b = 25;
Math.random()*(b-a)+a; //=> 15.529245224026962  // случайное флоат число >= 10 и < 25. 25(не включая)
Math.floor(Math.random()*(b-a+1))+a; //=> 24 // Случайное целое число >= 10 и <= 25 (включая диапазон)
Math.floor(Math.random()*5)-2; // >= -2 <= 2
String.fromCharCode(~~(127*Math.random())) //=> случайный символ
String.fromCharCode(~~(26*Math.random()+97)); //=> случайная буква
// случайная буква из строки
var chars = "aeiou";
chars[~~(chars.length*Math.random())];
// случайный элемент из массива
var names=["John","Tom","Jerry","Minne","Alice"];
names[~~(names.length*Math.random())];



//                                          Разное

// Наибольший общий делитель
const gcd = function (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
};
console.log(gcd(66, 88)) //=> 22

// альт запись флоат
console.log(.5) //=> 0.5


// -0 (отрицательный ноль) и +0 (положительный ноль) . Это происходит в некоторых представлениях целых чисел со знаком и в большинстве представлений чисел с плавающей запятой. Стандарт IEEE 754 для арифметики с плавающей запятой (в настоящее время используемый большинством компьютеров и языков программирования, поддерживающих числа с плавающей запятой) требует как +0, так и -0. Нули можно рассматривать как вариант расширенной линии действительных чисел, такой что 1/−0 = −∞ и 1/+0 = +∞, деление на ноль не определено только для ±0/±0 и ±∞/±∞
-0 == 0 //=> true
-0 === 0 //=> true
Object.is(-0, +0); //=> false













//
