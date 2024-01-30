function flatten(elements) {
    if (Array.isArray(elements)) {
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
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = flatten;