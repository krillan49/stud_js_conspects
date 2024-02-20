//                                               Массивы

// В js нет строгого типизирования и массивы можно заполнять любыми типами данных вперемешку, как и в Руби
// в консоли разработчика хром массив выводится в строку так же можно его развернуть за доп инфой
// В js индексы так же начинаются с 0, но нет отрицательных индексов

let some = new Array(); // Создание пустого массива через имя класса(массив экземпляр класса ??)
// Добавление элементов:
some[0] = 'B';
some[1] = 2;
some[4] = 66;
console.log(some);    //=> [ 'B', 2, <2 empty items>, 66 ]
console.log(some[0]); //=> 'B' Вывод первого элемента
console.log(some[2]); //=> undefined

let array = new Array(1, 5, 2); // Создание массива со значениями

let some2 = []; // упрощенное создание массива

let arr = [5, true, 'stroka', 5.7, 0, -100]; // упрощенное создание массива со значениями
console.log(arr);    //=> [ 5, true, 'stroka', 5.7, 0, -100 ]
arr[3] = 'word';     // изменяем элемент массива
console.log(arr);    //=> [ 5, true, 'stroka', 'word', 0, -100 ]

// Создание массива из сколькихто одинаковых элементов
let a = Array(4) //=> [ <4 empty items> ]
a.fill(0);
console.log(a);  //=> [ 0, 0, 0, 0 ]



//                                                Фичи

// Сравнить массивы мнжно через приведение к строкам, тк сами массивы сравниваются как разные объеты(?? по айди).
[] == []; //=> false
[] === []; //=> false
[2, 4, 5] == [2, 4, 5]; //=> false
[2, 4, 5].toString() == [2, 4, 5].toString(); //=> true

[75,,,85]; //=> [ 75, <2 empty items>, 85 ]

console.log([...5678+[]]); //=> [ '5', '6', '7', '8' ]

// Создание нового массива из чисел от 0 и до чегото
[...Array(10).keys()] //=> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Поменять элементы массива друг на друга
for (let i = 0; i < arr.length - 1; i += 2) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}



//                                                 in

2 in [1, 2, 3] //=> true
5 in [1, 2, 3] //=> false

// есть какието проблемы в условиях с отрицанием



//                                         Разные методы массивов

// isArray - опрределение массив ли данный объект статическим методом массива
Array.isArray([1, 3, 5]);                //=> true
Array.isArray('[]');                     //=> false
Array.isArray(new Array(5));             //=> true
Array.isArray(new Int16Array([15, 33])); //=> false


var elements = new Array(23, 6, 0, true, "П");
elements.length;              //=> 5                      // длинна массива
elements.includes(6);         //=> true                   // включает ли массив элемент
elements.reverse();           //=> ["П", true, 0, 6, 23]  // перевернуть массив, изменяет массив

// indexOf() - ищет слева направо. lastIndexOf() - ищет справа налево
[2,3,5,7,11,5].indexOf(5);                     //=> 2
[2,3,5,7,11,5].indexOf(99);                    //=> -1  // отзначает что такого элемента нет
['a', 'b', 'c', 'd', 'b'].indexOf('b', 2);     //=> 4   // 2й аргумент - индекс от которого начинаем поиск
[2,3,5,7,11,5].lastIndexOf(5);                 //=> 5
['a', 'b', 'c', 'd', 'b'].lastIndexOf("b", 2); //=> 1

// fill - изменяет каждый элемент массива как arr[i] = 'a'
let arr = [5, 6];
arr.fill('a');
arr; //=> [ 'a', 'a' ]

// flat  - разглаживание массивов
console.log([1,[2, 3, [], [4, [], 5]]].flat(Infinity)); //=> [ 1, 2, 3, 4, 5 ]
console.log([1,[2, 3, [], [4, [], 5]]].flat(1)); //=> [ 1, 2, 3, [], [ 4, [], 5 ] ]



//                                    join()  toString()  JSON.stringify()

['A', 'b', 'c'].join()                  //=> 'A,b,c'  // по умолчанию без аргумента объединяет запятыми
['A', 'b', 'c'].join('-')               //=> 'A-b-c'
[18, [15, [12]]].join()                 //=> '18,15,12'

// toString() аналог join()
["1","2","3","4","5"].toString();       //=> '1,2,3,4,5'
[[1,2],[3,4],[5]].toString();           //=> '1,2,3,4,5'

// JSON.stringify более производительный вариант toString(), сохраняет структуру
JSON.stringify(["1","2","3","4","5"]);  //=> '["1","2","3","4","5"]'
JSON.stringify([[1,2],[3,4],[5]]);      //=> '[[1,2],[3,4],[5]]'



