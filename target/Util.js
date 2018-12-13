export var util;
(function (util) {
    function choice(collection) {
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }
    util.choice = choice;
})(util || (util = {}));
