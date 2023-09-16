//                                        Работа с датой(класс Date)

// Для работы с датой и временем в JavaScript есть предусмотренный класс Date.

// Сперва необходимо создать объект(экземпляр класса) на основе класса:
var date = new Date();
// new - ключевое слово отвечающее за выделение памяти


// Далее через созданный объект date можно обращаться ко всем встроенным методам экземпляра класса Date:

// Получение элементов даты/времени(возвращает интеджер без ведущих нулей)
console.log(date.toDateString()); //=> 'Mon Sep 04 2023'
console.log(date.getFullYear());  //=> 2023   // получить текущий год
console.log(date.getMonth() + 1); //=> 9 // получить текущий месяц(отсчет от 0), потому можно прибавить 1
console.log(date.getDay());       //=> 1  // День недели(понедельник 1)
console.log(date.getDate());      //=> 4 // День месяца ??
console.log(date.getHours());     //=> 10 // час (по местному времени или времени на компе ??)
console.log(date.getMinutes());   //=> 51 // минуты
console.log(date.getSeconds());   //=> 42 // секунды
console.log('время: ' + date.getHours() + ':' + date.getMinutes()); //=> 'время: 10:51'   // пример

// Установка собственной даты/времени(все методы называются так же но с приставкой set вмето get)
date.setHours(23); // устанавливаем час
date.setMinutes(23); // устанавливаем минуты
console.log('время: ' + date.getHours() + ':' + date.getMinutes()); //=> 'время: 23:23'










//
