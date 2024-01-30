function filter(elements, cb) {
    if (Array.isArray(elements)) {
        if (typeof (cb) === 'function') {
            let array = undefined;

            for (index = 0; index < elements.length; index++) {
                let element = elements[index];
                if (cb(element)) {
                    if (array == undefined) {
                        array = [];
                    }
                    array.push(element);
                }
            }

            return array;
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an array.');
    }
}

module.exports = filter;