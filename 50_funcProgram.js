//                                   Основы функционального программирования

// Функциональное программирование(ФП) - это одна из основных парадигм программирования. Менее популярно с точки зрения бизнеса чем ООП.
// Не все языки могут применить ФП, есть чисто ФП-языки(Haskell, Lisp, F#), есть мультипарадигменные языки(JS, Scala) и есть чисто ООПшные языки

// ФП основано на том, что мы управляем функциями как математическими функциями(лямбда вычисления), из чего и следуют все дальнейшие свойства и принципы функционального программирования

// Четыре основных концепции вытекающие из ФП:
// 1. Декларативный подход в написании кода
// 2. Чистые функции
// 3. Иммутабельность(неизменяемость) - подход работы с данными при котором данные не изменяются
// 4. Функции первого класса и функции высшего порядка. Дают гибкость в написании кода



//                                           Процедура и функция

// Процедура - это просто кусок/блок кода(подпрограмма), который чтото выполняет, набор заданных действий

// Функция имеет все свойства процедуры, но при этом чтото возвращает, например какоето значение, если его нет все равно будет возвращать например undefined(JS) nil(Ruby) итд

// В ФП мы работаем с функциями как с математическими функциями, те при одних и тех же переданных параметрах будет возвращаться всегда один и тот же результат. Тоесть к функциям в ФП нужно относиться не как к набору действий, а как к результату вычислений



//                                              Декларативность

// Код можно писать в 2х ситлях:
// 1. Императивный стиль - описываем действие(описываем как мы хотим чтото получить, те каждое действие ведущее к результату)
// 2. Декларативныфй ситль - описываем результат(описываем что мы хотим получить, те задачу)

// Декларативность это свойство не только ФП, но и любого хорошего кода. Но у декларативного кода "под капотом" все равно будет императивный код


// 1. Фунция в императивном стиле, в которой фильтруем массив объектов и считаем сумму по свойству возраста:
function calcUsersSumAgeByCountry(users, country) {
  const filteredUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].country === country) filteredUsers.push(users[i]);                  // фильтруем по стране
  }
  let sum = 0;
  for (let i = 0; i < filteredUsers.length; i++) { sum += filteredUsers[i].age; }    // считаем общий возраст
  return sum;
}

// 2. Для того чтобы привести функцию к декларативному стилю нужно создать еще один слой абстрации и вынести каждое действие в отдельную функцию:
function filterByCountry(users, country) { // Отдельная функция фильтрует по стране(это "подкапотный" имеративный код)
  const filteredUsers = [];
  for (let i = 0; i < users.length; i++) { if (users[i].country === country) filteredUsers.push(users[i]); }
  return filteredUsers;
}
function calcUsersSumAge(users) { // Отдельная функция считает суммарный возраст("подкапотный" имеративный код)
  let sum = 0;
  for (let i = 0; i < users.length; i++) { sum += users[i].age; }
  return sum;
}
function calcUsersSumAgeByCountry(users, country) { // функция(более высокий слой абстракции) с декларативным кодом
  const filteredUsers = filterByCountry(users, country);
  return calcUsersSumAge(filteredUsers);
}

// 3. Но можно сделать код декларативным и без использования новых функций, при помощи встроенных функций. Встроенные функции языков это результат влияния на них ФП:
function calcUsersSumAgeByCountry(users, country) {
  const filteredUsers = users.filter(user => user.country === country);
  return filteredUsers.reduce((sum, user) => sum + user.age, 0);
}

