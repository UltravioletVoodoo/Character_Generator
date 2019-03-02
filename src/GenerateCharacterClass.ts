import { util } from "./Util";
import { Character } from "./Character"
import { simpleMelee, martialMelee, simpleRanged, martialRanged, findWeapon } from "./WeaponSets"
import { light, medium, findArmor } from "./ArmorSets"
import { chooseProf } from "./Skills";
import { musical } from "./ToolSets";
import { Spells, bardSpells } from "./Spells";


export function generateCharacterClass(){
    return util.choice(characterClass);
}

function chooseSpells(array: Spells[]){
    let result: Spells[] = [];
    for (let x of array){
        result = result.concat({
            level: x.level,
            spellList: util.choices(x.spellList, x.known),
            known: x.known
        });
    }
    return result;
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
            ),
        toolProficiencies: new Set(),
        savingThrowProficiencies: {
            str: 2,
            con: 2,
        },
        skillProficiencies: chooseProf(2, [
            {wis: {animalHandling: 2}},
            {str: {athletics: 2}},
            {cha: {intimidation: 2}},
            {int: {nature: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}}
        ]),
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
            ),
        toolProficiencies: new Set(util.choices(musical, 3)),
        savingThrowProficiencies: {
            dex: 2,
            cha: 2
        },
        skillProficiencies: chooseProf(3, [
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
        ]),
        startingGold: 200,
        traits: new Set(["Bardic inspiration (d6)"]),
        spells: chooseSpells(bardSpells)
    }
];