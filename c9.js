//                                   Всплывающие окна (alert, prompt, confirm)

// К таким окнам нельзя добавить стили, у каждого браузера они будут выглядеть по своему.

// Несколько всплывающих окон будут всплывать одно за одним, после закрытия предыдущего

// 1. Функция alert(переводится как "внимание") позволяет вывести какую-либо информацию во всплывающем окне в браузере.
alert("Просто вывод информации"); // На HTML-странице к который подключен данный фаил выведет "Просто вывод информации" во всплывающем окне

// 2. Функция confirm открывает всплывающее окно с определенным вопросом и двумя кнопками: Ок и Отмена. Полученные данные из окна будут true или false, их можно присвоить в переменную, проверить в условном операторе и в зависимости от них выполнить код.
var result = confirm("Вы согласны с confirm?");
console.log(result); // Если ок, то result будет true. Если отмена, то result будет false

// 3. Метод prompt получает информацию введенную пользователем. Полученные данные можно поместить в переменную.
var info = prompt("Сколько вам лет?", 25); // Второй параметр это значение по-умолчанию, он не обязателен
console.log(info); //=> Выведет, то что ввел пользователь, если не ввел то пустую строку или значение по умолчанию. Если же пользователь нажал кнопку "Отмена" то null


// Пример программы использующей всплывающие окна
if (confirm("Ты огромен?")) {
  var sword = prompt('Введи длинну своего меча');
  sword > 9000 ? (alert('Крокер!!!')) : (alert(sword + ' - это маловато'));
} else {
  alert('ок');
}











//
