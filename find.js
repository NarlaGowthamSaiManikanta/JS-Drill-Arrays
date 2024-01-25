function find(elements, cb) {
    let array = undefined;

    for (index = 0; index < elements.length; index++) {
        let element = elements[index];
        if(cb(element)) {
            if (array == undefined) {
                array = [];
            }
            array.push(element);
        }
    }

    return array;
}

module.exports = find;