// 4. Еще более декларативный вариант с выносом функций-аргументов для стандартных функций как функций общего назначения, которые могут преобразовывать данные по разным полям.
const filterUsersByField = (field, value) => (user) => user[field] === value;  // возвращает функцию-аргумент фильтр по любому полю
const sumUsersByField = (field) => (sum, user) => sum + user[field]; // возвращает функцию аргумент суммирующую по любому полю
function calcUsersSumFieldByField(users, fieldForFilter, valueForFilter, fieldForSum) {
  return users.filter(filterUsersByField(fieldForFilter, valueForFilter))
              .reduce(sumUsersByField(fieldForSum), 0);
}
const users = [
  {money:1000, age:20, country:'RU'}, {money:5000, age:50, country:'RU'},
  {money:100, age:100, country:'UA'}, {money:300, age:200, country:'UA'}
]
console.log(calcUsersSumFieldByField(users, 'country', 'RU', 'age'));  //=> 70
console.log(calcUsersSumFieldByField(users, 'country', 'UA', 'money')); //=> 400



//                                        Чистые функции и сайд эффекты

// 1й критерий чистоты: чистая функция - это та функция которая при одних и тех же переданных параметрах будет возвращать всегда один и тот же результат

function mult(a, b) { return a * b; }                  // пример чистой функции
function mult(a, b) { return a * b * Math.random(); }  // пример не чистой функции, результат будет разным при одинаковых a и b


// 2й критерий чистоты: чистая функция не содержит сайд эффектов, те не зависит от внешнего контекста/состояния, глобальных переменных и сторонних действий, которые мы не контролируем и потому гарантированно предсказать не можем(запрос на бэкенд, логирования, ассинхронные действия)

const MODIFER = 5; // пример не чистой функции, результат будет зависеть от внешней переменной, которую ктото может изменить
function mult(a, b) { return a * b * MODIFER; }

async function mult(a, b) { // пример не чистой функции, результат будет зависеть от стороннего действия
  const modifer = await fetch(input: 'get/modifer'); // сайд эффект, запрос с бэкэнда
  return a * b * modifer;
}

let modifer = 5; // пример не чистой функции, результат будет зависеть от внешней переменной, которую наша функция может изменить
function mult(a, b) {
  modifer = 15; // меняем глобальную переменную изза чего могут пострадать другие функции ее использующие
  return a * b * modifer;
}



//                                     Иммутабельность(неизменяемость данных)

// В ФП подразумевается, что данные мутировать нельзя, вместо этого нужно их копировать и работать с этой копией. И в целом не мутировать данные это хорошая практика для любой парадигмы написания кода.

// В чисто функциональных языках программирования иммутабельны все данные по умодчанию, в мультипарадигменных же языках приходится извращаться, чтобы защитить объект от изменений, например:
Object.freeze(obj); // замораживаем объект

// Если мы мутируем данные, то получаем минусы:
// 1. Несогласованность данных
// 2. Возникают неявные побочные эффекты
// 3. Усложняется дебаг и тестирование кода

// Преимущества иммутабельных данных
// 1. Потокобезопасность - те если мы будем работать в потоке то будем уверенны что данные не изменятся
// 2. Проще отслеживать жизненный цикл объекта

// Например в ЖС массивы мутируемые и есть функции, такие как sort() или splice(), которые изменяют исходный массив или так же есть возможность изменить элементы в исходном массиве через =, что может сделать поведение функции непредсказуемым, тк большинство других встроенных функций возвращает измененную копию, не меняя исходный массив. Поэтому в новых спецификациях JS появляются альтернативные методы, например toSorted(), чтобы возвращать копию
function some(arr) {
  arr.sort();                       // Неправильеый подход, мутирует массив
  const copyArr = [...arr].sort();  // Правильный подход, применяем опасный метод к копии
}
const arr = ['z', 'a', 'd'];
some(arr); // тоесть при применении метода sort() к исходному объекту, исходный массив изменится, тк массив это объект, а объекты передаются по ссылке, а не по значению, тоесть в функцию передается не копия объекта, а ссылка на исходный объект
console.log(arr); //=> [ 'a', 'd', 'z' ]

// Важно помнить, что когда мы создаем копию объекта имеющего вложенные объекты, то создается не глубокая копия и внутренние элементы остаются ссылками на ту же облась памяти с изначальными данными. Поэтому нужно либо создать свой метод глубокого копирования рекурсивно, либо использовать глобальную функцию структурного клонирования(JS)



