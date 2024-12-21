//                                 Иммитация Operator overload. valueOf и toString

// JavaScript не поддерживает перегрузку операторов, а только перегрузку методов.

// Получить что-то похожее на перегрузку операторов можно при помощи методов toString и valueOf. Они используют преимущества встроенной обработки преобразования JavaScript в примитивы.

// valueOf  - будет вызываться для приведения экземпляра к числу, например оператор + для сложения(если примитив число) или конкатенации(если примитив строка). + пытается выполнить сложение перед конкатенацией.
// toString - будет вызываться, когда экземпляр должен быть приведен к строке(тоесть значение возвращаемое этим методе строка).

// toString и valueOf работают одинаково, тоесть важно то значение какого типа они возвращают строку или число, математические или строковые операции может осуцществлять любой из них



//                                                  valueOf

// 1. При помощи прототипов:
function Foo(val) {
  this.val = val;
}
Foo.prototype.valueOf = function() {
  return this.val;
};
const a = new Foo(6), b = new Foo(2);
// Приведение экземпляра к примитиву с помощью математических операторов (? Тоесть оператор вызывает метод valueOf к объекту и аргументу ?)
console.log(a + b); //=> 8
console.log(a - b); //=> 4
console.log(a * b); //=> 12
console.log(a / b); //=> 3
console.log(a % b); //=> 0
const c = new Foo('6'), d = new Foo('2');
// Тк примитивы это строки выполняет конкатенацию
console.log(c + d); //=> '62'
// Но для других операций нет строковых вариантов потому опять математические
console.log(c - d); //=> 4
console.log(c * d); //=> 12
console.log(c / d); //=> 3
console.log(c % d); //=> 0


// 2. ES2015 class синтаксис:
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


// 3. Просто с конкретными объектами, без конструкторов:
const someObj = {
  valueOf: function() {
    return this.val;
  }
};
const a = Object.create(someObj);
a.val = 1;
const b = Object.create(someObj);
b.val = 2;
console.log(a + b); //=> 3



//                                                  toString

// Тут, в ответ на приведение к примитиву, дополнительно значение свойства объекта преобразуется в верхний регистр:

// 1. При помощи прототипов:
function Thing(val) {
  this.val = val;
}
Thing.prototype.toString = function() {
  return this.val.toUpperCase();
};
const a = new Thing("a"), b = new Thing("b");
console.log(a + b); //=> "AB"
console.log(a.repeat(5)); //=> TypeError: a.repeat is not a function // с методами не работает


// 2. ES2015 class синтаксис:
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


// 3. Просто с конкретными объектами, без конструкторов:
const thingPrototype = {
  toString: function() { return this.val.toUpperCase(); }
};
const a = Object.create(thingPrototype);
a.val = "a";
const b = Object.create(thingPrototype);
b.val = "b";
console.log(a + b); //=> "AB"











//
