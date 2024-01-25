function flatten(elements) {
    let array = [];

    for (index = 0; index < elements.length; index++) {
        let element = elements[index];
        if (element.constructor === Array) {
            values = flatten(element);
            for (valueIndex = 0; valueIndex < values.length; valueIndex++) {
                array.push(values[valueIndex]);
            }
        } else {
            array.push(element);
        }
    }

    return array;
}

module.exports = flatten;