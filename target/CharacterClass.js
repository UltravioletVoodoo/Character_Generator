import { util } from "./Util";
export function addCharacterClassFeatures(character) {
    // Choose a class
    character = util.choice(classFunctionList)(character);
    // Return The modified character
    return character;
}
const classFunctionList = [
    addBarbarianFeatures,
    addBardFeatures,
    addClericFeatures,
    addDruidFeatures,
    addFighterFeatures,
    addMonkFeatures,
    addPaladinFeatures,
    addRangerFeatures,
    addRogueFeatures,
    addSorcererFeatures,
    addWarlockFeatures,
    addWizardFeatures
];
function addBarbarianFeatures(character) {
    character.className = "Barbarian";
    return character;
}
function addBardFeatures(character) {
    character.className = "Bard";
    return character;
}
function addClericFeatures(character) {
    character.className = "Cleric";
    return character;
}
function addDruidFeatures(character) {
    character.className = "Druid";
    return character;
}
function addFighterFeatures(character) {
    character.className = "Fighter";
    return character;
}
function addMonkFeatures(character) {
    character.className = "Monk";
    return character;
}
function addPaladinFeatures(character) {
    character.className = "Paladin";
    return character;
}
function addRangerFeatures(character) {
    character.className = "Ranger";
    return character;
}
function addRogueFeatures(character) {
    character.className = "Rogue";
    return character;
}
function addSorcererFeatures(character) {
    character.className = "Sorcerer";
    return character;
}
function addWarlockFeatures(character) {
    character.className = "Warlock";
    return character;
}
function addWizardFeatures(character) {
    character.className = "Wizard";
    return character;
}
