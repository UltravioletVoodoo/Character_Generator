export var util;
(function (util) {
    function choice(collection, exemptions = []) {
        collection = arrayDelete(collection, exemptions);
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }
    util.choice = choice;
    function choices(collection, n, exemptions = []) {
        collection = arrayDelete(collection, exemptions);
        let results = [];
        for (let x of range(n)) {
            let Choice = choice(collection);
            collection = arrayDelete(collection, [Choice]);
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
    function arrayDelete(collection, values) {
        return collection.filter(function (item) {
            return !values.some(function (value) {
                return JSON.stringify(item) === JSON.stringify(value);
            });
        });
    }
    util.arrayDelete = arrayDelete;
    function min(collection, notIncludingNegative = false) {
        let min = collection[0];
        for (let x of collection) {
            if (x < min) {
                min = x;
            }
        }
        if (notIncludingNegative) {
            if (min < 0) {
                min = 0;
            }
        }
        return min;
    }
    util.min = min;
    function getElement(id) {
        return document.getElementById(id);
    }
    util.getElement = getElement;
    function randomNumberFromRange(range) {
        return Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0]);
    }
    util.randomNumberFromRange = randomNumberFromRange;
})(util || (util = {}));
