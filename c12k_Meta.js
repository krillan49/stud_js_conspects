//                                      Аналоги рубишного send

// eval с аргументом имени функции в виде строки - возвращает эту функцию
function testFunction(arg) {
  return arg + 1;
}
let functionName = 'testFunction'
console.log( eval(functionName)(2) ); //=> 3


// Вызов методов с синтаксисом свойств объекта, через объект['имяМетода']()
class X {
  constructor(par) {
    this.par = par;
  }
  method1() {
    return 1;
  }
  method2() {
    return this['method1']();
  }
  method3(arg) {
    return arg + 5;
  }
}
const x = new X('AAA');
console.log( x['par'] );        //=> 'AAA'
console.log( x['method1']() );  //=> 1
console.log( x['method2']() );  //=> 1
console.log( x['method3'](5) ); //=> 10


// Тоже в функциональном стиле
function X(par) {
  this.par = par;
}
X.prototype.method3 = function(arg) {
  return arg + 5;
}
const x = new X('AAA');
console.log( x['par'] );        //=> 'AAA'
console.log( x['method3'](5) ); //=> 10















//
