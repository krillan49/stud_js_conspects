//                                            ООП. Классы и объекты.

// В жс ооп на прототипах. Класс это просто сахар синтаксический

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



// Полиморфизм – это общий функционал для всех роботов и не важно что каждый робот может очень сильно отличаться друг от друга. К примеру, в главном классе мы указываем возможность передвижения для всех последующих роботов. Далее в классе наследнике мы можем дополнительно указать возможность левитации для робота, в другом же классе укажем возможность передвижения по воде и так далее. Получается, что есть общий функционал что записан в главном чертеже, но его можно переписать для каждого последующего робота (для каждого наследника).



//                                             Наследование. super

// Базовый класс
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
    return `${super.introduce()} My master is ${this.master}`; // используем метод из материнского класса
  }
}

// Класс наследник синтаксис 3
class Shark extends Animal {
  constructor(name, age, status, master, legs = 4, species = "dog") { // Используем значения по умолчанию
    super(name, age, legs, species, status);
    this.master = master;
  }
}













//
