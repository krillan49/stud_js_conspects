// Функция кодирования пробельных и других символов URL-адресов
'http://www.codewars.com/users/' + encodeURIComponent("aaa "); //=> http://www.codewars.com/users/aaa%20


+eval('('+v1.toFixed(0)+(v2=v2.toFixed(0))+')'+op+v2).toFixed(0)


// Способ создания диапазона чисел на примере диапазона от 1 до 100
// for цикл:
var numbers = []
for (var i = 1; i <= 100; i++) { numbers.push(i)}
// Array.prototype.fill + Array.prototype.map
var numbers = Array(100).fill().map(function(v, i) { return i + 1; })
// Или, если вам разрешено использовать функции со стрелками:
var numbers = Array(100).fill().map((v, i) => i + 1)
// Или, если вам разрешено использовать оператор распространения:
var numbers = [...Array(100)].map((v, i) => i + 1)

// биноминальный коэф для числа линий между n точек или числа пар из множества чегото тоесть n по 2
Math.floor([...Array(n)].map((v,i)=>i+1).reduce((a,b)=>a*b)/(2 * [...Array(n<3?1:n-2)].map((v,i)=>i+1).reduce((a,b)=>a*b)));
// Math.floor тк не целочисленное деление ??


















//
