//                                                 Объекты

// В JavaScript объект (экземпляр класса Object) — это коллекция данных, они позволяют объединять данные и функции в одну структуру. В JavaScript объекты являются одним из основных типов данных и позволяют хранить значения в виде пар «ключ-значение».

// Object - является материнским классом от которого наследуют все прочие классы кастомных или встроенных объектов

// Ключи (или свойства) объекта обозначаются строками(по умолчанию предбазует любой ключ в строку) и могут быть доступны через точечную нотацию или квадратные скобки. Значениями могут быть любые данные, включая другие объекты, массивы и функции.

// Объекты можно изменять, добавляя, изменяя или удаляя свойства в любое время

// Функции, которые хранятся в объектах, называются методами.

// Объекты в JavaScript могут наследовать свойства и методы от других объектов через прототипное наследование.


// ?? Похоже в JS нет значения по умолчанию для объекта и придется использовать чтото вроде ??
obj[n] || false



//                                            Создание объектов


// 1. Способ создания объекта через конструктор Object (new - ключевое слово отвечающее за выделение памяти)
const obj = new Object();


// 2. Литеральный способ создания объектов:
const obj2 = {};

// Литеральный способ создания объектов, удобен тем что можно создать объект сразу содержащий свойства и функции
const person = {
  // Тоесть можно определить атрибуты и функции объекта во время инициализации:
  name: 'Kroker',                  // свойство объекта
  sword: ['Gigant', 'Very big'],   // свойство с другим объектом (многомерный объект)
  adress: { town: 'XZ', street: 5},
  greet: function() {              // метод объекта, он относится именно к этому конкретному объекту, а не конструктору(классу)
    console.log('Hello, ' + this.name);
  },
  // this - возвращает сам объект этот person
  NameSword: function () {         // синтаксис метода 1
    return this.name + ' is ' + this.sword[0];   // используем свойство в методе объекта
  },
  what(n) {                        // синтаксис метода 2
    return 9000 + n;
  },
  // Если мы используем функции - параметры внутри методов, например во встроенных методах, то нужно всегда использовать синтаксис стрелочной функции, а не обычной функции без имени, тк обычный синтаксис функции меняет контекст и this внутри них не вернет исходный объект, со стрелочными функциями такого не будет, тк они не создают своего контекста
  some() {
    console.log(this);    //=> { name: 'Kroker', sword: [ 'Gigant', 'Very big' ], ...
    // Так делать не надо, this возвращает глобальный объект среды интерпритации
    this.sword.forEach(function () {
      console.log(this);  //=> <ref *1> Object [global] { global: [Circular *1], ...
    });
    // Так делать надо, this возвращает текущий объект
    this.sword.forEach(() => {
      console.log(this);  //=> { name: 'Kroker', sword: [ 'Gigant', 'Very big' ], ...
    });
  }
};



//                                             Клонирование и мердж объектов

const obj1 = { name: 'Anna', x: 20 }
const obj2 = { name: 'Boris', y: 99 }

// 1. Можно сконировать копию объекта (тк при простом присвоении в другую переменную, просто будет еще одна ссылка на тот же объект)
const obj1Clone = { ...obj1 } // этот объект будет иметь такие же поля и их значения как и obj1
console.log(obj1Clone);          //=> { name: 'Anna', x: 20 }

// 2. Можно создать объект объединяющий свойства других объектов. Записывает свойства по порядку и если будут одинаковые свойства, то каждый раз перезапишет значение и оно будет как у последнего объекта
const objMerged = { ...obj1, ...obj2 }
console.log(objMerged);          //=> { name: 'Boris', x: 20, y: 99 }



//                                  Object.assign - создание объектов из других структур

// Object.assign - метод создает объекты из других структур данных

// 1. Создание объекта из набора переменных:
let name = 'Kroker', age = 38, happy = true;
const obj = Object.assign({ name, age, happy });
console.log(obj);  //=> { name: 'Kroker', age: 38, happy: true }

// Для создания в классе, применяется с this для задания свойств экземпляра класса
const obj2 = Object.assign(this, { name, age, happy });
console.log(obj2); //=> { name: 'Kroker', age: 38, happy: true }


