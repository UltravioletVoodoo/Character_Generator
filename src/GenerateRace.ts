import { Character } from "./Character";
import { util } from "./Util";
import { findWeapon } from "./WeaponSets"
import { findTool } from "./ToolSets";
import { light, medium, findArmor, } from "./ArmorSets"

export function generateRace(){
    return util.choice(races);
}

const races: Partial<Character>[] = [
    {
        raceName: "Black Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Acid Resistance", "Acid Breath"])
    },
    {
        raceName: "Blue Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Lightning Resistance", "Lightning Breath"])
    },
    {
        raceName: "Brass Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Bronze Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Lightning Resistance", "Lightning Breath"])
    },
    {
        raceName: "Copper Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Acid Resistance", "Acid Breath"])
    },
    {
        raceName: "Gold Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Green Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Poison Resistance", "Poison Breath"])
    },
    {
        raceName: "Red Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Silver Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Cold Resistance", "Cold Breath"])
    },
    {
        raceName: "White Dragonborn",
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        age: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Cold Resistance", "Cold Breath"])
    },
    {
        raceName: "Hill Dwarf",
        attributes: {
            str: 0,
            dex: 0,
            con: 2,
            int: 0,
            wis: 1,
            cha: 0
        },
        age: [50, 350],
        speed: 25,
        languages: new Set(["Common", "Dwarvish"]),
        weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
        toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
        traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning", "Dwarven Toughness"]),
        hitPoints: 1
    },
    {
        raceName: "Mountain Dwarf",
        attributes: {
            str: 2,
            dex: 0,
            con: 2,
            int: 0,
            wis: 0,
            cha: 0
        },
        age: [50, 350],
        speed: 25,
        languages: new Set(["Common", "Dwarvish"]),
        weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
        armorProficiencies: new Set(light.concat(medium)),
        shieldProficiencies: new Set([findArmor("Medium shield")]),
        toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
        traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning"]),
    },
    ];