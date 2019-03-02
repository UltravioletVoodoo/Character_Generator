export function findWeapon(name) {
    for (const weaponList of [simpleMelee, simpleRanged, martialMelee, martialRanged]) {
        for (const weapon of weaponList) {
            if (weapon.name == name) {
                return weapon;
            }
        }
    }
    return {
        name: "No weapon found",
        cost: 0,
        damage: "0",
        damageType: "",
        weight: 0,
        properties: []
    };
}
export const simpleMelee = [
    {
        name: "Club",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Light"]
    },
    {
        name: "Dagger",
        cost: 2,
        damage: "1d4",
        damageType: "piercing",
        weight: 1,
        properties: ["Finesse", "Light", "Thrown"]
    },
    {
        name: "Greatclub",
        cost: 0.2,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 10,
        properties: ["Two-Handed"]
    },
    {
        name: "Handaxe",
        cost: 5,
        damage: "1d6",
        damageType: "Slashing",
        weight: 2,
        properties: ["Light", "Thrown"]
    },
    {
        name: "Javelin",
        cost: 0.5,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Thrown"]
    },
    {
        name: "Light Hammer",
        cost: 0.2,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Light", "Thrown"]
    },
    {
        name: "Mace",
        cost: 5,
        damage: "1d6",
        damageType: "Bludgeoning",
        weight: 4,
        properties: [],
    },
    {
        name: "Quarterstaff",
        cost: 0.2,
        damage: "1d6",
        damageType: "Bludgeoning",
        weight: 4,
        properties: ["Versatile"]
    },
    {
        name: "Sickle",
        cost: 1,
        damage: "1d4",
        damageType: "Slashing",
        weight: 2,
        properties: ["Light"]
    },
    {
        name: "Spear",
        cost: 1,
        damage: "1d6",
        damageType: "Piercing",
        weight: 3,
        properties: ["Thrown", "Versatile"]
    }
];
export const simpleRanged = [
    {
        name: "Light Crossbow",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        weight: 5,
        properties: ["Ammunition", "Loading", "Two-Handed"]
    },
    {
        name: "Dart",
        cost: 0.05,
        damage: "1d4",
        damageType: "Piercing",
        weight: 0.25,
        properties: ["Finesse", "Thrown"]
    },
    {
        name: "Shortbow",
        cost: 25,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Ammunition", "Two-Handed"]
    },
    {
        name: "Sling",
        cost: 0.1,
        damage: "1d4",
        damageType: "Bludgeoning",
        weight: 0,
        properties: ["Ammunition"]
    },
];
export const martialMelee = [
    {
        name: "Battleaxe",
        cost: 10,
        damage: "1d8",
        damageType: "Slashing",
        weight: 4,
        properties: ["Versatile"]
    },
    {
        name: "Flail",
        cost: 10,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 2,
        properties: []
    },
    {
        name: "Glaive",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy", "Reach", "Two-Handed"]
    },
    {
        name: "Greataxe",
        cost: 30,
        damage: "1d12",
        damageType: "Slashing",
        weight: 7,
        properties: ["Heavy", "Two-Handed"]
    },
    {
        name: "Greatsword",
        cost: 50,
        damage: "2d6",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy", "Two-Handed"]
    },
    {
        name: "Halberd",
        cost: 20,
        damage: "1d10",
        damageType: "Slashing",
        weight: 6,
        properties: ["Heavy", "Reach", "Two-Handed"]
    },
    {
        name: "Lance",
        cost: 10,
        damage: "1d12",
        damageType: "Piercing",
        weight: 6,
        properties: ["Reach", "Special"]
    },
    {
        name: "Longsword",
        cost: 15,
        damage: "1d8",
        damageType: "Slashing",
        weight: 3,
        properties: ["Versatile"]
    },
    {
        name: "Maul",
        cost: 10,
        damage: "2d6",
        damageType: "Bludgeoning",
        weight: 10,
        properties: ["Heavy", "Two-Handed"]
    },
    {
        name: "Morningstar",
        cost: 15,
        damage: "1d8",
        damageType: "Piercing",
        weight: 4,
        properties: []
    },
    {
        name: "Pike",
        cost: 5,
        damage: "1d10",
        damageType: "Piercing",
        weight: 18,
        properties: ["Heavy", "Reach", "Two-Handed"]
    },
    {
        name: "Rapier",
        cost: 25,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: ["Finesse"]
    },
    {
        name: "Scimitar",
        cost: 25,
        damage: "1d6",
        damageType: "Slashing",
        weight: 3,
        properties: ["Finesse", "Light"]
    },
    {
        name: "Shortsword",
        cost: 10,
        damage: "1d6",
        damageType: "Piercing",
        weight: 2,
        properties: ["Finesse", "Light"]
    },
    {
        name: "Trident",
        cost: 5,
        damage: "1d6",
        damageType: "Piercing",
        weight: 4,
        properties: ["Thrown", "Versatile"]
    },
    {
        name: "War Pick",
        cost: 5,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: []
    },
    {
        name: "Warhammer",
        cost: 15,
        damage: "1d8",
        damageType: "Bludgeoning",
        weight: 2,
        properties: ["Versatile"]
    },
    {
        name: "Whip",
        cost: 2,
        damage: "1d4",
        damageType: "Slashing",
        weight: 3,
        properties: ["Finesse", "Reach"]
    }
];
export const martialRanged = [
    {
        name: "Blowgun",
        cost: 10,
        damage: "1",
        damageType: "Piercing",
        weight: 1,
        properties: ["Ammunition", "Loading"]
    },
    {
        name: "Hand Crossbow",
        cost: 75,
        damage: "1d6",
        damageType: "Piercing",
        weight: 3,
        properties: ["Ammunition", "Light", "Loading"]
    },
    {
        name: "Heavy Crossbow",
        cost: 50,
        damage: "1d10",
        damageType: "Piercing",
        weight: 18,
        properties: ["Ammunition", "Heavy", "Loading", "Two-Handed"]
    },
    {
        name: "Longbow",
        cost: 50,
        damage: "1d8",
        damageType: "Piercing",
        weight: 2,
        properties: ["Ammunition", "Heavy", "Two-Handed"]
    },
    {
        name: "Net",
        cost: 1,
        damage: "0",
        damageType: "",
        weight: 3,
        properties: ["Special", "Thrown"]
    }
];
