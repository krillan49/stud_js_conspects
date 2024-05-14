//                                            ООП. Классы и объекты.

// В JS ООП на прототипах. Класс это просто сахар синтаксический

class Person {
  // внутри класа не нужно писать ключевое слово function для методов
  constructor(name='Vasya', age=0, happy=true) {
    // Вариант 1. присваиваем аргументы конструктора в переменные экземпляра при помощи this
    this.name = name;
    this.age = age;
    this.happy = happy;

    // Вариант 2. присваиваем аргументы конструктора через метод объекта
    Object.assign(this, { name, age, happy });

    // Определение метода экземпляра в конструкторе
    this.getName = () => this.name + ' ' + this.happy;

    // Определение метода класса в конструкторе
    Person.up = (n) => this.age + n;

    // Создание свойства класса (переменной класса ?)
    Person.aaa = 'AAA';
  }
  // класс(или конструктор ??) по умолчанию обладает геттером и сеттером для каждой переменной экземпляра, соотв позволяет к ней обращаться или менять без доп кода
  // Либо конструктор просто создает эти свойства у объекта и для них не нужны геттеры и сеттеры ??

  // метод экземпляра
  info() {
    return 'Я ' + this.name + ', мне ' + this.age;
  }

  some() {
    this.info(); // метод экземпляра в другом методе обязательно вызываем от this(объекта экземпляра)
  }

  // метод класса(статический)
  static greetExtra(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }

  // Определение переменной класса вне конструктора
  static number = 0;

  static addNumber() {
    Person.number++;
    return this.number;  // переменную класса в теле класса можно писать как через имя класа так и через this
  }
}

const kroker = new Person('Kroker', 37, true);       // Создание объекта экземпляра класса
console.log(kroker.name);                 //=> 'Kroker'            // Обращение к свойству экземпляра
kroker.age = 25;                                                   // Изменение значения свойства экземпляра
console.log(kroker.age);                  //=> 25
console.log(kroker.info());               //=> 'Я Kroker, мне 25'  // Обращение к методу эуземпляра
console.log(kroker.getName());            //=> 'Kroker true'       // Обращение к методу определенному в конструкторе
console.log(Person.greetExtra('Gigant')); //=> 'Welcome Gigant'    // Вызов метода класса(статического)
console.log(Person.up(10));               //=> 35                  // Вызов метода класса определенного в конструкторе
console.log(Person.aaa);                  //=> 'AAA'               // Вызов свойства класса(переменной класса ?)

console.log(Person.addNumber());                 //=> 1
console.log(Person.addNumber());                 //=> 2
console.log(Person.addNumber());                 //=> 3



//                                           Сеттеры и геттеры. get. set

// Методы с get или set оттличаются от кастомных тем, что вызываются как свойства без (). Мы какбы оборачиваем свойства в надсвойство от которого будем менять свойство
class Some {
  constructor(some, name) {
    this._some = some; // _ чтобы имя геттера не было таким же как имя свойства
    this.age = 0;
    this._name = name; // свойство name должно быть доступно только для чтения. Это означает, что попытки переназначить name должны завершиться неудачей, и оно должно сохранить свое исходное значение
  }
  setAge(age) {    // Кастомный сеттер, будет вызываться как метод
    this.age = age
    return this
  }
  // Сеттреры и геттеры при помощи синтаксиса get или set - будут вызываться как свойства
  get some() {
    return this._some;
  }
  set some(n){
    this._some = n;
  }
  // Для того чтобы например переменную можно было только читать, содаем только геттер
  get name() {
    return this._name;
  }
}
s = new Some(1, 'Vasya');
console.log(s.some); //=> 1
s.some = 3;
console.log(s.some); //=> 3
console.log(s.name); //=> 'Vasya'
s.name = "Petya";                    // Переназначение завершится неудачей, без ошибки
console.log(s.name); //=> 'Vasya'


// Удобно использовать сеттеры зависящих от других свойств, тк по умолчанию они не будут меняться
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
  set volume(n) { // так задав зависимую величину изменяем от нее свойство(только тут для куба а не кубоида)
    this.length = Math.cbrt(n);
  }
}
c = new Cuboid(2,3,4);
console.log(c._volume); //=> 24
console.log(c.volume);  //=> 24
c.length = 5;
console.log(c._volume); //=> 24 // не исзменилось, тк было определено в конеструкторе сразу и не является методом
console.log(c.volume);  //=> 60


// Добавимть геттеры и сеттеры в существующий класс
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
// Чтобы добавить новые геттеры и сеттеры в класс нужно использовать синтаксис Object.definePropertiesе
Object.defineProperties(Person.prototype, {
  name: {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function(n) {
      let name = n.split(' ');
      this.firstName = name[0];
      this.lastName  = name[1]
    }
  }
});
const augustusCole = new Person('Augustus', 'Kola');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); //=> 'Cole'
console.log(augustusCole.lastName);  //=> 'Train'
console.log(augustusCole.getName()); //=> 'Cole Train'
console.log(augustusCole.name);      //=> 'Cole Train'



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
    this.status = status; // приходится переопределять, тк в базовом классе порядок параметров name, age, legs, species, status, соотв и в супер надо передавать в таком же
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



//                                              Сингелтон-класс

// Синглтон — это шаблон проектирования, который ограничивает создание экземпляра класса одним объектом
class Singleton {
  constructor() {
    if (!!Singleton.some) return Singleton.some; // проверяем существует ли уже экземпляр клааса в переменной класса, если да возвращаем его
    Singleton.some = this; // если не существует то привязываем текущий экземпляр в переиенную класса
    return this; // без этого также сработало бы, но хорошей практикой является сохранение неизменного возврата из метода.
  }
}
const obj1 = new Singleton(), obj2 = new Singleton();
console.log(obj1 === obj2); // => true
obj1.test = 1;
console.log(obj2.test); // => 1


// применение - счетчик - при вызове Class.getNumber() возвращает сперва 1 потом 2 потом 4 итод
class Counter {
  constructor() {
    if (!!Counter.some) return Counter.some;
    Counter.some = this;
    this.number = 0;
    return this;
  }
  add(){
    this.number++;
    return this.number;
  }
  static getNumber() {
    return new Counter().add();   // Создание счетчика и вызов метода экземпляра
  }
}
console.log(Counter.getNumber());                 //=> 1
console.log(Counter.getNumber());                 //=> 2
console.log(Counter.getNumber());                 //=> 3



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
