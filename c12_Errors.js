//                                         Операторы ошибок trow и catch

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter is not a number!'); // в параметре можно указать имя ошибки например 'RangeError' либо вместо Error('Parameter is not a number!') указать RangeError()
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
