//                                        ООП. Конструкторы и прототипы.

// В JS ООП функциональное, на прототипах. Класс это просто сахар синтаксический


// Синтаксис для протоитпа метода класса а не экземпляра
Hex.parse = function(string){
  //...
}

// Object.freeze - запрещает изменять свойства объекта (как только гетткры)
function OnceNamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = this.firstName + ' ' + this.lastName;
  Object.freeze(this);
}
// тоже самое только через writable:false
function OnceNamedOne(first, last) {
  Object.defineProperties(this, {
    'firstName': {value:first, writable:false},
    'lastName': {value:last, writable:false},
    'fullName': {value:first + ' ' + last, writable:false}
  });
}



//                                       Функция-конструктор. Оператор new.

// Функция-конструктор в ней задаются параметры/свойства для объектов данного "класса"
function Fruit(color, shape) {
  this.color = color;
  this.shape = shape;
  // можно так же добавить return чтобы функция конструктор чтото возвращала
}
// В JavaScript мы можем создавать объекты, используя оператор new.
const melon = new Fruit('yellow', 'round') // При создании объекта задаем ему параметры
console.log(melon);               //=> Fruit { color: 'yellow', shape: 'round' }
console.log(melon.color);         //=> 'yellow'
console.log(melon['shape']);      //=> 'round'
// Объекты наследуют методы базового класса Object
console.log(Object.keys(melon));  //=> [ 'color', 'shape' ]

// new - оператор
// Создает пустой объект (который мы назовем экземпляром), который прототипически наследуется от Constructor.prototype.
// Привязывает конструктор к экземпляру (то есть это экземпляр) и вызывает конструктор с любыми переданными аргументами.
// Если возвращаемое значение Constructor является объектом (включая массивы, функции, даты, регулярные выражения и т. д.), операция оценивается для этого объекта.
// В противном случае операция оценивается как экземпляр



//                             Определение методов в функции конструктора(без прототипов)

// Присвоив функцию без имени или стрелочную функцию в свойство конструктора, создается метод для этого "класса"
function Warrior(name) {
  this._name = name;
  this.toString = () => `My name is ${this._name}`;
  // Собственно поэтому при присвоении через конструктор и нельзя повторять имя свойсва в имени метода
  this.name = function (par) {
    if (par) this._name = par;
    return this._name;
  }
}
const boris = new Warrior("Boris");
console.log(boris);            //=> Warrior { _name: 'Boris', toString: [Function (anonymous)], name: [Function (anonymous)] }
console.log(boris.toString);   //=> [Function (anonymous)]
console.log(boris.toString()); //=> "My name is Boris"
console.log(boris.name());     //=> "Boris"
boris.name("Bobo");            // меняем значения свойства при помощи функции
console.log(boris.name());     //=> "Bobo"
console.log(boris._name);      //=> "Bobo"


// Конструктор c при с замыканием, на примере счетчика
function Counter() {
  let _count = 0; // просто переменная для замыкания
  // Свойствами объекта будут анонимные функции использующие замыкание
  this.check = function() { return _count; }
  this.increment = function() { _count++; }
};
const c = new Counter;
console.log(c.check()); //=> 0
c.increment();
console.log(c.check()); //=> 1



//                            Прототипы для конструктора(создание методов вне конструктора)

// При помощи прототипов функций, мы можем создавать функции для "класса" определенного конструктором.
// Имена функций относящихся к классу не должны совпадать с именами свойств объектов
function Warrior(name) {
  this._name = name;                      // если будем создавать функцию, то ее имя не должно быть равно имени переменной
}
Warrior.prototype.name = function (par) { // если будем создавать функцию, то ее имя не должно быть равно имени переменной
  if (par) this._name = par;
  return this._name;
}
Warrior.prototype.toString = function () {
  return `My name is ${this._name}`;
}
const boris = new Warrior("Boris");
console.log(boris.toString()); //=> "My name is Boris"
console.log(boris.name());     //=> "Boris"
boris.name("Bobo");            // меняем значения свойства при помощи функции
console.log(boris.name());     //=> "Bobo"
console.log(boris._name);      //=> "Bobo"



//                                   Имя методу через переменную со строкой

// Можно создавать методы черес прототипы, используя для их названий строки
function Warrior(name) {
  this.name = name;
}
let someMethod = 'toString'; // Назначаем строку в переменную
// Определяем название метода в прототипе через синтаксис [] с переменной внутри:
Warrior.prototype[someMethod] = function () {
  return `My name is ${this.name}`;
}
const boris = new Warrior("Boris");
console.log(boris.toString());      //=> "My name is Boris"


// Этим способом мы можем создавать множество разных методов через один прототип, как на конвеере
function HTMLGen() {} // создаем пустой конструктор
const names = ['a', 'b', 'p', 'body', 'div', 'span', 'title'];
names.forEach((tag) => {
  HTMLGen.prototype[tag] = function(content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
  }
})
const g = new HTMLGen();
let paragraph = g.p('Hello, World!');
let block = g.div(paragraph);
console.log(paragraph); //=> '<p>Hello, World!</p>'
console.log(block);     //=> '<div><p>Hello, World!</p></div>'



//                                      Прототипы для базовых классаов JS

