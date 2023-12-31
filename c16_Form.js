//                                            Обработка форм

//  2 Вариант(обращение по id) с полным разделением JS кода от HTML
document.getElementById('main-form').addEventListener('submit', checkForm2); // вешаем обработчик события на форму отсюда, чтобы не писать JS код в HTML фаиле(onsubmit="return checkForm(this)")
// 'submit' - параметр, говорит о том что мы отслеживаем событие отправки(аналог onsubmit атрибута, но без 'on')
// checkForm0 - параметр указывающий на то какую функцию будем использовать
function checkForm2(event) { // принимаем параметр события а не из формы(и можно удалить обработчик из формы)
  event.preventDefault(); // отключаем стандартное поведение события(тут перезагрузка страницы)
  form = document.getElementById('main-form');
  // далее тот код что и в методе ниже
}


//  1 Вариант(обращение через this) с JS кодом в HTML(onsubmit="return checkForm(this)")
function checkForm(form) {
  console.log('Check form'); // если не добавить return в значении обработчика перед функцией вывод в консоли будет лишь на секунду, тк при нажатии кнопки submit страница по умолчанию перезагружается

  // 1й вариант получить значение введенное в поле пользователем через id поля:
  var name0 = document.getElementById('username').value;

  // 2й вариант(его и используем) получить значение введенное в поле пользователем через объект формы:
  var name = form.username.value;
  // form - объект содержит всю форму со всеми дочерними тегами
  // form.username - чтобы выбрать нужный тег обращаемся к значению его атрибута name
  // form.username.value - получаем значение введенное пользователем выбранного поля
  var pass = form.pass.value;
  var repass = form.repass.value;
  var state = form.state.value;

  // Валидация данных:
  var fail = '';
  if (name == '' || pass == '' || repass == '' || state == '')
    fail = 'Заполните все поля';
  else if (name.length < 2 || name.length > 50)
    fail = 'Введите корректное имя';
  else if (pass != repass)
    fail = 'Пароли должны совпадать';
  else if (pass.split('&').length > 1)
    fail = 'Некорректный пароль';

  // вывод ошибки
  if (fail != '') {
    document.getElementById('error').innerHTML = fail; // Заполняем тег для ошибок текстом ошибки из переменной
    return false; // и не отправляем форму на сервер
  }

  alert('Данные отправлены');

  // переход на другую страницу после отправки формы
  var result = confirm("Перейти на другую страницу?");
  if (result) {
    window.location = 'https://itproger.com/course/javascript/12';
    return false; // для перехода на другую страницу нужно не перезагружать эту страницу
  }

  return true;
}



// Обращение к форме через все формы на странице
function valForm() {
  var el = document.forms['my-form']['user'].value; // обращаемся ко всему документу, потом ко всем формам в нем, потом по значению аргумента name к форме, потом так же к полю, потом к его значению
  if (el == '') {
    alert('Форма не заполнена');
    return false;
  } else {
    return true;
  }
}

















//
