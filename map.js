function map(elements, cb) {
    if (Array.isArray(elements)) {
        if (typeof (cb) === 'function') {
            let array = [];

            for (index = 0; index < elements.length; index++) {
                let element = elements[index];
                value = cb(element, index);
                array.push(value);
            }

            return array;
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = map;