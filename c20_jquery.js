//                                               jQuery

// jQuery - дополнительная библиотека/фрэймворк/плагин для JS. Это набор функций написанных на JS для взаимодействия с элементами или стилями на сайте
// jQuery нужно дополнительно подключить через атрибут src тега script например:
// <script src="/vendor/jquery-1.9.1.min.js"></script>

// $ - обозначает вызов jQuery. Далее передаем параметр так $('параметр'). Далее прописываем действие.
$('#aaa').css('background-color', 'yellow'); // тут обращаемся к параметру селектору #aaa (id)
$('.bbb').css('background-color', 'blue'); // тут обращаемся к селектору .bbb (class)

// Правильный вариант, так тег script можно добавлять в любое место в html страницы и все будет работать, а иначе если добавить конструкцию как выше до элемента к которому она применена, то не сработает(не увидит элемент, к которому обращается джаваскрипт, тк место с джаваскриптом уже загрузится, а элемент ниже еще нет)(только для jQuery)
$(function() {
  $('#ccc').css('background-color', 'red');
});
// Эта конструкция делает следующее: код внутри {...} выполнится только после того как загрузится вся страница

// Правильная обертка если не пишем функцию(много строк кода)
$(alert('hello'););



//                                                 Modernizr

// ?? для старых браузеров, актуально ли хз ??

// Modernizr — это библиотека JavaScript , которая определяет функции, доступные в браузере пользователя. Это позволяет веб-страницам избегать неподдерживаемых функций, информируя пользователя о том, что его браузер не поддерживается, или загружая полифилл. Для всяких фишек например HTML5 которые не поддерживают определенные браузеры. Библиотека представляет собой просто метод обнаружения функций и, как таковой, не добавляет отсутствующие функции в старые браузеры

// Добавляет новые фишки при работе со старыми браузерами в которых их нет.













//
