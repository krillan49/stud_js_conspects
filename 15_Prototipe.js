//                                        ООП. Конструкторы и прототипы.

// В JS ООП функциональное, на прототипах. Класс это просто сахар синтаксический



//                                             Функция-конструктор

// Функция-конструктор задает параметры/свойства для объектов данного "класса"
function Fruit(color, shape) {
  this.color = color;
  this.shape = shape;
  // можно так же добавить return чтобы функция конструктор что-то возвращала
}

// new - оператор для создания объектов(экземпляры соответсвующего "Класса")
const melon = new Fruit('yellow', 'round');
melon;               //=> Fruit { color: 'yellow', shape: 'round' }
melon.color;         //=> 'yellow'
melon['shape'];      //=> 'round'

// Любые объекты наследуют методы базового класса Object
Object.keys(melon);  //=> [ 'color', 'shape' ]



//                                                Оператор new

// new - оператор в JavaScript, который создает объекты

// Объяснение 1:
// Создает пустой объект (который мы назовем экземпляром), который прототипически наследуется от Constructor.prototype.
// Привязывает конструктор к экземпляру и вызывает конструктор с любыми переданными аргументами.
// Если возвращаемое значение Constructor является объектом (включая массивы, функции, даты, регулярные выражения и т. д.), операция оценивается для этого объекта.
// В противном случае операция оценивается как экземпляр

// Объяснение 2:
// 1. Создает новый пустой объект
// 2. Устанавливает свойство `.__proto__` нового объекта в соответствии со свойством прототипа вызываемой функции
// 3. Оператор вызывает функцию и передает новый объект как ссылку «this».

// Как примерно работает оператор new:
function New(func) { // где func это например Fruit('yellow', 'round')
  var res = {};
  if (func.prototype !== null) res.__proto__ = func.prototype;
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) return ret;
  return res;
}



//                            Прототипы для конструктора(создание методов вне конструктора)

// При помощи прототипов функций, мы можем создавать функции для "класса" определенного конструктором вне его области. Имена функций относящихся к классу не должны совпадать с именами свойств объектов

function Warrior(name) {
  this._name = name; // если будем создавать функцию, то ее имя не должно быть равно имени переменной, потому называем свойство с нижним подчеркиванием
}

Warrior.prototype.name = function (par) { // если будем создавать функцию, то ее имя не должно быть равно имени переменной
  if (par) this._name = par;
  return this._name;
}

// Присвоение в прототип по имени функции. При такой записи некорректо работала стрелочная функция
function toString() {
  return `My name is ${this._name}`;
}
Warrior.prototype.toString = toString;

// Создание статического метода класса при помощи прототипа
Warrior.is = function(str){
  return `Warrior is ${str}`
}

// Статический:
console.log(Warrior.is(9000)); //=> Warrior is 9000

// Объект и методы экземпляра:
const boris = new Warrior("Boris");
console.log(boris.toString()); //=> "My name is Boris"
console.log(boris.name());     //=> "Boris"
boris.name("Bobo");   // меняем значения свойства при помощи функции
console.log(boris.name());     //=> "Bobo"
console.log(boris._name);      //=> "Bobo"



//                                  Определение методов в функции-конструкторе

// Присвоив функцию без имени или стрелочную функцию в свойство конструктора, создается метод для этого "класса", тоесть метод в ЖС это функция присвоенная в свойство конструктора.
function Warrior(name) {
  this._name = name;
  // Собственно поэтому при присвоении через конструктор и нельзя повторять имя свойсва в имени метода
  this.name = function (par) { // кастомный сеттер, где мы используем замыкание, тк изменяем при помощи него свойство функции, что находится в области функции-класса
    if (par) this._name = par;
    return this._name;
  };
  this.toString = () => `My name is ${this._name}`;
}
const boris = new Warrior("Boris");
console.log(boris);            //=> Warrior { _name: 'Boris', toString: [Function (anonymous)], name: [Function (anonymous)] }
console.log(boris.toString);   //=> [Function (anonymous)]
console.log(boris.toString()); //=> "My name is Boris"
console.log(boris.name());     //=> "Boris"
boris.name("Bobo");  // меняем значения свойства при помощи функции
console.log(boris.name());     //=> "Bobo"
console.log(boris._name);      //=> "Bobo"


