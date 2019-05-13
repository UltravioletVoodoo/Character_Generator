import { Character } from "./Character";
import { util } from "./Util";
import { findWeapon } from "./WeaponSets"
import { findTool } from "./ToolSets";
import { light, medium, findArmor, } from "./ArmorSets"
import {  dragonBornNames, dwarfNames, elfNames, gnomeNames, halfElfNames, halfOrcNames, halflingNames, humanNames, tieflingNames } from "./NameSets"
import { wizardSpells, chooseSpells } from "./Spells";
import { languages } from "./Languages";
import { sumSkills, allSkillPartialProfs } from "./Skills";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";


export function generateRace(){
    return util.choice(races);
}

const races: Partial<Character>[] = [
    {
        raceName: "Black Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Acid Resistance", "Acid Breath"])
    },
    {
        raceName: "Blue Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Lightning Resistance", "Lightning Breath"])
    },
    {
        raceName: "Brass Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Bronze Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Lightning Resistance", "Lightning Breath"])
    },
    {
        raceName: "Copper Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Acid Resistance", "Acid Breath"])
    },
    {
        raceName: "Gold Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Green Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Poison Resistance", "Poison Breath"])
    },
    {
        raceName: "Red Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Fire Resistance", "Fire Breath"])
    },
    {
        raceName: "Silver Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Cold Resistance", "Cold Breath"])
    },
    {
        raceName: "White Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Cold Resistance", "Cold Breath"])
    },
    {
        raceName: "Hill Dwarf",
        nameSet: dwarfNames,
        attributes: {
            str: 0,
            dex: 0,
            con: 2,
            int: 0,
            wis: 1,
            cha: 0
        },
        ageRange: [50, 350],
        speed: 25,
        languages: new Set(["Common", "Dwarvish"]),
        weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
        toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
        traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning", "Dwarven Toughness"]),
        hitPoints: 1
    },
    {
        raceName: "Mountain Dwarf",
        nameSet: dwarfNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 2,
            int: 0,
            wis: 0,
            cha: 0
        },
        ageRange: [50, 350],
        speed: 25,
        languages: new Set(["Common", "Dwarvish"]),
        weaponProficiencies: new Set([findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer")]),
        armorProficiencies: new Set(light.concat(medium)),
        shieldProficiencies: new Set([findArmor("Medium shield")]),
        toolProficiencies: new Set([util.choice([findTool("Smith's tools"), findTool("Brewer's supplies"), findTool("Mason's tools")])]),
        traits: new Set(["Darkvision", "Dwarven Resilience", "Stonecunning"]),
    },
    {
        raceName: "High Elf",
        nameSet: elfNames,
        attributes: {
            str: 0,
            dex: 2,
            con: 0,
            int: 1,
            wis: 0,
            cha: 0
        },
        ageRange: [100,750],
        speed: 30,
        languages: new Set(["Common", "Elvish"].concat(util.choice(util.arrayDelete(util.arrayDelete(languages, "Common"), "Elvish")))),
        weaponProficiencies: new Set([findWeapon("Longsword"), findWeapon("Shortsword"), findWeapon("Shortbow"), findWeapon("Longbow")]),
        traits: new Set(["Darkvision","Fey Ancestry","Trance"]),
        skillProficiencies: sumSkills([{wis: {perception: 2}}]),
        spells: chooseSpells(wizardSpells, [1,0])
    },
    {
        raceName: "Wood Elf",
        nameSet: elfNames,
        attributes: {
            str: 0,
            dex: 2,
            con: 0,
            int: 0,
            wis: 1,
            cha: 0
        },
        ageRange: [100,750],
        speed: 35,
        languages: new Set(["Common", "Elvish"]),
        weaponProficiencies: new Set([findWeapon("Longsword"), findWeapon("Shortsword"), findWeapon("Shortbow"), findWeapon("Longbow")]),
        traits: new Set(["Darkvision","Fey Ancestry","Trance","Mask of the Wild"]),
        skillProficiencies: sumSkills([{wis: {perception: 2}}])
    },
    {
        raceName: "Drow Elf",
        nameSet: elfNames,
        attributes: {
            str: 0,
            dex: 2,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [100,750],
        speed: 30,
        languages: new Set(["Common", "Elvish"]),
        weaponProficiencies: new Set([findWeapon("Rapier"), findWeapon("Shortsword"), findWeapon("Hand Crossbow")]),
        traits: new Set(["Superior Darkvision","Fey Ancestry","Trance","Drow Magic","Sunlight Sensitivity"]),
        skillProficiencies: sumSkills([{wis: {perception: 2}}]),
        spells: [["Dancing lights"],[]]
    },
    {
        raceName: "Forest Gnome",
        nameSet: gnomeNames,
        attributes: {
            str: 0,
            dex: 1,
            con: 0,
            int: 2,
            wis: 0,
            cha: 0
        },
        ageRange: [40,400],
        speed: 25,
        traits: new Set(["Darkvision", "Gnome Cunning", "Natural Illusionist", "Speak with Small Beasts"]),
        languages: new Set(["Common", "Gnomish"]),
        spells: [["Minor illusion"],[]]
    },
    {
        raceName: "Rock Gnome",
        nameSet: gnomeNames,
        attributes: {
            str: 0,
            dex: 0,
            con: 1,
            int: 2,
            wis: 0,
            cha: 0
        },
        ageRange: [40,400],
        speed: 25,
        traits: new Set(["Darkvision", "Gnome Cunning", "Articifer's Lore", "Tinker"]),
        languages: new Set(["Common", "Gnomish"]),
    },
    {
        raceName: "Deep Gnome",
        nameSet: gnomeNames,
        attributes: {
            str: 0,
            dex: 1,
            con: 0,
            int: 2,
            wis: 0,
            cha: 0
        },
        ageRange: [40,400],
        speed: 25,
        traits: new Set(["Superior Darkvision", "Gnome Cunning", "Stone Camouflage"]),
        languages: new Set(["Common", "Gnomish", "Undercommon"]),
    },
    {
        raceName: "Half-Elf",
        nameSet: halfElfNames,
        attributes: mergeAttributes([
            fleshOutAttributes({cha:2}),
            mergeAttributes(util.choices([{str:1},{dex:1},{con:1},{int:1},{wis:1}], 2).map(fleshOutAttributes))
        ]),
        ageRange: [20, 180],
        speed: 30,
        traits: new Set(["Darkvision", "Fey Ancestry", "Skill Versatility"]),
        skillProficiencies: sumSkills(util.choices(allSkillPartialProfs, 2)),
        languages: new Set(["Common", "Elvish"].concat(util.choice(util.arrayDelete(util.arrayDelete(languages, "Common"), "Elvish"))))
    },
    {
        raceName: "Half-Orc",
        nameSet: halfOrcNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 1,
            int: 0,
            wis: 0,
            cha: 0
        },
        ageRange: [14,75],
        speed: 30,
        traits: new Set(["Darkvision", "Relentless Endurance", "Savage Attacks"]),
        skillProficiencies: sumSkills([{cha: {intimidation: 2}}]),
        languages: new Set(["Common", "Orc"])
    },
    {
        raceName: "LightFoot Halfling",
        nameSet: halflingNames,
        attributes: {
            str: 0,
            dex: 2,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [20,150],
        speed: 25,
        traits: new Set(["Lucky", "Brave", "Nimble", "Naturally Stealthy"]),
        languages: new Set(["Common", "Halfling"])
    },
    {
        raceName: "Stout Halfling",
        nameSet: halflingNames,
        attributes: {
            str: 0,
            dex: 2,
            con: 1,
            int: 0,
            wis: 0,
            cha: 0
        },
        ageRange: [20,150],
        speed: 25,
        traits: new Set(["Lucky", "Brave", "Nimble", "Stout Resilience"]),
        languages: new Set(["Common", "Halfling"])
    },
    {
        raceName: "Human",
        nameSet: humanNames,
        attributes: {
            str: 1,
            dex: 1,
            con: 1,
            int: 1,
            wis: 1,
            cha: 1
        },
        ageRange: [18, 80],
        speed: 30,
        languages: new Set(["Common"].concat(util.choice(util.arrayDelete(languages, "Common"))))
    },
    {
        raceName: "Tiefling",
        nameSet: tieflingNames,
        attributes:
                mergeAttributes([
                fleshOutAttributes({int:1}),
                util.choice([fleshOutAttributes({dex:2}),fleshOutAttributes({cha:2})])
                ]),
        ageRange: [18,100],
        speed: 30,
        traits: new Set(["Darkvision", "Hellish Resistance", "Infernal Legacy"]),
        languages: new Set(["Common", "Infernal"]),
        spells: [["Thaumaturgy"],[]]
    }
    ];