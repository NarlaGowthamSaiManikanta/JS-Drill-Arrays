function find(elements, cb) {
    if (Array.isArray(elements)) {
        if (typeof (cb) === 'function') {
            let value = undefined;

            for (index = 0; index < elements.length; index++) {
                let element = elements[index];
                if (cb(element)) {
                    value = element;
                    break;
                }
            }

            return value;
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = find;