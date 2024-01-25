const items = [1, 2, 3, 4, 5, 5];

const each = require('./each.js');
const map = require('./map.js');
const reduce = require('./reduce.js');
const find = require('./find.js');

each(items, (item) => {
    console.log(item * 2);
});

const itemsMultipliedBy10 = map(items, (item) => {
    return item * 10;
});
console.log(itemsMultipliedBy10);

const sumOfItems = reduce(items, (accumulator, item) => {
    return accumulator + item;
});
console.log(sumOfItems);

const evenItems = find(items, (item) => {
    return item % 2 == 0;
});
console.log(evenItems);