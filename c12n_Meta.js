//                                      Аналоги рубишного send

// eval
function testFunction(arg) {
  return arg + 1;
}
var functionName = 'testFunction'
console.log( eval(functionName)(2) ); //=> 3


// для классов вызов методов как элементов хэша
class X {
  method1(){
    return 1;
  }
  method2(){
    return this['method1']();
  }
  method3(arg){
    return arg + 5;
  }
}
let x  = new X();
x['method1'](); //=> 1
x['method2'](); //=> 1
x['method3'](5); //=> 1















// 
