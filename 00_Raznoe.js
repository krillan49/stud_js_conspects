// vanilla.js -  можно написать в резюмэ как шутку(на самом деле это просто js в виде псевдофрэймворка)

// Функция кодирования пробельных и других символов URL-адресов
'http://www.codewars.com/users/' + encodeURIComponent("aaa "); //=> http://www.codewars.com/users/aaa%20



//                                                eval()

console.log(eval('2 + 2'));               //=> 4
console.log(eval(new String('2 + 2')));   //=> '2 + 2'
console.log(eval('2 + 2') === eval('4')); //=> true
console.log(eval('typeof "a"'))           //=> string
console.log(eval('Math.sqrt(4)'))         //=> 2

// Вызов функций при помощи функции eval:
// eval с аргументом имени функции в виде строки - возвращает эту функцию
function testFunction(arg) {
  return arg + 1;
}
let functionName = 'testFunction'
console.log( eval(functionName)(2) ); //=> 3











//
