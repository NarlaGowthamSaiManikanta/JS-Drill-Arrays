const items = [1, 2, 3, 4, 5, 5];

const each = require('./each.js');

each(items, (item) => {
    console.log(item * 2);
});