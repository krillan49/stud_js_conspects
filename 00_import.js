// "Модульная система в JS"

// JS файлы автоматом оборачиваются в модуль, в новом синтаксе это под копотом идёт

// Если есть конфликт имен, в строке получения даёшь методу певдоним
import { method1 : bigMethos } from './file.js'


// file1.js
export const foo = 'bar';
// file2.js
import { foo } from 'src/components/file1';
console.log(foo); //=> bar


// Если надо несколько методов то оборачиваю их в объект и передают
// file1.js
module.exports = {
  foo: 'bar'
};
// file2.js
const data = require('./file1');
console.log(data.foo); //=> bar


// Кстати если тебе нужен только один или два метода с библиотеке то ты их и запрвшиваешь чтобы не нести всю библиотеку в проэкт
import { m1, m2 } from 'lib';












//
