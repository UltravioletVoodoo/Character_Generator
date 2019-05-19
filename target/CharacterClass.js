import { util } from "./Util";
import { light, medium, findArmor, heavy } from "./ArmorSets";
import { simpleMelee, simpleRanged, martialMelee, martialRanged, findWeapon } from "./WeaponSets";
import { fleshOutAttributes } from "./Attributes";
import { allSkillPartialProfs } from "./Skills";
import { findTool, musical, artisan } from "./ToolSets";
import { bardSpells, clericSpells, druidSpells } from "./Spells";
import { addClericSubClassFeatures } from "./CharacterSubClass";
export function addCharacterClassFeatures(character) {
    character = util.choice(classFunctionList)(character);
    return character;
}
const classFunctionList = [
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
function addBarbarianFeatures(character) {
    character.className = "Barbarian";
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
    character.startingGold = 80;
    character.traits = character.traits.concat("Rage");
    return character;
}
function addBardFeatures(character) {
    character.className = "Bard";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs
        .concat(simpleMelee, simpleRanged, findWeapon("Hand Crossbow"), findWeapon("Longsword"), findWeapon("Shortword"));
    character.toolProfs = character.toolProfs.concat(util.choices(musical, 3));
    character.savingThrowProfs = character.savingThrowProfs.concat([{ dex: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices(allSkillPartialProfs, 3, character.skillProfs));
    character.startingGold = 200;
    character.level0Spells = character.level0Spells.concat(util.choices(bardSpells[0], 2, character.level0Spells));
    character.level1Spells = character.level1Spells.concat(util.choices(bardSpells[1], 4, character.level1Spells));
    character.traits = character.traits.concat("Bardic Inspiration (d6)");
    return character;
}
function addClericFeatures(character) {
    character.className = "Cleric";
    addClericSubClassFeatures(character);
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light, medium);
    character.savingThrowProfs = character.savingThrowProfs.concat([{ wis: 2 }, { cha: 2 }].map(fleshOutAttributes));
    character.skillProfs = character.skillProfs.concat(util.choices([
        { int: { history: 2 } },
        { int: { religion: 2 } },
        { wis: { insight: 2 } },
        { wis: { medicine: 2 } },
        { cha: { persuasion: 2 } }
    ], 2));
    character.startingGold = 200;
    character.level0Spells = character.level0Spells.concat(util.choices(clericSpells[0], 3, character.level0Spells));
    character.level1Spells = character.level1Spells.concat(util.choices(clericSpells[1], 2, character.level1Spells));
    return character;
}
function addDruidFeatures(character) {
    character.className = "Druid";
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
    character.startingGold = 200;
    character.languages = character.languages.concat("Druidic");
    character.level0Spells = character.level0Spells.concat(util.choices(druidSpells[0], 2, character.level0Spells));
    character.level1Spells = character.level1Spells.concat(util.choices(druidSpells[1], 2, character.level1Spells));
    return character;
}
function addFighterFeatures(character) {
    character.className = "Fighter";
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
    character.startingGold = 200;
    character.traits = character.traits.concat("Second Wind", util.choice([
        "Archery Fighting Style(*)",
        "Defender Fighting Style(*)",
        "Dueling Fighting Style(*)",
        "Great Weapon Fighting Style(*)",
        "Protection Fighting Style(*)",
        "Two Weapon Fighting Style(*)"
    ]));
    return character;
}
function addMonkFeatures(character) {
    character.className = "Monk";
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
    character.startingGold = 20;
    character.traits = character.traits.concat("Unarmored Defence", "Martial Arts");
    return character;
}
function addPaladinFeatures(character) {
    character.className = "Paladin";
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
    character.traits = character.traits.concat("Divine Sense", "Lay on Hands");
    return character;
}
function addRangerFeatures(character) {
    character.className = "Ranger";
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
    character.startingGold = 200;
    character.traits = character.traits.concat(util.choice([
        "Favored Enemy: Beasts(*)",
        "Favored Enemy: Fey(*)",
        "Favored Enemy: Humanoids(*)",
        "Favored Enemy: Monstrosities(*)",
        "Favored Enemy: Undead(*)"
    ]), "Natural Explorer");
    return character;
}
function addRogueFeatures(character) {
    character.className = "Rogue";
    return character;
}
function addSorcererFeatures(character) {
    character.className = "Sorcerer";
    return character;
}
function addWarlockFeatures(character) {
    character.className = "Warlock";
    return character;
}
function addWizardFeatures(character) {
    character.className = "Wizard";
    return character;
}
