//                                      this. Манипуляции с атрибутами тега

// Функция - счетчик: выводим результат в значении кнопки
let counter = 0;
function onClickCounter2(tag) { // принимаем объект тега(тут наш button)
  counter++;
  tag.innerHTML = 'Вы нажали на кнопку: ' + counter + ' раз'; // Обращаемся к нашей кнопке и от нее к свойству innerHTML, которое может поместить любой текст в тело тега

  // Так же от нашего объекта мы можем обратиться к любым атрибутам тега(тут просто выведем их значения в консоль)
  console.log(tag.name);    //=> someButton // обращаемся к атрибуту name и выводим его значение в консоль
  console.log(tag.onclick); //=> инфа о функции, что в значении атрибута onclick
}


// Выведем в консоль значение записанное в поле, которое будет каждый раз отличаться на 1 символ(добавленный или удаленный)
function onInput(tag) {
  console.log(tag.value);  //=> Выведем значение записанное в поле
  if (tag.value == 'Hello') alert('И тебе привет'); // можно добавить функционала
}



//                                              Изменение стилей

function styleChange(tag) {
  // Через style можно обратиться к любому отдельному CSS свойству тега и изменить его:
  tag.style.background = "lightblue";
  tag.style.color = "blue";
}

function styleChange2(tag) {
  tag.style.background = "lightblue";
  tag.style.color = "blue";

  // cssText - можно обратиться ко всем стилям сразу и прописать их как в теге style через точку с запятой(но тогда обращение к отдельным стилям от style, как выше работать уже не будет)
  tag.style.cssText = "padding: 5px; border-radius: 5px; border: 0; font-size: 20px; background-color: yellow;";
}











//
