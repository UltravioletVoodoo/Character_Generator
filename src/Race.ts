import { Character } from "./Character";
import { util } from "./Util";

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
    character.raceName = "DragonBorn"
    return character;
}

function addDwarfFeatures(character: Character): Character {
    character.raceName = "Dwarf"
    return character;
}

function addElfFeatures(character: Character): Character {
    character.raceName = "Elf"
    return character;
}

function addGnomeFeatures(character: Character): Character {
    character.raceName = "Gnome"
    return character;
}

function addHalfElfFeatures(character: Character): Character {
    character.raceName = "Half-Elf"
    return character;
}

function addHalfOrcFeatures(character: Character): Character {
    character.raceName = "HalfOrc"
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