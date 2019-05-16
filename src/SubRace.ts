import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { light, medium } from "./ArmorSets";

export function addDragonBornSubRaceFeatures(character: Character): Character {
    character = util.choice(dragonBornSubRaceFunctionList)(character);
    return character;
}

export function addDwarfSubRaceFeatures(character: Character): Character {
    character = util.choice(dwarfSubRaceFunctionList)(character);
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

function addBlackDragonBornFeatures(character: Character): Character { 
    character.raceName = "Black Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    // Return the modified character
    return character;
}

function addBlueDragonBornFeatures(character: Character): Character { 
    character.raceName = "Blue Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    // Return the modified character
    return character;
}

function addBrassDragonBornFeatures(character: Character): Character { 
    character.raceName = "Brass Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}

function addBronzeDragonBornFeatures(character: Character): Character { 
    character.raceName = "Bronze Dragonborn";
    character.traits = character.traits.concat("Lightning Breath").concat("Lightning Resistance");
    // Return the modified character
    return character;
}

function addCopperDragonBornFeatures(character: Character): Character { 
    character.raceName = "Copper Dragonborn";
    character.traits = character.traits.concat("Acid Breath").concat("Acid Resistance");
    // Return the modified character
    return character;
}

function addGoldDragonBornFeatures(character: Character): Character { 
    character.raceName = "Gold Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}

function addGreenDragonBornFeatures(character: Character): Character { 
    character.raceName = "Green Dragonborn";
    character.traits = character.traits.concat("Poison Breath").concat("Poison Resistance");
    // Return the modified character
    return character;
}

function addRedDragonBornFeatures(character: Character): Character { 
    character.raceName = "Red Dragonborn";
    character.traits = character.traits.concat("Fire Breath").concat("Fire Resistance");
    // Return the modified character
    return character;
}

function addSilverDragonBornFeatures(character: Character): Character { 
    character.raceName = "Silver Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    // Return the modified character
    return character;
}

function addWhiteDragonBornFeatures(character: Character): Character { 
    character.raceName = "White Dragonborn";
    character.traits = character.traits.concat("Cold Breath").concat("Cold Resistance");
    // Return the modified character
    return character;
}

function addHillDwarfFeatures(character: Character): Character {
    character.raceName = "Hill Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({wis: 1})]);
    character.hp = character.hp + 1;
    // Return the modified character
    return character;
}

function addMountainDwarfFeatures(character: Character): Character {
    character.raceName = "Mountain Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2})]);
    character.armorProfs = character.armorProfs
        .concat(light)
        .concat(medium)
    // Return the modified character
    return character;
}
