// Странная херня
console.log(1 == '1'); //=> true
console.log(1 === '1'); //=> false
console.log(1 === 1); //=> true

// Альтернативный перевод строки в число. чтобы преобразовать String в Int в JS. ('523' * 1 == 523)
'53' * 1 //=> 53


// parseFloat(string)
parseFloat(' 3   '); //=> 3
parseFloat(' -5.66 '); //=> -5.66
console.log(parseFloat('4 5')); //=> 4

// Number(string)
console.log(Number(' 3   ')); //=> 3
Number(' -5.66 '); //=> -5.66
Number('4 5'); //=> NaN


// Перевод числа в строку
(111).toString(); //=> '111'
(111).toLocaleString(); //=> '111'
111 + ""; //=> '111'

// Перевод в другую систему исчисления
(111).toString(2); //=> '1101111'
(111).toString(8);  //=> '157'
(111).toString(16);  //=> '6f'



// Определить тип
console.log(typeof 42); //=> "number"
typeof 'blubber'; //=> "string"
typeof true; //=> "boolean"
typeof undeclaredVariable; //=> "undefined"


// Символ из его непронумера ascii
String.fromCharCode(97) //=> a

// Функция кодирования URL-адресов
console.log('http://www.codewars.com/users/' + encodeURIComponent("aaa ")); //=> http://www.codewars.com/users/aaa%20


















//
