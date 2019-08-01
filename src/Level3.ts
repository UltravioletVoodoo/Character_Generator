import { Character } from "./Character";
import { addBarbarionSubClassFeatures, addBardSubClassFeatures, addFighterSubClassFeatures, addMonkSubClassFeatures, addPaladinSubClassFeatures, addRangerSubClassFeatures, addRogueSubClassFeatures } from "./CharacterSubClass";
import { bardSpells, clericSpells, druidSpells, paladinSpells, rangerSpells, sorcererSpells, warlockSpells, wizardSpells } from "./Spells";
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

function handleSpellRechoosing(character: Character, spellsKnown: number, spellList: string[][]) {
    // clear away old memorized spells
    character.memorizedSpells = [character.memorizedSpells[0],[],[]];

    // pick new spells
    for (let x = 0; x < spellsKnown; x++) {
        let level = util.choice([1,2]);
        character.memorizedSpells[level].push(
            util.choice(
                spellList[level], character.inherentSpells[level].concat(character.memorizedSpells[level])
            )
        );
    }
}

function addBarbarianLevel3Features(character: Character) {
    addBarbarionSubClassFeatures(character);
}

function addBardLevel3Features(character: Character) {
    addBardSubClassFeatures(character);

    // Always delete 1 old spell then pick TWO new ones
    let index = util.randomNumberFromRange([0, character.memorizedSpells[1].length - 1]);
    character.memorizedSpells[1] = util.arrayDelete(character.memorizedSpells[1], [character.memorizedSpells[1][index]]);

    // Choose either a first or second level spell TWICE
    for (let x = 0; x < 2; x++) {
        let level = util.choice([1,2]);
        character.memorizedSpells[level].push(
            util.choice(
                bardSpells[level], character.inherentSpells[level].concat(character.memorizedSpells[level])
            )
        );
    }

    character.expertise = character.expertise.concat(
        util.choices(character.skillProfs, 2, character.expertise)
    );
}

function addClericLevel3Features(character: Character) {
    addLevel3DomainSpells(character);

    // clear away all memorized spells of lvl 1 & 2
    character.memorizedSpells = [character.memorizedSpells[0],[],[]];

    // pick new spells
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    handleSpellRechoosing(character, spellsKnown, clericSpells);
}

function addLevel3DomainSpells(character: Character) {
    if (character.traits.includes("Forge Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Heat metal",
            "Magic weapon"
        ]);
    }
    if (character.traits.includes("Grave Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Gentle repose",
            "Ray of enfeeblement"
        ]);
    }
    if (character.traits.includes("Knowledge Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Augury",
            "Suggestion"
        ]);
    }
    if (character.traits.includes("Life Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Lesser restoration",
            "Spiritual weapon"
        ]);
    }
    if (character.traits.includes("Light Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Flaming sphere",
            "Scorching ray"
        ]);
    }
    if (character.traits.includes("Nature Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Barkskin",
            "Spike growth"
        ]);
    }
    if (character.traits.includes("Tempest Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Gust of wind",
            "Shatter"
        ]);
    }
    if (character.traits.includes("Trickery Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Mirror image",
            "Pass without trace"
        ]);
    }
    if (character.traits.includes("War Domain")) {
        character.inherentSpells[2] = character.inherentSpells[2].concat([
            "Magic weapon",
            "Spiritual weapon"
        ]);
    }
}

function addDruidLevel3Features(character: Character) {
    handleLandDruidLevel3(character);

    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    handleSpellRechoosing(character, spellsKnown, druidSpells);
}

function handleLandDruidLevel3(character: Character) {
    if (character.traits.includes("Circle of the Land")) {
        if (character.traits.includes("Circle Spells: Arctic")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Hold person",
                    "Spike growth"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Coast")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Mirror image",
                    "Misty step"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Desert")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Blur",
                    "Silence"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Forest")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Barkskin",
                    "Spider climb"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Grassland")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Invisibility",
                    "Pass without trace"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Mountain")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Spider climb",
                    "Spike growth"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Swamp")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
                [
                    "Darkness",
                    "Melf's acid arrow"
                ]
            );
        }
        else if (character.traits.includes("Circle Spells: Underdark")) {
            character.inherentSpells[2] = character.inherentSpells[2].concat(
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
    let spellsKnown = Math.max(character.attrMods.cha + character.level, 1);
    handleSpellRechoosing(character, spellsKnown, paladinSpells);
}

function addRangerLevel3Features(character: Character) {
    character.traits.push("Primeval Awareness");
    addRangerSubClassFeatures(character);

    // Always delete 1 old spell then pick TWO new ones
    let index = util.randomNumberFromRange([0, character.memorizedSpells[1].length - 1]);
    character.memorizedSpells[1] = util.arrayDelete(character.memorizedSpells[1], [character.memorizedSpells[1][index]]);

    for (let i = 0; i < 2; i++) {
        let level = util.choice([1,2]);
        character.memorizedSpells[level].push(
            util.choice(rangerSpells[level], character.inherentSpells[level].concat(character.memorizedSpells[level]))
        );
    }
}

function addRogueLevel3Features(character: Character) {
    addRogueSubClassFeatures(character);
}

function addSorcererLevel3Features(character: Character) {
    character.traits = character.traits.concat(
        util.choices(metaMagic, 2)
    );
    
    // Always delete 1 old spell then pick TWO new ones
    let index = util.randomNumberFromRange([0, character.memorizedSpells[1].length - 1]);
    character.memorizedSpells[1] = util.arrayDelete(character.memorizedSpells[1], [character.memorizedSpells[1][index]]);

    for (let i = 0; i < 2; i++) {
        let level = util.choice([1,2]);
        character.memorizedSpells[level].push(
            util.choice(sorcererSpells[level], character.inherentSpells[level].concat(character.memorizedSpells[level]))
        );
    }
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

function addWarlockLevel3Features(character: Character) {
    character.traits.push(
        util.choice([
            pactOfTheChain(character),
            "Pact of the Blade",
            pactOfTheTome(character)
        ])
    );

    // Always delete 1 old spell then pick TWO new ones
    let index = util.randomNumberFromRange([0, character.memorizedSpells[1].length - 1]);
    character.memorizedSpells[1] = util.arrayDelete(character.memorizedSpells[1], [character.memorizedSpells[1][index]]);

    for (let i = 0; i < 2; i++) {
        let level = util.choice([1,2]);
        character.memorizedSpells[level].push(
            util.choice(warlockSpells[level], character.inherentSpells[level].concat(character.memorizedSpells[level]))
        );
    }
}

function pactOfTheChain(character: Character): string {
    character.inherentSpells[1].push("Find familiar");
    return "Pact of the Chain";
}

function pactOfTheTome(character: Character): string {
    character.inherentSpells[0] = character.inherentSpells[0].concat(
        util.choices(warlockSpells[0], 3, character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    return "Pact of the Tome";
}

function addWizardLevel3Features(character: Character) {
    let spellsKnown = Math.max(character.attrMods.int + character.level, 1);
    handleSpellRechoosing(character, spellsKnown, wizardSpells);
}