//                                               Массивы

// Чтобы создать массив необходимо создать переменную
// В массивах отсчет начинается с 0.
// В js нет строгого типизирования и массивы можно заполнять любыми типами данных вперемешку, как и в Руби

var some = new Array(); // Создание пустого массива через имя класса(массив экземпляр класса ??)
some[0] = '1'; // Добавление элемента
some[1] = 2;
some[4] = 66;
some.push("codewars") // Добавление элемента в конец при помощи метода push
console.log(some);    //=> [ '1', 2, <2 empty items>, 66, 'codewars' ]
console.log(some[0]); //=> '1' Вывод первого элемента
console.log(some[2]); //=> undefined

var some2 = []; // упрощенное создание массива

var array = new Array(1, 5, 2); // Создание массива со значениями

var arr = [5, true, 'stroka', 5.7, 0, -100]; // упрощенное создание массива со значениями
console.log(arr); // в консоли разработчика массив выводится в строку так же можно его развернуть за доп инфой
arr[3] = 'word'; // изменяем элемент массива
console.log(arr[3]); //=> word


//                                            Методы массивов

var elements = new Array(23, 6, 0, true, "Первый");
console.log(elements.length); //=> 5  Выводит длинну массива
elements.reverse(); //=> ["Первый", true, 0, 6, 23]  перевернуть массив
elements.pop(); //=> "Первый" // удаляет последний эллемент из массива и возвращает его
elements.slice(0, 2); //=> [23, 6] // 1й параметр индекс, 2й число элементов
['A', 'b', 'c'].join('-') //=> A-b-c
[2,3,5,7,11].indexOf(5) //=> 2
[2,3,5,7,11].indexOf(99) //=> -1

// Странные методы
[9, 3, 12, 11, 40, 28, 5].sort(); //=> [11, 12, 28, 3, 40, 5, 9]; сортирует как строки
[140000, 104, 99].sort(function (a, b) {  return a - b;  }); //=> [99, 104, 140000]; сортирует нормально
[140000, 104, 99].sort((a, b) => a - b); //=> [99, 104, 140000]

// Итераторы??
[1,4,9].forEach(x => console.log(x + 1)) //=> 2 5 10 // не меняет массив

var r = 0;
[1,2,3,4,5].forEach(x => r += x**2)
console.log(r); //=> 55

console.log([1,4,9].map(Math.sqrt));  //=> [1,2,3]
[1, 2, 3].map(n => n**2)//=> [ 1, 4, 9 ]

[9, 3, 12, 11, 40, 28, 5].filter(num => num > 10); //=> [ 12, 11, 40, 28 ]  // аналог select в Руби

[1, 2, 3, 4, 5].reduce((sum, current) => sum + current, 0); //=> 15


//                                            Многомерные массивы

// Многомерный массив - это массив, в котором каждый элемент является другим массивом. Массивы с более чем третьим уровнем вложенности очень редко используются

// Создание пустого
var symbols = new Array(new Array(), new Array());
symbols[0][1] = 'A'; // Создаем элемент подмассива

// Создание со значениями
var x = new Array(new Array(0, 34, 2), new Array(3, 4, 5));
console.log(x[0][1]); //=> 34
x[0][1] = 1; // Заменяем элемент подмассива
console.log(x[0][1]); //=> 1

// Упрощенное создание пустого
var matrix = [[], [], []];

// Упрощенное создание со значениями
var m = [
  [4, 6, 8], ['stroka', 5.7], [0, -100]
];
console.log(m); // развернув в консоли получим подробную инфу(каждый вложенный так же можно развернуть)













//
