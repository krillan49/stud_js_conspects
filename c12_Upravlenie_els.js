//                                          Управление HTML объектами

// Для управления HTML объектами можно обращаться к ним через айди, класс или имя тега


// 1. Обращение через id
var text = document.getElementById('text');
// document - глобальный объект JS, при помощи которого можно управлять DOM-структурой страницы(через его методы)
// getElementById('text') - функкция объекта document, возвращающая объект тега по его id
// Далее уже можно обращаться к свойствам объекта тега через методы
console.log(text.id); //=> 'text' // выведем значение атрибута id тега
console.log(text.title); //=> 'Some text' // выведем значение атрибута title тега

// меняем значение атрибута title
text.title = 'New text';
console.log(text.title); //=> 'New text'

// меняем стили
text.style.color = 'magenta'; // обращаемся к атрибуту stile и через точку к имени стиля
text.style.backgroundColor = 'yellow'; // имя стиля пишем в камелкейс вместо кебаба

// запишем внутрь тела тега
text.innerHTML = "some<i>text</i>"; // можно писать не только текст но и теги

// если нужно обратиться к одному свойству переменную создавать не обязательно
console.log(document.getElementById('text').style); //=> вернет все стили и их значения(даже не прописанные)
document.getElementById('text').style.fontSize = '2rem'


// Пример изменения цвета абзаца нажатием разных кнопок
function changeColor(newColor) {
  var but = document.getElementById('but');
  but.style.color = newColor;
}


// 2. Обращение через название тега. В этом случае будет возвращен не один тег а массив содержащий объекты тегов
var arr = document.getElementsByTagName('span'); // Elements - во множественном числе
// тк это массив объектов то для обращения к каждому стот использовать цикл
for (var i = 0; i < arr.length; i++){
  console.log(arr[i].innerHTML);  // смотрим значения тегов
}


// 3. Обращение через класс. В этом случае тоже будет возвращен массив содержащий объекты тегов
var arr = document.getElementsByClassName('aaa');
console.log(arr[1].innerHTML);  //=> Span 3



















//
