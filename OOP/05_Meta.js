//                                Вызов методов и свойств с [] от строки их названия

// Методы и свойства объекта можно вызфвать через синтаксис объект['имяМетода']()


// 1. ES2015 class синтаксис:
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


// 2. При помощи прототипов:
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
