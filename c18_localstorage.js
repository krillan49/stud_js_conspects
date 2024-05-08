//                                                 localstorage

window.localStorage // - это объект html5, он позволяет сохранять данные локально. Те браузер пользователя будет хранить у себя в памяти данные с сайта в котором вызван localstorage. При помощи спец инструметов мы можем смотреть эти данные в браузере пользователя и отправлять их на сервер для обработки.

// с точки зрения структуры данных localStorage это хэш

// Нужен для сохранения значений между разными перезагруженными страницами и после закрытия браузера

// Создается для каждого сайта отдельный, так что можно спокойно очищать

// Во многом похоже на куки(хром вроде даже считает это частью куки)

// Гуглхром ограничевает размер localstorage 5ю мегабайтами.

// www.w3schools.com/html/html5_webstorage.asp    -    HTML5 Web Storage https
// https://habr.com/ru/articles/349164/           -   Почему не стоит использовать LocalStorage
// https://tproger.ru/articles/localstorage/      -   LocalStorage на пальцах
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage   -   window.localStorage - Web APIs | MDN


function localst() {
  let x = window.localStorage.getItem('score'); // Получаем значение из localStorage по ключу 'score'(название ключа любое) и передаем его в переменную. До определения(при самом первом нажатии) будет возвращать null

  x = x * 1 + 1;  // Полученные из localStorage переменные по умолчанию String. Поэтому преобразуем в number

  window.localStorage.setItem('score', x); // помещаем новое значение из x в localStorage под ключем 'score'

  alert(x);
}
// Теперь данные о переменной x хранятся в памяти браузера пользователя и при следующем заходе на сайт(на любую страницу где вызывается этот метод, тк значение берем из браузера, соотв клики на разных страницах учитываются вместе) оно уже будет использоваться далее



//                                               Методы localstorage

function prosto_dla_obertki() { // функция просто чтоб не срабатывало
  localStorage.clear();         // Очистить localStorage (для консоли разработчика в браузере ?7)
  window.localStorage.clear();  // Очистить localStorage
  window.localStorage.length(); // выведет число элементов в локалсторедж
  window.localStorage.key(0);   // получаем по индексам ключей локалсторедж собственно ключи
}

// Содержимое localstorage можно посмотреть в панели разработчика в Хроме, в разделе console(там где проверяем ошибки)(нажав энтер можно посмотреть его содержимое полностью):
// > localstorage  //=>Storage {product_1: '3', LS_W_ON_PAGE: '1670006288853', product_3: '4', product_2: '4', aaa: '55520', …}
// > localStorage.clear()   //=> Storage {length: 0}  // length - число элементов хэше локалсторедж














//