// Так же при помощи прототипов можно создавать или переопределять функции для уже существующих классов в JS

// Новый метод reverse для встроенного "класса" String
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}
console.log("String".reverse()); //=> "gnirtS"

// Переопределим метод reverse для класса Array, чтобы он менял массив 'на месте'
Array.prototype.reverse = function() {
  let stack = [];
  for (let i = this.length - 1; i >= 0; i--) { stack.push(this[i]); }
  for (let i in stack) { this[i] = stack[i] }
  return this;
}
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); //=> [ 3, 2, 1 ]

// Использование функции как параметра в прототипе, на примере нового метода reject для класса Array
Array.prototype.reject = function (func) {
  let res = this.filter(e => !func(e));
  return res;
}
console.log([1, 2, 3, 4, 5].reject(e => e % 2 == 0)) //=> [ 1, 3, 5 ]



//                                         Функциональное наследование

// new - оператор в JavaScript создает объекты, выполнив следующие три шага:
// 1. Сначала он создает новый пустой объект.
// 2. Затем он устанавливает свойство `.__proto__` нового объекта в соответствии со свойством прототипа вызываемой функции.
// 3. Наконец, оператор вызывает функцию и передает новый объект как ссылку «this».

// Материнский класс
function Cylon(model){
  this.model = model;
  this.attack = function() { return "Destroy all humans!";}     // как метод класса (наследуется)
}
// Клас наследник через синтаксис с __proto__
function HumanSkin(model){
  this.__proto__= new Cylon(model); // наследование при помощи свойства __proto__ и объекта материнской функции Cylon
  this.infiltrate = function() { return "Infiltrate the colonies";} // уникальный метод подкласса
}
const hs = new HumanSkin('Vasya');
console.log(hs.model);        //=> 'Vasya'
console.log(hs.attack());     //=> 'Destroy all humans!'
console.log(hs.infiltrate()); //=> 'Infiltrate the colonies'



//                                       Геттеры и сеттеры через прототип

// Вам нужно будет сохранить его как общедоступное свойство в вашем экземпляре. Обычно используется соглашение, согласно которому _ as обозначает закрытый элемент.
function Person(age) {
  this.age(age);
}
Person.prototype.age = function (num) {
  this._age = num;
}
const per = new Person(10);
console.log(per._age); //=> 10


// 1. Object.defineProperty над прототипом
function Person(age, name) {
  this.name = name;
  this.age  = age;
};
// Добавим прототип с сеттерпми и гетерами как параметр Object.defineProperty
Object.defineProperty(Person.prototype, "age", {
  get: function() {
    return this._age;
  }, // пишем через запятую
  set: function(num) {
    this._age = num;
  }
});
// Используется так же, как если бы это было обычное свойство:
const person = new Person(20, "Jane Doe");
console.log(person.age); // => 20
person.age = 15;
console.log(person.age); // => 15


// 2. Object.defineProperty в конструкторе c this для установки нового свойства
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, "fullName", { // установим геттер и сеттер для нового свойства fullName
    set: function(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
    get: function() {
      return this.firstName + ' ' + this.lastName;
    }
  });
}
const no = new NamedOne('Vasya', 'Pupkin');
console.log(no.fullName); //=> Vasya Pupkin
no.fullName = 'Sanya Xui';
console.log(no.fullName); //=> Sanya Xui


// 3. Прототип для геттеров и сеттеров нового свойства
function NamedOne(first, last){
  this.firstName = first;
  this.lastName = last;
}
NamedOne.prototype = {
  get fullName(){
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value){
    [this.firstName, this.lastName] = value.split(" ");
  }
}
const no = new NamedOne('Vasya', 'Pupkin');
console.log(no.fullName); //=> Vasya Pupkin
no.fullName = 'Sanya Xui';
console.log(no.fullName); //=> Sanya Xui



//                                    Класс как переменная объекта другого класса

function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive; // пчела имеет объект улья в переменной
}

function Hive() {
  this.pollen = 100;
}

Hive.prototype.getPollen = function() {
  return this.pollen;
}

Hive.prototype.addPollen = function(pollen) {
  this.pollen += pollen;
}

Bee.prototype.unloadPollen = function() {
  this.hive.addPollen(this.capacity); // используем улей данной пчелы чтоб добавить в него мед
}

const hive = new Hive();
const bee = new Bee(5, hive);
console.log(hive.pollen); //=> 100
bee.unloadPollen();
console.log(hive.pollen); //=> 105



//                                            Фабрики, apply

// Хз это трэш или нет ??

// Оператор new — создает сильно связанный код, который сложно поддерживать и тестировать.
// Некоторые шаблоны для уменьшения связанности — это фабрики объектов или внедрение зависимостей.
// struct() - Эта функция получает функцию-конструктор и, возможно, некоторые аргументы и возвращает новый объект, созданный с помощью функции и переданных аргументов

// Функция конструктор с прототипами(класс)
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
function construct(Class) { // первый параметр имя класса тут Greeting
  const args = Array.prototype.slice.call(arguments, 1); // arguments - остальные параметры
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
console.log(greeting.name);       //=> 'John'
console.log(greeting.sayHello()); //=> 'Hello John'














//