//                                            Функции первого класса

// Функция первого класса - это функция которую мы можем использовать как объект:
// передать в другую функцию;
// вернуть из других функций, а потом вызвать;
// присвоить в переменную;
// сделать элементом массива;

// Функции первого класса это мощный инструмент, дающий большую гибкость

// Например в JS объектами являются не тольно массивы, но и обертки над примитивами, тк когда мы вызываем методы от примитивов, то вызываем их не от примитива, тк он не объект, а от объектной обертки.
// Так же в ЖС и функция является особым объектом с типом 'function' и можно даже объявить для нее какоето поле:
function some(arr) { console.log('hello') }
some.someField = 123;
console.log(some.someField); //=> 123



//                                            Функции высшего порядка

// Функция высшего порядка - это функция, которая принимает аргументом или возвращает другую функцию. Принимая по цепочке функций аргументами другие функции, очень сложно сделать код не чистым или данные мутируемыми, тк сразу все сломается и не будет работать.
// Функция высшего порядка это мощный инструмент, дающий большую гибкость

// Пример1: в ЖС функции map(), filter() итд это функции высшего порядка, тк они принимают и используют другие функции в качестве аргумента, так называемые колбэки. Пример как работает map():
function myMap(callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) { res.push(callback(this[i])) }
  return res;
}
Array.prototype.myMap = myMap;
[1,2,3].myMap(n => n*2) //=> [ 2, 4, 6 ]

// Пример 2: функция высшего порядка с замыканием для меморизации/кэширования
function memo(fn) {
  const memory = {} // в замыкании создаем объект для хранения данных
  return (data) => {
    if (!memory[data]) memory[data] = fn(data);
    return memory[data];
  }
}



//                                              Композиция/конвейер

first(second(third(fourth(fifth(data))))) // Так как в ФП все завязано на функциях, то нам хочется более быстро и удобно выполнять такие последовательные вызовы функций, обеспечить легкую их читаемость, либо может понадобиться поменять порядок их применения


// Например есть функции:
function notEmpty(item) { return item !== undefined && item !== null; } // проверяет не пустое ли значение
function compact(arr) { return arr.filter(notEmpty); }                  // фильтрует не пустые элементы
function sortArr(arr) { return [...arr].sort(); }                       // сортирует элементы
function dubleNumbers(arr) { return arr.map(item => item * 2); }        // изменяет элементы

// И для того чтобы их както скомбинировать можно сделать функцию-обертку и в ней вызывать функции в нужной последовательности
function dubleSortedArray(arr) {
  return dubleNumbers(sortArr(compact(arr))); // но все равно читается не очень хорошо
  // Но нам может понадобиться комбинировать эти функции в другом порядке, например:
  sortArr(dubleNumbers(compact(arr)));
  compact(sortArr(dubleNumbers(arr)));
  // Тогда не обойтись 1й оберткой, а вариантов комбинаций может быть очень много
}

// Для этого и существуют композиция и конвеер функций, вспомогательные инструменты, которые позволяют комбинировать фунции в составную функцию, чтобы они выполнялись в определенной последовательности.
// Композиция функций - принято называть 'compose' - комбинируемые функции выполняются справа-налево по цепочке.
// Конвеер функций    - принято называть 'pipe'    - комбинируемые функции выполняются слева-направо по цепочке.

function compose(...functions) { // Фукция-композиции, комбинирует справо-налево функции принимаемые как параметры
  return function(arrArgument) { // возвращает составную функцию, которая принимает параметр с данными и обрабатывает их комбинацией функций-параметров принятых оперетором 'compose' справо-налево
    return functions.reduceRight((acc,fn) => fn(acc), arrArgument) // выполняем функции в порядке справа-налево и передаем результаты в следующие по цепочке
  }
}

