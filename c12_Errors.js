//                                         Операторы ошибок trow и catch

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    // вариант 1
    throw new Error('Parameter is not a number!');
    // вариант 2
    throw new Error('RangeError');
    // вариант 3
    throw new RangeError();
    // вариант 4
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
  // Error: RangeError
  // RangeError
  // Parameter is not a number!
}












// 
