function find(elements, cb) {
    let value = undefined;

    for (index = 0; index < elements.length; index++) {
        let element = elements[index];
        if (cb(element)) {
            value = element;
            break;
        }
    }

    return value;
}

module.exports = find;