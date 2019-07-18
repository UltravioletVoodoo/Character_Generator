import { util } from "./Util";
// Uses the point buy system to generate character attributes
export function pointBuy() {
    const attrs = {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
    };
    let points = 27;
    while (canBuy(attrs, points)) {
        console.log('fuck');
        const attr = util.choice(Object.keys(attrs));
        const cost = getCost(attrs, attr);
        if (cost && cost <= points) {
            attrs[attr]++;
            points = points - cost;
        }
    }
    return attrs;
}
function canBuy(attrs, points) {
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
function getCost(attrs, attr) {
    const currentValue = attrs[attr];
    if (currentValue < 13) {
        return 1;
    }
    if (currentValue < 15) {
        return 2;
    }
    return false;
}
