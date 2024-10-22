//                                             Spread Operator

// Spread Operator (Оператор расширения) - позволяет расширить выражение в тех местах, где ожидается несколько аргументов (для вызовов функций) или несколько элементов (для литералов массива)

// Это выглядит так: ...obj. Его можно использовать в трёх местах:


// 1. Позволяет нам представлять неопределенное количество аргументов в виде массива
function plus(...num){
  return num;
}
console.log(plus(3,4,5)); //=> [ 3, 4, 5 ]

function mul(a, ...b){
  return b;
}
console.log(mul(0,1,2,3,4)); //=> [ 1, 2, 3, 4 ]


// 2. При вызовах функций:
function plus(a, b, c, d, e){
  return a + b + c + d + e;
}
let arg1 = [1,2,3,4,5], arg2 = [2,3];
console.log(plus(...arg1));          //=> 15  // ...arg1 распределяет все элементы arg1 по отдельным параметрам в plus()
console.log(plus(1, ...arg2, 4, 5)); //=> 15  // также можно использовать оператор расширения в середине списка параметров


// 3. Создание литералов массива:
let arr = [1, 2, 3];
let res = [...arr, 4, 5]; // ...arr распределяет элементы массива, делая их отдельными элементами в res.
console.log(res);         //=> [ 1, 2, 3, 4, 5 ]


// 4. Используется для деконструкции (является новым элементом ES6)
let [a, b] = [1, 2];
console.log(a, b); //=> 1 2
[b, a] = [a, b];
console.log(a, b); //=> 2 1
// Оператор распространения для деструктуризации
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a); //=> 1
console.log(b); //=> [ 2, 3, 4, 5 ]













// 
