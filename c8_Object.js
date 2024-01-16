//                                            Объекты/Хэшмап

// Мб это не хэшмап, а просто надкласс над всем классами, которые строятся по тому же принципу ??

// В javascript объект(хэшмап) является одним из основных типов данных. Определить объект можно:
var obj = new Object() // через конструктор
var obj = {} // или так

// Можно определить атрибуты объекта во время инициализации:
var animal = {species:"dog"}
animal.species; //=> 'dog'
animal['species']; //=> 'dog'
animal.some; //=> undefined
animal['some']; //=> undefined
// Также можете установить свойства после определения объекта:
animal.name = "Caesar"; // так
animal["name"] = "Caesar"; //или так
console.log(animal); //=> { species: 'dog', name: 'Caesar' }


// Можно создавать(хранить) функции для объекта
var apple = new Object()
apple.describe = function() {      // describe - название функции. Теперь ее можно вызывать из хэша
  return 'Apple is ' + this.color;
}
apple.multiply = function(a,b) { return a*b; }  // с параметрами
console.log(apple.describe()); //=> Apple is red
console.log(apple.multiply(2, 5)); //=> 10


// С разными значениями, в том числе другими объектами(многомерный хэш-объект)
var person = {
  name: 'Kroker',
  sword: ['Gigant', 'Very big'],
  adress: { town: 'XZ', street: 5},
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


// Похоже в JS нет значения по умолчанию для хэша и придется использовать чтото вроде:
obj[n] || false



//                                       Прототипы объектов. Цепочка прототипов

// В JavaScript все объекты имеют встроенное внутреннее свойство прототипа. Это свойство по сути является ссылкой на другой объект. Вы можете создать связь между объектами, вызвав Object.create для родительского объекта:
var alfa = {
  some: 'this is some'
}
var beta = Object.create(alfa);
console.log(beta.some); //=> 'this is some'
// Теперь honeycrisp связан с apple. Любые свойства, добавленные в apple, будут автоматически доступны на honeycrisp по этой ссылке. Этот поиск по apple происходит из-за внутреннего механизма JavaScript «Цепочки прототипов». Если свойство недоступно для текущего объекта, оно будет продолжаться вверх по цепочке прототипов до тех пор, пока свойство не будет найдено или пока мы не достигнем вершины цепочки (где оно вернет неопределенное значение). Для объектов самой вершиной цепочки является встроенный Object.prototype; все объекты будут наследоваться от него.
var gamma = Object.create(beta);
console.log(gamma.some); //=> 'this is some'



//                                                   Фичи

// При задании цифровых ключамей, она создаются строковыми
console.log({1:5,3:10,2:2,6:3,8:8}) //=> { '1': 5, '2': 2, '3': 10, '6': 3, '8': 8 }




//                                                Методы хэшей

var some = { kroker: "Gigant", gonzik: "Krutitsa", rS: "Robot Serenka"}
Object.keys(rooms) //=> [ 'kroker', 'gonzik', 'rS' ]
Object.values(some) //=> [ 'Gigant', 'Krutitsa', 'Robot Serenka' ]
Object.entries(some) //=> [ [ 'kroker', 'Gigant' ], [ 'gonzik', 'Krutitsa' ], [ 'rS', 'Robot Serenka' ] ]

// assign - создает хэш из переменных
var name = 'Kroker', age = 38, happy = true;
var obj = Object.assign({ name, age, happy });
console.log(obj); //=> { name: 'Kroker', age: 38, happy: true }
var obj2 = Object.assign(this, { name, age, happy }); // так применяется в классе, с this для экземпляра класса
console.log(obj2); //=> { name: 'Kroker', age: 38, happy: true }














//
