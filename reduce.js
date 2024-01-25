function reduce(elements, cb, startingValue) {
    let accumulator = startingValue;

    for (index = 0; index < elements.length; index++) {
        if (index === 0 && accumulator === undefined) {
            accumulator = elements[0];
        } else {
            let element = elements[index];
            accumulator = cb(accumulator, element);
        }
    }

    return accumulator;
}

module.exports = reduce;