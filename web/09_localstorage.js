//                                                 localstorage

// www.w3schools.com/html/html5_webstorage.asp                            - HTML5 Web Storage https
// https://habr.com/ru/articles/349164/                                   - Почему не стоит использовать LocalStorage
// https://tproger.ru/articles/localstorage/                              - LocalStorage на пальцах
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage   - window.localStorage - Web APIs | MDN

window.localStorage // - это объект html5 по структуре похожий на хэш, он позволяет сохранять данные локально, чтобы они были сохранен между разными перезагруженными страницами и после закрытия браузера. Браузер пользователя будет хранить у себя в памяти данные с сайта в котором вызван localstorage. При помощи спец инструметов мы можем смотреть эти данные в браузере пользователя и отправлять их на сервер для обработки.

// Создается для каждого сайта отдельный, так что можно спокойно очищать

// Во многом похоже на куки(хром вроде даже считает это частью куки)

// Гуглхром ограничевает размер localstorage 5ю мегабайтами.



//                                           Использование localstorage

// Например функция-счетчик может хранить значение в памяти браузера пользователя и при следующем заходе на сайт(на любую страницу где вызывается метод счетчика) оно будет использоваться далее, а не обнулться и клики на разных страницах учитываются вместе

function localst() {

  // getItem - метод localStorage, получает значение из localStorage по ключу (тут 'score'). Если под таким ключем нет значения, вернет значение null
  let x = window.localStorage.getItem('score'); // передаем значение в переменную.

  x = x * 1 + 1;  // Полученные из localStorage переменные по умолчанию string, поэтому преобразуем в number

  // setItem - метод localStorage, записывает хначение в localStorage под заданным ключем
  window.localStorage.setItem('score', x); // помещаем новое значение из x в localStorage под ключем 'score'

  alert(x);
}



//                                               Методы localstorage

function prosto_dla_obertki() { // функция просто чтоб не срабатывало
  localStorage.clear();         // Очистить localStorage (?? без window для консоли разработчика в браузере ??)
  window.localStorage.clear();  // Очистить localStorage
  window.localStorage.length(); // выведет число элементов в локалсторедж
  window.localStorage.key(0);   // получаем по индексам ключей локалсторедж собственно ключи
}

// Содержимое localstorage можно посмотреть в панели разработчика в Хроме, в разделе console(там где проверяем ошибки), нажав "энтер" можно посмотреть его содержимое полностью:
// > localstorage  //=>Storage {product_1: '3', LS_W_ON_PAGE: '1670006288853', product_3: '4', product_2: '4', aaa: '55520', …}
// > localStorage.clear()   //=> Storage {length: 0}  // length - число элементов хэше локалсторедж














//
