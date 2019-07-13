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

export function addHalfElfSubRaceFeatures(character: Character){
    util.choice(halfElfSubRaceFunctionList)(character);
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

const halfElfSubRaceFunctionList: ((character: Character) => void)[] = [
    addHalfElfV1Features,
    addHalfElfV2Features,
    addHalfElfV3Features,
    addHalfElfV4Features,
    addHalfElfV5Features
];

const halflingSubRaceFunctionList: ((character: Character) => void)[] = [
    addLightFootHalflingFeatures,
    addStoutHalflingFeatures
];

function addBlackDragonBornFeatures(character: Character){ 
    character.raceName = "Black Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
}

function addBlueDragonBornFeatures(character: Character){ 
    character.raceName = "Blue Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
}

function addBrassDragonBornFeatures(character: Character){ 
    character.raceName = "Brass Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
}

function addBronzeDragonBornFeatures(character: Character){ 
    character.raceName = "Bronze Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
}

function addCopperDragonBornFeatures(character: Character){ 
    character.raceName = "Copper Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
}

function addGoldDragonBornFeatures(character: Character){ 
    character.raceName = "Gold Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
}

function addGreenDragonBornFeatures(character: Character){ 
    character.raceName = "Green Dragonborn";
    character.traits = character.traits.concat("Poison Breath").concat("Poison Resistance");
}

function addRedDragonBornFeatures(character: Character){ 
    character.raceName = "Red Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
}

function addSilverDragonBornFeatures(character: Character){ 
    character.raceName = "Silver Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
}

function addWhiteDragonBornFeatures(character: Character){ 
    character.raceName = "White Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
}

function addHillDwarfFeatures(character: Character){
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.hp = character.hp + 1;
}

function addMountainDwarfFeatures(character: Character){
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2})]);
    character.armorProfs = character.armorProfs.concat(light, medium);
}

function addHighElfFeatures(character: Character){
    character.raceName = "High Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({int: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(
            findWeapon("Longsword"),
            findWeapon("Shortsword"),
            findWeapon("Shortbow"),
            findWeapon("Longbow")
        );
    character.level0Spells = character.level0Spells.concat(util.choice(wizardSpells[0]));
    character.languages = character.languages.concat(util.choice(languages, character.languages));
}

function addWoodElfFeatures(character: Character){
    character.raceName = "Wood Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(
            findWeapon("Longsword"),
            findWeapon("Shortsword"),
            findWeapon("ShortBow"),
            findWeapon("Longbow")
            );
    character.speed = character.speed + 5;
    character.traits = character.traits.concat(["Fleet of Foot", "Mask of the Wild"]);
}

function addDrowElfFeatures(character: Character){
    character.raceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand Crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Sunlight Sensitivity"]);
    character.level0Spells = character.level0Spells.concat("Dancing lights");
}

function addForestGnomeFeatures(character: Character){
    character.raceName = "Forest Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.level0Spells = character.level0Spells.concat("Minor illusion");
    character.traits = character.traits.concat("Speak with Small Beasts");
}

function addRockGnomeFeatures(character: Character){
    character.raceName = "Rock Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
    character.traits = character.traits.concat(["Artificer's Lore", "Tinker"]);
}

function addDeepGnomeFeatures(character: Character){
    character.raceName = "Svirfneblin";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.age = util.randomNumberFromRange([25, 225]);
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Stone Camouflage"]);
    character.languages = character.languages.concat("Undercommon");
}

function addHalfElfV1Features(character: Character){
    character.traits = character.traits.concat("Skill Versatility");
    character.skillProfs = character.skillProfs.concat(util.choices(allSkillPartialProfs, 2));
}

function addHalfElfV2Features(character: Character){
    character.traits = character.traits.concat("High Elf Cantrip");
    character.level0Spells = character.level0Spells.concat(util.choice(wizardSpells[0]));
}

function addHalfElfV3Features(character: Character){
    character.traits = character.traits.concat("Fleet of Foot");
    character.speed = character.speed + 5;
}

function addHalfElfV4Features(character: Character){
    character.traits = character.traits.concat("Mask of the Wild");
}

function addHalfElfV5Features(character: Character){
    character.traits = character.traits.concat("Drow Magic");
    character.level0Spells = character.level0Spells.concat("Dancing lights");
}

function addLightFootHalflingFeatures(character: Character){
    character.raceName = "Lightfoot Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.traits = character.traits.concat("Naturally Stealthy");
}

function addStoutHalflingFeatures(character: Character){
    character.raceName = "Stout Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
    character.traits = character.traits.concat("Stout Resilience");
}