//                                        push(), pop(), shift(), unshift()

// Данные методы могут манипулировать только началом и хвостом массива.
// Их скорость относительно низкая, когда нужно иметь дело с большими данными, прямое добавление по индексу может быть быстрее.

let arr = [1, 2, 3, 4, 5];

// push() - добавляет новый элемент в конец массива, можно добавлять нескольно элементов
arr.push(6);
arr; //=> [1,2,3,4,5,6]
arr.push(7, 8);
arr; //=> [1,2,3,4,5,6,7,8]

// pop() - удаляет элемент из конца массива и возвращает его
arr.pop();  //=> 8
arr;        //=> [1,2,3,4,5,6,7]

//unshift() - добавляет элементы в начало массива, можно добавить несколько элементов
arr.unshift(1);
arr;  //=> [1,2,3,4,5,6,7]
arr.unshift(3, 2);
arr;  //=> [3,2,1,2,3,4,5,6,7]

// shift() - удаляет элемент из начала массива и возвращает его.
arr.shift();  //=> 1
arr;          //=> [2,3,4,5,6,7]



//                                             slice(), клон и splice()

// slice() - делает срез из массива, 1й аргумент индекс включительно, 2й индекс не включительно.
// Не изменяет исходный массив
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); //=> [ 2, 3 ]
arr;             //=> [ 1, 2, 3, 4, 5 ]

// При помощи slice() без аргументов можно сделать клон массива
// Но, если исходный массив представляет собой 2D-массив или многомерный массив, использования slice() недостаточно
let arr = [1, 2, 3, 4, 5];
let brr = arr;
let crr = arr.slice();
console.log([arr, brr, crr]); //=> [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
arr.pop()
console.log([arr, brr, crr]); //=> [ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ], [ 1, 2, 3, 4, 5 ] ]


// splice() может добавлять и/или удалять элементы в любом месте массива.
// Изменяет исходный массив
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1й аргумент индккс начала среза, 2й аргумент число элементов в срезе, 3й и последующие элементы будут вставлены в точке среза
arr.splice(2, 3, 'a', 'b'); //=> [ 2, 3, 4 ]  // возвращает удаленный срез массива
arr; //=> [ 0, 1, 'a', 'b', 5, 6, 7, 8, 9 ]

// если не добавлять параметры 3+ то будет просто срез без добавления чего либо
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); //=> [ 2, 3 ]
arr; //=> [ 1, 4, 5 ]

// С отрицательным значением возьмет элементы с конца
[1,5,87,45,8,8].splice(-3) //=> [ 45, 8, 8 ]

// использование для удаления 1го элемента например для удаления нечетных чисел
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length-1; i >= 0; i--) { // проходим с конца чтобы при удалении индекс не менялся
  if (arr[i] % 2) arr.splice(i, 1)
}
console.log(arr); //=> [ 2, 4 ]



//                                          Сложение массивов

let arr1 = [1, 2], arr2 = [3, 4];
[...arr1, ...arr2];                               //=> [1,2,3,4]
['a', 'b'].concat(['c', 'd']);                    //=> [ 'a', 'b', 'c', 'd' ]
['a', 'b'].concat('c', 5, [1, 'd'], [[6], [7]]);  //=> [ 'a', 'b', 'c', 5, 1, 'd', [ 6 ], [ 7 ] ]

// Можно использовать для разглаживания массивов(разглаживает только 1 вложенность)
[].concat(...[[1,2],[3,4],[5,6]]); //=> [ 1, 2, 3, 4, 5, 6 ]

// Клонирование массивов(тк мутируемые)
let a1 = [...arr], a2 = [...arr];



//                                               sort()

// sort() - сортирует массив. Изменяет исходный массив. Может применять функцию в виде параметра.

// По умолчанию сортирует в алфавитном порядке(по номерам юникод).
['b', 'abc', 'aaz'].sort();        //=> [ 'aaz', 'abc', 'b' ]
// По уиолчанию(без аргумента) преобразует числа в строки и сортирует их как строки.
[9, 3, 12, 11, 40, 28, 5].sort();  //=> [11, 12, 28, 3, 40, 5, 9];

// sort() с аргументом-функцией - сравнивает два аргумента a и b.
// 1. Если функция возвращает отрицательное значение, то a будет поставлено перед b (не меняем положение)
// 2. Если функция возвращает положительное значение то b будет поставлено перед a (меняем положение)
[140000, 104, 99].sort(function (a, b) {  return a - b;  });          //=> [99, 104, 140000]  // возрастание
[140000, 104, 99].sort((a, b) => b - a);                              //=> [140000, 104, 99]  // убывание
[{"k": 1, "n": 3}, {"k": 3, "n": 2}].sort((a, b) => b['k'] - a['k']); //=> [ { k: 3, n: 2 }, { k: 1, n: 3 } ]


