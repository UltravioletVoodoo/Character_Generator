import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { addDragonBornSubRaceFeatures, addDwarfSubRaceFeatures, addElfSubRaceFeatures } from "./SubRace";
import { findWeapon } from "./WeaponSets";
import { findTool } from "./ToolSets";
import { sumSkills } from "./Skills";
export function addRaceFeatures(character) {
    // Choose a race
    character = util.choice(raceFunctionList)(character);
    // Return the modified character
    return character;
}
const raceFunctionList = [
    addDragonBornFeatures,
    addDwarfFeatures,
    addElfFeatures,
    addGnomeFeatures,
    addHalfElfFeatures,
    addHalfOrcFeatures,
    addHalflingFeatures,
    addHumanFeatures,
    addTieflingFeatures
];
function addDragonBornFeatures(character) {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2, cha: 1 })]);
    character.age = util.randomNumberFromRange([15, 80]);
    character.speed = 30;
    character.languages = ["Common", "Draconic"];
    character = addDragonBornSubRaceFeatures(character);
    return character;
}
function addDwarfFeatures(character) {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ con: 2 })]);
    character.age = util.randomNumberFromRange([50, 350]);
    character.speed = 25;
    character.languages = ["Common", "Dwarvish"];
    character.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"];
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Battleaxe"))
        .concat(findWeapon("Handaxe"))
        .concat(findWeapon("Throwing Hammer"))
        .concat(findWeapon("Warhammer"));
    character.toolProfs = character.toolProfs
        .concat(util.choice([
        findTool("Smith's tools"),
        findTool("Brewer's supplies"),
        findTool("Mason's tools")
    ]));
    character = addDwarfSubRaceFeatures(character);
    return character;
}
function addElfFeatures(character) {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ dex: 2 })]);
    character.age = util.randomNumberFromRange([100, 750]);
    character.speed = 30;
    character.languages = ["Common", "Elven"];
    character.traits = ["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"];
    character.skillProfs = sumSkills([character.skillProfs, { wis: { perception: 2 } }]);
    character = addElfSubRaceFeatures(character);
    return character;
}
function addGnomeFeatures(character) {
    character.raceName = "Gnome";
    return character;
}
function addHalfElfFeatures(character) {
    character.raceName = "Half-Elf";
    return character;
}
function addHalfOrcFeatures(character) {
    character.raceName = "Half-Orc";
    return character;
}
function addHalflingFeatures(character) {
    character.raceName = "Halfling";
    return character;
}
function addHumanFeatures(character) {
    character.raceName = "Human";
    return character;
}
function addTieflingFeatures(character) {
    character.raceName = "Tiefling";
    return character;
}
