export var util;
(function (util) {
    function choice(collection) {
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }
    util.choice = choice;
    function choices(collection, n) {
        let results = [];
        for (let x of range(n)) {
            let Choice = choice(collection);
            collection = arrayDelete(collection, Choice);
            results = results.concat(Choice);
        }
        return results;
    }
    util.choices = choices;
    function range(start, end, step) {
        const array = [];
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (step === undefined) {
            if (start < end) {
                step = 1;
            }
            else {
                step = -1;
            }
        }
        let current = start;
        if (start < end) {
            while (current < end) {
                array.push(current);
                current = current + step;
            }
        }
        else {
            while (current > end) {
                array.push(current);
                current = current + step;
            }
        }
        return array;
    }
    util.range = range;
    function arrayDelete(collection, value) {
        return collection.filter(function (item) {
            return item !== value;
        });
    }
    util.arrayDelete = arrayDelete;
})(util || (util = {}));
