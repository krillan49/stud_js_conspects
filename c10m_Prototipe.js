//                                            ООП. Конструкторы и прототипы.

// В JS ООП на прототипах. Класс это просто сахар синтаксический


// Функция-конструктор сразу с параметрами для объекта
function Fruit(color, shape) {
  this.color = color;
  this.shape = shape;
}
// В JavaScript мы можем создавать объекты, используя оператор new
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

// Альтер варик с определением функций внутри
function Counter() {
  var _count = 0;

  this.check = function() {
    return _count;
  }
  this.increment = function() {
    _count++;
  }
};


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



// Функция в функции (ООП)
function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return str.split('').map(e => abc2[abc1.indexOf(e)] || e).join('');
  }
}
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"


// Вызов функции в прототипе (тут прототип аналога метода filter())
Array.prototype.filter = function (func) {
  let res = [];
  this.forEach(e => func(e) ? res.push(e) : null); // вызываем функцию от параметра добавляя аргумент в скобках
  return res;
}



//                                       Фабрики, apply

// Хз это трэш или нет ??

// Оператор new — это зло, потому что он создает сильно связанный код, который сложно поддерживать и тестировать.
// Некоторые шаблоны для уменьшения связанности — это фабрики объектов или внедрение зависимостей. Эти шаблоны могут извлечь выгоду из функции struct().
// Эта функция получает функцию-конструктор и, возможно, некоторые аргументы и возвращает новый объект, созданный с помощью функции и переданных аргументов

// Функция с прототипами(класс)
function Greeting(name) {
  this.name = name;
}
Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};
Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};

// И фабрика могла бы использовать вот так:
function construct(Class) {
  const args = Array.prototype.slice.call(arguments, 1);
  let instance = Object.create(Class.prototype);
  let result = Class.apply(instance, args);
  if (typeof result === 'object') return result;
  else return instance;
}
//Или так
function construct(Class) {
  let obj = Object.create(Class.prototype);
  Class.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
}
// Или так
function construct(Class) {
  return new (Class.bind.apply( Class, arguments ))()
}

let greeting = construct(Greeting, 'John');



//                                                Функциональное наследование

// new - оператор в JavaScript создает объекты, выполнив следующие три шага:
// 1. Сначала он создает новый пустой объект.
// 2. Затем он устанавливает свойство `.__proto__` нового объекта в соответствии со свойством прототипа вызываемой функции.
// 3. Наконец, оператор вызывает функцию и передает новый объект как ссылку «this».

function Cylon(model){
  this.model = model;
  this.attack = function() { return "Destroy all humans!";} // как метод класса (наследуется)
}

function HumanSkin(model){
  this.__proto__= new Cylon(model); // наследование при помощи __proto__ и объекта материнской функции Cylon
  this.infiltrate = function() { return "Infiltrate the colonies";} // уникальный метод подкласса
}



//                                       Геттеры и сеттеры через прототип

// Не имеет прямого отношения к вашему вопросу, но поскольку вы упомянули "геттеры и сеттеры" в своем названии, я подумал, что мог бы дополнить ответы геттерами и сеттерами ES5:

function Person(age, name) {
  this.name = name;
  this.age  = age;
};

Object.defineProperty(Person.prototype, "age", {
  get: function() {
    return this._age;
  },

  // Added a few things to demonstrate additional logic on the setter
  set: function(num) {
    num = parseInt(num, 10);
    if(num > 0) {
      this._age = num;
    }
  }
});
// Затем его можно использовать прозрачно, как если бы это было обычное свойство:
var person = new Person(20, "Jane Doe");
person.age; // => 20

person.age = 15;
person.age; // => 15

person.age = "20";
person.age; // => 20 (number)

person.age = -2;
person.age; // => 20


// Вар 2
// Вам нужно будет сохранить его как общедоступное свойство в вашем экземпляре. Обычно используется соглашение, согласно которому _ as обозначает закрытый элемент.
function Person(age, name) {
    this.age(age);
}
Person.prototype.age = function (num) {
    if (!num) {
        return this._age;
    }
    else {
        this._age = num;
    }
}

// Прототип для геттеров и сеттеров нового свойства
function NamedOne(first, last){
    this.firstName = first;
    this.lastName = last;
}

NamedOne.prototype = {
  get fullName(){
    return this.firstName+' '+this.lastName;
  },
  set fullName(fn){
    var name = fn.split(' ');
    if(2 == name.length){
      this.firstName = name[0];
      this.lastName  = name[1];
    }
  }
}


// Вар 3 - без прототипа сразу в функции
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", {
    set: function(value) {
      var parts = value.split(" ");
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },
    get: function() {
      return this.firstName + ' ' + this.lastName;
    }
  });
}



// Установка геттеров и сеттеров через прототип
function Name(first, last) {
  this.first = first;
  this.last = last;
}

Name.prototype = {
  get fullName() {
    return this.first + " " + this.last;
  },

  set fullName(name) {
    var names = name.split(" ");
    this.first = names[0];
    this.last = names[1];
  }
};
// Теперь вы можете установить fullName, и firstбудет lastобновляться и наоборот.
n = new Name('Claude', 'Monet')
console.log(n.first); // "Claude"
console.log(n.last); // "Monet"
console.log(n.fullName); // "Claude Monet"
n.fullName = "Gustav Klimt"
console.log(n.first); // "Gustav"
console.log(n.last); // "Klimt"














//