// Конструктор с замыканием для обычной переменной, на примере счетчика
function Counter() {
  let _count = 0; // просто переменная для замыкания
  // Свойствами объекта, тоесть методами "класса" будут анонимные функции, использующие замыкание
  this.check = function() { return _count; }
  this.increment = function() { _count++; }
};
const c = new Counter;
console.log(c.check()); //=> 0
c.increment();
console.log(c.check()); //=> 1




//                        Метопрограммирование. Имя методу через переменную со строкой

// Можно создавать методы через прототипы, используя для их названий строки
function Warrior(name) {
  this.name = name;
}
let someMethod = 'toString'; // Назначаем строку в переменную
// Определяем название метода в прототипе через синтаксис []:
Warrior.prototype[someMethod] = function () {
  return `My name is ${this.name}`;
}
const boris = new Warrior("Boris");
console.log(boris.toString());      //=> "My name is Boris"


// Этим способом мы можем создавать множество разных методов через один прототип:
// 1. создаем пустой конструктор:
function HTMLGen() {}
// 2. Имена методов что соответсуют именам нужных тегов:
const names = ['a', 'b', 'p', 'body', 'div', 'span', 'title'];
// 3. Создаем функции этих тегов:
names.forEach((tag) => {
  HTMLGen.prototype[tag] = function(content) {
    return `<${tag}>${content}</${tag}>`
  }
})
// 4. Объект генератора тегов:
const g = new HTMLGen();
// 5. Генерируем и применяем теги:
let paragraph = g.p('Hello, World!');
let block = g.div(paragraph);
console.log(paragraph); //=> '<p>Hello, World!</p>'
console.log(block);     //=> '<div><p>Hello, World!</p></div>'



//                                      Прототипы для базовых классов JS

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

// Использование функции как параметра в прототипе, на примере создания нового метода reject для класса Array
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

// Класс наследник через синтаксис с __proto__
function HumanSkin(model){
  this.__proto__= new Cylon(model); // наследование при помощи свойства __proto__ и объекта материнской функции Cylon
  this.infiltrate = function() { return "Infiltrate the colonies";} // уникальный метод подкласса
}

const hs = new HumanSkin('Vasya');
console.log(hs.model);        //=> 'Vasya'
console.log(hs.attack());     //=> 'Destroy all humans!'
console.log(hs.infiltrate()); //=> 'Infiltrate the colonies'



//                                       Геттеры и сеттеры через прототип


// 1. Геттеры и сеттеры для нового свойства просто назначаем через присвоения объккта с ними в прототип
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
// Геттеры и сеттеры используются так же, как если бы это были обычные свойства:
console.log(no.fullName); //=> Vasya Pupkin
no.fullName = 'Sanya Xui';
console.log(no.fullName); //=> Sanya Xui


// 2а. Геттеры и сеттеры для уже существующих свойств. Object.defineProperty принимающий прототип, имя для геттера и сеттера и объект с методами
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
const person = new Person(20, "Jane Doe");
console.log(person.age); // => 20
person.age = 15;
console.log(person.age); // => 15


// 2б. Геттеры и сеттеры для уже существующих свойств. Object.defineProperty в конструкторе c this для установки нового свойства
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



//                                       Запрет на изменение свойств объекта

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



//                                    Класс как переменная объекта другого класса

function Hive() {
  this.pollen = 100;
}
Hive.prototype.getPollen = function() { return this.pollen; }
Hive.prototype.addPollen = function(pollen) { this.pollen += pollen; }

function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive; // пчела имеет объект улья в переменной
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

// struct() - Эта функция получает функцию-конструктор и  аргументы и возвращает новый объект, созданный с помощью функции и переданных аргументов

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
