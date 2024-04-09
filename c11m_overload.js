//                                       Иммитация Operator overload(valueOf)

// JavaScript не поддерживает перегрузку операторов. Самое близкое к нему что возможно сделать, это реализовать toString и valueOf. Эти примеры не демонстрируют перегрузку операторов, а просто используют преимущества встроенной обработки преобразования JavaScript в примитивы:
// toString - будет вызываться, когда экземпляр должен быть приведен к строке(тоесть значение возвращаемое этим методе строка).
// valueOf - будет вызываться для приведения экземпляра к числу, например для +, при использовании для сложения или во многих случаях, когда используя его для конкатенации, поскольку + пытается выполнить сложение перед конкатенацией.

// toString и valueOf работают одинаково, тоесть важно то значение какого типа они возвращают строку или число, ав так математические или строковые операции может осуцществлять любой из них



//                                                  valueOf

// Приведение экземпляра к примитиву с помощью математических операторов:
function Foo(val) {
  this.val = val;
}
Foo.prototype.valueOf = function() {
  return this.val;
};
const a = new Foo(6), b = new Foo(2);
// ? Тоесть оператор вызывает метод valueOf к объекту и аргументу ?
console.log(a + b); //=> 8
console.log(a - b); //=> 4
console.log(a * b); //=> 12
console.log(a / b); //=> 3
console.log(a % b); //=> 0
const c = new Foo('6'), d = new Foo('2');
// Тк примитивы строки выполняет конкатенацию
console.log(c + d); //=> '62'
// Но для других операций нет строковых вариантов потому опять математические
console.log(c - d); //=> 4
console.log(c * d); //=> 12
console.log(c / d); //=> 3
console.log(c % d); //=> 0


// Тоже с ES2015 class:
class Thing {
  constructor(val) {
    this.val = val;
  }
  valueOf() {
    return this.val;
  }
}
const x = new Thing(1), y = new Thing(2);
x + y; //=> 3


// Тоже просто с объектами, без конструкторов:
const someObj = {
  valueOf: function() { return this.val; }
};
const a = Object.create(someObj);
a.val = 1;
const b = Object.create(someObj);
b.val = 2;
console.log(a + b); //=> 3



//                                                  toString

// В этом примере значение свойства объекта преобразуется val в верхний регистр в ответ на приведение к примитиву, например, с помощью оператора +:
function Thing(val) {
  this.val = val;
}
Thing.prototype.toString = function() {
  return this.val.toUpperCase();
};
const a = new Thing("a"), b = new Thing("b");
console.log(a + b); //=> "AB"
console.log(a.repeat(5)); //=> TypeError: a.repeat is not a function // с методами не работает


// Или с ES2015 class:
class Thing {
  constructor(val) {
    this.val = val;
  }
  toString() {
    return this.val.toUpperCase();
  }
}
const a = new Thing("a"), b = new Thing("b");
console.log(a + b); //=> "AB"


// Или просто с объектами, без конструкторов:
const thingPrototype = {
  toString: function() { return this.val.toUpperCase(); }
};
const a = Object.create(thingPrototype);
a.val = "a";
const b = Object.create(thingPrototype);
b.val = "b";
console.log(a + b); //=> "AB"











//