// Сортировка по 2м параметрам через логическое или (ES6)
let arr = [ { name: 'Dog', legs: 4 }, { name: 'Cat', legs: 4 }, { name: 'Bird', legs: 2 } ];
arr.sort((a, b) => a.legs - b.legs || a.name.localeCompare(b.name));
//=> [ { name: 'Bird', legs: 2 }, { name: 'Cat', legs: 4 }, { name: 'Dog', legs: 4 } ]
// a.localeCompare(b) - метод строковой сортировки


// Сортировка по нескольким параметрам
//  1  -  те положительное значение - меняем положение
// -1  -  те отрицательное значение - не меняем положение
let arr = [1,2,3,4,5,6,100,999];
arr.sort((a, b) => {
  if (a%2 == b%2) return a - b; // если a и b оба четные или оба нечетные числа, сначала меньшее
  if (a%2 > b%2) return -1;     // первоое нечетный, второе четный, сначала нечетный(-1 те отриц значение, не меняем положение)
  return 1;                     // остается первое четный, второе нечетный, сначала второй
})
console.log(arr) //=> [ 1, 3, 5, 999, 2, 4, 6, 100 ]



//                                               Итераторы

// Итераторы в JS принимают полноценные функции, а не блоки как в Руби



//                                               forEach()

// forEach() - перебирает все элементы массива. Не меняет массив. Возвращает undefined.
console.log([1, 4, 9].forEach(x => x)) //=> undefined

[1, 4, 9].forEach(x => console.log(x + 1)) //=> 2 5 10

let r = 0;
[1, 2, 3, 4, 5].forEach(x => r += x**2)
console.log(r); //=> 55

// Синтаксис для многострочного тела
list.forEach(d => {
  if(orders[d.meal]) orders[d.meal]++;
  else orders[d.meal] = 1;
});



//                                                 map()

// map() - создает новый массив с результатами вызова предоставленной функции для каждого элемента этого массива.
[1, 2, 3].map(n => n**2);              //=> [ 1, 4, 9 ]
[1, 4, 9].map(Math.sqrt);             //=> [1,2,3]
[ '5', '6', '7', '8' ].map(Number);   //=> [ 5, 6, 7, 8 ]

// Тк функция это параметр, то можно предоставить ее из переменной
let func = (n) => n + 1;
[1, 2, 3].map(func); //=> [ 2, 3, 4 ]

// Синтаксис с функцией с блоком, необходим return, тк map-итерация должна создавать элемент нового массива
arr.map(s =>{
  if (s.length % 2 == 0 ) s = s.slice(0, s.length/2) + '|' + s.slice(s.length/2, s.length);
  else s = s.slice(0, s.length/2) + '|' + s.slice(s.length/2+1, s.length);
  return s; // без return вернет undefined
});


// with_index встроен по умолчанию
let arr = [1, 2, 3].map((e, i) => i)            //=> [ 0, 1, 2 ]

// Применение with_index для нового массива
let arr = [...Array(4)]                                      //=> [ undefined, undefined, undefined, undefined ]
let arr = [...Array(4)].map((_,i)=>i)                        //=> [ 0, 1, 2, 3 ]
let arr = Array.prototype.map.call([...Array(4)],(_,i)=>i)   //=> [ 0, 1, 2, 3 ]


// with_object встроен по умолчанию 3м аргументом после индекса
let brr = [2,4,6,8].map((_, i, arr) => arr[arr.length-1-i]) //=> [ 8, 6, 4, 2 ]


// zip при помощи map
let a = ['a', 'b', 'c'], b = [1, 2, 3];
a.map((e, i) => e + b[i]); //=> [ 'a1', 'b2', 'c3' ]



//                                              filter()

// filter() - метод создает новый массив со всеми элементами, прошедшими проверку, реализованную предоставленной функцией.
// filter() всегда принимает функцию в качестве параметра, функция всегда возвращает true или false.
// filter() будет работать очень медленно при работе с большими данными.

[1,2,3,4,5].filter(function(x){return x < 3});    //=> [ 1, 2 ]
[1,2,3,4,5].filter(x => x % 2 == 0);              //=> [ 2, 4 ]
[3,6,9,12].filter(x => x % 2 == 0 && x % 3 == 0); //=> [ 6, 12 ]

