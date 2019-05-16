import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { addDragonBornSubRaceFeatures, addDwarfSubRaceFeatures } from "./SubRace";
import { findWeapon } from "./WeaponSets";
import { findTool } from "./ToolSets";
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
    // Add race attribute bonus
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2, cha: 1 })]);
    // Add simple general race features
    character.age = util.randomNumberFromRange([15, 80]);
    character.speed = 30;
    character.languages = ["Common", "Draconic"];
    // Add race features added by the subrace
    character = addDragonBornSubRaceFeatures(character);
    // Return Modified character
    return character;
}
function addDwarfFeatures(character) {
    // Add race attribute bonus
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ con: 2 })]);
    // Add simple general race features
    character.age = util.randomNumberFromRange([50, 350]);
    character.speed = 25;
    character.languages = ["Common", "Dwarvish"];
    // Add race traits
    character.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"];
    // Add weapon/tool proficiencies
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
    // Add character features added by subrace
    character = addDwarfSubRaceFeatures(character);
    // Return the modified character
    return character;
}
function addElfFeatures(character) {
    character.raceName = "Elf";
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
