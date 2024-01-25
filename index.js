const items = [1, 2, 3, 4, 5, 5];

const each = require('./each.js');
const map = require('./map.js');

each(items, (item) => {
    console.log(item * 2);
});

const itemsMultipliedBy10 = map(items, (item) => {
    return item * 10;
});
console.log(itemsMultipliedBy10);