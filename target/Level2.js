import { bardSpells, clericSpells, druidSpells, paladinSpells, rangerSpells, sorcererSpells, warlockSpells, wizardSpells } from "./Spells";
import { util } from "./Util";
import { addDruidSubClassFeatures, addWizardSubClassFeatures } from "./CharacterSubClass";
export function addLevel2Features(character) {
    // There are no races in the application thusfar that have level2 features.
    // If new races are added, add the levelup things here.
    addLevel2ClassFeatures(character);
}
function addLevel2ClassFeatures(character) {
    switch (character.className) {
        case "Barbarian":
            addBarbarianLevel2Features(character);
            break;
        case "Bard":
            addBardLevel2Features(character);
            break;
        case "Cleric":
            addClericLevel2Features(character);
            break;
        case "Druid":
            addDruidLevel2Features(character);
            break;
        case "Fighter":
            addFighterLevel2Features(character);
            break;
        case "Monk":
            addMonkLevel2Features(character);
            break;
        case "Paladin":
            addPaladinLevel2Features(character);
            break;
        case "Ranger":
            addRangerLevel2Features(character);
            break;
        case "Rogue":
            addRogueLevel2Features(character);
            break;
        case "Sorcerer":
            addSorcererLevel2Features(character);
            break;
        case "Warlock":
            addWarlockLevel2Features(character);
            break;
        case "Wizard":
            addWizardLevel2Features(character);
            break;
        default: throw new Error("Character class '"
            + character.className +
            "' is invalid and can't be leveled...");
    }
}
function addBarbarianLevel2Features(character) {
    character.traits = character.traits.concat([
        "Reckless attack",
        "Danger sense"
    ]);
}
function addBardLevel2Features(character) {
    character.traits = character.traits.concat([
        "Jack of all trades",
        "Song of rest"
    ]);
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(util.choice(bardSpells[1], character.inherentSpells[1].concat(character.memorizedSpells[1])));
}
function addClericLevel2Features(character) {
    character.traits.push("Channel Divinity (1/rest)");
    if (character.traits.includes("Forge Domain"))
        character.abilities.push("Channel Divinity: Artisan's Blessing");
    if (character.traits.includes("Grave Domain"))
        character.abilities.push("Channel Divinity: Path to the Grave");
    if (character.traits.includes("Knowledge Domain"))
        character.abilities.push("Channel Divinity: Knowledge of the Ages");
    if (character.traits.includes("Life Domain"))
        character.abilities.push("Channel Divinity: Preserve Life");
    if (character.traits.includes("Light Domain"))
        character.abilities.push("Channel Divinity: Radiance of the Dawn");
    if (character.traits.includes("Nature Domain"))
        character.abilities.push("Channel Divinity: Charm Animals and Plants");
    if (character.traits.includes("Tempest Domain"))
        character.abilities.push("Channel Divinity: Destructive Wrath");
    if (character.traits.includes("Trickery Domain"))
        character.abilities.push("Channel Divinity: Invoke Duplicity");
    if (character.traits.includes("War Domain"))
        character.abilities.push("Channel Divinity: Guided Strike");
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(clericSpells[1], spellsKnown, character.inherentSpells[1]);
}
function addDruidLevel2Features(character) {
    character.abilities.push("Wild Shape");
    addDruidSubClassFeatures(character);
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(druidSpells[1], spellsKnown, character.inherentSpells[1]);
}
function addFighterLevel2Features(character) {
    character.abilities.push("Action Surge");
}
function addMonkLevel2Features(character) {
    character.traits.push("Unarmored Movement (+10ft.)");
    character.abilities = character.abilities.concat([
        "Ki: Flurry of Blows",
        "Ki: Patient Defense",
        "Ki: Step of the Wind"
    ]);
}
function addPaladinLevel2Features(character) {
    character.traits.push(util.choice([
        addDefenseFightingStyle(character),
        "Fighting Style: Dueling",
        "Fighting Style: Great Weapon Fighting",
        "Fighting Style: Protection"
    ]));
    character.abilities.push("Divine Smite");
    let spellsKnown = Math.max(character.attrMods.cha + character.level, 1);
    character.memorizedSpells[1] = util.choices(paladinSpells[1], spellsKnown, character.inherentSpells[1]);
}
function addDefenseFightingStyle(character) {
    character.acWithShield++;
    character.acWithoutShield++;
    return "Fighting Style: Defense";
}
function addRangerLevel2Features(character) {
    character.traits = character.traits.concat([
        util.choice([
            "Fighting Style: Archery",
            addDefenseFightingStyle(character),
            "Fighting Style: Dueling",
            "Fighting Style: Two-Weapon Fighting"
        ])
    ]);
    character.memorizedSpells[1] = util.choices(rangerSpells[1], 2, character.inherentSpells[1].concat(character.memorizedSpells[1]));
}
function addRogueLevel2Features(character) {
    character.abilities.push("Cunning action");
}
function addSorcererLevel2Features(character) {
    character.memorizedSpells[1].push(util.choice(sorcererSpells[1], character.inherentSpells[1].concat(character.memorizedSpells[1])));
    character.traits.push("Font of Magic");
}
function addWarlockLevel2Features(character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(util.choice(warlockSpells[1].concat(getExpandedSpells(character)), character.inherentSpells[1].concat(character.memorizedSpells[1])));
    util.choices(validInvocations(character), 2);
}
function getExpandedSpells(character) {
    let slots = [];
    if (character.traits.includes("Archefey Patron"))
        slots = slots.concat(["Faerie fire", "Sleep"]);
    if (character.traits.includes("Fiend Patron"))
        slots = slots.concat(["Burning hands", "Command"]);
    if (character.traits.includes("Great Old One Patron"))
        slots = slots.concat(["Dissonant whispers", "Tasha's hideous laughter"]);
    if (character.traits.includes("Celestial Patron"))
        slots = slots.concat(["Cure wounds", "Guiding bolt"]);
    if (character.traits.includes("Hexblade"))
        slots = slots.concat(["Shield", "Wrathful smite"]);
    return slots;
}
function validInvocations(character) {
    let options = [];
    if (character.memorizedSpells[1].includes("Eldritch blast") || character.inherentSpells[0].includes("Eldritch blast")) {
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
function addWizardLevel2Features(character) {
    addWizardSubClassFeatures(character);
    let spellsKnown = Math.max(character.attrMods.int + character.level, 1);
    character.memorizedSpells[1] = util.choices(wizardSpells[1], spellsKnown, character.inherentSpells[1]);
}
