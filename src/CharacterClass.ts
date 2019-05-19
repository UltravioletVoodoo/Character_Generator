import { Character } from "./Character";
import { util } from "./Util";
import { light, medium, findArmor, heavy } from "./ArmorSets";
import { simpleMelee, simpleRanged, martialMelee, martialRanged, findWeapon } from "./WeaponSets";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { DeepPartial, Skills, allSkillPartialProfs } from "./Skills";
import { findTool, musical } from "./ToolSets";
import { bardSpells, clericSpells, druidSpells } from "./Spells";
import { addClericSubClassFeatures } from "./CharacterSubClass";

export function addCharacterClassFeatures(character: Character): Character {
    character = util.choice(classFunctionList)(character);
    return character
}

const classFunctionList: ((character: Character) => Character)[] = [
    addBarbarianFeatures,
    addBardFeatures,
    addClericFeatures,
    addDruidFeatures,
    addFighterFeatures,
    addMonkFeatures,
    addPaladinFeatures,
    addRangerFeatures,
    addRogueFeatures,
    addSorcererFeatures,
    addWarlockFeatures,
    addWizardFeatures
];

function addBarbarianFeatures(character: Character): Character {
    character.className = "Barbarian";
    character.hitDice = 12;
    character.armorProfs = character.armorProfs
        .concat(light, medium, findArmor("Unarmored defence con"));
    character.weaponProfs = character.weaponProfs
        .concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{str: 2}, {con: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs
        .concat(util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {int: {nature: 2}},
            {wis: {animalHandling: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}},
            {cha: {intimidation: 2}}
        ],2, character.skillProfs));
    character.startingGold = 80;
    character.traits = character.traits.concat("Rage");
    return character;
}

function addBardFeatures(character: Character): Character {
    character.className = "Bard";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs
        .concat(
            simpleMelee,
            simpleRanged,
            findWeapon("Hand Crossbow"),
            findWeapon("Longsword"),
            findWeapon("Shortword")
            );
    character.toolProfs = character.toolProfs.concat(util.choices(musical, 3));
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{dex: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices(allSkillPartialProfs, 3, character.skillProfs)
    );
    character.startingGold = 200;
    character.level0Spells = character.level0Spells.concat(
        util.choices(bardSpells[0], 2, character.level0Spells)
    );
    character.level1Spells = character.level1Spells.concat(
        util.choices(bardSpells[1], 4, character.level1Spells)
    );
    character.traits = character.traits.concat("Bardic Inspiration (d6)");
    return character;
}

function addClericFeatures(character: Character): Character {
    character.className = "Cleric";
    addClericSubClassFeatures(character);
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(
        light,
        medium
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{wis: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {int: {history: 2}},
            {int: {religion: 2}},
            {wis: {insight: 2}},
            {wis: {medicine: 2}},
            {cha: {persuasion: 2}}    
        ], 2)
    );
    character.startingGold = 200;
    character.level0Spells = character.level0Spells.concat(
        util.choices(clericSpells[0], 3, character.level0Spells)
    );
    character.level1Spells = character.level1Spells.concat(
        util.choices(clericSpells[1], 2, character.level1Spells)
    );
    return character;
}

function addDruidFeatures(character: Character): Character {
    character.className = "Druid";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light,medium);
    character.weaponProfs = character.weaponProfs.concat(
        findWeapon("Club"),
        findWeapon("Dagger"),
        findWeapon("Dart"),
        findWeapon("Javelin"),
        findWeapon("Mace"),
        findWeapon("Quarterstaff"),
        findWeapon("Scimitar"),
        findWeapon("Sickle"),
        findWeapon("Sling"),
        findWeapon("Spear")
    );
    character.toolProfs = character.toolProfs.concat(findTool("Herbalism kit"));
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{int: 2}, {wis: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {int: {arcana: 2}},
            {int: {nature: 2}},
            {int: {religion: 2}},
            {wis: {animalHandling: 2}},
            {wis: {insight: 2}},
            {wis: {medicine: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}}
        ], 2, character.skillProfs)
    );
    character.startingGold = 200;
    character.languages = character.languages.concat("Druidic");
    character.level0Spells = character.level0Spells.concat(
        util.choices(druidSpells[0], 2, character.level0Spells)
    );
    character.level1Spells = character.level1Spells.concat(
        util.choices(druidSpells[1], 2, character.level1Spells)
    );
    return character;
}

function addFighterFeatures(character: Character): Character {
    character.className = "Fighter";
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(
        light,
        medium,
        heavy
    );
    character.weaponProfs = character.weaponProfs.concat(
        simpleMelee,
        simpleRanged,
        martialMelee,
        martialRanged
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{str: 2}, {con: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {dex: {acrobatics: 2}},
            {int: {history: 2}},
            {wis: {animalHandling: 2}},
            {wis: {insight: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}},
            {cha: {intimidation: 2}}
        ], 2, character.skillProfs)
    );
    character.startingGold = 200;
    character.traits = character.traits.concat("Second Wind");
    character.traits = character.traits.concat(
        util.choice([
            "Archery Fighting Style(*)",
            "Defender Fighting Style(*)",
            "Dueling Fighting Style(*)",
            "Great Weapon Fighting Style(*)",
            "Protection Fighting Style(*)",
            "Two Weapon Fighting Style(*)"
        ])
    );
    return character;
}

function addMonkFeatures(character: Character): Character {
    character.className = "Monk";
    return character;
}

function addPaladinFeatures(character: Character): Character {
    character.className = "Paladin";
    return character;
}

function addRangerFeatures(character: Character): Character {
    character.className = "Ranger";
    return character;
}

function addRogueFeatures(character: Character): Character {
    character.className = "Rogue";
    return character;
}

function addSorcererFeatures(character: Character): Character {
    character.className = "Sorcerer";
    return character;
}

function addWarlockFeatures(character: Character): Character {
    character.className = "Warlock";
    return character;
}

function addWizardFeatures(character: Character): Character {
    character.className = "Wizard";
    return character;
}