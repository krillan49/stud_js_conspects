//                                            ООП. Конструкторы и прототипы.

// В JS ООП на прототипах. Класс это просто сахар синтаксический


// Конструктор сразу с параметрами для объекта
function Fruit(color, shape) {
  this.color = color;
  this.shape = shape;
}
var melon = new Fruit('yellow', 'round') // При создании объекта задаем ему параметры
console.log(melon); //=> Fruit { color: 'yellow', shape: 'round' }


// прототипы для конструктора
function Warrior(wname) {
  this.wname = wname; // если будем создавать функцию, то ее имя не должно быть равно имени переменной
}
Warrior.prototype.toString = function () {
  return `Hi! my name's ${this.wname}`;
}
Warrior.prototype.name = function (par) { // если будем создавать функцию, то ее имя не должно быть равно имени переменной
  if (par) this.wname = par;
  return this.wname;
}

var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

console.log(albert.toString()) //=> "Hi! my name's Albert"
albert.name()    //=> "Albert"
boris.name()     //=> "Boris"
boris.name("Bobo")
boris.name()     //=> "Bobo"


// Новая функция для встроенного "класса" String
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}
console.log("String".reverse());// => "gnirtS"

// Аналог reverse() с изменением на месте
Array.prototype.reverse = function() {
  var stack = [];
  for (var i = this.length - 1; i >= 0; i--) {
    stack.push(this[i]);
  }
  for (var i in stack) {
    this[i] = stack[i]
  }
  return this;
};



// Создании функций под переменными свойств внутри функции
function HTMLGen () {
  this.div = s=>"<div>"+s+"</div>";
  this.b = s=>"<b>"+s+"</b>";
  this.p = s=>"<p>"+s+"</p>";
}


// Конвеерное создание функций по заданным именам
function HTMLGen() {}

['a', 'b', 'p', 'body', 'div', 'span', 'title'].forEach((tag) => {
  HTMLGen.prototype[tag] = function(content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
  }
})

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);
console.log(paragraph); //=> '<p>Hello, World!</p>'
console.log(block); //=> '<div><p>Hello, World!</p></div>'











//
