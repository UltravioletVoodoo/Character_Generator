import { Character } from "./Character";
import { util } from "./Util";
import { light, medium, findArmor } from "./ArmorSets";
import { simpleMelee, simpleRanged, martialMelee, martialRanged } from "./WeaponSets";
import { mergeAttributes, fleshOutAttributes } from "./Attributes";
import { DeepPartial, Skills } from "./Skills";

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
    character.savingThrowProfs = mergeAttributes([
        character.savingThrowProfs,
        fleshOutAttributes({str: 2, con: 2})
    ]);
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
    return character;
}

function addClericFeatures(character: Character): Character {
    character.className = "Cleric";
    return character;
}

function addDruidFeatures(character: Character): Character {
    character.className = "Druid";
    return character;
}

function addFighterFeatures(character: Character): Character {
    character.className = "Fighter";
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