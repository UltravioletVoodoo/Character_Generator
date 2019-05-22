import { fleshOutAttributes } from "./Attributes";
import { util } from "./Util";
export function findArmor(name) {
    for (const armorList of [light, medium, heavy, misc]) {
        for (const armor of armorList) {
            if (armor.name == name) {
                return armor;
            }
        }
    }
    return blankArmor;
}
export function chooseArmor(character) {
    let newList = [];
    for (let x of character.armorProfs) {
        if (x.cost <= character.startingGold) {
            newList = newList.concat(x);
        }
    }
    let armorChoice = blankArmor;
    if (newList.length > 0) {
        armorChoice = util.choice(newList);
    }
    character.armor = armorChoice;
    character.startingGold -= armorChoice.cost;
}
function statBonus(a, mods) {
    let caps = fleshOutAttributes(a.ac.caps);
    return util.min([caps.str, mods.str], true) +
        util.min([caps.dex, mods.dex], true) +
        util.min([caps.con, mods.con], true) +
        util.min([caps.int, mods.int], true) +
        util.min([caps.wis, mods.wis], true) +
        util.min([caps.cha, mods.cha], true);
}
export function calculateAc(character) {
    return character.armor.ac.base + statBonus(character.armor, character.attrMods) + character.shield.ac.base;
}
export const blankArmor = {
    name: "Unarmored",
    cost: 0,
    ac: {
        base: 10,
        caps: {}
    },
    strReq: 0,
    stealthDis: false,
    weight: 0
};
export const blankShield = {
    name: "BlankShield",
    cost: 0,
    ac: {
        base: 0,
        caps: {}
    },
    strReq: 0,
    stealthDis: false,
    weight: 0
};
export const light = [
    {
        name: "Padded",
        cost: 5,
        ac: {
            base: 11,
            caps: { dex: 5 }
        },
        strReq: 0,
        stealthDis: true,
        weight: 8
    },
    {
        name: "Leather",
        cost: 10,
        ac: {
            base: 11,
            caps: { dex: 5 }
        },
        strReq: 0,
        stealthDis: false,
        weight: 10
    },
    {
        name: "Studded leather",
        cost: 45,
        ac: {
            base: 12,
            caps: { dex: 5 }
        },
        strReq: 0,
        stealthDis: false,
        weight: 13
    }
];
export const medium = [
    {
        name: "Hide",
        cost: 10,
        ac: {
            base: 12,
            caps: { dex: 2 }
        },
        strReq: 0,
        stealthDis: false,
        weight: 12
    },
    {
        name: "Chain shirt",
        cost: 50,
        ac: {
            base: 13,
            caps: { dex: 2 }
        },
        strReq: 0,
        stealthDis: false,
        weight: 20
    },
    {
        name: "Scale mail",
        cost: 50,
        ac: {
            base: 14,
            caps: { dex: 2 }
        },
        strReq: 0,
        stealthDis: true,
        weight: 45
    },
    {
        name: "Breastplate",
        cost: 400,
        ac: {
            base: 14,
            caps: { dex: 2 }
        },
        strReq: 0,
        stealthDis: false,
        weight: 20
    },
    {
        name: "Half plate",
        cost: 750,
        ac: {
            base: 15,
            caps: { dex: 2 }
        },
        strReq: 0,
        stealthDis: true,
        weight: 40
    },
];
export const heavy = [
    {
        name: "Ring mail",
        cost: 30,
        ac: {
            base: 14,
            caps: {}
        },
        strReq: 0,
        stealthDis: true,
        weight: 40
    },
    {
        name: "Chain mail",
        cost: 75,
        ac: {
            base: 16,
            caps: {}
        },
        strReq: 13,
        stealthDis: true,
        weight: 55
    },
    {
        name: "Splint",
        cost: 200,
        ac: {
            base: 17,
            caps: {}
        },
        strReq: 15,
        stealthDis: true,
        weight: 60
    },
    {
        name: "Plate",
        cost: 1500,
        ac: {
            base: 18,
            caps: {}
        },
        strReq: 15,
        stealthDis: true,
        weight: 65
    },
];
export const misc = [
    {
        name: "Buckler",
        cost: 10,
        ac: {
            base: 1,
            caps: {}
        },
        strReq: 0,
        stealthDis: false,
        weight: 2
    },
    {
        name: "Medium shield",
        cost: 10,
        ac: {
            base: 2,
            caps: {}
        },
        strReq: 0,
        stealthDis: false,
        weight: 6
    },
    {
        name: "Tower shield",
        cost: 35,
        ac: {
            base: 2,
            caps: {}
        },
        strReq: 15,
        stealthDis: true,
        weight: 30
    },
    {
        name: "Unarmored defence con",
        cost: 0,
        ac: {
            base: 10,
            caps: {
                dex: 5,
                con: 5
            }
        },
        strReq: 0,
        stealthDis: false,
        weight: 0
    },
    {
        name: "Unarmored defence wis",
        cost: 0,
        ac: {
            base: 10,
            caps: {
                dex: 5,
                wis: 5
            }
        },
        strReq: 0,
        stealthDis: false,
        weight: 0
    },
    {
        name: "Unarmored defence draconic",
        cost: 0,
        ac: {
            base: 13,
            caps: {
                dex: 5
            }
        },
        strReq: 0,
        stealthDis: false,
        weight: 0
    }
];
