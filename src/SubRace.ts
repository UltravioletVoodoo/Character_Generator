import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";
import { findWeapon } from "./WeaponSets";
import { wizardSpells } from "./Spells";
import { languages } from "./Languages";
import { Skills, sumSkills, allSkillPartialProfs, DeepPartial } from "./Skills";

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

export function addHalfElfSubRaceFeatures(character: Character): Character {
    character = util.choice(halfElfSubRaceFunctionList)(character);
    return character;
}

export function addHalflingSubRaceFeatures(character: Character): Character {
    character = util.choice(halflingSubRaceFunctionList)(character);
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

const halfElfSubRaceFunctionList: ((character: Character) => Character)[] = [
    addHalfElfV1Features,
    addHalfElfV2Features,
    addHalfElfV3Features,
    addHalfElfV4Features,
    addHalfElfV5Features
];

const halflingSubRaceFunctionList: ((character: Character) => Character)[] = [
    addLightFootHalflingFeatures,
    addStoutHalflingFeatures
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
    character.armorProfs = character.armorProfs.concat(light, medium);
    return character;
}

function addHighElfFeatures(character: Character): Character {
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
    character.languages = character.languages.concat(util.choice(languages, character.languages))
    return character;
}

function addWoodElfFeatures(character: Character): Character {
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
    return character;
}

function addDrowElfFeatures(character: Character): Character {
    character.raceName = "Drow Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Rapier"))
        .concat(findWeapon("Shortsword"))
        .concat(findWeapon("Hand crossbow"));
    character.traits = util.arrayDelete(character.traits, ["Darkvision"]).concat(["Superior Darkvision", "Sunlight Sensitivity"]);
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
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
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

function addHalfElfV1Features(character: Character): Character {
    character.traits = character.traits.concat("Skill Versatility");
    character.skillProfs = character.skillProfs.concat(util.choices(allSkillPartialProfs, 2));
    return character;
}

function addHalfElfV2Features(character: Character): Character {
    character.traits = character.traits.concat("High Elf Cantrip");
    character.level0Spells = character.level0Spells.concat(util.choice(wizardSpells[0]));
    return character;
}

function addHalfElfV3Features(character: Character): Character {
    character.traits = character.traits.concat("Fleet of Foot");
    character.speed = character.speed + 5;
    return character;
}

function addHalfElfV4Features(character: Character): Character {
    character.traits = character.traits.concat("Mask of the Wild");
    return character;
}

function addHalfElfV5Features(character: Character): Character {
    character.traits = character.traits.concat("Drow Magic");
    character.level0Spells = character.level0Spells.concat("Dancing lights");
    return character;
}

function addLightFootHalflingFeatures(character: Character): Character {
    character.raceName = "Lightfoot Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({cha: 1})]);
    character.traits = character.traits.concat("Naturally Stealthy");
    return character;
}

function addStoutHalflingFeatures(character: Character): Character {
    character.raceName = "Stout Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 1})]);
    character.traits = character.traits.concat("Stout Resilience");
    return character;
}
