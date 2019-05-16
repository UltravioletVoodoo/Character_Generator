import { Character } from "./Character";
import { util } from "./Util";

export function addCharacterClassFeatures(character: Character): Character {

    // Choose a class
    character = util.choice(classFunctionList)(character);


    // Return The modified character
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