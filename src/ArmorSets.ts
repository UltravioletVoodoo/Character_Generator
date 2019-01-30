import { Attributes } from "./Attributes";

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
        weight: "0"
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
    weight: string
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
        weight: "8 lb."
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
        weight: "10 lb."
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
        weight: "13 lb."
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
        weight: "12 lb."
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
        weight: "20 lb."
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
        weight: "45 lb."
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
        weight: "20 lb."
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
        weight: "40 lb."
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
        weight: "40 lb."
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
        weight: "55 lb."
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
        weight: "60 lb."
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
        weight: "65 lb."
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
        weight: " 6 lb."
    }
];