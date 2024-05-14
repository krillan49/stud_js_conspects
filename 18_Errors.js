//                                         Операторы ошибок trow и catch

// trow - вызывает новое исключение

// Вызовем новые исключения в зависимости от типа данных
function getRectArea(n) {
  if (isNaN(n)) {
    // вариант 1
    throw new Error('Parameter is not a number!');
    // вариант 2
    throw new Error('RangeError');
    // вариант 3
    throw new RangeError();
    // вариант 4
    throw 'Parameter is not a number!';
  }
}
// Теперь при передачи неправильного типа данных получим вызванную в методе ошибку
getRectArea('A');
//=> Error: Parameter is not a number!
//=> Error: RangeError
//=> RangeError
//=> Parameter is not a number!


// catch - обрабатывает исключение

// Вызовем исключение
function getRectArea(n) {
  if (isNaN(n)) throw new Error('Parameter is not a number!');
  return n;
}

const rescueSome = (e) => console.log (`Rescue ${e} do something`);

// Обработаем исключение(вместо выброса ошибки сработает наш код)
try {
  getRectArea('A');
} catch (e) {
  // Можем исполнить какойто код:
  rescueSome(e); //=> 'Rescue Error: Parameter is not a number! do something'
  // Можем вывести чтото
  console.log('Some'); //=> 'Some'
  // Можем вывести все сообщение об ошибке в виде строки без вызова самой ошибки
  console.log(e); //=> 'Error: Parameter is not a number!  ... '
  // При помощи console.error мы можем вывести ошибку как и обычно
  console.error(e); //=> Error: Parameter is not a number!
}













//
