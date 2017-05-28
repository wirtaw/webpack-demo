
let _ = require('lodash');
function toNumber(n) {
    return parseInt(n);
}
export default (text = '') => {
    const empty = 'List is empty';
    const nospliter = 'No split';
    const undefined = 'Data is undefined';
    let result = '';
    let array = [];
    if ('undefined' !== typeof text && null !== text) {
        if ('' === text) {
            result = empty;
        } else {
            if (-1 === text.indexOf(' ') && -1 === text.indexOf(',')) {
                result = nospliter;
            } else {
                if (-1 < text.indexOf(' ')) {
                    array = text.split(' ');
                } else if (-1 < text.indexOf(',')) {
                    array = text.split(',');
                }
                if (0 < array.length) {
                    let numbers = _.map(array, toNumber);
                    let numbers2 = _.map(array, toNumber);
                    let sorted_array = numbers.sort(function (a, b) {
                        return a - b;
                    });
                    let sorted_array2 = numbers2.sort(function (a, b) {
                        return b - a;
                    });
                    let type = typeof sorted_array[0];
                    let type2 = typeof numbers[0];
                    let join1 = _.join(sorted_array, '');
                    let join2 = _.join(sorted_array2, '');
                    result = 'Max. number in array [' + array.join() + '] [' + numbers.join()
                        + '] [' + join1 + '] [' + join2 + '] ' + type + ' ' + type2 + '';
                }
            }
        }
    } else {
        result = undefined;
    }
    const element = document.createElement('div');
    element.innerHTML = result;
    return element;
};