// Так мы можем быстро и легко создать составные функции из любых комбинаций, например:
const sortedDubleArray = compose(sortArr, dubleNumbers, compact);
const sortedArray = compose(compact, sortArr);
const dubleSortedArray = compose(dubleNumbers, sortArr, compact);
let arr = [1,5,3,1,2,4,undefined,0,null]; // параметр с данными для составных функций
console.log(sortedDubleArray(arr)) //=> [0,10,2,2,4,6,8]
console.log(sortedArray(arr))      //=> [0,1,1,2,3,4,5]
console.log(dubleSortedArray(arr)) //=> [0,2,2,4,6,8,10]



//                                               Частичное применение

// Частичное применение - когда мы (если это рационально для удобства) уменьшаем колличество аргументов, создавая дополнительные функции использующие исходную функцию, например при помощи замыкания (тут в примере при помощи глобальной области видимости)

// Функция проверяет есть ли среди ролей юзера(массив) требуемая роль
const userHasRole = (user, role) => user.roles.includes(role);

// Но в системе есть типы пользователей которые встречаются очень часто например оператор и клиент:
const operator = { roles: ['ADMIN'] };
const client = { roles: ['USER'] };

// В базовом варианте вызова функции, ей необходимо передать 2 аргумента: объект юзера и роль, на которую будем его проверять
console.log(userHasRole(operator, 'ADMIN')); //=> true
console.log(userHasRole(client, 'ADMIN'));   //=> false

// Но для пользователей, что очень часто встречаются в системе, хочется передавать не 2 аргумента, а 1, для чего создадим дополнительные функции-обертки
const clientHasRole = (role) => userHasRole(client, role);
const operatorHasRole = (role) => userHasRole(operator, role);
console.log(clientHasRole('ADMIN'));   //=> false
console.log(operatorHasRole('ADMIN')); //=> true

// Или пойти еще дальше и создать функции обертки в которые вообще не нужно передавать аргументов для самых часто встречаемых ролей
const isClientAdmin = () => clientHasRole('ADMIN');
const isOperatorAdmin = () => operatorHasRole('ADMIN');
const isClientManager = () => clientHasRole('MANAGER');
console.log(isClientAdmin());   //=> false
console.log(isOperatorAdmin()); //=> true
console.log(isClientManager()); //=> false


//                                                   Каррирование

// (? не все понятно в коде функции curry ?)

// Каррирование - создание из исходной функции каррированой функции, которая может получить множество отдельных вызовов с аргументами и на каждый из вызовов возвращает новую каррированную функцю, но имеющую на 1 вызов аргументов меньше, тоесть каждая возвращенная функция принимает следующий в очереди вызов аргументов. И эту цепочку вызовов можно в любой момент прекратить, например передав аргументы из всех оставшихся вызовов в одну функцию.
clientHasRole(client)('ADMIN')('third')('fourth')('fifth') // на каждый вызов возврвщается новая функция

// Механизм каррирования дает большую гибкость, тк позволяет генерировать столько функций, сколько необходимо и комбинировать их, обеспечивает частичное применение, тоесть создает производные функции с меньшим числом аргументов, не создавая для этого кучу отдельных функций

// Исходная функция принимает 3 аргумента
const sum = (a, b, c) => a + b + c;

// Сделаем функцию, которая будет принимать исходную функцию, произведет ее каррирование и вернет каррированную функцию принимающую неизвестное колличество аргументов
function curry(func) {
  // console.log(func.length); //=> 3  // length возвращает колличество аргументов(Тут у исходной функции sum)
  return function curried(...args) { // сюда принимаем аргументы из очередного вызова curriedSum(5)(4)(3)
    if (args.length >= func.length) { // если коллич аргуметов принимаемых функцией sum меньше или равно колличеству аргументов, переданных в эту каррированную функцию
      return func.apply(this, args); // то вызываем функцию sum и передаем в нее массив аргументов
    } else { // если же мы не передали все аргументы в функцию
      // то возвращаем новую функцию curried у которой на 1 вызов меньше, а число аргументов на 1 больше
      return function(...args2) { // сюда принимаем аргументы из очередного вызова curriedSum(5)(4)(3)
        return curried.apply(this, args.concat(args2)); // к тем аргументам что уже были переданны добавляем аргументы из нового вызова и возвращаем функцию curried с ними
      }
    }
  };
};

