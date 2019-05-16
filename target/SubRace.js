import { util } from "./Util";
export function addDragonBornSubRaceFeatures(character) {
    character = util.choice(dragonBornSubRaceFunctionList)(character);
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
