//                                                 Proxy



//                                             method_missing

// Аналог рубишного method_missing при помощи Proxy


// 1. При помощи прототипов:
function enableNoSuchMethod(obj) {
  // функция передает в объект класса Proxy наш объект из аргумента и дополнительный объект с методом get:
  return new Proxy(obj, {
    get(target, p) {
      if (p in target) {
        return target[p];
      } else if (typeof target.__noSuchMethod__ == "function") {
        return function(...args) {
          return target.__noSuchMethod__.call(target, p, args);
        };
      }
    }
  });
}
// Используем для объектов нашего класса Dummy
function Dummy() {
  this.ownProp1 = "value1";
  return enableNoSuchMethod(this); // передаем в функцию enableNoSuchMethod текущий инстанс-объект и она, а соответсвенно и new Dummy возвращает объкет обернутый в Proxy-объект:
}
// __noSuchMethod__   - название можно любое (? но правильнее с подчеркиваниями ?)
Dummy.prototype.__noSuchMethod__ = function(name, args) {   // typeof name //=> string
  return `No such method ${name} called with ${args}`;
};
const instance = new Dummy();
console.log(instance);                        //=> Dummy { ownProp1: 'value1' }
console.log(instance.ownProp1);               //=> value1
// Вызываем несуществующие методы:
console.log(instance.someName(1, 2));         //=> No such method someName called with 1,2
console.log(instance.xyz(3, 4));              //=> No such method xyz called with 3,4
console.log(instance.doesNotExist("a", "b")); //=> No such method doesNotExist called with a,b


// 2. ES2015 class синтаксис:
class Character {
  constructor(name) {
    this.name = name;
    // Возвращаем объект прокси
    return new Proxy(this, { // подставляем this
      get(target, p) {
        if (p in target) {
          return target[p];
        } else if (typeof target.methodMissing == "function") {
          return function(...args) {
            return target.methodMissing.call(target, p, args);
          };
        }
      }
    });
  }
  // так красивее но можно было и methodMissing = function(name, args)
  methodMissing(method, args) {  // typeof method //=> string
    return `Method: ${method}; args: ${args}`;
  };
}
const instance = new Character('vasya'); // присваиваится объект прокси
console.log(instance.someName(1, 2));         //=> Method: someName; args: 1,2
console.log(instance.xyz(3, 4));              //=> Method: xyz; args: 3,4
console.log(instance.doesNotExist("a", "b")); //=> Method: doesNotExist; args: a,b












//
