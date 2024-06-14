// vanilla.js -  можно написать в резюмэ как шутку(на самом деле это просто js в виде псевдофрэймворка)

// Например в JS объектами являются не тольно массивы, но и обертки над примитивами, тк когда мы вызываем методы от примитивов, то вызываем их не от примитива, тк он не объект, а от объектной обертки.


// Функция кодирования пробельных и других символов URL-адресов
'http://www.codewars.com/users/' + encodeURIComponent("aaa "); //=> http://www.codewars.com/users/aaa%20

// перевод в формат денег ??
console.log((12345.6789).toLocaleString()); // 12 345,679

// eval()
console.log(eval('2 + 2')); //=> 4
console.log(eval(new String('2 + 2'))); //=> '2 + 2'
console.log(eval('2 + 2') === eval('4')); //=> true
console.log(eval('typeof "a"')) //=> string
console.log(eval('Math.sqrt(4)')) //=> 2















//
