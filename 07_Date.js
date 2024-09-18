//                                                 Date

// Date - встроеннвй класс для работы с датой и временем

// объект/экземпляр класса создает новую дату и время сейчас
let date = new Date();
date;            //=> 2023-10-17T06:47:06.590Z   // по умолчанию -3 часа от местного

// Создание экземпляра даты на основе правильно льформатированной строки
new Date('October 1, 2014');       //=> 2014-09-30T20:00:00.000Z

// Из года и месяца возвращает дату последнего дня этого месяца(заодно так можно узнать число дней в месяце)
new Date(2024, 4); //=> 2024-04-30T21:00:00.000Z

// Из числа милисекунд от 1970го года
new Date(1726643639442);     //=> 2024-09-18T07:13:59.442Z



//                                            Методы экземпляра

// toString - форматирует и приведит к местному времени
date.toString();     //=> 'Tue Oct 17 2023 09:47:06 GMT+0300 (Москва, стандартное время)'

// toDateString - форматирует к дате без времени
date.toDateString(); //=> 'Mon Sep 04 2023'

// getTime - вернет число милисекунд с 1970 года
date.getTime();     //=> 1726643639442

// Методы получения элементов даты/времени(возвращает интеджер без ведущих нулей)
date.getFullYear();  //=> 2023   // текущий год
date.getMonth();     //=> 9      // текущий месяц(отсчет от 0), потому можно прибавить 1
date.getDay();       //=> 1      // День недели(воскресенье 0 ??)
date.getDate();      //=> 4      // День месяца
date.getHours();     //=> 10     // час по местному времени
date.getMinutes();   //=> 51     // минуты
date.getSeconds();   //=> 42     // секунды

// Методы установки элементов даты/времени(все методы называются так же но с приставкой set вмето get)
date.setHours(23);   // устанавливаем час(возвращает число секунд с начала эпохи ??)
date.setMinutes(23); // устанавливаем минуты(возвращает число секунд с начала эпохи ??)
console.log('время: ' + date.getHours() + ':' + date.getMinutes()); //=> 'время: 23:23'



//                                         Форматирование даты

new Date(2021, 0, 222).toLocaleDateString(`en`, {month: 'long', day: 'numeric'}) //=> August 10



//                                                Разное

// Перевод в дату из строки
Date.parse('October 1, 2014')     //=> 1412107200000 // число секунд от начала эпохи ??


// Сравнение дат через операторы сравнения
new Date(2017, 1, 14, 16, 15, 6, 111) > new Date(2017, 1, 15, 14, 26, 31, 821); //=> false
new Date(2017, 1, 14, 16, 15, 6, 111) < new Date(2017, 1, 15, 14, 26, 31, 821); //=> true


// Прибавить день к дате. Тк getTime() возвращает миллисекунды с 1970 года, а 86400000 — это количество миллисекунд в день. Следовательно, их сумма содержит миллисекунды для даты +1 день.
let today = new Date();
let tomorrow = new Date(today.getTime() + 86400000);
console.log(today);     //=> 2024-09-18T07:11:46.395Z
console.log(tomorrow);  //=> 2024-09-19T07:11:46.395Z


// Можно отнять одну дату из другой и получить разницу в милисекундах:
let a = new Date();                       // Current date now.
let b = new Date(2010, 0, 1, 0, 0, 0, 0); // Start of 2010.
let d = a - b;                            // Difference in milliseconds.
console.log(a);  //=> 2024-09-18T07:01:00.888Z
console.log(b);  //=> 2009-12-31T21:00:00.000Z
console.log(d);  //=> 464349660888

// можно получить количество секунд - разделив миллисекунды на 1000, minutes - разделив seconds на 60 итд. А затем преобразовать результат в целое число:
parseInt((b-a)/1000); //=> 464349856

















//
