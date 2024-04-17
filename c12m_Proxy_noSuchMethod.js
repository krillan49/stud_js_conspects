//                                                 Proxy



//                                             method_missing

// Аналог рубишного method_missing в функциональном стиле
function enableNoSuchMethod(obj) {
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
  return enableNoSuchMethod(this);
}
// __noSuchMethod__   - название можно любое (? но правильнее с подчеркиваниями ?)
Dummy.prototype.__noSuchMethod__ = function(name, args) {   // typeof name //=> string
  return `No such method ${name} called with ${args}`;
};
const instance = new Dummy();
console.log(instance.ownProp1);
console.log(instance.someName(1, 2));         //=> No such method someName called with 1,2
console.log(instance.xyz(3, 4));              //=> No such method xyz called with 3,4
console.log(instance.doesNotExist("a", "b")); //=> No such method doesNotExist called with a,b


// Аналог рубишного method_missing с синтаксисом класса
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
