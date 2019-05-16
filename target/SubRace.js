import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
export function addDragonBornSubRaceFeatures(character) {
    character = util.choice(dragonBornSubRaceFunctionList)(character);
    return character;
}
export function addDwarfSubRaceFeatures(character) {
    character = util.choice(dwarfSubRaceFunctionList)(character);
    return character;
}
const dragonBornSubRaceFunctionList = [
    addBlackDragonBornFeatures,
    addBlueDragonBornFeatures,
    addBrassDragonBornFeatures,
    addBronzeDragonBornFeatures,
    addCopperDragonBornFeatures,
    addGoldDragonBornFeatures,
    addGreenDragonBornFeatures,
    addRedDragonBornFeatures,
    addSilverDragonBornFeatures,
    addWhiteDragonBornFeatures
];
const dwarfSubRaceFunctionList = [
    addHillDwarfFeatures,
    addMountainDwarfFeatures
];
function addBlackDragonBornFeatures(character) {
    character.raceName = "Black Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    // Return the modified character
    return character;
}
function addBlueDragonBornFeatures(character) {
    character.raceName = "Blue Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    // Return the modified character
    return character;
}
function addBrassDragonBornFeatures(character) {
    character.raceName = "Brass Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}
function addBronzeDragonBornFeatures(character) {
    character.raceName = "Bronze Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    // Return the modified character
    return character;
}
function addCopperDragonBornFeatures(character) {
    character.raceName = "Copper Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    // Return the modified character
    return character;
}
function addGoldDragonBornFeatures(character) {
    character.raceName = "Gold Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}
function addGreenDragonBornFeatures(character) {
    character.raceName = "Green Dragonborn";
    character.traits = character.traits.concat("Poison Breath").concat("Poison Resistance");
    // Return the modified character
    return character;
}
function addRedDragonBornFeatures(character) {
    character.raceName = "Red Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}
function addSilverDragonBornFeatures(character) {
    character.raceName = "Silver Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    // Return the modified character
    return character;
}
function addWhiteDragonBornFeatures(character) {
    character.raceName = "White Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    // Return the modified character
    return character;
}
function addHillDwarfFeatures(character) {
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ wis: 1 })]);
    character.hp = character.hp + 1;
    // Return the modified character
    return character;
}
function addMountainDwarfFeatures(character) {
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2 })]);
    character.armorProfs = character.armorProfs
        .concat(light)
        .concat(medium);
    // Return the modified character
    return character;
}
