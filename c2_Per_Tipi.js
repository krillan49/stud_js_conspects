//                                            Переменные и типы данных.

// Переменная - ячейка в памяти компьютера в которую можно записывать данные

// В переменную можно присваивать любые типы данных: целые(Integer), с плавающей точкой(Float), строки(String), true и false(Boolean) итд
// В JS нет строгой типизации, поэтому для переменной не нужно указывать тип данных(как в Си) и можно переопределять в любой тип

// нельзя начинать переменные со спец символов вроде % $ или цифр

// var - ключевое слово, сокращение от variable, оно переводится соотв как - переменная
// let - альтернатива var ??

var pusto = null;
console.log(pusto); //=> null

var num; // переменная в которой нет значения
console.log(num); //=> undefined
// создание переменной со значением undefined для последующей инициальзации и использования, называется поднятием

num = 5; // присваиваем в переменную значение

var num2 = 7; // создаем и присваиваем значение в одну строку

var a = 2, b = 10; // содание нескольких переменных в 1 строку


// Переопределение переменной
num2 = 3; //=> 3
num2 = 'aaa' //=> aaa

// можно называть с большой буквы(имена переменных чувствительны к регистру)
var Num = 'aaa';
console.log(Num); //=> aaa


// Создание константы. Константу нельзя переопределить, при попытке переопределения будет ошибка.
const num3 = 5;


// Замена значений переменных друг на друга
var a = 1, b = 2;
[a, b] = [b, a];
console.log(a); //=> 2
console.log(b); //=> 1



//                                        Определить тип данных

// Определить тип при помощи typeof
console.log(typeof 42); //=> "number"
typeof 2.5 //=> number
typeof NaN //=> number
typeof('blubber'); //=> "string" // можно писать аргумент в скобках
typeof true; //=> "boolean"
typeof undeclaredVariable; //=> "undefined"
typeof null //=> object
typeof [] //=> object
typeof new Object() //=> object
typeof function some() {} //=> function



//                                      Тип данных и ||

console.log(NaN || 1); //=> 1
console.log(false || 1); //=> 1
console.log(undeclaredVariable || 1); //=> !!! выдает ошибку ReferenceError
console.log(undefined || 1); //=> 1
console.log(null || 1); //=> 1
console.log([] || 1); //=> []
console.log('' || 1); //=> 1
console.log(0 || 1); //=> 1
console.log(new Object() || 1); //=> {}
console.log(function some() {} || 1); //=> [Function: some]

undefined || null //=> null



//                                         Изменить тип данных

// Оператор + со строкой преобразует и другое слогаемое в строку(тут из Integer)
5 + '5' //=> '55'

// Альтернативный перевод строки в число. чтобы преобразовать String в Int в JS. ('523' * 1 == 523)
'53' * 1 //=> 53  // number
'53.6' * 1 //=> 53.6  // number



//                                             Особенности

// Странная херня
console.log(1 == '1'); //=> true
console.log(1 === '1'); //=> false
console.log(1 === 1); //=> true



//                                 Область видимости. Отличия var, let и const

// https://habr.com/ru/articles/438880/

// В Javascript, имеются 2 типа областей видимости — глобальная область видимости, и область видимости функции. Если объявление переменной происходит внутри объявления функции, переменная определяется в локальной области видимости этой функции

// var VS let VS const
//
// var:
//   ограничена областью видимости функции
//   её значение будет undefined если вы попытаетесь обратиться к ней до её объявления.
//
// let:
//   ограничена областью видимости блока
//   вы получите ReferenceError если попытаетесь обратиться к ней до её объявления.
//
// const:
//   ограничена областью видимости блока
//   вы получите ReferenceError если попытаетесь обратиться к ней до её объявления.
//  не может быть перезаписана

// Переменные  var объявленные внутри For, доступны и за его пределами. так как переменные объявлены при помощи var, они входят в область видимости функции и вы можете получить к ним доступ вне блока


// Ключевое отличие между var и let это то, что let помимо глобальной области видимости и области видимости функции позволяет определять переменные в области видимости блока. переменная созданная при помощи ключевого слова let доступна внутри “блока”, где она была создана, также и внутри вложенных блоков. Когда я сказал “блок”, я имел в виду что-либо окруженное фигурными скобками {}, например цикл for или оператор if.
function discountPrices (prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}

discountPrices([100, 200, 300], .5) // NOT OK: ReferenceError: i is not defined
// Мы получили ReferenceError: i is not defined. Что говорит нам о том, что переменная, объявленная при помощи let, ограничена областью видимости блока, а не функции


// let. Если вы попытаетесь доступ к переменной до её объявление при помощи let, вместо получения undefined (как это было при объявлении при помощи var), вы получите ReferenceErro


// const — это не константа, а именно read-only переменная
// const почти такая же как и let. Однако есть одно отличие: если вы однажды присвоили значение используя const, вы не сможете его изменить на другое.
let name = 'Tyler'
const handle = 'tylermcginnis'

name = 'Tyler McGinnis' // OK
handle = '@tylermcginnis' // NOT OK: TypeError: Assignment to constant variable.

const person = {
  name: 'Kim Kardashian'
}
person.name = 'Kim Kardashian West' // OK
person = {} // NOT OK: Assignment to constant variable.
// Заметьте, что изменения свойства объекта не является его перезаписью, так что даже если объект объявлен при помощи const, это не означает, что вы не можете изменить какие-либо из его свойств


// var, let или const? Самое популярное мнение, и мнение которого придерживаюсь я, это использовать всегда const, пока вы не знаете будет ли переменная изменяться. Причина этого в том, что используя const вы даете понять себе и будущим разработчикам, которые должны прочитать ваш код, что эта переменная не должна изменяться. Если её потребуется изменить (например в цикле for), просто используйте let.
// Между переменными, которые меняются и переменным которые не меняются, не так уж и много случаев осталось. Это значит, что вам больше никогда не придется использовать var.









//
