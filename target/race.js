import { util } from "./Util";
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
    character.raceName = "DragonBorn";
    return character;
}
function addDwarfFeatures(character) {
    character.raceName = "Dwarf";
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
    character.raceName = "HalfOrc";
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
