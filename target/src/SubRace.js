import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
import { findWeapon } from "./WeaponSets";
import { wizardSpells } from "./Spells";
import { languages } from "./Languages";
export function addDragonBornSubRaceFeatures(character) {
    util.choice(dragonBornSubRaceFunctionList)(character);
}
export function addDwarfSubRaceFeatures(character) {
    util.choice(dwarfSubRaceFunctionList)(character);
}
export function addElfSubRaceFeatures(character) {
    util.choice(elfSubRaceFunctionList)(character);
}
export function addGnomeSubRaceFeatures(character) {
    util.choice(gnomeSubRaceFunctionList)(character);
}
export function addHalflingSubRaceFeatures(character) {
    util.choice(halflingSubRaceFunctionList)(character);
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
const gnomeSubRaceFunctionList = [
    addForestGnomeFeatures,
    addRockGnomeFeatures,
    addDeepGnomeFeatures
];
const halflingSubRaceFunctionList = [
    addLightFootHalflingFeatures,
    addStoutHalflingFeatures
];
function addBlackDragonBornFeatures(character) {
    character.raceName = "Black Dragonborn";
    character.traits.push("Acid Resistance");
    character.abilities.push("Acid Breath");
}
function addBlueDragonBornFeatures(character) {
    character.raceName = "Blue Dragonborn";
    character.traits.push("Lightning Resistance");
    character.abilities.push("Lightning Breath");
}
function addBrassDragonBornFeatures(character) {
    character.raceName = "Brass Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}
function addBronzeDragonBornFeatures(character) {
    character.raceName = "Bronze Dragonborn";
    character.traits.push("Lightning Resistance");
    character.abilities.push("Lightning Breath");
}
function addCopperDragonBornFeatures(character) {
    character.raceName = "Copper Dragonborn";
    character.traits.push("Acid Resistance");
    character.abilities.push("Acid Breath");
}
function addGoldDragonBornFeatures(character) {
    character.raceName = "Gold Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}
function addGreenDragonBornFeatures(character) {
    character.raceName = "Green Dragonborn";
    character.traits.push("Poison Resistance");
    character.abilities.push("Poison Breath");
}
function addRedDragonBornFeatures(character) {
    character.raceName = "Red Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}
function addSilverDragonBornFeatures(character) {
    character.raceName = "Silver Dragonborn";
    character.traits.push("Cold Resistance");
    character.abilities.push("Cold Breath");
}
function addWhiteDragonBornFeatures(character) {
    character.raceName = "White Dragonborn";
    character.traits.push("Cold Resistance");
    character.abilities.push("Cold Breath");
}
function addHillDwarfFeatures(character) {
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ wis: 1 })]);
    character.hp = character.hp + 1;
}
function addMountainDwarfFeatures(character) {
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2 })]);
    character.armorProfs = character.armorProfs.concat(light, medium);
}
function addHighElfFeatures(character) {
    character.raceName = "High Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ int: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"), findWeapon("Shortsword"), findWeapon("Shortbow"), findWeapon("Longbow"));
    character.inherentSpells[0].push(util.choice(wizardSpells[0], character.inherentSpells[0]));
    character.languages = character.languages.concat(util.choice(languages, character.languages));
}
function addWoodElfFeatures(character) {
    character.raceName = "Wood Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ wis: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"), findWeapon("Shortsword"), findWeapon("Shortbow"), findWeapon("Longbow"));
    character.speed = character.speed + 5;
    character.traits = character.traits.concat(["Fleet of Foot", "Mask of the Wild"]);
}
function addDrowElfFeatures(character) {
    character.raceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ cha: 1 })]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand Crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Sunlight Sensitivity"]);
    character.inherentSpells[0].push("Dancing lights");
}
function addForestGnomeFeatures(character) {
    character.raceName = "Forest Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ dex: 1 })]);
    character.inherentSpells[0].push("Minor illusion");
    character.traits = character.traits.concat("Speak with Small Beasts");
}
function addRockGnomeFeatures(character) {
    character.raceName = "Rock Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ con: 1 })]);
    character.traits.push("Artificer's Lore");
    character.abilities.push("Tinker");
}
function addDeepGnomeFeatures(character) {
    character.raceName = "Svirfneblin";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ dex: 1 })]);
    character.age = util.randomNumberFromRange([25, 225]);
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Stone Camouflage"]);
    character.languages = character.languages.concat("Undercommon");
}
function addLightFootHalflingFeatures(character) {
    character.raceName = "Lightfoot Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ cha: 1 })]);
    character.abilities.push("Naturally Stealthy");
}
function addStoutHalflingFeatures(character) {
    character.raceName = "Stout Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ con: 1 })]);
    character.traits.push("Stout Resilience");
}