// 2. Создание объектов из массива, где индексы будут ключами, а элементы знвачениями:
Object.assign({}, ['a','b','c']); //=> {0:"a", 1:"b", 2:"c"}

// Из массива объектов создаем объект с элементами каждого из объектов, при повторении ключа осталяем 1й(поэтому реверс):
let arr = [{a:1, b:2}, {a:5, c:3}];
const obj = Object.assign({}, ...arr.reverse());
console.log(obj); //=> { a: 1, c: 3, b: 2 }



//                                      Доступ к свойствам и методам объектов

// Можно вернуть функцию конструктор объекта (?)
person['constructor']; //=> [Function: Object]

// Доступ к свойству при помощи точечной нотации
person.name;         //=> 'Kroker'

// Доступ к свойству при помощи квадратных скобок
person['name'];      //=> 'Kroker'

// Несуществующие свойства возвращают undefined
person.some;         //=> undefined
person['some'];      //=> undefined

// Доступ к свойствам вложенных объектов
person.sword[1];      //=> Very big
person.adress.street; //=> 5

// Доступ к методам объекта
person.NameSword();   //=> Kroker is Gigant
person.what(9);       //=> 9009



//                                 Установка свойств и методов в существующий объект

// Можно установить свойства уже после определения объекта, любым из способов
person.dog = "Caesar";
person["dog"] = "Caesar";
console.log(person.dog); //=> 'Caesar'

// Можно установить методы уже после определения объекта:
person.describe = function() {                      // describe - название функции. Теперь ее можно вызывать от объекта
  return 'Apple is ' + this.color;
}
person.multiply = function(a, b) { return a * b; }  // с параметрами
person.describe();     //=> Apple is red
person.multiply(2, 5); //=> 10



//                                                 Фичи ключей

// Объекты по умолчанию предбазует любой ключ в строку
obj = {1:5, 3:10}
console.log(obj); //=> { '1': 5, '3': 10 }
obj[['a', 5]] = '1' // преобразует ключ-массив в 'a,5'
console.log(obj); //=> { '1': 5, '3': 10, 'a,5': '1' }



//                                         Деструктуризация объектов ES6

// Деструктуризация объекта - это например извлечение значений свойств и присвоиение их в отдельные переменные

// Удобный способ ES6 чтобы не приваивать в ручную:
const obj = { a: 1, b: 2, c: 3, d: 4 };

// Чтобы принять значение ключа в переменную, нужно использовать одноименную этому ключу переменную, порядок не важен
const { d, a } = obj;
console.log(d); //=> 4
console.log(a); //=> 1

// Можно использовать Spread Operator, чтобы передать в эту переменную новый объект со всеми ключами, что не попали в отдельные переменные
const { b, ...tail } = obj;
console.log(b);    //=> 2
console.log(tail); //=> { a: 1, c: 3, d: 4 }

// Можно задать значение по умолчанию, если вдруг такого ключа в объекте нет, иначе будет ошибка
const { x = 0 } = obj;
console.log(x);    //=> 0

// Можно создать любое имя для переменной, "переименовав" ключ
const { d: some, y: sss = 0 } = obj;
console.log(some);    //=> 4
console.log(sss);     //=> 0

// Можно принимать зачения ключей из вложенных объектов
const { e, f: { e: e2, f } } = { e: 1, f: { e: 3, f: 4 } };
console.log(e);    //=> 1
console.log(e2);   //=> 3
console.log(f);    //=> 4

// Если пришел пустой объект то вложннному объекту нужно значение по умолчанию, если берем переменную из него
const { a: { a: a2 = 'A' } = {} } = {};
console.log(a2);    //=> 'A'

// Можно принимать зачения из вложенных массивов, используя деструктуризацию массива
const { g: [, second] } = { g: [1, 2, 3] };
console.log(second);    //=> 2

// Если переменные уже объявлены можно деструктурировать без const или let, но чтобы интерпритатор не воспринял это как блок кода нужно все выражение взять  круглые скобки
let z;
({ z } = { z: 1 }); //=> SyntaxError: Unexpected token '='
console.log(z);     //=> 1

// Удобно производить деструктуризацию прямо в параметрах функции, если она принимает объект, или в теле фунции
function someSome({e, f: {e: e2, f}, g: [,, n]}) {
  return [e, e2, f, n];
}
console.log(someSome({ e: 1, f: { e: 3, f: 4 }, g: [1, 2, 3] }));     //=> [ 1, 3, 4, 3 ]



