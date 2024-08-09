//                                                Node.js

// https://nodejs.org/api/   - доки Node.js


// Node.js — это среда выполнения(?? фрэймворк) для JavaScript, предназначенная для запуска на вашем компьютере (на стороне сервера). Таким образом, хотя вы теряете возможность работать со встроенными модулями и функциями браузера, вы получаете доступ к коду, специфичному для NodeJS.


// C:\Program Files\nodejs\   -  путь по которому установил ноджэйэс, его при установке нужно добавить в path(переменные среды)
// > node          - вход в nodejs
// Ctrl+c          - (2 раза) выход
// > node -v       - версия



//                                               Использование

// Чтобы использовать модуль NodeJS, необходимо включить его в свой код присвоив в переменную от встроенной функции NodeJS require(требуется) с аргументом названия модуля в виде строки.
// Встроенная функция NodeJS require точно знает, как найти модуль, поэтому никаких дополнительных действий не требуется

// подключим модуль Node.js - util:
const util = require('util');

// После того, как подключен модуль, можно использовать любой из методов/свойств

// используем метод isRegExp модуля util:
console.log(util.isRegExp(/hi/)); //=> true



//                                             Примеры модулей

// Buffer - модуль NodeJS, подходит, например для того, чтобы воспроизвести кодировку Base64
const { Buffer } = require('node:buffer'); // Работает из без этого, модуль подключен по умолчанию
// кодирует строку в Base64:
console.log(Buffer.from("Hello World").toString('base64'));               //=> 'SGVsbG8gV29ybGQ='
// декодирует строку Base64 в ascii или в utf8
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')); //=> Hello World
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('utf8'));  //=> Hello World


// sha256 - модуль NodeJS, подходит, например для того, чтобы воспроизвести кодировку sha256
const sha256 = require('sha256');
sha256('bacon');                                    //=> 9cca070334...


// crypto - модуль NodeJS, подходит, например для того, чтобы воспроизвести кодировку sha256
const { createHash } = require('crypto');
createHash('sha256').update('bacon').digest('hex'); //=> 9cca070334...

















//
