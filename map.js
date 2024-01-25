function map(elements, cb) {
    let array = [];

    for (index = 0; index < elements.length; index++) {
        let element = elements[index];
        value = cb(element, index);
        array.push(value);
    }

    return array;
}

module.exports = map;