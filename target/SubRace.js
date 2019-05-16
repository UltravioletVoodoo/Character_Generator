import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
import { findWeapon } from "./WeaponSets";
import { wizardSpells } from "./Spells";
import { languages } from "./Languages";
export function addDragonBornSubRaceFeatures(character) {
    character = util.choice(dragonBornSubRaceFunctionList)(character);
    return character;
}
export function addDwarfSubRaceFeatures(character) {
    character = util.choice(dwarfSubRaceFunctionList)(character);
    return character;
}
export function addElfSubRaceFeatures(character) {
    character = util.choice(elfSubRaceFunctionList)(character);
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
const elfSubRaceFunctionList = [
    addHighElfFeatures,
    addWoodElfFeatures,
    addDrowElfFeatures
];
function addBlackDragonBornFeatures(character) {
    character.raceName = "Black Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    return character;
}
function addBlueDragonBornFeatures(character) {
    character.raceName = "Blue Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    return character;
}
function addBrassDragonBornFeatures(character) {
    character.raceName = "Brass Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}
function addBronzeDragonBornFeatures(character) {
    character.raceName = "Bronze Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    return character;
}
function addCopperDragonBornFeatures(character) {
    character.raceName = "Copper Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    return character;
}
function addGoldDragonBornFeatures(character) {
    character.raceName = "Gold Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}
function addGreenDragonBornFeatures(character) {
    character.raceName = "Green Dragonborn";
    character.traits = character.traits.concat("Poison Breath").concat("Poison Resistance");
    return character;
}
function addRedDragonBornFeatures(character) {
    character.raceName = "Red Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}
function addSilverDragonBornFeatures(character) {
    character.raceName = "Silver Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    return character;
}
function addWhiteDragonBornFeatures(character) {
    character.raceName = "White Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    return character;
}
function addHillDwarfFeatures(character) {
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ wis: 1 })]);
    character.hp = character.hp + 1;
    return character;
}
function addMountainDwarfFeatures(character) {
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2 })]);
    character.armorProfs = character.armorProfs
        .concat(light)
        .concat(medium);
    return character;
}
function addHighElfFeatures(character) {
    character.raceName = "High Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ int: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Shortbow"))
        .concat(findWeapon("Longbow"));
    character.level0Spells = character.level0Spells.concat(util.choice(wizardSpells[0]));
    character.languages = character.languages.concat(util.choice(languages, character.languages));
    return character;
}
function addWoodElfFeatures(character) {
    character.raceName = "Wood Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ wis: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("ShortBow"))
        .concat(findWeapon("Longbow"));
    character.speed = character.speed + 5;
    character.traits = character.traits.concat(["Fleet of Foot", "Mask of the Wild"]);
    return character;
}
function addDrowElfFeatures(character) {
    character.raceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ cha: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat("Superior Darkvision");
    character.level0Spells = character.level0Spells.concat("Dancing lights");
    return character;
}
