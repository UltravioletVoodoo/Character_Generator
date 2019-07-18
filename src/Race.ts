import { Character } from "./Character";
import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { addDragonBornSubRaceFeatures, addDwarfSubRaceFeatures, addElfSubRaceFeatures, addGnomeSubRaceFeatures, addHalfElfSubRaceFeatures, addHalflingSubRaceFeatures } from "./SubRace";
import { findWeapon } from "./WeaponSets";
import { findTool } from "./ToolSets";
import { languages } from "./Languages";

export function addRaceFeatures(character: Character){
    util.choice(raceFunctionList)(character);
    return character;
}

const raceFunctionList: ((character: Character) => void)[] = [
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


function addDragonBornFeatures(character: Character){
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2, cha: 1})]);
    character.age = util.randomNumberFromRange([15,80]);
    character.speed = 30;
    character.languages = ["Common", "Draconic"];
    addDragonBornSubRaceFeatures(character);
}

function addDwarfFeatures(character: Character){
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({con: 2})]);
    character.age = util.randomNumberFromRange([50,350]);
    character.speed = 25;
    character.languages = ["Common", "Dwarvish"];
    character.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"];

    character.weaponProfs = character.weaponProfs
        .concat(
            findWeapon("Battleaxe"),
            findWeapon("Handaxe"),
            findWeapon("Light hammer"),
            findWeapon("Warhammer")
            );

    character.toolProfs = character.toolProfs
        .concat(util.choice([
            findTool("Smith's tools"),
            findTool("Brewer's supplies"),
            findTool("Mason's tools")
        ]));

    addDwarfSubRaceFeatures(character);
}

function addElfFeatures(character: Character){
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 2})]);
    character.age = util.randomNumberFromRange([100, 750]);
    character.speed = 30;
    character.languages = ["Common", "Elven"];
    character.traits = ["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"];
    character.skillProfs = character.skillProfs.concat({wis: {perception: 2}});
    addElfSubRaceFeatures(character);
}

function addGnomeFeatures(character: Character){
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({int: 2})]);
    character.age = util.randomNumberFromRange([40, 400]);
    character.speed = 25;
    character.languages = ["Common", "Gnomish"];
    character.traits = ["Darkvision", "Gnome Cunning"];
    addGnomeSubRaceFeatures(character);
}

function addHalfElfFeatures(character: Character){
    character.raceName = "Half-Elf";
    character.attributes = mergeAttributes([
        character.attributes,
        fleshOutAttributes({cha: 2})]
        .concat(util.choices([
            {str: 1},
            {con: 1},
            {dex: 1},
            {int: 1},
            {wis: 1}
        ], 2).map(item => fleshOutAttributes(item)))
    );
    character.age = util.randomNumberFromRange([20, 180]);
    character.speed = 30;
    character.languages = ["Common, Elven"].concat(util.choice(languages, ["Common, Elven"]));
    character.traits = ["Darkvision", "Fey Ancestry"];
    addHalfElfSubRaceFeatures(character);
}

function addHalfOrcFeatures(character: Character){
    character.raceName = "Half-Orc"
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({str: 2, con: 1})]);
    character.age = util.randomNumberFromRange([14, 75]);
    character.speed = 30;
    character.skillProfs = character.skillProfs.concat({cha: {intimidation: 2}});
    character.traits = ["Darkvision", "Relentless Endurance", "Savage Attacks"];
}

function addHalflingFeatures(character: Character){
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({dex: 2})]);
    character.age = util.randomNumberFromRange([20,150]);
    character.speed = 25;
    character.languages = ["Common", "Halfling"];
    character.traits = ["Lucky", "Brave", "Nimble"];
    addHalflingSubRaceFeatures(character);
}

function addHumanFeatures(character: Character){
    character.raceName = "Human";
    character.attributes = mergeAttributes([
        character.attributes,
        {
            str: 1,
            dex: 1,
            con: 1,
            int: 1,
            wis: 1,
            cha: 1
        }
    ]);
    character.age = util.randomNumberFromRange([18,80]);
    character.speed = 30;
    character.languages = ["Common"].concat(util.choice(languages, ["Common"]));
}

function addTieflingFeatures(character: Character){
    character.raceName = "Tiefling";
    character.attributes = mergeAttributes([
        character.attributes,
        fleshOutAttributes({int: 1}),
        util.choice([
            fleshOutAttributes({cha: 2}),
            fleshOutAttributes({dex: 2})
        ])
    ]);
    character.speed = 30;
    character.age = util.randomNumberFromRange([18,100]);
    character.traits = ["Darkvision", "Hellish Resistance", "Infernal Legacy"];
    character.languages = ["Common", "Infernal"];
    character.level0Spells = character.level0Spells.concat("Thaumaturgy");
}