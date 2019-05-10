export const zeroAttributes = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
};
export function mergeAttributes(aList) {
    let result = zeroAttributes;
    for (let x of aList) {
        result.str += x.str;
        result.dex += x.dex;
        result.con += x.con;
        result.int += x.int;
        result.wis += x.wis;
        result.cha += x.cha;
    }
    return result;
}
export function fleshOutAttributes(a) {
    return {
        str: a.str ? a.str : 0,
        dex: a.dex ? a.dex : 0,
        con: a.con ? a.con : 0,
        int: a.int ? a.int : 0,
        wis: a.wis ? a.wis : 0,
        cha: a.cha ? a.cha : 0
    };
}
export function generateMods(a) {
    return {
        str: calculateMod(a.str),
        dex: calculateMod(a.dex),
        con: calculateMod(a.con),
        int: calculateMod(a.int),
        wis: calculateMod(a.wis),
        cha: calculateMod(a.cha)
    };
}
function calculateMod(n) {
    return Math.floor((n - 10) / 2);
}
