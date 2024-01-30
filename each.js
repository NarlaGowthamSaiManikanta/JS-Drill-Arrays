function each(elements, cb) {
    if (Array.isArray(elements)) {
        if (typeof (cb) === 'function') {
            for (index = 0; index < elements.length; index++) {
                let element = elements[index];
                cb(element, index);
            }
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = each;