//                                             Цикл For

// Переменные объявленные внутри For, доступны и за его пределами

for (var i = 0; i < 10; i++) { // все условия цикла в круглых скобках после ключевого слова
  // var i = 0;  - создаем переменную с начальным значением. Имя переменной любое, начальное значение любое число(Int, Float)
  // i < 10;     - условие выполнение цикла, пока оно верное цикл продолжает выполняться
  // i++         - способ изменения переменной при каждой итерации цикла(можно любое)
  console.log(i); //=> числа от 0 по 9
}

for (var m = 100; m > 5; m /= 2) { // просто пример с другими условиями и переменной
  console.log(m); //=> 100 50 25 12.5 6.25
}

for (var m = 1.1; m < 2; m += 0.2) { // с флоат
  console.log(m); //=> 1.1 1.3 1.5 1.7 1.9
}

for (var i = 0; i < 10; i++)
	console.log(i);
// Если в теле цикла одна строка кода, то фигурные скобки можно не писать. Но такое не принято использовать по кодстайлу


// Перебор массива через цикл for(можно любым но так удобнее):
var arr = [2, 4, 7, 5, 3, 2]
for (var i = 0; i < arr.length; i++) {
  arr[i] *= 5
  console.log('Элемент ' + i + ': ' + arr[i]);
}
console.log(arr); // [10, 20, 35, 25, 15, 10]



//                                                For in(obj)

// 1. Перебор ключей и значений хэша/объекта
var obj = {item1:"This", item2:"is", item3:"an", item4:"example"};
for (var key in obj){ // перебираем ключи хэша
  console.log(key); //=> item1 item2 item3 item4
  console.log(obj[key]); //=> This is an example  // перебираем значения по ключам
}


// 2. Перебор индексов и значений массива. Хотя for..in можно использовать для обхода массива, это не рекомендуется, поскольку в некоторых случаях порядок может быть неожиданным.
// При использовании for..in с массивом ключ (индекс) всегда является строкой, а не числом
var arr = ["one","two","three"];
for (var i in arr){
  console.log(i); //=> 0 1 2
  console.log(arr[i]); //=> one two three
}



//                                                For of(arr)

// for..of (новый в ES6). for..of может просматривать все значения массива (без доступа к ним через их индекс).
var arr = ["one","two","three"];
for (var value of arr){
  console.log(value); //=> one two three
}



//                                            Циклы While и Do While

// Единственное отличие цикла While от For заключается в способе записи цикла. В while необходимо прописать лишь условие, а все остальные параметры записываются вне цикла:

var j = 1; // Создание переменной с начальным значением
while (j <= 10) { // Здесь только условие выполнения цикла
	console.log(j);
	j++; // Увеличение переменной
}

// Обычно цикл While используется както так:
var isHasCar = true;
while (isHasCar) {
  // какойто код
  console.log('while');
  isHasCar = false; // просто чтоб не бесконечно
}


// Цикл Do While схож с while, но будет обязательно выполнен один раз, а дальше проверит условие и если оно верно, то цикл будет выполняться дальше:
var x = 13;
do {
	x--;
	console.log(x); //=> 12 11 10 9
} while (x >= 10);



//                                          Операторы break и continue

// Оператор break - служит для выхода из цикла полностью
// Оператор continue - пропускает лишь одну итерацию и не выходит из цикла.

// Операторы break и continue можно использовать в любом цикле

for (var k = 10; k <= 20; k += 1) {
  if (k % 2 == 0)
    continue; // пропускает одну итерацию, соотв и весь код в теле ниже нее(тут исключит четные) и цикл переходит к следующей
  if (k > 15)
    break;    // завершит цикл когда k > 15, соотв в вывод не попадут числа больше 15
  console.log(k); // 11 13 15
}











//
