//                                           Итераторы и генераторы

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

// Итераторы и генераторы привносят концепцию итерации непосредственно в основной язык и предоставляют механизм настройки поведения циклов, например for...of



//                                         Пользовательские итераторы

// Итераторы запускают свои итерации, только при вызове и благодаря этому могут выражать последовательности неограниченного размера, например диапазон целых чисел от 0 до бесконечности.

// В JavaScript итератор — это объект, который определяет последовательность. Так же может определять и возвращаемое значение после завершения итерации этой последовательности.

// Итератор — это любой объект, который реализует протокол Iterator, имеет метод next(), который возвращает объект с двумя свойствами:
// value - возвращаемое значение в последовательности итераций.
// done  - вернет true, если последнее значение в последовательности уже использовано.


// Пример простого итератора диапазона 2х числел, который определяет последовательность и шаг. Его окончательное возвращаемое значение — это размер созданной им последовательности, отслеживаемый переменной count.
function makeRangeIterator(start=0, end=Infinity, step=1) {
  let i = start, count = 0; // count - счетчик, чтобы проверить какая сейчас итерация
  const rangeIterator = { // собственно итератор, объект с методом next()
    // Определяем метод next() в объекте, который при вызове возвращает следующее значение и доп параметры в зависимости от данных (тут конца диапазона)
    next() {
      let res;
      if (i < end) { // тоесть если итерация еще не завершена
        res = { value: i, done: false };
        i += step;
        count++;
        return res; // возвращается при вызове next() если вся итерация не завершена
      }
      return { value: count, done: true }; // возвращается при каждом вызове next() когда итерация завершена
    }
  };
  return rangeIterator;
}
// Получаем наш объект-итератор в переменную:
const iter = makeRangeIterator(1, 10, 2);  //=> { next: [Function: next] }
// Теперь можно, неоднократно вызывать метод next(), итерируя значения, тезультатом применения метода станет изменение значения и возврат объекта результата данной итерации:
let res = iter.next(); //=> { value: 1, done: false }
// Свойство done может применяться, чтобы узнать достигли ли мы последнего значения:
while (!res.done) {
  console.log(res.value); //=> 1 //=> 3 //=> 5 //=> 7 //=> 9
  res = iter.next();
}
// После получения завершающего значения дополнительные вызовы next() должны продолжать возвращать {done: true}.
console.log(res);       //=> { value: 5, done: true }
console.log(res.value); //=> 5    // те возвращено 5 чисел, которые заняли интервал: от 0 до 10


// Пример итератора для массива
const createIterator = (arr) => {
  let i = 0;
  const arrIterator = {
    index: 0, // дополнительное свойство для последнего индекса
    nextEl() {
      if (i < arr.length) {
        let res = { val: arr[i], end: false };
        i++;
        arrIterator.index = i;
        return res;
      }
      return { val: undefined, end: true };
    }
  };
  return arrIterator;
};
const iterator = createIterator(['One', , 'Two']);
console.log(iterator.index);    //=> 0
console.log(iterator.nextEl()); //=> { val: 'One', end: false }
console.log(iterator.index);    //=> 1
// A hole in the array - value is undefined
console.log(iterator.nextEl()); //=> { val: undefined, end: false }
console.log(iterator.index);    //=> 2
console.log(iterator.nextEl()); //=> { val: 'Two', end: false }
console.log(iterator.index);    //=> 3
// Iteration has finished - value is undefined, done becomes true
console.log(iterator.nextEl()); //=> { val: undefined, end: true }
console.log(iterator.index);    //=> 3
console.log(iterator.nextEl()); //=> { val: undefined, end: true }
console.log(iterator.index);    //=> 3


// Простой итератор, возвращающий функцию, а не объект и прогоняющий значения(например массива или строки) кругами
function makeLooper(str) {
  let i = 0;
  return function() {
    let res = str[i];
    i = i == str.length - 1 ? 0 : i + 1;
    return res;
  }
}
let abc = makeLooper('abc');
console.log(abc()); //=> 'a'
console.log(abc()); //=> 'b'
console.log(abc()); //=> 'c'
console.log(abc()); //=> 'a'


// Простой итератор Фибоначе просто при помощи замыкания функции
function genfib(){
  let a = [0, 1];
  return function () {
    a.push(a[a.length-1] + a[a.length-2]);
    return a[a.length-3];
  }
}
let fib = genfib();
console.log(fib()); //=> 0
console.log(fib()); //=> 1
console.log(fib()); //=> 1
console.log(fib()); //=> 2



//                                           Функции - генераторы

// Функции-генераторы JS предоставляют мощную альтернативу пользовательским итераторам: они позволяют определить итерационный алгоритм, написав одну функцию, выполнение которой не является непрерывным.

// function* - ключевое слово для функции-генератора

// При вызове функции-генераторы не выполняют свой код, а возвращают объект-итератор особого типа - генератор. Когда вызываем метод next() генератора, функция-генератор выполняет свой код один раз, изменяя через yield значения свойств value и done

// Функцию можно вызывать столько раз, сколько необходимо, и каждый раз она возвращает новый генератор. Каждый генератор может быть повторен только один раз.

// Адаптируем приведенный пример 1го итератора выше. Поведение идентично, но эту реализацию гораздо проще писать и читать.
function* makeRangeIterator(start=0, end=Infinity, step=1) {
  let count = 0;
  for (let i = start; i < end; i += step) {
    count++;
    yield i; // помещает значение i в value. Тоесть вся функция кроме этой строки находится как бы в замыкании
  }
  return count;
}
// При вызове возвращает щбъект-генератоp:
const iter = makeRangeIterator(1, 10, 2); //=> Object [Generator] {}
let res = iter.next(); //=> { value: 1, done: false }
while (!res.done) {
  console.log(res.value); //=> 1 //=> 3 //=> 5 //=> 7 //=> 9
  res = iter.next();
}
console.log(res);       //=> { value: 5, done: true }
console.log(res.value); //=> 5


// Пример генератора, выводящего таблицу умножения
function* generator(a) { // a - это число для которого выводим таблицу умножения
  let b = 0;             // b - это множитель
  for (let i = a; i < Infinity; i++) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}
const gen = generator(1);
gen.next();       //=> { value: '1 x 0 = 0', done: false }
gen.next().value; //=> '1 x 1 = 1'
gen.next().value; //=> '1 x 2 = 2'
gen.next().value; //=> '1 x 3 = 3'
gen.next().value; //=> '1 x 4 = 4'
gen.next().value; //=> '1 x 5 = 5'


// Генератор, получающий параметр через метод next()
function* generator(n=0) {
  let count = 1;
  while (true) {
    let res = yield count; // параметр возвращается от yield
    res ? count = res : count++; // если параметр передан, например, присвоим его новым значением счетчика
  }
  return count;
}
gen.next().value //=> 1
gen.next().value //=> 2
gen.next().value //=> 3
// передаем параметр
gen.next(10).value //=> 10












//
