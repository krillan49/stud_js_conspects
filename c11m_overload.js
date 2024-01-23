//                                          Иммитация Operator overload(valueOf)

// JavaScript не поддерживает перегрузку операторов. Самое близкое, что вы можете сделать, это реализовать toString(который будет вызываться, когда экземпляр должен быть приведен к строке) и valueOf (который будет вызываться для приведения его к числу, например +, при использовании для сложения или во многих случаях, когда используя его для конкатенации, поскольку + пытается выполнить сложение перед конкатенацией), что довольно ограничено.

// Однако для людей, которые задаются этим вопросом и хотят получить в результате строку или число (вместо ) Vector2, вот примеры valueOf и toString. Эти примеры не демонстрируют перегрузку операторов, а просто используют преимущества встроенной обработки преобразования JavaScript в примитивы:

//                                                  valueOf

// приведение к примитиву, например, с помощью +:
function Foo(val) {
  this.val = val;
}
Foo.prototype.valueOf = function() {
  return this.val;
};
let a = new Foo(1), b = new Foo(2);
a + b; //=> 3


// Или с ES2015 class:
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


// Или просто с объектами, без конструкторов:
var thingPrototype = {
  valueOf: function() { return this.val;}
};
var a = Object.create(thingPrototype);
a.val = 1;
var b = Object.create(thingPrototype);
b.val = 2;
console.log(a + b); //=> 3



//                                                  toString

// В этом примере значение свойства объекта преобразуется val в верхний регистр в ответ на приведение к примитиву, например, с помощью +:
function Thing(val) {
  this.val = val;
}
Thing.prototype.toString = function() {
  return this.val.toUpperCase();
};
var a = new Thing("a"), b = new Thing("b");
console.log(a + b); //=> "AB"


// Или с ES2015 class:
class Thing {
  constructor(val) {
    this.val = val;
  }
  toString() {
    return this.val.toUpperCase();
  }
}
const a = new Thing("a");
const b = new Thing("b");
console.log(a + b); //=> "AB"


// Или просто с объектами, без конструкторов:
var thingPrototype = {
  toString: function() {
    return this.val.toUpperCase();
  }
};
var a = Object.create(thingPrototype);
a.val = "a";
var b = Object.create(thingPrototype);
b.val = "b";
console.log(a + b); //=> "AB"











// 
