//                                         Proxy. __noSuchMethod__

// Аналог рубишного method_missing

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

// Example usage:
function Dummy() {
  this.ownProp1 = "value1";
  return enableNoSuchMethod(this);
}

Dummy.prototype.__noSuchMethod__ = function(name, args) {
  return `No such method ${name} called with ${args}`;
};

var instance = new Dummy();
console.log(instance.ownProp1);
console.log(instance.someName(1, 2)); //=> No such method someName called with 1,2
console.log(instance.xyz(3, 4)); //=> No such method xyz called with 3,4
console.log(instance.doesNotExist("a", "b")); //=> No such method doesNotExist called with a,b



//                                            С синтаксисом класса

class Character {
  constructor(name) {
    this.name = name;
    // Возвращаем объект прокси
    return new Proxy(this, { // подставляем this
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
  // наш носачметод напишет так(красивее) но можно было и __noSuchMethod__ = function(name, args)
  __noSuchMethod__(method, args) { // typeof method //=> string
    return `Method: ${method}; args: ${args}`;
  };
}

var instance = new Character('vasya'); // присваиваится объект прокси
console.log(instance.someName(1, 2)); //=> Method: someName; args: 1,2
console.log(instance.xyz(3, 4)); //=> Method: xyz; args: 3,4
console.log(instance.doesNotExist("a", "b")); //=> Method: doesNotExist; args: a,b












//
