import { util } from "./Util";
export function findWeapon(name) {
    for (const weaponList of [simpleMelee, simpleRanged, martialMelee, martialRanged]) {
        for (const weapon of weaponList) {
            if (weapon.name == name) {
                return weapon;
            }
        }
    }
    return bareFist;
}
function chooseWeapon(list, money, cantBeTwoHanded) {
    let newList = [];
    for (let x of list) {
        if (x.cost <= money && !cantBeTwoHanded) {
            newList = newList.concat(x);
        }
        if (x.cost <= money && cantBeTwoHanded) {
            if (x.twoHanded === false) {
                newList = newList.concat(x);
            }
        }
    }
    return util.choice(newList);
}
function isTwoHanded(w) {
    return w.twoHanded ? true : false;
}
export function chooseWeapons(list, money) {
    let x = [chooseWeapon(list, money, false)];
    money -= x[0].cost;
    if (util.choice([1, 2, 3]) === 1 && !isTwoHanded(x[0])) {
        x = x.concat(chooseWeapon(list, money, true));
    }
    return x;
}
export function isFinesse(w) {
    if (w.properties.includes("Finesse")) {
        return true;
    }
    return false;
}
export const bareFist = {
    name: "Fist",
    cost: 0,
    damage: "1",
    damageType: "Bludgeoning",
    weight: 0,
    properties: [],
    twoHanded: false
};
export const simpleMelee = [
    {
        name: "Club",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Light"],
        twoHanded: false
    },
    {
        name: "Dagger",
        cost: 2,
        damage: "1d4",
        damageType: "piercing",
        weight: 1,
        properties: ["Finesse", "Light", "Thrown"],
        twoHanded: false
    },
    {
        name: "Greatclub",
        cost: 0.2,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 10,
        properties: [],
        twoHanded: true
    },
    {
        name: "Handaxe",
        cost: 5,
        damage: "1d6",
        damageType: "Slashing",
        weight: 2,
        properties: ["Light", "Thrown"],
        twoHanded: false
    },
    {
        name: "Javelin",
        cost: 0.5,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Thrown"],
        twoHanded: false
    },
    {
        name: "Light Hammer",
        cost: 0.2,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Light", "Thrown"],
        twoHanded: false
    },
    {
        name: "Mace",
        cost: 5,
        damage: "1d6",
        damageType: "Bludgeoning",
        weight: 4,
        properties: [],
        twoHanded: false
    },
    {
        name: "Quarterstaff",
        cost: 0.2,
        damage: "1d6",
        damageType: "Bludgeoning",
        weight: 4,
        properties: ["Versatile"],
        twoHanded: false
    },
    {
        name: "Sickle",
        cost: 1,
        damage: "1d4",
        damageType: "Slashing",
        weight: 2,
        properties: ["Light"],
        twoHanded: false
    },
    {
        name: "Spear",
        cost: 1,
        damage: "1d6",
        damageType: "Piercing",
        weight: 3,
        properties: ["Thrown", "Versatile"],
        twoHanded: false
    }
];
export const simpleRanged = [
    {
        name: "Light Crossbow",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        weight: 5,
        properties: ["Ammunition", "Loading"],
        twoHanded: true
    },
    {
        name: "Dart",
        cost: 0.05,
        damage: "1d4",
        damageType: "Piercing",
        weight: 0.25,
        properties: ["Finesse", "Thrown"],
        twoHanded: false
    },
    {
        name: "Shortbow",
        cost: 25,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Ammunition"],
        twoHanded: true
    },
    {
        name: "Sling",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 0,
        properties: ["Ammunition"],
        twoHanded: false
    },
];
export const martialMelee = [
    {
        name: "Battleaxe",
        cost: 10,
        damage: "1d8",
        damageType: "Slashing",
        weight: 4,
        properties: ["Versatile"],
        twoHanded: false
    },
    {
        name: "Flail",
        cost: 10,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 2,
        properties: [],
        twoHanded: false
    },
    {
        name: "Glaive",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy", "Reach"],
        twoHanded: true
    },
    {
        name: "Greataxe",
        cost: 30,
        damage: "1d12",
        damageType: "Slashing",
        weight: 7,
        properties: ["Heavy"],
        twoHanded: true
    },
    {
        name: "Greatsword",
        cost: 50,
        damage: "2d6",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy"],
        twoHanded: true
    },
    {
        name: "Halberd",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy", "Reach"],
        twoHanded: true
    },
    {
        name: "Lance",
        cost: 10,
        damage: "1d12",
        damageType: "Piercing",
        weight: 6,
        properties: ["Reach", "Special"],
        twoHanded: false
    },
    {
        name: "Longsword",
        cost: 15,
        damage: "1d8",
        damageType: "Slashing",
        weight: 3,
        properties: ["Versatile"],
        twoHanded: false
    },
    {
        name: "Maul",
        cost: 10,
        damage: "2d6",
        damageType: "Bludgeoning",
        weight: 10,
        properties: ["Heavy"],
        twoHanded: true
    },
    {
        name: "Morningstar",
        cost: 15,
        damage: "1d8",
        damageType: "Piercing",
        weight: 4,
        properties: [],
        twoHanded: false
    },
    {
        name: "Pike",
        cost: 5,
        damage: "1d10",
        damageType: "Piercing",
        weight: 18,
        properties: ["Heavy", "Reach"],
        twoHanded: true
    },
    {
        name: "Rapier",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: ["Finesse"],
        twoHanded: false
    },
    {
        name: "Scimitar",
        cost: 25,
        damage: "1d6",
        damageType: "Slashing",
        weight: 3,
        properties: ["Finesse", "Light"],
        twoHanded: false
    },
    {
        name: "Shortsword",
        cost: 10,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Finesse", "Light"],
        twoHanded: false
    },
    {
        name: "Trident",
        cost: 5,
        damage: "1d6",
        damageType: "Piercing",
        weight: 4,
        properties: ["Thrown", "Versatile"],
        twoHanded: false
    },
    {
        name: "War Pick",
        cost: 5,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: [],
        twoHanded: false
    },
    {
        name: "Warhammer",
        cost: 15,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Versatile"],
        twoHanded: false
    },
    {
        name: "Whip",
        cost: 2,
        damage: "1d4",
        damageType: "Slashing",
        weight: 3,
        properties: ["Finesse", "Reach"],
        twoHanded: false
    }
];
export const martialRanged = [
    {
        name: "Blowgun",
        cost: 10,
        damage: "1",
        damageType: "Piercing",
        weight: 1,
        properties: ["Ammunition", "Loading"],
        twoHanded: false
    },
    {
        name: "Hand Crossbow",
        cost: 75,
        damage: "1d6",
        damageType: "Piercing",
        weight: 3,
        properties: ["Ammunition", "Light", "Loading"],
        twoHanded: false
    },
    {
        name: "Heavy Crossbow",
        cost: 50,
        damage: "1d10",
        damageType: "Piercing",
        weight: 18,
        properties: ["Ammunition", "Heavy", "Loading"],
        twoHanded: true
    },
    {
        name: "Longbow",
        cost: 50,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: ["Ammunition", "Heavy"],
        twoHanded: true
    },
    {
        name: "Net",
        cost: 1,
        damage: "0",
        damageType: "",
        weight: 3,
        properties: ["Special", "Thrown"],
        twoHanded: false
    }
];
