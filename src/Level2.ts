import { Character } from "./Character";
import { bardSpells, clericSpells, druidSpells, paladinSpells, rangerSpells, sorcererSpells, warlockSpells, wizardSpells } from "./Spells";
import { util } from "./Util";
import { addDruidSubClassFeatures, addWizardSubClassFeatures } from "./CharacterSubClass";

export function addLevel2Features(character: Character) {
    // There are no races in the application thusfar that have level2 features.
    // If new races are added, add the levelup things here.
    addLevel2ClassFeatures(character);
}

function addLevel2ClassFeatures(character : Character) {
    switch(character.className) {
        case "Barbarian": 
            addBarbarianLevel2Features(character);
            break;
        case "Bard"     : 
            addBardLevel2Features(character);
            break;
        case "Cleric"   : 
            addClericLevel2Features(character);
            break;
        case "Druid"    : 
            addDruidLevel2Features(character);
            break;
        case "Fighter"  : 
            addFighterLevel2Features(character);
            break;
        case "Monk"     : 
            addMonkLevel2Features(character);
            break;
        case "Paladin"  : 
            addPaladinLevel2Features(character);
            break;
        case "Ranger"   : 
            addRangerLevel2Features(character);
            break;
        case "Rogue"    : 
            addRogueLevel2Features(character);
            break;
        case "Sorcerer" : 
            addSorcererLevel2Features(character);
            break;
        case "Warlock"  : 
            addWarlockLevel2Features(character);
            break;
        case "Wizard"   : 
            addWizardLevel2Features(character);
            break;
        default         : throw new Error(
            "Character class '"
            + character.className +
            "' is invalid and can't be leveled..."
            );
        }
    }
    
    
function addBarbarianLevel2Features(character: Character) {
    character.traits = character.traits.concat([
        "Reckless attack",
        "Danger sense"
    ]);        
} 

function addBardLevel2Features(character: Character) {
    character.traits = character.traits.concat([
        "Jack of all trades",
        "Song of rest"
    ]);
    character.level1Spells = character.level1Spells.concat(
        util.choice(bardSpells[1], character.level1Spells)
    );
}

function addClericLevel2Features(character: Character) {
    character.traits.push("Channel Divinity (1/rest)");
    if (character.traits.includes("Arcana Domain")) character.traits.push("Channel Divinity: Arcane Abjuration");
    if (character.traits.includes("Death Domain")) character.traits.push("Channel Divinity: Touch of Death");
    if (character.traits.includes("Forge Domain")) character.traits.push("Channel Divinity: Artisan's Blessing");
    if (character.traits.includes("Grave Domain")) character.traits.push("Channel Divinity: Path to the Grave");
    if (character.traits.includes("Knowledge Domain")) character.traits.push("Channel Divinity: Knowledge of the Ages");
    if (character.traits.includes("Life Domain")) character.traits.push("Channel Divinity: Preserve Life");
    if (character.traits.includes("Light Domain")) character.traits.push("Channel Divinity: Radiance of the Dawn");
    if (character.traits.includes("Nature Domain")) character.traits.push("Channel Divinity: Charm Animals and Plants");
    if (character.traits.includes("Tempest Domain")) character.traits.push("Channel Divinity: Destructive Wrath");
    if (character.traits.includes("Trickery Domain")) character.traits.push("Channel Divinity: Invoke Duplicity");
    if (character.traits.includes("War Domain")) character.traits.push("Channel Divinity: Guided Strike")

    character.level1Spells = character.level1Spells.concat(
        util.choice(clericSpells[1], character.level1Spells)
    );
}

function addDruidLevel2Features(character: Character) {
    character.traits.push("Wild Shape");

    addDruidSubClassFeatures(character);

    character.level1Spells = character.level1Spells.concat(
        util.choice(druidSpells[1], character.level1Spells)
    );
}

function addFighterLevel2Features(character: Character) {
    character.traits.push("Action Surge");
}

function addMonkLevel2Features(character: Character) {
    character.traits = character.traits.concat([
        "Ki: Flurry of Blows",
        "Ki: Patient Defense",
        "Ki: Step of the Wind",
        "Unarmored Movement (+10ft.)"
    ]);
}

function addPaladinLevel2Features(character: Character) {
    character.traits = character.traits.concat([
        util.choice([
            addDefenseFightingStyle(character),
            "Fighting Style: Dueling",
            "Fighting Style: Great Weapon Fighting",
            "Fighting Style: Protection"
        ]),
        "Divine Smite"
    ]);
    character.level1Spells = character.level1Spells.concat(
        util.choices(paladinSpells[1], 2, character.level1Spells)
    );
}

function addDefenseFightingStyle(character: Character): string {
    character.acWithShield++;
    character.acWithoutShield++;
    return "Fighting Style: Defense";
}

function addRangerLevel2Features(character: Character) {
    character.traits = character.traits.concat([
        util.choice([
            "Fighting Style: Archery",
            addDefenseFightingStyle(character),
            "Fighting Style: Dueling",
            "Fighting Style: Two-Weapon Fighting"
        ])
    ]);
    character.level1Spells = character.level1Spells.concat(
        util.choices(rangerSpells[1], 2, character.level1Spells)
    );
}

function addRogueLevel2Features(character: Character) {
    character.traits.push("Cunning action");
}

function addSorcererLevel2Features(character: Character) {
    character.level1Spells = character.level1Spells.concat(
        util.choice(sorcererSpells[1], character.level1Spells)
    );
    character.traits.push("Font of Magic");
}

function addWarlockLevel2Features(character: Character) {
    character.level1Spells = character.level1Spells.concat(
        util.choice(warlockSpells[1], character.level1Spells)
    );
    util.choices(validInvocations(character), 2);
}

function validInvocations(character: Character) {
    let options: string[] = [];
    if (character.level1Spells.includes("Eldritch blast")) {
        options.push("Eldritch Invocation: Agonizing Blast");
        options.push("Eldritch Invocation: Eldritch Spear");
    }
    options.push("Eldritch Invocation: Armor of Shadows");
    options.push("Eldritch Invocation: Beast Speech");
    options.push("Eldritch Invocation: Beguiling Influence");
    options.push("Eldritch Invocation: Devil's Sight");
    options.push("Eldritch Invocation: Eyes of the Rune Keeper");
    options.push("Eldritch Invocation: Fiendish Vigor");
    options.push("Eldritch Invocation: Gaze of Two Minds");
    options.push("Eldritch Invocation: Mask of Many Faces");
    options.push("Eldritch Invocation: Misty Visions");
    options.push("Eldritch Invocation: Repelling Blast");
    return options;
}

function addWizardLevel2Features(character: Character) {
    addWizardSubClassFeatures(character);
    character.level1Spells = character.level1Spells.concat(
        util.choice(wizardSpells[1], character.level1Spells)
    );
}