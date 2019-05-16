import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { addDragonBornSubRaceFeatures, addDwarfSubRaceFeatures, addElfSubRaceFeatures, addGnomeSubRaceFeatures, addHalfElfSubRaceFeatures } from "./SubRace";
import { findWeapon } from "./WeaponSets";
import { findTool } from "./ToolSets";
import { sumSkills } from "./Skills";
import { languages } from "./Languages";

export function addRaceFeatures(character: Character): Character {

    // Choose a race
    character = util.choice(raceFunctionList)(character);

    // Return the modified character
    return character;
}

const raceFunctionList: ((character: Character) => Character)[] = [
    addDragonBornFeatures,
    addDwarfFeatures,
    addElfFeatures,
    addGnomeFeatures,
    addHalfElfFeatures,
    addHalfOrcFeatures,
    addHalflingFeatures,
    addHumanFeatures,
    addTieflingFeatures
]


function addDragonBornFeatures(character: Character): Character {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2, cha: 1})]);
    character.age = util.randomNumberFromRange([15,80]);
    character.speed = 30;
    character.languages = ["Common", "Draconic"];
    character = addDragonBornSubRaceFeatures(character);
    return character;
}

function addDwarfFeatures(character: Character): Character {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 2})]);
    character.age = util.randomNumberFromRange([50,350]);
    character.speed = 25;
    character.languages = ["Common", "Dwarvish"];
    character.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"];

    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Battleaxe"))
        .concat(findWeapon("Handaxe"))
        .concat(findWeapon("Throwing Hammer"))
        .concat(findWeapon("Warhammer"));

    character.toolProfs = character.toolProfs
        .concat(util.choice([
            findTool("Smith's tools"),
            findTool("Brewer's supplies"),
            findTool("Mason's tools")
        ]));

    character = addDwarfSubRaceFeatures(character);
    return character;
}

function addElfFeatures(character: Character): Character {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 2})]);
    character.age = util.randomNumberFromRange([100, 750]);
    character.speed = 30;
    character.languages = ["Common", "Elven"];
    character.traits = ["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"];
    character.skillProfs = sumSkills([character.skillProfs, {wis: {perception: 2}}]);
    character = addElfSubRaceFeatures(character);
    return character;
}

function addGnomeFeatures(character: Character): Character {
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({int: 2})]);
    character.age = util.randomNumberFromRange([40, 400]);
    character.speed = 25;
    character.languages = ["Common", "Gnomish"];
    character.traits = ["Darkvision", "Gnome Cunning"];
    character = addGnomeSubRaceFeatures(character);
    return character;
}

function addHalfElfFeatures(character: Character): Character {
    character.raceName = "Half-Elf";
    character.age = util.randomNumberFromRange([20, 180]);
    character.speed = 30;
    character.languages = ["Common, Elven"].concat(util.choice(languages, ["Common, Elven"]));
    character.traits = ["Darkvision", "Fey Ancestry"];
    character = addHalfElfSubRaceFeatures(character);
    return character;
}

function addHalfOrcFeatures(character: Character): Character {
    character.raceName = "Half-Orc"
    return character;
}

function addHalflingFeatures(character: Character): Character {
    character.raceName = "Halfling"
    return character;
}

function addHumanFeatures(character: Character): Character {
    character.raceName = "Human"
    return character;
}

function addTieflingFeatures(character: Character): Character {
    character.raceName = "Tiefling"
    return character;
}