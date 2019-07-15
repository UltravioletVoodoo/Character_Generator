import { Character } from "./Character";
import { util } from "./Util";

export function findWeapon(name: string): Weapon{
    for(const weaponList of [simpleMelee, simpleRanged, martialMelee, martialRanged]){
        for(const weapon of weaponList){
            if(weapon.name == name){
                return weapon;
            }
        }
    }
    throw new Error("No weapon '" + name + "' found...");
}

export function chooseWeapons(character: Character) {
    function getWeaponOptions(): Weapon[] {
        let options: Weapon[] = [];
        for (let x of character.weaponProfs) {
            if (x.cost <= character.gold) options.push(x);
        }
        return options;
    }

    let weaponCap = util.choice([1,2,3]);
    while (character.weapons.length < weaponCap) {
        let weapons = getWeaponOptions();
        if (weapons.length == 0) {
            break;
        }
        let weaponChoice = util.choice(weapons);
        character.weapons.push(weaponChoice);
        character.gold -= weaponChoice.cost;
    }
}

export interface Weapon {
    name: string,
    cost: number,
    damage: string,
    damageType: string,
    properties: string[]
} 

export const simpleMelee: Weapon[] = [
    {
        name: "Club",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludge",
        properties: ["Light"]
    },
    {
        name: "Dagger",
        cost: 2,
        damage: "1d4",
        damageType: "piercing",
        properties: ["Finesse", "Light", "Thrown"]
    },
    {
        name: "Greatclub",
        cost: 0.2,
        damage: "1d8",
        damageType: "Bludge",
        properties: ["Two-handed"]
    },
    {
        name: "Handaxe",
        cost: 5,
        damage: "1d6",
        damageType: "Slashing",
        properties: ["Light", "Thrown"]
    },
    {
        name: "Javelin",
        cost: 0.5,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Thrown"]
    },
    {
        name: "Light Hammer",
        cost: 0.2,
        damage: "1d4",
        damageType: "Bludge",
        properties: ["Light", "Thrown"]
    },
    {
        name: "Mace",
        cost: 5,
        damage: "1d6",
        damageType: "Bludge",
        properties: []
    },
    {
        name: "Quarterstaff",
        cost: 0.2,
        damage: "1d6",
        damageType: "Bludge",
        properties: ["Versatile"]
    },
    {
        name: "Sickle",
        cost: 1,
        damage: "1d4",
        damageType: "Slashing",
        properties: ["Light"]
    },
    {
        name: "Spear",
        cost: 1,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Thrown", "Versatile"]
    }
];

export const simpleRanged: Weapon[] = [
    {
        name: "Light Crossbow",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        properties: ["Ammunition", "Loading", "Two-handed"]
    },
    {
        name: "Dart",
        cost: 0.05,
        damage: "1d4",
        damageType: "Piercing",
        properties: ["Finesse", "Thrown"]
    },
    {
        name: "Shortbow",
        cost: 25,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Ammunition", "Two-handed"]
    },
    {
        name: "Sling",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludge",
        properties: ["Ammunition"]
    },
];

export const martialMelee: Weapon[] = [
    {
        name: "Battleaxe",
        cost: 10,
        damage: "1d8",
        damageType: "Slashing",
        properties: ["Versatile"]
    },
    {
        name: "Flail",
        cost: 10,
        damage: "1d8",
        damageType: "Bludge",
        properties: []
    },
    {
        name: "Glaive",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        properties: ["Heavy", "Reach", "Two-Handed"]
    },
    {
        name: "Greataxe",
        cost: 30,
        damage: "1d12",
        damageType: "Slashing",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Greatsword",
        cost: 50,
        damage: "2d6",
        damageType: "Slashing",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Halberd",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        properties: ["Heavy", "Reach", "Two-handed"]
    },
    {
        name: "Lance",
        cost: 10,
        damage: "1d12",
        damageType: "Piercing",
        properties: ["Reach", "Special"]
    },
    {
        name: "Longsword",
        cost: 15,
        damage: "1d8",
        damageType: "Slashing",
        properties: ["Versatile"]
    },
    {
        name: "Maul",
        cost: 10,
        damage: "2d6",
        damageType: "Bludge",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Morningstar",
        cost: 15,
        damage: "1d8",
        damageType: "Piercing",
        properties: []
    },
    {
        name: "Pike",
        cost: 5,
        damage: "1d10",
        damageType: "Piercing",
        properties: ["Heavy", "Reach", "Two-handed"]
    },
    {
        name: "Rapier",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        properties: ["Finesse"]
    },
    {
        name: "Scimitar",
        cost: 25,
        damage: "1d6",
        damageType: "Slashing",
        properties: ["Finesse", "Light"]
    },
    {
        name: "Shortsword",
        cost: 10,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Finesse", "Light"]
    },
    {
        name: "Trident",
        cost: 5,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Thrown", "Versatile"]
    },
    {
        name: "War Pick",
        cost: 5,
        damage: "1d8",
        damageType: "Piercing",
        properties: []
    },
    {
        name: "Warhammer",
        cost: 15,
        damage: "1d8",
        damageType: "Bludge",
        properties: ["Versatile"]
    },
    {
        name: "Whip",
        cost: 2,
        damage: "1d4",
        damageType: "Slashing",
        properties: ["Finesse", "Reach"]
    }
];

export const martialRanged: Weapon[] = [
    {
        name: "Blowgun",
        cost: 10,
        damage: "1",
        damageType: "Piercing",
        properties: ["Ammunition", "Loading"]
    },
    {
        name: "Hand Crossbow",
        cost: 75,
        damage: "1d6",
        damageType: "Piercing",
        properties: ["Ammunition", "Light", "Loading"]
    },
    {
        name: "Heavy Crossbow",
        cost: 50,
        damage: "1d10",
        damageType: "Piercing",
        properties: ["Ammunition", "Heavy", "Loading", "Two-handed"]
    },
    {
        name: "Longbow",
        cost: 50,
        damage: "1d8",
        damageType: "Piercing",
        properties: ["Ammunition", "Heavy", "Two-handed"]
    },
    {
        name: "Net",
        cost: 1,
        damage: "0",
        damageType: "",
        properties: ["Special", "Thrown"]
    }
];