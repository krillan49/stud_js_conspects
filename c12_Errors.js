//                                         Операторы ошибок trow и catch

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    // вариант 1
    throw new Error('Parameter is not a number!'); // в параметре можно указать имя ошибки например 'RangeError' либо вместо Error('Parameter is not a number!') указать RangeError()
    // вариант 2
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