// Если возвращаемое значение функции не логическое, оно будет автоматически преобразовано в логическое:
[1,2,3,4,5].filter(x=> x % 2); //=> [ 1, 3, 5 ] // x % 2 возвращает 1 или 0, автоматически преобразуется в true(1) или false(0).

let func = (n) => n % 2 == 0;
[1, 2, 3, 4].filter(func);            //=> [ 2, 4 ]
[1, 2, 3, 4].filter((x) => !func(x)); //=> [ 1, 3 ]  // reject



//                                           find() и findIndex()

let arr = [2, 1, 'A', 5];
arr.find((n, i) => typeof n == 'string'); //=> 'A'
arr.findIndex(e => e > 2);                //=> 3



//                                             every() и some()

// Метод every() (все) проверяет, прошли ли все элементы массива тест, реализованный предоставленной функцией. Возвращает логическое значение. Выполняет функцию обратного вызова для каждого элемента по очереди. Если один из возвращаемых значений является ложным, то функция возвращает false; если все значения возвращают true, то every() возвращает true.
[1,2,3,4,5].every(x => x > 0); //=> true // all elements > 0
[1,2,3,4,5].every(x => x > 1); //=> false // 1 не больше 1

// Метод some() (какой либо) проверяет, проходит ли какой-либо элемент массива тест, реализованный предоставленной функцией. Выполняет функцию обратного вызова для каждого элемента по очереди, если один из возвращаемых значений истинен, то some() возвращает true; если все возвращает false, то some() возвращает false.
[1,2,3,4,5].some(x => x > 4); //=> true  // a[4] > 4
[1,2,3,4,5].some(x => x > 5); //=> false // all elements <= 5

// Их поведение похоже на обход массива с оператором прерывания (когда every() встречается с ложью или когда some() встречаются с истиной, они выпрыгивают из обхода массива)
let a = 0, b = 0;
[3,6,9,6,9,3].some((x, i)=>{ // так же как и map может принимать необязательные 2й аргумент-индекс и 3й массив
  a = arr[i];  // or a=x
  b = arr[i+1];
  return a + b == 15
})
console.log(a, b) //=> 6 9  // обход прерывается когда some() первый раз возвращает true



//                                       reduce() и reduceRight()

// reduce() и reduceRight() Два метода являются приблизительными. Он применяет функцию к аккумулятору и каждому значению массива, чтобы свести его к одному значению. Отличие в том, что у reduce() порядок выполнения — слева направо, а у reduceRight() — справа налево.
// функция обратного вызова может использовать до 4 параметров: previousValue, currentValue, индекс и массив(индекс и массив не являются обязательными)

[1, 2, 3, 4, 5].reduce((sum, n) => sum + n, 0);     //=> 15
[1, 2, 3, 4, 5].reduce((sum, n) => sum + n);        //=> 15       // начальное значение не обязательно(по умолчанию первый элемент)
[1, 2, 3, 4, 5].reduce((sum, n) => sum + n, "");    //=> '12345'  // начальное значение строка приводит все к строке
[1, 2, 3, 4, 5].reduce((multi, n) => multi * n, 1); //=> 120
[[1, 2], [3, 4]].reduce((multi, [b, c]) => multi * (b + c), 1);   // => 21
[1, 2, 3, 4, 5].reduce((count, n) => count + (n % 2 ? 1 : 0), 0); //=> 3  // считаем четные



//                                            Многомерные массивы

// Многомерный массив - это массив, в котором каждый элемент является другим массивом. Массивы с более чем третьим уровнем вложенности очень редко используются

// Создание пустого
let symbols = new Array(new Array(), new Array());
symbols[0][1] = 'A'; // Создаем элемент подмассива
symbols; //=> [ [ <1 empty item>, 'A' ], [] ]

// Создание со значениями
var x = new Array(new Array(0, 34, 2), new Array(3, 4, 5));
x[0][1]; //=> 34
x[0][1] = 1; // Заменяем элемент подмассива
x[0][1]; //=> 1

// Упрощенное создание пустого
var matrix = [[], [], []];

// Упрощенное создание со значениями
var m = [
  [4, 6, 8], ['stroka', 5.7], [0, -100]
];
console.log(m); // развернув в консоли получим подробную инфу(каждый вложенный так же можно развернуть)


//  Array.from - создание 2d массива с установленной длинной(передаем параметр length)
let arr = Array.from({length: 3}, () => Array(4).fill(0)) //=> [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]


// Запись элементов подмассива в параметрах функции-параметра
[[1, 2], [3, 4]].reduce((multi, [b, c]) => multi * (b + c), 1);















//
