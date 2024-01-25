function each(elements, cb) {
    for (index = 0; index < elements.length; index++) {
        let element = elements[index];
        cb(element, index);
    }
}

module.exports = each;