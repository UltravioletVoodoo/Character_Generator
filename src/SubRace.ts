import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
import { findWeapon } from "./WeaponSets";
import { wizardSpells } from "./Spells";
import { languages } from "./Languages";
import { allSkillPartialProfs } from "./Skills";

export function addDragonBornSubRaceFeatures(character: Character){
    util.choice(dragonBornSubRaceFunctionList)(character);
}

export function addDwarfSubRaceFeatures(character: Character){
    util.choice(dwarfSubRaceFunctionList)(character);
}

export function addElfSubRaceFeatures(character: Character){
    util.choice(elfSubRaceFunctionList)(character);
}

export function addGnomeSubRaceFeatures(character: Character){
    util.choice(gnomeSubRaceFunctionList)(character);
}

export function addHalflingSubRaceFeatures(character: Character){
    util.choice(halflingSubRaceFunctionList)(character);
}

const dragonBornSubRaceFunctionList: ((character: Character) => void)[] = [
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

const dwarfSubRaceFunctionList: ((character: Character) => void)[] = [
    addHillDwarfFeatures,
    addMountainDwarfFeatures
];

const elfSubRaceFunctionList: ((character: Character) => void)[] = [
    addHighElfFeatures,
    addWoodElfFeatures,
    addDrowElfFeatures
];

const gnomeSubRaceFunctionList: ((character: Character) => void)[] = [
    addForestGnomeFeatures,
    addRockGnomeFeatures,
    addDeepGnomeFeatures
];

const halflingSubRaceFunctionList: ((character: Character) => void)[] = [
    addLightFootHalflingFeatures,
    addStoutHalflingFeatures
];

function addBlackDragonBornFeatures(character: Character){ 
    character.subRaceName = "Black Dragonborn";
    character.traits.push("Acid Resistance");
    character.abilities.push("Acid Breath");
}

function addBlueDragonBornFeatures(character: Character){ 
    character.subRaceName = "Blue Dragonborn";
    character.traits.push("Lightning Resistance");
    character.abilities.push("Lightning Breath");
}

function addBrassDragonBornFeatures(character: Character){ 
    character.subRaceName = "Brass Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}

function addBronzeDragonBornFeatures(character: Character){ 
    character.subRaceName = "Bronze Dragonborn";
    character.traits.push("Lightning Resistance");
    character.abilities.push("Lightning Breath");
}

function addCopperDragonBornFeatures(character: Character){ 
    character.subRaceName = "Copper Dragonborn";
    character.traits.push("Acid Resistance");
    character.abilities.push("Acid Breath");
}

function addGoldDragonBornFeatures(character: Character){ 
    character.subRaceName = "Gold Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}

function addGreenDragonBornFeatures(character: Character){ 
    character.subRaceName = "Green Dragonborn";
    character.traits.push("Poison Resistance");
    character.abilities.push("Poison Breath");
}

function addRedDragonBornFeatures(character: Character){ 
    character.subRaceName = "Red Dragonborn";
    character.traits.push("Fire Resistance");
    character.abilities.push("Fire Breath");
}

function addSilverDragonBornFeatures(character: Character){ 
    character.subRaceName = "Silver Dragonborn";
    character.traits.push("Cold Resistance");
    character.abilities.push("Cold Breath");
}

function addWhiteDragonBornFeatures(character: Character){ 
    character.subRaceName = "White Dragonborn";
    character.traits.push("Cold Resistance");
    character.abilities.push("Cold Breath");
}

function addHillDwarfFeatures(character: Character){
    character.subRaceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.hp = character.hp + 1;
}

function addMountainDwarfFeatures(character: Character){
    character.subRaceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2})]);
    character.armorProfs = character.armorProfs.concat(light, medium);
}

function addHighElfFeatures(character: Character){
    character.subRaceName = "High Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({int: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(
            findWeapon("Longsword"),
            findWeapon("Shortsword"),
            findWeapon("Shortbow"),
            findWeapon("Longbow")
        );
    character.inherentSpells[0].push(util.choice(wizardSpells[0], character.inherentSpells[0]));
    character.languages = character.languages.concat(util.choice(languages, character.languages));
}

function addWoodElfFeatures(character: Character){
    character.subRaceName = "Wood Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(
            findWeapon("Longsword"),
            findWeapon("Shortsword"),
            findWeapon("Shortbow"),
            findWeapon("Longbow")
            );
    character.speed = character.speed + 5;
    character.traits = character.traits.concat(["Fleet of Foot", "Mask of the Wild"]);
}

function addDrowElfFeatures(character: Character){
    character.subRaceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand Crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Sunlight Sensitivity"]);
    character.inherentSpells[0].push("Dancing lights");
}

function addForestGnomeFeatures(character: Character){
    character.subRaceName = "Forest Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.inherentSpells[0].push("Minor illusion");
    character.traits = character.traits.concat("Speak with Small Beasts");
}

function addRockGnomeFeatures(character: Character){
    character.subRaceName = "Rock Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
    character.traits.push("Artificer's Lore");
    character.abilities.push("Tinker");
}

function addDeepGnomeFeatures(character: Character){
    character.subRaceName = "Svirfneblin";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.age = util.randomNumberFromRange([25, 225]);
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Stone Camouflage"]);
    character.languages = character.languages.concat("Undercommon");
}

function addLightFootHalflingFeatures(character: Character){
    character.subRaceName = "Lightfoot Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.abilities.push("Naturally Stealthy");
}

function addStoutHalflingFeatures(character: Character){
    character.subRaceName = "Stout Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
    character.traits.push("Stout Resilience");
}
