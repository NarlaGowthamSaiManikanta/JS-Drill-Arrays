function reduce(elements, cb, startingValue) {
    if (Array.isArray(elements)) {
        if (typeof (cb) === 'function') {
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
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = reduce;