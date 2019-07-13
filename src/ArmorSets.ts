import { Attributes, fleshOutAttributes } from "./Attributes";
import { util } from "./Util";
import { Character } from "./Character";

export function findArmor(name: string): Armor{
    for (const armorList of [light, medium, heavy, misc]){
        for(const armor of armorList){
            if(armor.name == name){
                return armor;
            }
        }
    }
    return blankArmor
}

export function chooseArmor(character: Character){
    let newList: Armor[] = []
    for(let x of character.armorProfs){
        if (x.cost <= character.startingGold){
            newList = newList.concat(x)
        }
    }
    let armorChoice = blankArmor;
    if(newList.length > 0){
        armorChoice = util.choice(newList);
    }
    character.armor = armorChoice;
    character.startingGold -= armorChoice.cost;
}

function statBonus(a: Armor, mods: Attributes){
    let caps = fleshOutAttributes(a.ac.caps)
    return util.min([caps.str,mods.str], true) +
        util.min([caps.dex, mods.dex], true) +
        util.min([caps.con, mods.con], true) +
        util.min([caps.int, mods.int], true) +
        util.min([caps.wis, mods.wis], true) +
        util.min([caps.cha, mods.cha], true) 
}

export function calculateAcWithShield(character: Character): number{
    return calculateAcWithoutShield(character) + character.shield.acBonus;
}

export function calculateAcWithoutShield(character: Character): number{
    return character.armor.ac.base + statBonus(character.armor, character.attrMods);
}

export interface armorClass {
    base: number;
    caps: Partial<Attributes>;
}

export interface Armor {
    name: string;
    cost: number;
    ac: armorClass;
    strReq: number;
}

export const blankArmor: Armor = {
    name: "Unarmored",
    cost: 0,
    ac: {
        base: 10,
        caps: {}
    },
    strReq: 0
}

export const blankShield: Armor = {
    name: "BlankShield",
    cost: 0,
    ac: {
        base: 0,
        caps: {}
    },
    strReq: 0
}

export const light: Armor[] = [
    {
        name: "Padded",
        cost: 5,
        ac: {
            base: 11,
            caps: {dex: 5}
        },
        strReq: 0
    },
    {
        name: "Leather",
        cost: 10,
        ac: {
            base: 11,
            caps: {dex: 5}
        },
        strReq: 0
    },
    {
        name: "Studded leather",
        cost: 45,
        ac: {
            base: 12,
            caps: {dex: 5}
        },
        strReq: 0
    }
];

export const medium: Armor[] = [
    {
        name: "Hide",
        cost: 10,
        ac: {
            base: 12,
            caps: {dex: 2}
        },
        strReq: 0
    },
    {
        name: "Chain shirt",
        cost: 50,
        ac: {
            base: 13,
            caps: {dex: 2}
        },
        strReq: 0
    },
    {
        name: "Scale mail",
        cost: 50,
        ac: {
            base: 14,
            caps: {dex: 2}
        },
        strReq: 0
    },
    {
        name: "Breastplate",
        cost: 400,
        ac: {
            base: 14,
            caps: {dex: 2}
        },
        strReq: 0
    },
    {
        name: "Half plate",
        cost: 750,
        ac: {
            base: 15,
            caps: {dex: 2}
        },
        strReq: 0
    },
];

export const heavy: Armor[] = [
    {
        name: "Ring mail",
        cost: 30,
        ac: {
            base: 14,
            caps: {}
        },
        strReq: 0
    },
    {
        name: "Chain mail",
        cost: 75,
        ac: {
            base: 16,
            caps: {}
        },
        strReq: 13
    },
    {
        name: "Splint",
        cost: 200,
        ac: {
            base: 17,
            caps: {}
        },
        strReq: 15
    },
    {
        name: "Plate",
        cost: 1500,
        ac: {
            base: 18,
            caps: {}
        },
        strReq: 15
    },
];

export const misc: Armor[] = [
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
        strReq: 0
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
        strReq: 0
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
        strReq: 0
    }
];