//                                                  Mocha

// https://github.com/mochajs/mocha

// Mocha — это многофункциональный тестовый фреймворк JavaScript, работающий на Node.js и браузере. Тесты Mocha запускаются последовательно, что позволяет создавать гибкие и точные отчеты, сопоставляя неперехваченные исключения с правильными тестовыми случаями.

// С помощью mocha вы описываете то, что тестируете, вызывая функцию describe, которая принимает тест name и test code.
describe('Testing class Foo', function() { });

// Внутри параметра функции describe вы определяете свои тестовые случаи, вызывая функцию it. it получает тест description и code и запускает утверждения.
describe('Testing class Foo', function() {
  it('foo should contain a value', function() {
    Test.expect(foo);
  });

  it('foo should do something', function() {
    Test.expect(...);
  });
});



//                                             Методы утверждения

// msg - сообщение в виде строки, является необязательным во всех функциях, за исключением функций, ожидающих ошибок

// expect - ожидает true или false, тест не проходит, если значение было false
Test.expect(passed, msg);

// assertEquals - ожидает actual быть равным expected
Test.assertEquals(actual, expected, msg);
// assertNotEquals - ожидается actual, что будет отличаться отexpected
Test.assertNotEquals(actual, unexpected, msg);

// assertSimilar - ожидается actual равенство expected(может использоваться для сравнения массивов)
Test.assertSimilar(actual, expected, msg);
// assertNotSimilar - ожидается actual, что будет отличаться от expected(может использоваться для сравнения массивов)
Test.assertNotSimilar(actual, unexpected, msg);

// expectError - ожидает функцию, которая будет выполнена, и должна выдать ошибку
Test.expectError(msg, fn); // fn - функция(? которую проверяем ?)
// expectNoError - ожидает функцию, которая будет выполнена, и не ожидает, что она выдаст ошибку
Test.expectNoError(msg, fn);



//                                               Конфигурация

// Настройка конфигурации пишется в начале фаила с тестами

// config.includeStack (по умолчанию false) - влияет на то, включается ли трассировка стека в сообщение об ошибке утверждения. По умолчанию false трассировка стека подавляется в сообщении об ошибке.
chai.config.includeStack = true; // turn on stack trace

// config.showDiff (по умолчанию true) - должен ли showDiff флаг быть включен в выдаваемые AssertionErrors. false всегда будет false; true будет истинным, если утверждение запросило отображение различий.
chai.config.showDiff = false; // turn off reporter diff display

// config.truncateThreshold (по умолчанию 40) - устанавливает порог длины для фактических и ожидаемых значений в ошибках утверждения. Если этот порог превышен, значение усекается.
chai.config.truncateThreshold = 0; // disable truncating
