import { util } from "./Util";
import { light, medium, findArmor, heavy } from "./ArmorSets";
import { simpleMelee, simpleRanged, martialMelee, martialRanged, findWeapon } from "./WeaponSets";
import { fleshOutAttributes } from "./Attributes";
import { allSkillPartialProfs } from "./Skills";
import { findTool, musical, artisan } from "./ToolSets";
import { bardSpells, clericSpells, druidSpells, sorcererSpells, warlockSpells, wizardSpells } from "./Spells";
import { addClericSubClassFeatures, addSorcererSubClassFeatures, addWarlockSubClassFeatures } from "./CharacterSubClass";
export function chooseCharacterClass(character, options) {
    let classOptions = [];
    if (options.barbarian)
        classOptions.push("Barbarian");
    if (options.bard)
        classOptions.push("Bard");
    if (options.cleric)
        classOptions.push("Cleric");
    if (options.druid)
        classOptions.push("Druid");
    if (options.fighter)
        classOptions.push("Fighter");
    if (options.monk)
        classOptions.push("Monk");
    if (options.paladin)
        classOptions.push("Paladin");
    if (options.ranger) {
        if (options.UARanger) {
            classOptions.push("Ranger*");
        }
        else {
            classOptions.push("Ranger");
        }
    }
    if (options.rogue)
        classOptions.push("Rogue");
    if (options.sorcerer)
        classOptions.push("Sorcerer");
    if (options.warlock)
        classOptions.push("Warlock");
    if (options.wizard)
        classOptions.push("Wizard");
    character.className = util.choice(classOptions);
}
export function addCharacterClassFeatures(character) {
    if (character.className === "Barbarian")
        addBarbarianFeatures(character);
    if (character.className === "Bard")
        addBardFeatures(character);
    if (character.className === "Cleric")
        addClericFeatures(character);
    if (character.className === "Druid")
        addDruidFeatures(character);
    if (character.className === "Fighter")
        addFighterFeatures(character);
    if (character.className === "Monk")
        addMonkFeatures(character);
    if (character.className === "Paladin")
        addPaladinFeatures(character);
    if (character.className === "Ranger")
        addRangerFeatures(character);
    if (character.className === "Ranger*")
        addUARangerFeatures(character);
    if (character.className === "Rogue")
        addRogueFeatures(character);
    if (character.className === "Sorcerer")
        addSorcererFeatures(character);
    if (character.className === "Warlock")
        addWarlockFeatures(character);
    if (character.className === "Wizard")
        addWizardFeatures(character);
}
function addBarbarianFeatures(character) {
    character.hitDice = 12;
    character.armorProfs = character.armorProfs
        .concat(light, medium, findArmor("Unarmored defence con"));
    character.weaponProfs = character.weaponProfs
        .concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ str: 2 }, { con: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs
        .concat(util.choices([
        { str: { athletics: 2 } },
        { int: { nature: 2 } },
        { wis: { animalHandling: 2 } },
        { wis: { perception: 2 } },
        { wis: { survival: 2 } },
        { cha: { intimidation: 2 } }
    ], 2, character.skillProfs));
    character.gold = 80;
    character.abilities = character.abilities.concat("Rage");
}
function addBardFeatures(character) {
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs
        .concat(simpleMelee, simpleRanged, findWeapon("Hand Crossbow"), findWeapon("Longsword"), findWeapon("Rapier"), findWeapon("Shortsword"));
    character.toolProfs = character.toolProfs.concat(util.choices(musical, 3));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ dex: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices(allSkillPartialProfs, 3, character.skillProfs));
    character.gold = 200;
    handleBardMemorizedSpells(character);
    character.abilities = character.abilities.concat("Bardic Inspiration (d6)");
}
function handleBardMemorizedSpells(character) {
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(util.choices(bardSpells[0], 2, character.inherentSpells[0].concat(character.memorizedSpells[0])));
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(util.choices(bardSpells[1], 4, character.inherentSpells[1].concat(character.memorizedSpells[1])));
}
function addClericFeatures(character) {
    addClericSubClassFeatures(character);
    character.hitDice = 8;
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged);
    character.armorProfs = character.armorProfs.concat(light, medium);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ wis: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { history: 2 } },
        { int: { religion: 2 } },
        { wis: { insight: 2 } },
        { wis: { medicine: 2 } },
        { cha: { persuasion: 2 } }
    ], 2));
    character.gold = 200;
    handleClericMemorizedSpells(character);
}
function handleClericMemorizedSpells(character) {
    character.memorizedSpells[0] = util.choices(clericSpells[0], 3, character.inherentSpells[0]);
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(clericSpells[1], spellsKnown, character.inherentSpells[1]);
}
function addDruidFeatures(character) {
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light, medium);
    character.weaponProfs = character.weaponProfs.concat(findWeapon("Club"), findWeapon("Dagger"), findWeapon("Dart"), findWeapon("Javelin"), findWeapon("Mace"), findWeapon("Quarterstaff"), findWeapon("Scimitar"), findWeapon("Sickle"), findWeapon("Sling"), findWeapon("Spear"));
    character.toolProfs = character.toolProfs.concat(findTool("Herbalism kit"));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ int: 2 }, { wis: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { arcana: 2 } },
        { int: { nature: 2 } },
        { int: { religion: 2 } },
        { wis: { animalHandling: 2 } },
        { wis: { insight: 2 } },
        { wis: { medicine: 2 } },
        { wis: { perception: 2 } },
        { wis: { survival: 2 } }
    ], 2, character.skillProfs));
    character.gold = 200;
    character.languages = character.languages.concat("Druidic");
    handleDruidMemorizedSpells(character);
}
function handleDruidMemorizedSpells(character) {
    character.memorizedSpells[0] = util.choices(druidSpells[0], 2, character.inherentSpells[0]);
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(druidSpells[1], spellsKnown, character.inherentSpells[1]);
}
function addFighterFeatures(character) {
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(light, medium, heavy);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ str: 2 }, { con: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { str: { athletics: 2 } },
        { dex: { acrobatics: 2 } },
        { int: { history: 2 } },
        { wis: { animalHandling: 2 } },
        { wis: { insight: 2 } },
        { wis: { perception: 2 } },
        { wis: { survival: 2 } },
        { cha: { intimidation: 2 } }
    ], 2, character.skillProfs));
    character.gold = 200;
    character.traits.push(util.choice([
        "Fighting Style: Archery",
        addDefenceFightingStyle(character),
        "Fighting Style: Dueling",
        "Fighting Style: Great Weapon Fighting",
        "Fighting Style: Protection",
        "Fighting Style: Two-Weapon Fighting"
    ]));
    character.abilities.push("Second Wind");
}
function addDefenceFightingStyle(character) {
    character.acWithShield++;
    character.acWithShield++;
    return "Fighting Style: Defense";
}
function addMonkFeatures(character) {
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(findArmor("Unarmored defence wis"));
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, findWeapon("Shortsword"));
    character.toolProfs = character.toolProfs.concat(util.choice(artisan.concat(musical), character.toolProfs));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ str: 2 }, { dex: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { str: { athletics: 2 } },
        { dex: { acrobatics: 2 } },
        { dex: { stealth: 2 } },
        { int: { history: 2 } },
        { int: { religion: 2 } },
        { wis: { insight: 2 } }
    ], 2, character.skillProfs));
    character.gold = 20;
    character.traits = character.traits.concat("Unarmored Defence", "Martial Arts");
}
function addPaladinFeatures(character) {
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(light, medium, heavy);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ wis: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { str: { athletics: 2 } },
        { int: { religion: 2 } },
        { wis: { insight: 2 } },
        { wis: { medicine: 2 } },
        { cha: { intimidation: 2 } },
        { cha: { persuasion: 2 } }
    ], 2, character.skillProfs));
    character.gold = 200;
    character.abilities = character.abilities.concat("Divine Sense", "Lay on Hands");
}
function addUARangerFeatures(character) {
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(light, medium);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ str: 2 }, { dex: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { str: { athletics: 2 } },
        { dex: { stealth: 2 } },
        { int: { nature: 2 } },
        { int: { investigation: 2 } },
        { wis: { animalHandling: 2 } },
        { wis: { insight: 2 } },
        { wis: { perception: 2 } },
        { wis: { survival: 2 } }
    ], 3, character.skillProfs));
    character.gold = 200;
    character.traits = character.traits.concat(util.choice([
        "Favored Enemy: Beasts",
        "Favored Enemy: Fey",
        "Favored Enemy: Humanoids",
        "Favored Enemy: Monstrosities",
        "Favored Enemy: Undead"
    ]), "Natural Explorer");
}
function addRangerFeatures(character) {
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(light, medium);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, martialMelee, martialRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ str: 2 }, { dex: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { wis: { animalHandling: 2 } },
        { str: { athletics: 2 } },
        { wis: { insight: 2 } },
        { int: { investigation: 2 } },
        { int: { nature: 2 } },
        { wis: { perception: 2 } },
        { dex: { stealth: 2 } },
        { wis: { survival: 2 } }
    ], 3, character.skillProfs));
    character.gold = 200;
    let favoredEnemyOptions = [
        handleRangerAbberations,
        handleRangerBeasts,
        handleRangerCelestials,
        handleRangerConstructs,
        handleRangerDragons,
        handleRangerElementals,
        handleRangerFey,
        handleRangerFiends,
        handleRangerGiants,
        handleRangerMonstrosities,
        handleRangerOozes,
        handleRangerPlants,
        handleRangerUndead
    ];
    let first = util.choice(favoredEnemyOptions);
    first(character);
    favoredEnemyOptions = util.arrayDelete(favoredEnemyOptions, [first]);
    util.choice(favoredEnemyOptions);
    character.traits.push(util.choice([
        "Favored Terrain: Arctic",
        "Favored Terrain: Coast",
        "Favored Terrain: Desert",
        "Favored Terrain: Forest",
        "Favored Terrain: Grassland",
        "Favored Terrain: Mountain",
        "Favored Terrain: Swamp",
        "Favored Terrain: Underdark",
    ]));
}
function handleRangerAbberations(character) {
    character.languages = character.languages.concat(util.choice(["Undercommon", "Deep Speech"], character.languages));
    character.traits.push("Favored Enemy: Abberations");
}
function handleRangerBeasts(character) {
    character.traits.push("Favored Enemy: Beasts");
}
function handleRangerCelestials(character) {
    character.languages = character.languages.concat("Celestial");
    character.traits.push("Favored Enemy: Celestials");
}
function handleRangerConstructs(character) {
    character.traits.push("Favored Enemy: Constructs");
}
function handleRangerDragons(character) {
    character.languages = character.languages.concat("Draconic");
    character.traits.push("Favored Enemy: Dragons");
}
function handleRangerElementals(character) {
    character.languages = character.languages.concat("Primordial");
    character.traits.push("Favored Enemy: Elementals");
}
function handleRangerFey(character) {
    character.languages = character.languages.concat("Sylvan");
    character.traits.push("Favored Enemy: Fey");
}
function handleRangerFiends(character) {
    character.languages = character.languages.concat(util.choice(["Infernal", "Abbysal"], character.languages));
    character.traits.push("Favored Enemy: Fiends");
}
function handleRangerGiants(character) {
    character.languages = character.languages.concat("Giant");
    character.traits.push("Favored Enemy: Giants");
}
function handleRangerMonstrosities(character) {
    character.traits.push("Favored Enemy: Monstrosities");
}
function handleRangerOozes(character) {
    character.traits.push("Favored Enemy: Oozes");
}
function handleRangerPlants(character) {
    character.traits.push("Favored Enemy: Plants");
}
function handleRangerUndead(character) {
    character.traits.push("Favored Enemy: Undead");
}
function addRogueFeatures(character) {
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged, findWeapon("Hand Crossbow"), findWeapon("Longsword"), findWeapon("Rapier"), findWeapon("Shortsword"));
    character.toolProfs = character.toolProfs.concat(findTool("Thieve's tools"));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ dex: 2 }, { int: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { str: { athletics: 2 } },
        { dex: { acrobatics: 2 } },
        { dex: { stealth: 2 } },
        { dex: { sleightOfHand: 2 } },
        { int: { investigation: 2 } },
        { wis: { insight: 2 } },
        { wis: { perception: 2 } },
        { cha: { deception: 2 } },
        { cha: { intimidation: 2 } },
        { cha: { persuasion: 2 } },
        { cha: { performance: 2 } }
    ], 4, character.skillProfs));
    character.gold = 160;
    character.expertise = character.expertise.concat(util.choices(character.skillProfs, 2, character.expertise));
    character.abilities = character.abilities.concat("Sneak Attack");
    character.languages.push("Thieve's cant");
}
function addSorcererFeatures(character) {
    addSorcererSubClassFeatures(character);
    character.hitDice = 6;
    character.weaponProfs = character.weaponProfs.concat(findWeapon("Dagger"), findWeapon("Dart"), findWeapon("Sling"), findWeapon("Quarterstaff"), findWeapon("Light Crossbow"));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ con: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { arcana: 2 } },
        { int: { religion: 2 } },
        { wis: { insight: 2 } },
        { wis: { perception: 2 } },
        { cha: { deception: 2 } },
        { cha: { persuasion: 2 } }
    ], 2, character.skillProfs));
    character.gold = 120;
    handleSorcererMemorizedSpells(character);
}
function handleSorcererMemorizedSpells(character) {
    character.memorizedSpells[0] = util.choices(sorcererSpells[0], 4, character.inherentSpells[0].concat(character.memorizedSpells[0]));
    character.memorizedSpells[1] = util.choices(sorcererSpells[1], 2, character.inherentSpells[1].concat(character.memorizedSpells[1]));
}
function addWarlockFeatures(character) {
    addWarlockSubClassFeatures(character);
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ wis: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { arcana: 2 } },
        { cha: { deception: 2 } },
        { int: { history: 2 } },
        { cha: { intimidation: 2 } },
        { int: { investigation: 2 } },
        { int: { nature: 2 } },
        { int: { religion: 2 } }
    ], 2, character.skillProfs));
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(util.choices(warlockSpells[0], 2, character.inherentSpells[0]));
    character.gold = 160;
}
function addWizardFeatures(character) {
    character.hitDice = 6;
    character.weaponProfs = character.weaponProfs.concat(findWeapon("Dagger"), findWeapon("Dart"), findWeapon("Sling"), findWeapon("Quarterstaff"), findWeapon("Light Crossbow"));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ int: 2 }, { wis: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { arcana: 2 } },
        { int: { history: 2 } },
        { wis: { insight: 2 } },
        { int: { investigation: 2 } },
        { wis: { medicine: 2 } },
        { int: { religion: 2 } }
    ], 2, character.skillProfs));
    character.gold = 160;
    handleWizardMemorizedSpells(character);
    character.abilities = character.abilities.concat("Arcane Recovery");
}
function handleWizardMemorizedSpells(character) {
    character.memorizedSpells[0] = util.choices(wizardSpells[0], 3, character.inherentSpells[0]);
    let spellsKnown = Math.max(character.attrMods.int + character.level, 1);
    character.memorizedSpells[1] = util.choices(wizardSpells[1], spellsKnown, character.inherentSpells[1]);
}
