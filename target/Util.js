export class Util {
    //Just a class to store various helper functions
    choice(collection) {
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }
    pointBuy() {
        const attrs = {
            str: 8,
            dex: 8,
            con: 8,
            int: 8,
            wis: 8,
            cha: 8
        };
        let points = 27;
        while (this.canBuy(attrs, points)) {
            console.log("attrs: " + attrs + "\n" + "points: " + points);
            const attr = this.choice(Object.keys(attrs));
            const cost = this.getCost(attrs, attr);
            if (cost && cost <= points) {
                attrs[attr]++;
                points = points - cost;
            }
        }
        return attrs;
    }
    canBuy(attrs, points) {
        if (points < 0) {
            throw 'Error: pointBuy exeeded point cap';
        }
        if (points == 0) {
            return false;
        }
        if (points == 1 && Object.values(attrs).every(val => val >= 13)) {
            return false;
        }
        return true;
    }
    getCost(attrs, attr) {
        const currentValue = attrs[attr];
        if (currentValue < 13) {
            return 1;
        }
        if (currentValue < 15) {
            return 2;
        }
        return false;
    }
}
