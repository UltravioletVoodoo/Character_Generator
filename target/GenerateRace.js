import { util } from "./Util";
import { findWeapon } from "./WeaponSets";
import { elfNames } from "./NameSets";
import { wizardSpells, chooseSpells } from "./Spells";
import { languages } from "./Languages";
import { sumSkills } from "./Skills";
export function generateRace() {
    return util.choice(races);
}
const races = [
    // {
    //     raceName: "Black Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Acid Resistance", "Acid Breath"])
    // },
    // {
    //     raceName: "Blue Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Lightning Resistance", "Lightning Breath"])
    // },
    // {
    //     raceName: "Brass Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Fire Resistance", "Fire Breath"])
    // },
    // {
    //     raceName: "Bronze Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Lightning Resistance", "Lightning Breath"])
    // },
    // {
    //     raceName: "Copper Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Acid Resistance", "Acid Breath"])
    // },
    // {
    //     raceName: "Gold Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Fire Resistance", "Fire Breath"])
    // },
    // {
    //     raceName: "Green Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Poison Resistance", "Poison Breath"])
    // },
    // {
    //     raceName: "Red Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Fire Resistance", "Fire Breath"])
    // },
    // {
    //     raceName: "Silver Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Cold Resistance", "Cold Breath"])
    // },
    // {
    //     raceName: "White Dragonborn",
    //     name: util.choice(dragonBornNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 0,
    //         int: 0,
    //         wis: 0,
    //         cha: 1
    //     },
    //     ageRange: [15, 100],
    //     speed: 30,
    //     languages: new Set(["Common", "Draconic"]),
    //     traits: new Set(["Cold Resistance", "Cold Breath"])
    // },
    // {
    //     raceName: "Hill Dwarf",
    //     name: util.choice(dwarfNames),
    //     attributes: {
    //         str: 0,
    //         dex: 0,
    //         con: 2,
    //         int: 0,
    //         wis: 1,
    //         cha: 0
    //     },
    //     ageRange: [50, 350],
    //     speed: 25,
    //     languages: new Set(["Common", "Dwarvish"]),
    //     weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
    //     toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
    //     traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning", "Dwarven Toughness"]),
    //     hitPoints: 1
    // },
    // {
    //     raceName: "Mountain Dwarf",
    //     name: util.choice(dwarfNames),
    //     attributes: {
    //         str: 2,
    //         dex: 0,
    //         con: 2,
    //         int: 0,
    //         wis: 0,
    //         cha: 0
    //     },
    //     ageRange: [50, 350],
    //     speed: 25,
    //     languages: new Set(["Common", "Dwarvish"]),
    //     weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
    //     armorProficiencies: new Set(light.concat(medium)),
    //     shieldProficiencies: new Set([findArmor("Medium shield")]),
    //     toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
    //     traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning"]),
    // },
    {
        raceName: "High Elf",
        name: util.choice(elfNames),
        attributes: {
            str: 0,
            dex: 2,
            con: 0,
            int: 1,
            wis: 0,
            cha: 0
        },
        ageRange: [100, 750],
        speed: 30,
        languages: new Set(["Common", "Elvish"].concat(util.choice(util.arrayDelete(util.arrayDelete(languages, "Common"), "Elvish")))),
        weaponProficiencies: new Set([findWeapon("Longsword"), findWeapon("Shortsword"), findWeapon("Shortbow"), findWeapon("Longbow")]),
        traits: new Set(["Darkvision", "Fey Ancestry", "Trance"]),
        skillProficiencies: sumSkills([{ wis: { perception: 2 } }]),
        spells: chooseSpells(wizardSpells, [1, 0])
    }
];
