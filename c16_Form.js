//                                            Обработка форм


//  1. Обращение к форме через this, тоесть с JS кодом в HTML(onsubmit="return checkForm(this)")
function checkForm(form) {
  console.log('Check form'); // если не добавить return в значении обработчика перед функцией, то вывод в консоли будет виден лишь на секунду, тк при нажатии кнопки submit страница по умолчанию перезагружается

  // 1й вариант получить значение введенное в поле пользователем через id поля:
  let name0 = document.getElementById('user_name').value;

  // 2й вариант(его и используем) получить значение введенное в поле пользователем через объект формы:
  let name = form.username.value;
  // form - объект содержит всю форму со всеми дочерними тегами
  // form.username - чтобы выбрать нужный тег обращаемся к значению его атрибута name
  // form.username.value - получаем значение введенное пользователем выбранного поля
  let pass = form.pass.value;
  let repass = form.repass.value;
  let state = form.state.value;

  // Валидация данных:
  let fail = '';
  if (name == '' || pass == '' || repass == '' || state == '') fail = 'Заполните все поля';
  else if (name.length < 2 || name.length > 50) fail = 'Введите корректное имя';
  else if (pass != repass) fail = 'Пароли должны совпадать';
  else if (pass.split('&').length > 1) fail = 'Некорректный пароль';

  // вывод ошибки
  if (fail != '') {
    document.getElementById('error').innerHTML = fail; // Заполняем тег для ошибок текстом ошибки из переменной
    return false; // и не отправляем форму на сервер
  }

  alert('Данные отправлены');

  // переход на другую страницу после отправки формы
  let result = confirm("Перейти на другую страницу?");
  if (result) {
    window.location = 'https://itproger.com/course/javascript/12';
    return false; // для перехода на другую страницу нужно не перезагружать эту страницу
  }

  return true;
}



//  2. Обращение к форме по id, с полным отделением JS кода от HTML
document.getElementById('main-form').addEventListener('submit', checkForm2); // вешаем обработчик события на форму найденную по id
// 'submit' - параметр, говорит о том что мы отслеживаем событие отправки (аналог onsubmit атрибута)
// checkForm2 - параметр указывающий на то какую функцию будем использовать
function checkForm2(event) { // принимаем параметр события
  event.preventDefault(); // отключаем стандартное поведение события(тут перезагрузка страницы)
  form = document.getElementById('main-form');

  // далее тот код что и в варианте 1

  let name = form.username.value, pass = form.pass.value, repass = form.repass.value, state = form.state.value, fail = '';
  if (name == '' || pass == '' || repass == '' || state == '') fail = 'Заполните все поля';
  else if (name.length < 2 || name.length > 50) fail = 'Введите корректное имя';
  else if (pass != repass) fail = 'Пароли должны совпадать';
  else if (pass.split('&').length > 1) fail = 'Некорректный пароль';
  if (fail != '') {
    document.getElementById('error2').innerHTML = fail;
    return false;
  }
  alert('Данные отправлены');
  let result = confirm("Перейти на другую страницу?");
  if (result) {
    window.location = 'https://itproger.com/course/javascript/12';
    return false;
  }
  return true;
}



// 3. Обращение к форме через все формы на странице
function valForm() {
  let el = document.forms['my-form']['user'].value; // обращаемся ко всему документу, потом ко всем формам в нем, потом по значению аргумента name к форме, потом так же к полю, потом к его значению
  if (el == '') {
    alert('Форма не заполнена');
    return false;
  } else {
    alert('Форма отправлена');
    return true;
  }
}

















//
