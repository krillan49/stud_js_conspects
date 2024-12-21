//                                            ООП. Классы и объекты.

// В JS ООП на прототипах. Класс это просто сахар синтаксический

class Person {
  // Ессли функция это метод в класе, то не нужно писать ключевое слово function
  constructor(name='Vasya', age=0, happy=true) {
    // this - в области конструктора и метов экземпляра это ссылкак на объект, а в статических методах ссылка на класс

    // Вариант 1. присваиваем аргументы конструктора в переменные экземпляра при помощи this
    this.name = name;
    this.age = age;
    this.happy = happy;

    // Вариант 2. присваиваем аргументы конструктора через метод объекта
    Object.assign(this, { name, age, happy });

    // Создание свойства класса (переменной класса ?)
    Person.aaa = 'AAA';
    // Person.#ccc = 'CCC';  // нельзя создать закрытое статическое свойство в конструкторе

    // Определение метода экземпляра в конструкторе
    this.getName = () => this.name + ' ' + this.happy;

    // Определение метода класса в конструкторе
    Person.up = (n) => this.age + n;
  }
  // класс по умолчанию обладает геттером и сеттером для каждой переменной экземпляра, соответственно позволяет к ней обращаться или менять без доп кода. (?? конструктор просто создает эти свойства у объекта и для них не нужны геттеры и сеттеры ??)

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
  // Обределение закрытого свойства/переменной класса, которое существует только в теле класса и не может быть вызванно напрямую, а только через метод-геттер
  static #ссс = 42;

  static addNumber() {
    Person.number++;
    return this.number;  // переменную класса в теле класса можно писать как через имя класа так и через this
  }

  static getCCC() { // метод чтиобы вызвать закрытое статическое свойство/переменную
    return this.#ссс;
  }
}

// Создание объекта экземпляра класса
const kroker = new Person('Kroker', 37, true);

// Свойства и методы экземпляра:
console.log(kroker.name);                 //=> 'Kroker'            // Обращение к свойству экземпляра
kroker.age = 25;                                                   // Изменение значения свойства экземпляра
console.log(kroker.age);                  //=> 25
console.log(kroker.info());               //=> 'Я Kroker, мне 25'  // Обращение к методу эуземпляра
console.log(kroker.getName());            //=> 'Kroker true'       // Обращение к методу определенному в конструкторе

// Свойства и методы статические:
console.log(Person.greetExtra('Gigant')); //=> 'Welcome Gigant'    // Вызов метода класса(статического)
console.log(Person.up(10));               //=> 35                  // Вызов метода класса определенного в конструкторе
console.log(Person.aaa);                  //=> 'AAA'               // Вызов свойства/переменной класса
Person.aaa = 'BBB'                                                 // Изменение статического свойства/переменной
console.log(Person.aaa);                  //=> 'BBB'               // Вызов свойства/переменной класса
console.log(Person.number);               //=> 0
console.log(Person.addNumber());          //=> 1
console.log(Person.addNumber());          //=> 2
console.log(Person.number);               //=> 2
console.log(Person.getCCC());             //=> 42                  // Вызов закрытого свойства/переменной класса через метод



//                                           Сеттеры и геттеры. get. set

// Методы созданные от ключевых слов get или set оттличаются от кастомных геттеров и сеттеров тем, что вызываются как свойства, а не как методы, тоесть без (). Мы какбы оборачиваем свойство в надсвойство, от которого будем менять исходное свойство

class Some {
  constructor(some, name) {
    this._some = some; // _ принятый нейминг, чтобы имя геттера не было таким же как имя свойства
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
  // Для того, чтобы, например переменную можно было только читать, содаем только геттер
  get name() {
    return this._name;
  }

  // Статический геттер например для вызова закрытой статической переменной
  static #foo = 42;

  static get foo() {
    return this.#foo;
  }
}

s = new Some(1, 'Vasya');
console.log(s.some); //=> 1
s.some = 3;
console.log(s.some); //=> 3
console.log(s.name); //=> 'Vasya'
s.name = "Petya";                    // Переназначение завершится неудачей, без ошибки
console.log(s.name); //=> 'Vasya'

console.log(Some.foo); //=> 42


// Удобно использовать сеттеры свойств, зависящих от других свойств, тк по умолчанию они не будут меняться
// Можно использовать сеттеры для переназначения свойств от зависимых от них свойств
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this._volume = this.length * this.width * this.height; // это свойство не изменится от изменения значений свойств множетелей, тк свойство хранит значение произведения
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
console.log(c.volume);  //=> 60 // изменилось, тк вызвано через метод сеттер


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
  name: { // имя для геттера и сеттера
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
    this.status = status; // приходится переопределять, тк в базовом классе порядок параметров name, age, legs, species, status, соответственно и в super надо передавать в таком же, либо переопределять
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
    super(name, age, 4, "dog", status); // проставляем в правильном порядке, чтобы не переопределять
    this.master = master;
  }
  introduce() {
    return `${super.introduce()} My master is ${this.master}`;
    // super.introduce()  - используем метод из материнского класса
  }
}

// Класс наследник синтаксис 3
class Shark extends Animal {
  constructor(name, age, status, master, legs=4, species="dog") { // Используем значения по умолчанию
    super(name, age, legs, species, status);
    this.master = master;
  }
}


// ВТФ ???     https://www.codewars.com/kata/652a19cd7e92f356f437d059
class Class {
  static #foo = 42;

  static get foo() {
    return this.#foo;
  }
}
// Я написал класс Classс закрытым staticсвойством foo и геттером для его извлечения:
Class.foo;
// Однако когда я создаю класс Subclass, который наследует от Class, код ломается:
class Subclass extends Class {}
Subclass.foo; // Error !  но должно вернуть 42
// Можете ли вы исправить код?
// Измените Class так, чтобы это Subclass.foo работало правильно. Это также должно работать для любого уровня наследования от Class, например с:
class Deepclass extends Subclass {}
Deepclass.foo; // should return 42




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
console.log(obj1 === obj2); //=> true
obj1.test = 1;
console.log(obj2.test);     //=> 1


// применение сингелтона для, например счетчика - при вызове Class.getNumber() возвращает сперва 1 потом 2 потом 4 итод
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
function makeClass(...vars) { // функция создания класса принимает имена свойств/переменных экземпляра
  return function(...pars) {  // возвращаем функцию-класс, которая принимает значения для переменных
    vars.forEach((variable, i) => this[variable] = pars[i]); // назначаем значения свойств для экземпляров
  };
}
// Создаем класс:
const Animal = makeClass("name", "species", "age", "health", "weight", "color"); // имена переменных экземпляра
// Создаем объект/экземпляр класса:
const dog   = new Animal('Bob',      'Dog',     5,   'good',   '50lb', 'brown');
console.log(dog.name) //=> 'Bob'


// вар 2. Возвращаем класс с методом конструктора
function makeClass(...vars) {
  return class {
    constructor(...pars) {
      vars.forEach((variable, i) => this[variable] = pars[i]);
    }
  }
}
const Animal = makeClass("name","species","age","health","weight","color")
const dog = new Animal('Bob','Dog','5','good','50lb','brown')
console.log(dog.name) //=> 'Bob'












//