// Производим каррирование и получаем каррированную функцию
const curriedSum = curry(sum);

// Теперь можем вызывать каррированную функцию с 3мя отдельными вызовами аргументов
console.log(curriedSum(5)(4)(3)) //=> 12



//                                                     Chaining

// Chaining/чейнинг - это любые цепочки вызовов функций

// вызов каррированной функции это чейнинг(чейнинг функций)
curriedSum(5)(4)(3)

// цепочка вызовов методов это тоже чейнинг
new.Array(6).map(n => n + 1).filter(n => n < 6).reduce((s,n) => s + n)



//                                                    Контейнеры

// Нужен чтобы объекты были иммутабельными ??

// Контейнер - это например класс, который инкапсулирует в себе какоето значение. Те если рассматривать пример ниже - содержит статический метод of

// Синтаксически код для создания контейнера будет классом. При этом класс стоит воспринимить как синтаксический сахар, а не как парадигму ООП, тоже самое можно было сделать и при помощи прототипов и замыканий, просто так проще код. Парадигма не зависит от того при помощи какого синтаксиса мы пишем код, а только от того какким мы его пишем

class Container { // Класс контейнер объектами которого будут объекты-контейнеры
  constructor(x) { // На Тайпскрипт можно было бы сдеать конструктор приватным, чтобы к нему закрыть прямой доступ
    this.$value = x;
  }
  // Но создавать объект-контейнер будем не напрямую через конструктор, а через его обертку в статический метод класса
  static of(x) {
    return new Container(x);
  }
  // Возвращать значения свойства тоже будем не на прямую, а через метод, например в конце цепочки методов
  join() {
    return this.$value;
  }
  // Работа с данными контейнера, при помощи метода, который работает почти как в массиве - к значению контейнера применяет функцию которую он принимает в виде параметра. Тоесть мы вызываем от объекта-контейнера этот метод, в котором создаем новый объект-контейнер, свойством которого будет свойство изходного контейнера, обработанное функцией, переданной в метод
  map(fn) {
    return Container.of(fn(this.$value)); // fn(this.$value) результат этой функции будет свойством нового контейнера, тоесть он будет запакован в новый контейнер и этот новый контейнер будет возвращен и от него соотв можно будет еще раз вызвать метод map
  }
  // Можно сделать метод завершающего map, который объединяет map и join
  chain(fn) {
    return this.map(fn).join();
  }
}

// Создаем объект от статического метода. Контейнер - это обертка, он чемто похож на массив, тк внутрь мы чтото помещаем. Мы "инкапсулируем" данные внутри контейнера
Container.of(5);        //=> Container { '$value': 5 }
Container.of(5).$value; //=> 5
Container.of(5).join(); //=> 5

// Применем к контейнеру цепочку методов map возвращающих новые контейнеры с измененным значением от предыдущих:
Container.of(5).map(n => n + 5).map(n => n * 10);        //=> Container { '$value': 100 }
Container.of(5).map(n => n + 5).map(n => n * 10).join(); //=> 100

// естественно можем передавать в map любые сложные функции от переменных
const square = (n) => n * n;
const add5 = (n) => n + 5;
Container.of(5).map(square).map(add5); //=> Container { '$value': 30 }
// Тоесть способ выше равнозначен(дает тот же рез) с записью вида:
add5(square(5)); //=> 30
// Но в варианте с контейнером мы защищены от непреднамеренного изменения значения, тк вызывается новый контейнер, тоесть так мы достигаем иммутабельности, тк данные в предыдущем контейнере не изменятся

