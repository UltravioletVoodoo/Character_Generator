import { util } from "./Util";
export const zeroAttributes = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
};
export function mergeAttributes(aList) {
    let result = { ...zeroAttributes };
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
// Stat bias takes the highest stat and ensures that it falls on the most important stat for a class
// "importance" was determined by the multiclassing prerequisites for that class in the PHB
export function introduceStatBias(character, attrs) {
    if (character.className === "Barbarian")
        attrs = makeHighest("str", attrs);
    if (character.className === "Bard")
        attrs = makeHighest("cha", attrs);
    if (character.className === "Cleric")
        attrs = makeHighest("wis", attrs);
    if (character.className === "Druid")
        attrs = makeHighest("wis", attrs);
    if (character.className === "Fighter")
        attrs = makeHighest(util.choice(["str", "dex"]), attrs);
    if (character.className === "Monk")
        attrs = makeBothHighest("dex", "wis", attrs);
    if (character.className === "Paladin")
        attrs = makeBothHighest("str", "cha", attrs);
    if (character.className === "Ranger")
        attrs = makeBothHighest("dex", "wis", attrs);
    if (character.className === "Ranger*")
        attrs = makeBothHighest("dex", "wis", attrs);
    if (character.className === "Rogue")
        attrs = makeHighest("dex", attrs);
    if (character.className === "Sorcerer")
        attrs = makeHighest("cha", attrs);
    if (character.className === "Warlock")
        attrs = makeHighest("cha", attrs);
    if (character.className === "Wizard")
        attrs = makeHighest("int", attrs);
    return attrs;
}
// Returns a new Attributes after ensuring that the top 1 key is the one provided
function makeHighest(key, attrs) {
    let keys = [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
    ];
    let highest = "str";
    for (let x of keys) {
        if (attrs[x] > attrs[highest])
            highest = x;
    }
    let temp = attrs[key];
    attrs[key] = attrs[highest];
    attrs[highest] = temp;
    return attrs;
}
// Returns a new Attributes after ensuring that the top 2 keys are those provided
function makeBothHighest(key1, key2, attrs) {
    let keys = [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
    ];
    //choose which of the keys will be the one to give the highest/secondhighest
    let choice1 = util.choice([key1, key2]);
    let choice2 = util.arrayDelete([key1, key2], [choice1])[0];
    //Swap so that the highest is choice1
    attrs = makeHighest(choice1, attrs);
    //Find the second highest
    let highest = choice1;
    keys = util.arrayDelete(keys, [highest]);
    let secondHighest = keys[0];
    for (let x of keys) {
        if (attrs[x] > attrs[secondHighest] && attrs[x] <= attrs[highest])
            secondHighest = x;
    }
    //Swap so that the secondHighest is choice 2
    let temp = attrs[choice2];
    attrs[choice2] = attrs[secondHighest];
    attrs[secondHighest] = temp;
    return attrs;
}
