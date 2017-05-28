import component from './component.js';
import sortable from './sortable.js';

let component1 = component('Hello webpack2 demo', 9, ['a','b','c']);
let component2 = component('another', 10, []);
document.body.appendChild(component1);
document.body.appendChild(component2);

let sortable1 = sortable('5 2 6 29 -5 6 0 10 8 -5 47 6 5 3 -22 5');
document.body.appendChild(sortable1);

let sortable2 = sortable('0');
document.body.appendChild(sortable2);

let sortable3 = sortable('');
document.body.appendChild(sortable3);

let sortable4 = sortable(null);
document.body.appendChild(sortable4);