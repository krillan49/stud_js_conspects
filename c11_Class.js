//                                            ООП. Классы и объекты.

// В JS ООП на прототипах. Класс это просто сахар синтаксический

class Person {
  // внутри класа не нужно писать ключевое слово function для методов
  constructor(name='Vasya', age=0, happy=true) { // аналог initialize
    // Вариант 1. присваиваем аргументы конструктора в переменные экземпляра при помощи this(объект экземпляра ??)
    this.name = name;
    this.age = age;
    this.happy = happy;

    // Вариант 2. присваиваем аргументы конструктора(короткая запись) (через хэш ??)
    Object.assign(this, { name, age, happy });
  }
  // похоже класс(или конструктор ??) по умолчанию обладает геттером и сеттером для каждой переменной экземпляра, соотв позволяет к ней обращаться или менять без доп кода вроде отдельных методов или attr_accessor

  // метод экземпляра
  info() {
    return 'Я ' + this.name + ', мне ' + this.age;
  }

  some() {
    this.info() // метод экземпляра обязательно с this, нельзя просто как в Руби
  }

  // метод класса(статический)
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// Создание объекта экземпляра класса
var kroker = new Person('Kroker', 37, true);
console.log(kroker.name);   //=> 'Kroker'   // Обращение к свойству экземпляра
console.log(kroker.info()); //=> 'Я Kroker, мне 37'   // Обращение к методу эуземпляра
kroker.age = 25;            // Изменение значения свойства экземпляра
console.log(kroker.age);    //=> 25

// Вызов метода класса(статического)
console.log(Person.greetExtraTerrestrials('Gigant'));


// Определение метода в конструкторе
class File {
  constructor(fullName){
    this.getName = () => fullName;
  }
}
var myFile = new File("Lorem Ipsum.txt");
console.log(myFile.getName()) //=> Lorem Ipsum.txt



//                                               Сеттеры и геттеры

// кастомные
class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0
  }
  setAge(age) {
    this.age = age
    return this
  }
  setSex(sex) {
    this.sex = sex
    return this
  }
  setName(name) {
    this.name = name
    return this
  }
  hello() {
    return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
  }
}

// методы с get или set. Отличия от кастомных, что вызываются как свойства без (). Мы какбы оборачиваем свойства в методы, от которых их будем вызывать или менять
class Some {
  constructor(some, some2) {
    this._some = some; // _ чтобы имя геттера не было таким же как имя свойства
    this.some2 = some2;
  }
  // Геттеры и сеттеры свойств экземпляра существуют по умолчанию но можно их и написать самому
  get some() {
    return this._some;
  }
  set some(n){
    this._some = n;
  }
}
s = new Some(1, 2);
console.log(s.some); //=> 1
s.some = 3;
console.log(s.some); //=> 3
// существующие по умолчанию
console.log(s.some2); //=> 2
s.some2 = 5;
console.log(s.some2); //=> 5

// Для того чтобы например переменную можно было только читать, содаем только геттер
class File {
  constructor(fullName) {
    this._fullName = fullName; // свойство fullName должно быть доступно только для чтения. Это означает, что попытки переназначить fullName новое значение должны завершиться неудачей, и оно должно сохранить свое исходное значение
  }
  get fullName() {
    return this._fullName;
  }
}
let myFile = new File("hello.txt");
console.log(myFile.fullName); //=> hello.txt
myFile.fullName = "goodbye.txt"; // Переназначение должно завершиться неудачей
console.log(myFile.fullName); //=> "hello.txt"

// Удобно использовать сеттеры для свойств зависящих от других свойств, тк по умолчанию они не будут меняться
// Можно использовать сеттеры для переназначения свойств от зависимых от них свойств
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this._volume = this.length * this.width * this.height;
  }
  get volume() {
    return this.length * this.width * this.height;
  }
  set volume(n) { // так задав зависимую величину изменяем от нее свойство(только тут для куба а не кубоида(но можно перенести потом в наследование))
    this.length = Math.cbrt(n);
  }
}

c = new Cuboid(2,3,4);
console.log(c._volume); //=> 24
console.log(c.volume); //=> 24
c.length = 5;
console.log(c._volume); //=> 24 // не исзменилось
console.log(c.volume); //=> 60



//                                             Наследование. super

// Базовый(материнский) класс
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Класс наследник синтаксис 1
class Cat extends Animal {  // Наследует у класса Animal
  constructor(name, age, status, master) {
    super(name, age); // используем функционал базового класса
    this.legs = 4;
    this.species = "cat";
    this.status = status; // приходится переопределять, тк в базовом класса порядок параметров name, age, legs, species, status, соотв и в супер надо передавать в таком же
    this.master = master; // новая переменная только для этого класса
  }
  introduce() { // Просто переопределяем метод
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
  greetMaster() { // Новый метод только для этого класса
    return `Hello ${this.master}`;
  }
}

// Класс наследник синтаксис 2
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status); // проставляем в правильном порядке
    this.master = master;
  }
  introduce() {
    return `${super.introduce()} My master is ${this.master}`;
    // super.introduce()  - используем метод из материнского класса
  }
}

// Класс наследник синтаксис 3
class Shark extends Animal {
  constructor(name, age, status, master, legs = 4, species = "dog") { // Используем значения по умолчанию
    super(name, age, legs, species, status);
    this.master = master;
  }
}



//                                           Класс как переменная объекта другого класса

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



//                                              Сингелтон-класс

// Синглтон — это шаблон проектирования, который ограничивает создание экземпляра класса одним объектом
class Singleton {
  constructor() {
    if (!!Singleton.some) return Singleton.some; // проверяем существует ли уже экземпляр клааса, если да возвращаем его
    Singleton.some = this; // если не существует то привязываем текущий экземпляр к классу через ??параметр (тут some)
    return this; // без этого также сработало бы, но хорошей практикой является сохранение неизменного возврата из метода.
  }
}
let obj1 = new Singleton(), obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1

// применение - счетчик - при вызове Class.getNumber() возвращает сперва 1 потом 2 потом 4 итод
class Class {
  constructor() {
    if (!!Class.some) return Class.some;
    Class.some = this;
    this.number = 0;
    return this;
  }
  add(){
    this.number ? this.number *= 2 : this.number += 1;
    return this.number;
  }
  static getNumber() {
    return new Class().add();
  }
}


// Тоже что и выше с переменной класса (уже не сингелтон ??)
class Class {
  static number = 1

  static getNumber() {
    const currentVal = Class.number
    Class.number *= 2
    return currentVal
  }
}
// тоже
class Class {
  static value = 0.5;
  static getNumber() {
    this.value = this.value*2
    return this.value;
  }
}
// тоже
let count = 0.5;

class Class {
  static getNumber() {
    return count *= 2;
  }
}



//                                             Генерация классов

// вар 1
function makeClass(...vars) {
  return function(...pars) { vars.forEach((p, i) => this[p] = pars[i]) }; // возвращаем функцию класса, которая принимает значения для переменных и назначает их в переменные
}

const Animal = makeClass("name","species","age","health","weight","color") // имена переменных экземпляра
const dog = new Animal('Bob','Dog','5','good','50lb','brown')
console.log(dog.name) //=> 'Bob'


// вар 2
function makeClass(...vars) {
  return class {
    constructor(...pars) {
      vars.forEach((p, i) => this[p] = pars[i]);
    }
  }
}

const Animal = makeClass("name","species","age","health","weight","color")
const dog = new Animal('Bob','Dog','5','good','50lb','brown')
console.log(dog.name) //=> 'Bob'








//
