//                                            Объекты/Хэшмап

// В javascript объект(хэш ??) является одним из основных типов данных. Определить объект можно:
var obj = new Object() // через конструктор
var obj = {} // или так

// Вы можете определить атрибуты объекта во время инициализации, например:
var animal = {name:"dog"}
animal.name; //=> 'dog'
animal['name']; //=> 'dog'
animal.some; //=> undefined
animal['some']; //=> undefined

// вы также можете установить/получить некоторые свойства после определения объекта, например:
var animal = {}
animal.name = "dog" // так
animal["name"] = "dog" //или так


// Можно создавать(хранить) функции для объекта
var apple = new Object()
apple.color = 'red'
apple.describe = function () { // describe - название функции
  return 'Apple is ' + this.color;
}
console.log(apple.describe()); //=> Apple is red


// Многомерный хэш-объект
var rooms = {
  kroker: {name:"Kroker", item:"Sword", status:"Gigant"},
  gonzik: {name:"Gonzik", item:"Vljenka", status:"Krutitsa"},
  rS: {name:"Robot Serenka", item:"Pistol", status:"On repair"}
}

// С разными значениями
var person = {
  name: 'Kroker',
  sword: ['Gigant', 'Very big'],
  adress: {
    town: 'XZ',
    street: 5
  },
  NameSword: function () { // синтаксис функции 1
    return this.name + ' is ' + this.sword[0];
  },
  what(n) { // синтаксис функции 2(c параметром)
    return 9000 + n;
  }
}
console.log(person.sword[1]); //=> Very big
console.log(person.adress.street); //=> 5
console.log(person.NameSword()); //=> Kroker is Gigant
console.log(person.what(9)); //=> 9009


// Круговой(ссылающийся сам на себя объект)
var circular = {
  value: "Hello World"
}
circular.self = circular   // self - название просто придуманое можно любое
console.log(circular.self) //=> <ref *1> { value: 'Hello World', self: [Circular *1] }



//                                                   Фичи

console.log({1:5,3:10,2:2,6:3,8:8}) //=> { '1': 5, '2': 2, '3': 10, '6': 3, '8': 8 }




//                                                Методы хэшей

var some = { kroker: "Gigant", gonzik: "Krutitsa", rS: "Robot Serenka"}
Object.keys(rooms) //=> [ 'kroker', 'gonzik', 'rS' ]
Object.values(some) //=> [ 'Gigant', 'Krutitsa', 'Robot Serenka' ]
Object.entries(some) //=> [ [ 'kroker', 'Gigant' ], [ 'gonzik', 'Krutitsa' ], [ 'rS', 'Robot Serenka' ] ]



//                                        Конструкторы и прототипы. (?? Уже не хэши ??)

// Конструктор сразу с параметрами для объекта
function Fruit(color, shape) {
  this.color = color;
  this.shape = shape;
}
// тоесть сразу при создании объекта задаем ему параметры
var melon = new Fruit('yellow', 'round')
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
console.log(albert.name())     //=> "Albert"
console.log(boris.name())      //=> "Boris"
boris.name("Bobo")
console.log(boris.name())      //=> "Bobo"














//
