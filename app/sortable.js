
let _ = require('lodash');
export default (text = '') => {
    const empty = 'List is empty';
    const nospliter = 'No split';
    let result = '';
    let array = [];
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

                function toNumber(n) {
                    return parseInt(n);
                }
                let numbers = _.map(array, toNumber);

                let sorted_array = _.sortedUniq(numbers);
                let max = numbers[0];
                _.forEach(numbers, function(value) {
                    if (value > max) {
                        max = value;
                    }
                });
                let type = typeof sorted_array[0];
                let type2 = typeof numbers[0];
                result = 'Max. number in array ['+array.join()+'] is '+max+' ['+numbers.join()+'] ['+sorted_array.join()+'] ' + type + ' '+type2+ ''
            }
        }
    }
    const element = document.createElement('div');
    element.innerHTML = result;
    return element;
};