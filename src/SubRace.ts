import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
import { findWeapon } from "./WeaponSets";
import { wizardSpells } from "./Spells";
import { languages } from "./Languages";

export function addDragonBornSubRaceFeatures(character: Character): Character {
    character = util.choice(dragonBornSubRaceFunctionList)(character);
    return character;
}

export function addDwarfSubRaceFeatures(character: Character): Character {
    character = util.choice(dwarfSubRaceFunctionList)(character);
    return character;
}

export function addElfSubRaceFeatures(character: Character): Character {
    character = util.choice(elfSubRaceFunctionList)(character);
    return character;
}

export function addGnomeSubRaceFeatures(character: Character): Character {
    character = util.choice(gnomeSubRaceFunctionList)(character);
    return character;
}

const dragonBornSubRaceFunctionList: ((character: Character) => Character)[] = [
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

const dwarfSubRaceFunctionList: ((character: Character) => Character)[] = [
    addHillDwarfFeatures,
    addMountainDwarfFeatures
];

const elfSubRaceFunctionList: ((character: Character) => Character)[] = [
    addHighElfFeatures,
    addWoodElfFeatures,
    addDrowElfFeatures
];

const gnomeSubRaceFunctionList: ((character: Character) => Character)[] = [
    addForestGnomeFeatures,
    addRockGnomeFeatures,
    addDeepGnomeFeatures
];

function addBlackDragonBornFeatures(character: Character): Character { 
    character.raceName = "Black Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    return character;
}

function addBlueDragonBornFeatures(character: Character): Character { 
    character.raceName = "Blue Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    return character;
}

function addBrassDragonBornFeatures(character: Character): Character { 
    character.raceName = "Brass Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}

function addBronzeDragonBornFeatures(character: Character): Character { 
    character.raceName = "Bronze Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    return character;
}

function addCopperDragonBornFeatures(character: Character): Character { 
    character.raceName = "Copper Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    return character;
}

function addGoldDragonBornFeatures(character: Character): Character { 
    character.raceName = "Gold Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}

function addGreenDragonBornFeatures(character: Character): Character { 
    character.raceName = "Green Dragonborn";
    character.traits = character.traits.concat("Poison Breath").concat("Poison Resistance");
    return character;
}

function addRedDragonBornFeatures(character: Character): Character { 
    character.raceName = "Red Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    return character;
}

function addSilverDragonBornFeatures(character: Character): Character { 
    character.raceName = "Silver Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    return character;
}

function addWhiteDragonBornFeatures(character: Character): Character { 
    character.raceName = "White Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    return character;
}

function addHillDwarfFeatures(character: Character): Character {
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.hp = character.hp + 1;
    return character;
}

function addMountainDwarfFeatures(character: Character): Character {
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2})]);
    character.armorProfs = character.armorProfs
        .concat(light)
        .concat(medium)
    return character;
}

function addHighElfFeatures(character: Character): Character {
    character.raceName = "High Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({int: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Shortbow"))
        .concat(findWeapon("Longbow"));
    
    character.level0Spells = character.level0Spells.concat(util.choice(wizardSpells[0]));
    character.languages = character.languages.concat(util.choice(languages, character.languages))
    return character;
}

function addWoodElfFeatures(character: Character): Character {
    character.raceName = "Wood Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Longsword"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("ShortBow"))
        .concat(findWeapon("Longbow"));
    character.speed = character.speed + 5;
    character.traits = character.traits.concat(["Fleet of Foot", "Mask of the Wild"]);
    return character;
}

function addDrowElfFeatures(character: Character): Character {
    character.raceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat("Superior Darkvision");
    character.level0Spells = character.level0Spells.concat("Dancing lights");
    return character;
}

function addForestGnomeFeatures(character: Character): Character {
    character.raceName = "Forest Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.level0Spells = character.level0Spells.concat("Minor illusion");
    character.traits = character.traits.concat("Speak with Small Beasts");
    return character;
}

function addRockGnomeFeatures(character: Character): Character {
    character.raceName = "Rock Gnome";
    character.attributes = mergeAttributes([character.attrMods, fleshOutAttributes({con: 1})]);
    character.traits = character.traits.concat(["Artificer's Lore", "Tinker"]);
    return character;
}

function addDeepGnomeFeatures(character: Character): Character {
    character.raceName = "Svirfneblin";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 1})]);
    character.age = util.randomNumberFromRange([25, 225]);
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Stone Camouflage"]);
    character.languages = character.languages.concat("Undercommon");
    return character;
}