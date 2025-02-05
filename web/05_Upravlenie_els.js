//                                          Управление HTML объектами

// Для управления HTML объектами можно обращаться к ним через id, class или название тега

// document - глобальный объект JS, при помощи которого можно управлять DOM-структурой страницы(через его методы)



//                                         1. Обращение через id

let pTag = document.getElementById('text');
// getElementById('text') - метод объекта document, возвращающая объект тега по его id заданный в виде строки в параметр('text')

// Далее можно обращаться к свойствам объекта тега через методы
console.log(pTag.id);    //=> 'text'         // выведем значение атрибута id тега
console.log(pTag.title); //=> 'Some text'    // выведем значение атрибута title тега
console.log(pTag.style); //=> вернет все стили и их значения(в том числе установленые по умолчанию)

// меняем значение атрибута title
pTag.title = 'New text';
console.log(pTag.title); //=> 'New text'

// меняем стили
pTag.style.color = 'magenta';          // обращаемся к атрибуту style и через точку к имени стиля
pTag.style.backgroundColor = 'yellow'; // имя стиля пишем в камелкейс

// запишем внутрь тела тега новый контент, можно писать не только текст но и теги
pTag.innerHTML = "some<i>text</i>";

// если нужно обратиться к одному свойству переменную создавать не обязательно
document.getElementById('text').style.fontSize = '2rem'


// Пример изменения цвета текста в абзаце в зависимости от нажатия разных кнопок
function changeColor(newColor) {
  let but = document.getElementById('but');
  but.style.color = newColor;
}


// (??? Странная фигня, если далее меняем тип переменной с var arr на let arr то перестает работать то что выше ???)



//                                      2. Обращение через название тега.

// В этом случае будет возвращен не один тег а массив содержащий объекты тегов, тк таких тегов может быть много
var arr = document.getElementsByTagName('span'); // Elements - во множественном числе
// тк это массив объектов то для обращения к каждому стоит использовать цикл
for (let i = 0; i < arr.length; i++){
  console.log(arr[i].innerHTML);  // смотрим значения тегов
}



//                                        3. Обращение через класс.

// В этом случае тоже будет возвращен массив содержащий объекты тегов
var arr = document.getElementsByClassName('aaa');
console.log(arr[1].innerHTML);  //=> Span 3



















//
