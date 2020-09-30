
exports.min = function min (array) {
    return reduce(array, (accumulator, value) => value < accumulator ? value : accumulator);
}

exports.max = function max (array) {
    return reduce(array, (accumulator, value) => value > accumulator ? value : accumulator);
}

exports.avg = function avg (array) {
  const sum = reduce(array, (accumulator, value) => accumulator + value);

  return array && array.length > 0 ? sum / array.length : 0;
}

function reduce(array, reducer) {
    let result = 0;
    if (array && array.length > 0) {
        result = array.reduce(reducer, 0);
    }
    return result;
}
