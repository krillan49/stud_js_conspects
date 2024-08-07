//                                                 Date

// Для работы с датой и временем в JavaScript есть предусмотренный класс Date.

let date = new Date(); // создает новую дату времени сейчас объект(экземпляр класса)
// new - ключевое слово отвечающее за выделение памяти

date;      //=> 2023-10-17T06:47:06.590Z   // так почемуто вощвращает -3 часа от местного
date + ''; //=> 'Tue Oct 17 2023 09:47:06 GMT+0300 (Москва, стандартное время)' // а так норм



//                                            Методы экземпляра

// через объект класса Date можно обращаться ко всем встроенным методам экземпляра класса Date:

date.toDateString(); //=> 'Mon Sep 04 2023'

// Методы получения элементов даты/времени(возвращает интеджер без ведущих нулей)
date.getFullYear();  //=> 2023   // текущий год
date.getMonth() + 1; //=> 9      // текущий месяц(отсчет от 0), потому можно прибавить 1
date.getDay();       //=> 1      // День недели(воскресенье 1)
date.getDate();      //=> 4      // День месяца ??
date.getHours();     //=> 10     // час (по местному времени или времени на компе ??)
date.getMinutes();   //=> 51     // минуты
date.getSeconds();   //=> 42     // секунды

// Методы установки сэлементов даты/времени(все методы называются так же но с приставкой set вмето get)
date.setHours(23);   // устанавливаем час(возвращает число секунд с начала эпохи ??)
date.setMinutes(23); // устанавливаем минуты(возвращает число секунд с начала эпохи ??)
console.log('время: ' + date.getHours() + ':' + date.getMinutes()); //=> 'время: 23:23'



//                                         Форматирование даты

new Date(2021, 0, 222).toLocaleDateString(`en`, {month: 'long', day: 'numeric'}) //=> August 10



//                                                Разное

// Перевод в дату из строки
new Date('October 1, 2014')       //=> 2014-09-30T20:00:00.000Z
Date.parse('October 1, 2014')     //=> 1412107200000 // число секунд от начала эпохи ??


// Разница дат в милисекундах
let a = new Date(); // Current date now.
let b = new Date(2010, 0, 1, 0, 0, 0, 0); // Start of 2010.
let d = (b-a); // Difference in milliseconds.
// можно получить количество секунд, разделив миллисекунды на 1000, а затем преобразовать результат в целое число:
let seconds = parseInt((b-a)/1000);
// можно получить целое число minutes, разделив seconds на 60 и преобразовав его в целое число, затем hours разделив minutes на 60 и преобразовав его в целое число, а затем таким же образом выбрав более длинные единицы времени.


// Сравнение дат
console.log(new Date(2017, 1, 14, 16, 15, 6, 111) > new Date(2017, 1, 15, 14, 26, 31, 821)) //=> false
console.log(new Date(2017, 1, 14, 16, 15, 6, 111) < new Date(2017, 1, 15, 14, 26, 31, 821)) //=> true


// Из года и месяца возвращает дату последнего дня этого месяца
new Date(y, m)


// Прибавить день к дате
// getTime() дает нам миллисекунды с 1970 года, а 86400000 — это количество миллисекунд в день. Следовательно, мс содержит миллисекунды для желаемой даты.
var ms = new Date().getTime() + 86400000;
var tomorrow = new Date(ms);

















//
