//                                               Конфигурация

// Настройка конфигурации пишется в начале фаила с тестами

// config.includeStack (по умолчанию false) - влияет на то, включается ли трассировка стека в сообщение об ошибке утверждения. По умолчанию false трассировка стека подавляется в сообщении об ошибке.
chai.config.includeStack = true; // turn on stack trace

// config.showDiff (по умолчанию true) - должен ли showDiff флаг быть включен в выдаваемые AssertionErrors. false всегда будет false; true будет истинным, если утверждение запросило отображение различий.
chai.config.showDiff = false; // turn off reporter diff display

// config.truncateThreshold (по умолчанию 40) - устанавливает порог длины для фактических и ожидаемых значений в ошибках утверждения. Если этот порог превышен, значение усекается.
chai.config.truncateThreshold = 0; // disable truncating
