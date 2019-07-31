import { Character } from "./Character";
import { addBarbarionSubClassFeatures, addBardSubClassFeatures, addFighterSubClassFeatures, addMonkSubClassFeatures, addPaladinSubClassFeatures, addRangerSubClassFeatures, addRogueSubClassFeatures } from "./CharacterSubClass";
import { bardSpells, clericSpells, druidSpells, paladinSpells, rangerSpells } from "./Spells";
import { util } from "./Util";

export function addLevel3Features(character: Character) {
    addLevel3RaceFeatures(character);
    addLevel3ClassFeatures(character);
}

function addLevel3RaceFeatures(character: Character) {
    if (character.raceName == "Drow Elf") character.inherentSpells[1].concat("Faerie Fire");
    if (character.raceName == "Tiefling") character.inherentSpells[1].concat("Hellish rebuke");
}

function addLevel3ClassFeatures(character: Character) {
    switch(character.className) {
        case "Barbarian": 
            addBarbarianLevel3Features(character);
            break;
        case "Bard"     : 
            addBardLevel3Features(character);
            break;
        case "Cleric"   : 
            addClericLevel3Features(character);
            break;
        case "Druid"    : 
            addDruidLevel3Features(character);
            break;
        case "Fighter"  : 
            addFighterLevel3Features(character);
            break;
        case "Monk"     : 
            addMonkLevel3Features(character);
            break;
        case "Paladin"  : 
            addPaladinLevel3Features(character);
            break;
        case "Ranger"   : 
            addRangerLevel3Features(character);
            break;
        case "Rogue"    : 
            addRogueLevel3Features(character);
            break;
        case "Sorcerer" : 
            addSorcererLevel3Features(character);
            break;
        case "Warlock"  : 
            addWarlockLevel3Features(character);
            break;
        case "Wizard"   : 
            addWizardLevel3Features(character);
            break;
        default         : throw new Error(
            "Character class '"
            + character.className +
            "' is invalid and can't be leveled..."
            );
    }
}

function addBarbarianLevel3Features(character: Character) {
    addBarbarionSubClassFeatures(character);
}

function addBardLevel3Features(character: Character) {
    addBardSubClassFeatures(character);

    // Choose either a first or second level spell
    if (util.choice([1,2]) == 1) {
        character.memorizedSpells[1].push(
            util.choice(
                bardSpells[1], character.inherentSpells[1].concat(character.memorizedSpells[1])
            )
        );
    } else {
        character.memorizedSpells[2].push(
            util.choice(
                bardSpells[2], character.inherentSpells[2].concat(character.memorizedSpells[2])
            )
        );
    }
    // Choose whether to delete a lvl 1 spell for a new shiny lvl 2 one
    if (util.choice([1,2]) == 1) {
        // delete a random element from character.memorizedSpells[1]
        // get a new random spell from bardSpells[2] 
        this is where I am
    }

    character.expertise = character.expertise.concat(
        util.choices(character.skillProfs, 2, character.expertise)
    );
}

function addClericLevel3Features(character: Character) {
    character.level1Spells = character.level1Spells.concat(
        util.choice(clericSpells[1], character.level1Spells)
    );
    addLevel3DomainSpells(character);
    character.level2Spells = character.level2Spells.concat(
        util.choices(clericSpells[2], 2, character.level2Spells)
    );
}

function addLevel3DomainSpells(character: Character) {
    if (character.traits.includes("Forge Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Heat metal",
            "Magic weapon"
        ]);
    }
    if (character.traits.includes("Grave Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Gentle repose",
            "Ray of enfeeblement"
        ]);
    }
    if (character.traits.includes("Knowledge Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Augury",
            "Suggestion"
        ]);
    }
    if (character.traits.includes("Life Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Lesser restoration",
            "Spiritual weapon"
        ]);
    }
    if (character.traits.includes("Light Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Flaming sphere",
            "Scorching ray"
        ]);
    }
    if (character.traits.includes("Nature Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Barkskin",
            "Spike growth"
        ]);
    }
    if (character.traits.includes("Tempest Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Gust of wind",
            "Shatter"
        ]);
    }
    if (character.traits.includes("Trickery Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Mirror image",
            "Pass without trace"
        ]);
    }
    if (character.traits.includes("War Domain")) {
        character.level2Spells = character.level2Spells.concat([
            "Magic weapon",
            "Spiritual weapon"
        ]);
    }
}

function addDruidLevel3Features(character: Character) {
    character.level1Spells = character.level1Spells.concat(
        util.choice(druidSpells[1], character.level1Spells)
    );
    handleLandDruidLevel3(character);
    character.level2Spells = character.level2Spells.concat(
        util.choices(druidSpells[2], 2, character.level2Spells)
    );
}

function handleLandDruidLevel3(character: Character) {
    if (character.traits.includes("Circle of the Land")) {
        if (character.traits.includes("Circle Spells: Arctic")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Hold person",
                    "Spike growth"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Coast")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Mirror image",
                    "Misty step"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Desert")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Blur",
                    "Silence"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Forest")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Barkskin",
                    "Spider climb"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Grassland")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Invisibility",
                    "Pass without trace"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Mountain")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Spider climb",
                    "Spike growth"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Swamp")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Darkness",
                    "Melf's acid arrow"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Underdark")) {
            character.level2Spells = character.level2Spells.concat(
                [
                    "Spider climb",
                    "Web"
                ]
            );
        }
    }
}

function addFighterLevel3Features(character: Character) {
    addFighterSubClassFeatures(character);
}

function addMonkLevel3Features(character: Character) {
    character.traits.push("Deflect Missiles");
    addMonkSubClassFeatures(character);
}

function addPaladinLevel3Features(character: Character) {
    character.traits.push("Divine Health");
    addPaladinSubClassFeatures(character);
    character.level1Spells.push(util.choice(paladinSpells[1], character.level1Spells))
}

function addRangerLevel3Features(character: Character) {
    character.traits.push("Primeval Awareness");
    addRangerSubClassFeatures(character);
    character.level0Spells.push(util.choice(rangerSpells[0], character.level0Spells));
    character.level1Spells.push(util.choice(rangerSpells[1], character.level1Spells));
}

function addRogueLevel3Features(character: Character) {
    addRogueSubClassFeatures(character);
}

function addSorcererLevel3Features(character: Character) {
    character.traits = character.traits.concat(
        util.choices(metaMagic, 2)
    );
    sdfsdf
}

const metaMagic: string[] = [
    "Metamagic: Careful Spell",
    "Metamagic: Distant Spell",
    "Metamagic: Empowered Spell",
    "Metamagic: Extended Spell",
    "Metamagic: Heightened Spell",
    "Metamagic: Quickened Spell",
    "Metamagic: Subtle Spell",
    "Metamagic: Twinned Spell"
];