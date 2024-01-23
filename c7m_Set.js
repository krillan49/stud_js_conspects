//                                                  Set

// Объекты Set — это новые встроенные объекты JavaScript, определенные начиная с ECMAScript 2015. Объект Setпозволяет хранить уникальные значения любого типа, будь то примитивные значения или ссылки на объекты.

// Set объекты представляют собой коллекции значений. Значение в наборе может встречаться только один раз

// Вы можете перебирать элементы набора в порядке вставки. Порядок вставки соответствует порядку, в котором каждый элемент был add() успешно вставлен в набор методом (то есть, на момент вызова в наборе уже не было идентичного элемента add()).

// Равенство значений основано на алгоритме SameValueZero . (Раньше использовалось SameValue , которое рассматривалось 0и -0как разные. Проверьте совместимость браузера .) Это средство NaNсчитается тем же, что и NaN(хотя NaN !== NaN), а все остальные значения считаются равными в соответствии с семантикой оператора ===.

// Метод hasпроверяет наличие значения в наборе, используя подход, который в среднем быстрее, чем проверка большинства элементов, которые ранее были добавлены в набор. В частности, он в среднем быстрее, чем Array.prototype.includesметод, когда массив имеет значение length, равное набору size.

const mySet1 = new Set(); //=> Set(0) {}

// add()
mySet1.add(1); //=> Set(1) { 1 }
mySet1.add(5); //=> Set(2) { 1, 5 }
mySet1.add(5); //=> Set(2) { 1, 5 }
mySet1.add("some text"); //=> Set(3) { 1, 5, 'some text' }
mySet1.add({ a: 1, b: 2 }); //=> Set(4) { 1, 5, 'some text', { a: 1, b: 2 } }
mySet1.add({ a: 1, b: 2 }); //=> Set(5) { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } } // тк объекты разные

// has()
mySet1.has(1); //=> true
mySet1.has(3); //=> false
mySet1.has(Math.sqrt(25)); //=> true
mySet1.has("Some Text".toLowerCase()); //=> true

// size
mySet1.size; //=> 5

// values() - Возвращает новый объект-итератор, который возвращает значения для каждого элемента Setобъекта в порядке вставки
mySet1.values(); //=> [Set Iterator] { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
// keys() - алиас к values()

// delete()
mySet1.delete(5); //=> true  // удвляет данный элемент из сета и возвращает true, если он был иначе false
mySet1; //=> Set(4) { 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }

// clear()
const mySet3 = new Set([1, 2, 3]);
mySet3.clear();
mySet3; //=> Set(0) {}


// Конвертировать Set object в Array object
Array.from(mySet1); //=> [ 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } ]
[...mySet1]; //=> [ 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } ]

// Конвертировать Array object в Set object (удаляет повторяющиеся элементы из массива)
const mySet2 = new Set([1, 1, 2, 3, 4, 3, 2]); //=> Set(4) { 1, 2, 3, 4 }

// Конвертировать строку в Set object (удаляет повторяющиеся элементы)
new Set("firefox"); // Set(6) { 'f', 'i', 'r', 'e', 'o', 'x' }



//                                             Циклы и итераторы для сетов

// for of
for (const item of mySet1) { item; } //=> 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
for (const item of mySet1.keys()) { item; } //=> 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
for (const item of mySet1.values()) { item; } //=> 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
// key and value are the same here
for (const [key, value] of mySet1.entries()) { key; } //=> 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }

// forEach()
mySet2.forEach((value) => value); //=> 1, 2, 3, 4



//                                          Взаимодействия 2х сетов

// intersect - пересечение (общие элементы 2х сетов)
const int = new Set([...mySet1].filter((x) => mySet2.has(x))); //=> Set(1) { 1 }

// difference - разница (объекты 1го сета которых нет во 2м)
const diff = new Set([...mySet1].filter((x) => !mySet2.has(x))); //=> Set(3) { 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }















//
