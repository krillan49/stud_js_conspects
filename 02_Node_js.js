//                                                Node.js

// https://nodejs.org/api/   - доки Node.js

// JavaScript — это язык, который сильно зависит от среды выполнения. JS можно запускать в среде браузера, но существуют и другие среды, которые работают вне браузера, такие как Node.js.

// Среда выполнения дает вашему коду возможность взаимодействовать с программным обеспечением за пределами самого языка.

// Среда браузера имеет несколько встроенных модулей, позволяющих взаимодействовать с веб-страницей. Вы можете использовать такие функции, как getElementById или XMLHttpRequest.

// Node.js — это среда(?? фрэймворк) для JavaScript, предназначенная для запуска на вашем компьютере (на стороне сервера). Таким образом, хотя вы теряете возможность работать со встроенными модулями и функциями браузера, вы получаете доступ к коду, специфичному для NodeJS.


// C:\Program Files\nodejs\   -  путь по которому установил ноджэйэс, его при установке нужно добавить в path(переменные среды)
// > node          - вход в nodejs
// Ctrl+c          - (2 раза) выход
// > node -v       - версия


// Чтобы использовать модуль NodeJS, необходимо включить его в свой код:
const util = require('util');     // требуется(require) модуль Node.js - 'util'
// Встроенная функция NodeJS require точно знает, как найти модуль, поэтому никаких дополнительных действий не требуется. После того, как вы включили модуль в свой код, вы можете использовать для него любой из методов/свойств.
console.log(util.isRegExp(/hi/)); //=> true // используем метод isRegExp модуля util


// Например, чтобы воспроизвести кодировку Base64 вместо создания собственных функций кодирования/декодирования можно использовать модуль NodeJS Buffer.
const { Buffer } = require('node:buffer'); // Работает из без этого, модуль подключен по умолчанию
// кодирует строку в Base64:
console.log(Buffer.from("Hello World").toString('base64'));               //=> 'SGVsbG8gV29ybGQ='
// декодирует строку Base64 в ascii или в utf8
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii')); //=> Hello World
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('utf8'));  //=> Hello World


// sha256
// вар 1
const sha256 = require('sha256');
sha256('bacon');                                    // 9cca070334...
// вар 2
const { createHash } = require('crypto');
createHash('sha256').update('bacon').digest('hex'); // 9cca070334...

















//
