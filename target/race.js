import { util } from "./Util";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { addDragonBornSubRaceFeatures, addDwarfSubRaceFeatures, addElfSubRaceFeatures, addGnomeSubRaceFeatures, addHalflingSubRaceFeatures } from "./SubRace";
import { findWeapon } from "./WeaponSets";
import { findTool } from "./ToolSets";
import { languages } from "./Languages";
import { allSkillPartialProfs } from "./Skills";
export function addRaceFeatures(character, options) {
    let availableRaces = [];
    if (options.dwarf)
        availableRaces.push(addDwarfFeatures);
    if (options.elf)
        availableRaces.push(addElfFeatures);
    if (options.halfling)
        availableRaces.push(addHalflingFeatures);
    if (options.human)
        availableRaces.push(addHumanFeatures);
    if (options.dragonborn)
        availableRaces.push(addDragonBornFeatures);
    if (options.gnome)
        availableRaces.push(addGnomeFeatures);
    if (options.halfElf)
        availableRaces.push(addHalfElfFeatures);
    if (options.halfOrc)
        availableRaces.push(addHalfOrcFeatures);
    if (options.tiefling)
        availableRaces.push(addTieflingFeatures);
    util.choice(availableRaces)(character);
}
function addDragonBornFeatures(character) {
    character.raceName = "Dragonborn";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2, cha: 1 })]);
    character.age = util.randomNumberFromRange([15, 80]);
    character.speed = 30;
    character.languages = ["Common", "Draconic"];
    addDragonBornSubRaceFeatures(character);
}
function addDwarfFeatures(character) {
    character.raceName = "Dwarf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ con: 2 })]);
    character.age = util.randomNumberFromRange([50, 350]);
    character.speed = 25;
    character.languages = ["Common", "Dwarvish"];
    character.traits = ["Darkvision", "Dwarven Resilience", "Stonecunning"];
    character.weaponProfs = character.weaponProfs
        .concat(findWeapon("Battleaxe"), findWeapon("Handaxe"), findWeapon("Light hammer"), findWeapon("Warhammer"));
    character.toolProfs = character.toolProfs
        .concat(util.choice([
        findTool("Smith's tools"),
        findTool("Brewer's supplies"),
        findTool("Mason's tools")
    ]));
    addDwarfSubRaceFeatures(character);
}
function addElfFeatures(character) {
    character.raceName = "Elf";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ dex: 2 })]);
    character.age = util.randomNumberFromRange([100, 750]);
    character.speed = 30;
    character.languages = ["Common", "Elvish"];
    character.traits = ["Darkvision", "Fey Ancestry", "Trance", "Keen Senses"];
    character.skillProfs = character.skillProfs.concat({ wis: { perception: 2 } });
    addElfSubRaceFeatures(character);
}
function addGnomeFeatures(character) {
    character.raceName = "Gnome";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ int: 2 })]);
    character.age = util.randomNumberFromRange([40, 425]);
    character.speed = 25;
    character.languages = ["Common", "Gnomish"];
    character.traits = ["Darkvision", "Gnome Cunning"];
    addGnomeSubRaceFeatures(character);
}
function addHalfElfFeatures(character) {
    character.raceName = "Half-Elf";
    character.subRaceName = "Half-Elf";
    character.attributes = mergeAttributes([
        character.attributes,
        fleshOutAttributes({ cha: 2 })
    ]
        .concat(util.choices([
        { str: 1 },
        { con: 1 },
        { dex: 1 },
        { int: 1 },
        { wis: 1 }
    ], 2).map(item => fleshOutAttributes(item))));
    character.age = util.randomNumberFromRange([20, 180]);
    character.speed = 30;
    character.languages = ["Common", "Elvish"].concat(util.choice(languages, ["Common", "Elvish"]));
    character.traits = [
        "Darkvision",
        "Fey Ancestry",
        "Skill Versatility"
    ];
    character.skillProfs = character.skillProfs.concat(util.choices(allSkillPartialProfs, 2));
}
function addHalfOrcFeatures(character) {
    character.raceName = "Half-Orc";
    character.subRaceName = "Half-Orc";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ str: 2, con: 1 })]);
    character.age = util.randomNumberFromRange([14, 75]);
    character.speed = 30;
    character.languages = ["Common", "Orc"];
    character.skillProfs = character.skillProfs.concat({ cha: { intimidation: 2 } });
    character.traits = ["Darkvision", "Relentless Endurance", "Savage Attacks"];
}
function addHalflingFeatures(character) {
    character.raceName = "Halfling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ dex: 2 })]);
    character.age = util.randomNumberFromRange([20, 150]);
    character.speed = 25;
    character.languages = ["Common", "Halfling"];
    character.traits = ["Lucky", "Brave"];
    character.abilities.concat("Halfling Nimbleness");
    addHalflingSubRaceFeatures(character);
}
function addHumanFeatures(character) {
    character.raceName = "Human";
    character.subRaceName = "Human";
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
    character.age = util.randomNumberFromRange([18, 80]);
    character.speed = 30;
    character.languages = ["Common"].concat(util.choice(languages, ["Common"]));
}
function addTieflingFeatures(character) {
    character.raceName = "Tiefling";
    character.subRaceName = "Tiefling";
    character.attributes = mergeAttributes([character.attributes, fleshOutAttributes({ cha: 2, int: 1 })]);
    character.speed = 30;
    character.age = util.randomNumberFromRange([18, 100]);
    character.traits = ["Darkvision", "Hellish Resistance", "Infernal Legacy"];
    character.languages = ["Common", "Infernal"];
    character.inherentSpells[0].push("Thaumaturgy");
}