// Цепочка с chain
Container.of(5).map(square).map(add5).chain(add5); //=> 35



//                                                     Функторы

// Функтор - это контейнер(класс типов), для которых определен метод map и выполняются правила:
// 1. x.map(f).map(g) == g(f(x))        - закон композиции ("раскрытие луковицы")
// 2. x.map(value => value) == x        - закон идентичности (тоесть функция возвращающая значение не должна его менять для след контейнера)
// Тоесть map применяет функцию к внутреннему состоянию, сохраняя при этом свою структуру и поведение

// Если на примере ООП то функтор похож на интерфейс, который описывает, что наследуемые от него классы(не забываем что в ФП это просто сахар) должны обладать методом map

// Например тот контейнер что сделан выше является функтором

// Например в ЖС очень сильно на функтор похож Promise, почти идентичен монаде из теории ФП "Фьючер"
// Так же функтором в ЖС по умолчанию является массив, тк он соответсвует всем правилам функтора: реализует метод map и соответсвует законам композии и идентичности



//                                                      Монады

// Монада - это чтото вроде имплементации функтора-"интерфейса", тоесть конкретная реализация функтора с какой-то определенной логикой для определенных задач

// Например в ООП есть интерфейс для баз данных от него наследуются отдельные интефейсы для SQL баз и NoSQL баз, от интерфейса SQL наследуются отдельные классы-имплементации для PostgreSQL и MySQL, а от интерфейса NoSQL отдельные классы для Redis и MongoDB

// Пример популярной монады Maybe
class Maybe {
  constructor(x) {
    this.$value = x;
  }
  // Стандартный функционал контейниризации
  static of(x) {
    return new Maybe(x);
  }
  // Тк монада это функтор, то должен быть метод map. Но в этом монаде добавляется дополнительная логика для конкретной цели - если значение текущей монады пустое, то мы возвращаем эту текущую монаду и только если не пустое - обрабатываем значение функцией и возвращаем новую монаду
  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }
  // Вспомогательная функция(тут геттер) проверяет пустое ли значение свойства монады
  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }
}

// Логика описаная обычной функцией из нескольких действий, где после каждого действия придется проверять на пустое значение
function getPlayerRating() {
  const users = getUsers(); // Получаем список пользователь
  if (!users) return; // проверяем что он не пустой
  const player = getLatestPlayer(users); // получаем последнего игрока
  if (!player) return; // проверяем что существует
  const recentRating = getRating(player); // получаем рейтинг
  return recentRating;
}

// Та же логика с использованием монады Maybe и если гдето нет данных то просто вернет изначальное значение
function getPlayerRatingWithMaybe() {
  return Maybe.of(getUsers()).map(getLatestPlayer).map(getRating);
}


// Мы можем тюнинговать(расширять) свою монаду как угодно, например добавлять в нее вспомогательные методы вроде chain, join или любые другие с необходимой нам логикой. Но при этом каждая монада должна отвечать за какоето конкретное действие, например монада Maybe занимается проверкой на пустоту и инкапсулирует внутри себя соответсвующую логику

// Например для Maybe можем создать вспомогательный метод принимающий дефолтное значение по умолчанию, на случай если оно отсутсвует внутри контейнера и вызывать его вместо map
orElse(defaultValue, fn) {
  return this.isNothing ? Maybe.of(defaultValue).map(fn) : this.map(fn);
}
// Тогда реализация примера с получением рейтинга будет такой
function getPlayerRatingWithMaybe() {
  return Maybe.of(getUsers())
    .orElse({name: 'Kroker'}, getLatestPlayer)
    .orElse({rating: 1}, getRating);
}



//                                               Аппликативные функторы



//                                             Спецификация Fantasy-Land

// Специальная спецификация построенная например повер всей библиотеки JS, в ее рснове лежит функтор















//
