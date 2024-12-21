//                                         Операторы ошибок trow и catch

// 1. trow - вызывает новое исключение

// Вызовем новые исключения в зависимости от типа данных:
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
// Теперь при передачи неправильного типа данных получим вызванную в методе ошибку:
getRectArea('A');
//=> Error: Parameter is not a number!
//=> Error: RangeError
//=> RangeError
//=> Parameter is not a number!


// 2. catch - обрабатывает исключение

// Вызовем исключение
function getRectArea(n) {
  if (isNaN(n)) throw new Error('Parameter is not a number!');
  return n;
}

// Можно сделать доп функцию для вывода сообщения в блоке catch
const rescueSome = (e) => console.log (`Rescue ${e} do something`);

// Обработаем исключение(вместо выброса ошибки сработает наш код)
try {
  getRectArea('A');
} catch (e) {
  // Можно исполнить функцию для обработки ошибки:
  rescueSome(e); //=> 'Rescue Error: Parameter is not a number! do something'
  // Можно просто вывести сообщение:
  console.log('Some'); //=> 'Some'
  // Можно вывести все сообщение об ошибке в виде строки без вызова самой ошибки
  console.log(e);      //=> 'Error: Parameter is not a number!  ... '
  // При помощи console.error можно вывести все сообщения ошибки как буд-то она вызвана, (?но далее код будет работать)
  console.error(e);    //=> Error: Parameter is not a number!
}













//
