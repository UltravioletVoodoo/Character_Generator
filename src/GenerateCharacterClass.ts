import { util } from "./Util";
import { Character } from "./Character"
import { simpleMelee, martialMelee, simpleRanged, martialRanged, findWeapon, bareFist } from "./WeaponSets"
import { light, medium, findArmor } from "./ArmorSets"
import { findTool, musical } from "./ToolSets";
import { bardSpells, clericSpells, druidSpells } from "./Spells";
import { sumSkills } from "./Skills"
import { fleshOutAttributes } from "./Attributes";


export function generateCharacterClass(){
    return util.choice(characterClass);
}

const characterClass: Partial<Character>[] = [
    {
        className: "Barbarian",
        hitDice: 12,
        armorProficiencies: new Set(light
            .concat(medium)
            .concat(findArmor("Unarmored defence con"))
            ),
        shieldProficiencies: new Set([findArmor("Buckler")]
            .concat(findArmor("Medium shield"))
            ),
        weaponProficiencies: new Set(simpleMelee
            .concat(martialMelee)
            .concat(simpleRanged)
            .concat(martialRanged)
            .concat(bareFist)
            ),
        toolProficiencies: new Set(),
        savingThrowProficiencies: fleshOutAttributes({
            str: 2,
            con: 2,
        }),
        skillProficiencies: sumSkills(util.choices([
            {wis: {animalHandling: 2}},
            {str: {athletics: 2}},
            {cha: {intimidation: 2}},
            {int: {nature: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}}
        ], 2)),
        startingGold: 80,
        traits: new Set(["Rage"]),
    },
    { 
        className: "Bard",
        hitDice: 8,
        armorProficiencies: new Set(light),
        shieldProficiencies: new Set([findArmor("Buckler")]),
        weaponProficiencies: new Set(
            simpleMelee
            .concat(simpleRanged)
            .concat(findWeapon("Hand Crossbow"))
            .concat(findWeapon("Longsword"))
            .concat(findWeapon("Rapier"))
            .concat(findWeapon("Shortsword"))
            .concat(bareFist)
            ),
        toolProficiencies: new Set(util.choices(musical, 3)),
        savingThrowProficiencies: fleshOutAttributes({
            dex: 2,
            cha: 2
        }),
        skillProficiencies: sumSkills(util.choices([
            {str: {athletics: 2}},
            {dex: {acrobatics: 2}},
            {dex: {sleightOfHand: 2}},
            {dex: {stealth: 2}},
            {int: {arcana: 2}},
            {int: {history: 2}},
            {int: {investigation: 2}},
            {int: {nature: 2}},
            {int: {religion: 2}},
            {wis: {animalHandling: 2}},
            {wis: {insight: 2}},
            {wis: {medicine: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}},
            {cha: {deception: 2}},
            {cha: {intimidation: 2}},
            {cha: {performance: 2}},
            {cha: {persuasion: 2}}
        ],3)),
        startingGold: 200,
        traits: new Set(["Bardic inspiration (d6)"]),
        spells: bardSpells,
        spellsKnown: [2,4]
    },
    // {
    //     className: "Cleric",
    //     hitDice: 8,
    //     armorProficiencies: new Set(light.concat(medium)),
    //     shieldProficiencies: new Set([
    //         findArmor("Buckler")]
    //         .concat(findArmor("Medium Shield"))
    //         ),
    //     weaponProficiencies: new Set(simpleMelee),
    //     savingThrowProficiencies: fleshOutAttributes({
    //         wis: 2,
    //         cha: 2
    //     }),
    //     skillProficiencies: sumSkills(util.choices([
    //         {int: {history: 2}},
    //         {int: {religion: 2}},
    //         {wis: {insight: 2}},
    //         {wis: {medicine: 2}},
    //         {cha: {persuasion: 2}}
    //     ], 2)),
    //     startingGold: 200,
    //     spells: clericSpells,
    //     spellsKnown: [3,2]
    //     //STILL NEEDS TO DEAL WITH CLERIC DOMAINS SOMEHOW
    // },
    {
        className: "Druid",
        hitDice: 8,
        armorProficiencies: new Set(light.concat(medium)),
        shieldProficiencies: new Set([findArmor("Buckler")].concat(findArmor("Medium shield"))),
        weaponProficiencies: new Set(
            [findWeapon("Club")]
            .concat(findWeapon("Dagger"))
            .concat(findWeapon("Dart"))
            .concat(findWeapon("Javelin"))
            .concat(findWeapon("Mace"))
            .concat(findWeapon("Quarterstaff"))
            .concat(findWeapon("Scimitar"))
            .concat(findWeapon("Sickle"))
            .concat(findWeapon("Sling"))
            .concat(findWeapon("Spear"))
            ),
        toolProficiencies: new Set([findTool("Herbalism kit")]),
        savingThrowProficiencies: fleshOutAttributes({
            int: 2,
            wis: 2
        }),
        skillProficiencies: sumSkills(util.choices([
            {int: {arcana: 2}},
            {int: {nature: 2}},
            {int: {religion: 2}},
            {wis: {animalHandling: 2}},
            {wis: {insight: 2}},
            {wis: {medicine: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}}
        ], 2)),
        traits: new Set(["Druidic"]),
        spells: druidSpells,
        spellsKnown: [2,2],
        startingGold: 80,
    },
    {
        className: "Fighter",
        startingGold: 200,
    },
    {
        className: "Monk",
        startingGold: 20,
    },
    {
        className: "Paladin",
        startingGold: 200,
    },
    {
        className: "Ranger",
        startingGold: 200,
    },
    {
        className: "Rogue",
        startingGold: 160,
    },
    {
        className: "Sorcerer",
        startingGold: 120,
    },
    {
        className: "Warlock",
        startingGold: 160,
    },
    {
        className: "Wizard",
        startingGold: 160,
    }
];