//                                         Объектные обертки над примитивами

// В JS объектами являются не тольно массивы, но и обертки над примитивами, тк когда мы вызываем методы от примитивов, то вызываем их не от примитива, тк он не объект, а от объектной обертки.

// Когда вы используете примитивный объект, как если бы он был объектом, среда выполнения автоматически повышает его до экземпляра объекта. Это происходит, когда вы используете примитивное значение с операторами .или [].

// this из метода вернет не сам примитив, а его объектную обертку, экземпляр созданный с помощью «String», «Number» или какого-либо другого собственного конструктора:
String.prototype.method = function() {
  return this;
};
Number.prototype.method = function() {
  return this;
};
"12".method(); //=> [String: '12']
(12).method(); //=> [Number: 12]
typeof "12".method(); //=> object
typeof (12).method(); //=> object

// Из таких объектов (экземпляров String, Number или Boolean) примитивное значение можно получить с помощью this.valueOf()
"12".method().valueOf(); //=> "12"



//                                   Геттеры и сеттеры для конкретного объекта

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

// Начальные значения свойств
person.firstName; //=> Jane
person.lastName;  //=> Doe

// Геттер
person.fullName;  //=> Jane Doe

// Изменим свойства при помощи сеттера, а не напрямую
person.fullName = 'Vasya Pupkin';
person.firstName; //=> Vasya
person.lastName; //=> Pupkin



//                                     Круговой объект(ссылающийся сам на себя)

// Для того чтобы объект ссылался сам на себя нужно привоить его значением в какое либо его же свойство

const circular = { value: "Hello World" }
circular.self = circular   // self - название просто придуманое можно любое
circular.self   //=> <ref *1> { value: 'Hello World', self: [Circular *1] }



//                                Hаследование(Цепочка прототипов). Object.prototype

// Все объекты имеют встроенное внутреннее свойство прототипа. Это свойство по сути является ссылкой на другой объект.

// Object.create - метод создающий связь между объектами, позволяющую наследовать.
const alfa = {
  some: 'this is some',
  what(n) { return 9000 + n; }
}
const beta = Object.create(alfa);

// Теперь объект beta унаследует все свойства объекта alfa
beta;         //=> {}              // в самом объекте нет свойств и функций, но он унаследует их по цепочке
beta.some;    //=> 'this is some'
beta.what(9); //=> 9009

// Теперь и любые новые свойства, добавленные в alfa, будут автоматически доступны на beta
alfa.cat = 'Pizduke';
beta.cat;   //=> 'Pizduke'
const gamma = Object.create(beta);
gamma.some; //=> 'this is some'


// Если свойство недоступно для текущего объекта, оно будет продолжаться вверх по цепочке прототипов до тех пор, пока свойство не будет найдено или пока мы не достигнем вершины цепочки, где оно вернет undefined

// Для объектов на самой вершине цепочки выше есть встроенный Object.prototype, все объекты будут наследовать от него.
Object.prototype.description = 'TODO';  // добавит всем объектам свойство description со значением 'TODO'
const objA = {};
objA.description; //=> 'TODO'



//                                           Статические методы Object

const some = { kroker: "Gigant", gonzik: "Krutitsa", rS: "Robot Serenka"}
Object.keys(some);    //=> [ 'kroker', 'gonzik', 'rS' ]
Object.values(some);  //=> [ 'Gigant', 'Krutitsa', 'Robot Serenka' ]
Object.entries(some); //=> [ [ 'kroker', 'Gigant' ], [ 'gonzik', 'Krutitsa' ], [ 'rS', 'Robot Serenka' ] ]
Object.fromEntries([ [ 'John', 0 ], [ 'Brian', 1 ] ]); //=> { John: 0, Brian: 1 }



//                                          Методы экземпляра объекта

// hasOwnProperty - метод проверяет существует ли такой ключ именно в этом объекте (унаследованый ключ не считается)
const obj = {a:1, b:2, c:3};
obj.hasOwnProperty('a');  //=> true
obj.hasOwnProperty('d');  //=> false
const obj2 = Object.create(obj);
obj2.hasOwnProperty('a'); //=> false














//
