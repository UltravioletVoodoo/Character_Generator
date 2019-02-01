export function findArmor(name: string): Armor{
    for (const armorList of [light, medium, heavy, shield]){
        for(const armor of armorList){
            if(armor.name == name){
                return armor;
            }
        }
    }
    return {
        name: "No armor found",
        cost: 0,
        ac: {
            base: 0,
            max: 0
        },
        strReq: 0,
        stealthDis: false,
        weight: 0
    }
}

export interface armorClass {
    base: number,
    max: number
}

export interface Armor {
    name: string,
    cost: number,
    ac: armorClass,
    strReq: number,
    stealthDis: boolean,
    weight: number
}

export const light: Armor[] = [
    {
        name: "Padded",
        cost: 5,
        ac: {
            base: 11,
            max: 5
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
            max: 5
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
            max: 5
        },
        strReq: 0,
        stealthDis: false,
        weight: 13
    }
];

export const medium: Armor[] = [
    {
        name: "Hide",
        cost: 10,
        ac: {
            base: 12,
            max: 2
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
            max: 2
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
            max: 2
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
            max: 2
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
            max: 2
        },
        strReq: 0,
        stealthDis: true,
        weight: 40
    },
];

export const heavy: Armor[] = [
    {
        name: "Ring mail",
        cost: 30,
        ac: {
            base: 14,
            max: 0
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
            max: 0
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
            max: 0
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
            max: 0
        },
        strReq: 15,
        stealthDis: true,
        weight: 65
    },
];

export const shield: Armor[] = [
    {
        name: "Shield",
        cost: 10,
        ac: {
            base: 2,
            max: 0
        },
        strReq: 0,
        stealthDis: false,
        weight: 6
    }
];