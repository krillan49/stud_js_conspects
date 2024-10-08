//                                              Объекты

// В JS объектами являются не тольно массивы, но и обертки над примитивами, тк когда мы вызываем методы от примитивов, то вызываем их не от примитива, тк он не объект, а от объектной обертки.

// о this:
String.prototype.method = function() {
  return this;
};
Number.prototype.method = function() {
  return this;
};
var str = "12";
var num = 12;
console.log( str.method() ); //=> [String: '12']
console.log( num.method() ); //=> [Number: 12]
// Это всего лишь собственные объекты; вы используете this так же, как и в обычной функции-прототипе.
// Обратите внимание, что вы действительно работаете с объектами: экземплярами, созданными с помощью «String», «Number» или какого-либо другого собственного конструктора. Вещи вроде "hello world" и 12.54 не являются объектами, они примитивы. У них нет прототипов.
// Когда вы используете примитивный объект, как если бы он был объектом, среда выполнения автоматически повышает его до экземпляра объекта. Это происходит, когда вы используете примитивное значение с операторами .или [].
// Из таких объектов (экземпляров String, Number или Boolean) примитивное значение можно получить с помощью this.valueOf()


obj['constructor'] //=> [Function: Object]

// ?? Мб Object это не хэшмап, а просто надкласс над всем классами, которые строятся по тому же принципу ??

// Является материнским классом от которого наследуют все прочие классы кастомных или встроенных объектов

// ?? Похоже в JS нет значения по умолчанию для для объекта и придется использовать чтото вроде ??
obj[n] || false

// по умолчанию предбазует любой ключ в строку


// В javascript объект(экземпляр класса Object) является одним из основных типов данных. Определить объект можно:
let obj = new Object() // через конструктор // new - ключевое слово отвечающее за выделение памяти
let obj = {}           // или так

// Можно определить атрибуты экземпляра объекта во время инициализации:
const animal = { species:"dog" }
animal.species;      //=> 'dog'
animal['species'];   //=> 'dog'
animal.some;         //=> undefined
animal['some'];      //=> undefined
// Установить свойства после определения объекта:
animal.name = "Caesar";    // так
animal["name"] = "Caesar"; // или так
console.log(animal); //=> { species: 'dog', name: 'Caesar' }


// Можно создавать(хранить) функции для конкретного экземпляра объекта
const apple = new Object()
apple.describe = function() {                      // describe - название функции. Теперь ее можно вызывать от объекта
  return 'Apple is ' + this.color;
}
apple.multiply = function(a, b) { return a * b; }  // с параметрами
apple.describe();     //=> Apple is red
apple.multiply(2, 5); //=> 10


// Пример разными значениями, в том числе другими объектами(многомерный объект)
const person = {
  name: 'Kroker',
  sword: ['Gigant', 'Very big'],
  adress: { town: 'XZ', street: 5},
  NameSword: function () { // синтаксис функции 1
    return this.name + ' is ' + this.sword[0];
  },
  what(n) {               // синтаксис функции 2
    return 9000 + n;
  }
}
person.sword[1];      //=> Very big
person.adress.street; //=> 5
person.NameSword();   //=> Kroker is Gigant
person.what(9);       //=> 9009



//                                       Геттеры и сеттеры для конкретного объекта
const person = {
  firstName: "Jane",
  lastName: "Doe",
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(newName) {
    [this.firstName, this.lastName] = newName.split(' ');
  }
}



//                                     Круговой(ссылающийся сам на себя объект)

const circular = { value: "Hello World" }
circular.self = circular   // self - название просто придуманое можно любое
circular.self   //=> <ref *1> { value: 'Hello World', self: [Circular *1] }



//                             Цепочка прототипов(наследование). Object.prototype

// Все объекты имеют встроенное внутреннее свойство прототипа. Это свойство по сути является ссылкой на другой объект. Можно создать связь между объектами, вызвав Object.create для родительского объекта:
const alfa = { some: 'this is some' }
const beta = Object.create(alfa);
console.log(beta);       //=> {}              // тоесть в самом объекте не этого свойства, он возьмет его по цепочке
console.log(beta.some);  //=> 'this is some'
alfa.cat = 'Pizduke';                         // Любые свойства, добавленные в alfa, будут автоматически доступны на beta
console.log(beta.cat);   //=> 'Pizduke'
const gamma = Object.create(beta);
console.log(gamma.some); //=> 'this is some'

// Если свойство недоступно для текущего объекта, оно будет продолжаться вверх по цепочке прототипов до тех пор, пока свойство не будет найдено или пока мы не достигнем вершины цепочки (где оно вернет неопределенное значение).

// Для объектов на самой вершине цепочки выше есть встроенный Object.prototype, все объекты будут наследовать от него.
Object.prototype.description = 'TODO';  // добавит всем объектам свойство description со значением 'TODO'
const objA = {};
console.log(objA.description); //=> 'TODO'



//                                                   Фичи

// При задании цифровых ключей, они создаются строковыми
console.log({1:5,3:10,2:2,6:3,8:8}); //=> { '1': 5, '2': 2, '3': 10, '6': 3, '8': 8 }

obj[['a', 5]] = '1' //=> преобразует ключ в 'a,5'



//                                                Методы Object

const some = { kroker: "Gigant", gonzik: "Krutitsa", rS: "Robot Serenka"}
Object.keys(some);    //=> [ 'kroker', 'gonzik', 'rS' ]
Object.values(some);  //=> [ 'Gigant', 'Krutitsa', 'Robot Serenka' ]
Object.entries(some); //=> [ [ 'kroker', 'Gigant' ], [ 'gonzik', 'Krutitsa' ], [ 'rS', 'Robot Serenka' ] ]
Object.fromEntries([ [ 'John', 0 ], [ 'Brian', 1 ] ]); //=> { John: 0, Brian: 1 }

// assign - создает объект:
// из переменных
let name = 'Kroker', age = 38, happy = true;
const obj = Object.assign({ name, age, happy });
console.log(obj);  //=> { name: 'Kroker', age: 38, happy: true }
const obj2 = Object.assign(this, { name, age, happy }); // так применяется в классе, с this для экземпляра класса
console.log(obj2); //=> { name: 'Kroker', age: 38, happy: true }
// из массива
Object.assign({}, ['a','b','c']); //=> {0:"a", 1:"b", 2:"c"}
// Из массива объектов создаем объект с элементами каждого из объектов, при повторении ключа осталяем 1й(поэтому реверс):
let arr = [{a:1, b:2}, {a:5, c:3}];
const obj = Object.assign({}, ...arr.reverse());
console.log(obj); //=> { name: 'Kroker', age: 38, happy: true }



//                                         Методы экземпляра объекта

// hasOwnProperty - существует ли такой ключ именно в этом объекте (не унаследован)
const obj = {a:1, b:2, c:3};
console.log(obj.hasOwnProperty('a'));  //=> true
console.log(obj.hasOwnProperty('d'));  //=> false
const obj2 = Object.create(obj);
console.log(obj2.hasOwnProperty('a')); //=> false














//
