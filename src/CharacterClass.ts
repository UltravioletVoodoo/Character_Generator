import { Character } from "./Character";
import { util } from "./Util";
import { light, medium, findArmor, heavy } from "./ArmorSets";
import { simpleMelee, simpleRanged, martialMelee, martialRanged, findWeapon } from "./WeaponSets";
import { fleshOutAttributes } from "./Attributes";
import { DeepPartial, Skills, allSkillPartialProfs } from "./Skills";
import { findTool, musical, artisan } from "./ToolSets";
import { bardSpells, clericSpells, druidSpells, sorcererSpells, warlockSpells, wizardSpells } from "./Spells";
import { addClericSubClassFeatures, addSorcererSubClassFeatures, addWarlockSubClassFeatures } from "./CharacterSubClass";

export function addCharacterClassFeatures(character: Character){
    util.choice(classFunctionList)(character);
}

const classFunctionList: ((character: Character) => void)[] = [
    // addBarbarianFeatures,
    addBardFeatures,
    // addClericFeatures,
    // addDruidFeatures,
    // addFighterFeatures,
    // addMonkFeatures,
    // addPaladinFeatures,
    // addRangerFeatures,
    // addRogueFeatures,
    // addSorcererFeatures,
    // addWarlockFeatures,
    // addWizardFeatures
];

function addBarbarianFeatures(character: Character){
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
    character.gold = 80;
    character.traits = character.traits.concat("Rage");
}

function addBardFeatures(character: Character){
    character.className = "Bard";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs
        .concat(
            simpleMelee,
            simpleRanged,
            findWeapon("Hand Crossbow"),
            findWeapon("Longsword"),
            findWeapon("Rapier"),
            findWeapon("Shortsword")
            );
    character.toolProfs = character.toolProfs.concat(util.choices(musical, 3));
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{dex: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices(allSkillPartialProfs, 3, character.skillProfs)
    );
    character.gold = 200;
    handleBardMemorizedSpells(character);
    character.traits = character.traits.concat("Bardic Inspiration (d6)");
}

function handleBardMemorizedSpells(character: Character) {
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(
        util.choices(bardSpells[0], 2, character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(bardSpells[1], 4, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
}

function addClericFeatures(character: Character){
    character.className = "Cleric";
    addClericSubClassFeatures(character);
    character.hitDice = 8;
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged);
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
    character.gold = 200;
    handleClericMemorizedSpells(character);
}

function handleClericMemorizedSpells(character: Character) {
    character.memorizedSpells[0] = util.choices(
        clericSpells[0],
        3,
        character.inherentSpells[0]
    );
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(
        clericSpells[1],
        spellsKnown,
        character.inherentSpells[1]
    );
}

function addDruidFeatures(character: Character){
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
    character.gold = 200;
    character.languages = character.languages.concat("Druidic");
    handleDruidMemorizedSpells(character);
}

function handleDruidMemorizedSpells(character: Character) {
    character.memorizedSpells[0] = util.choices(
        druidSpells[0],
        2,
        character.inherentSpells[0]
    );
    let spellsKnown = Math.max(character.attrMods.wis + character.level, 1);
    character.memorizedSpells[1] = util.choices(
        druidSpells[1],
        spellsKnown,
        character.inherentSpells[1]
    );
}

function addFighterFeatures(character: Character){
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
    character.gold = 200;
    character.traits = character.traits.concat(
        "Second Wind",
        util.choice([
            "Fighting Style: Archery",
            addDefenceFightingStyle(character),
            "Fighting Style: Dueling",
            "Fighting Style: Great Weapon Fighting",
            "Fighting Style: Protection",
            "Fighting Style: Two-Weapon Fighting"
        ])
    );
}

function addDefenceFightingStyle(character: Character): string {
    character.acWithShield++;
    character.acWithShield++;
    return "Fighting Style: Defense";
}

function addMonkFeatures(character: Character){
    character.className = "Monk";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(
        findArmor("Unarmored defence wis")
    );
    character.weaponProfs = character.weaponProfs.concat(
        simpleMelee,
        simpleRanged,
        findWeapon("Shortsword")
    );
    character.toolProfs = character.toolProfs.concat(
        util.choice(artisan.concat(musical), character.toolProfs)
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{str: 2}, {dex: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {dex: {acrobatics: 2}},
            {dex: {stealth: 2}},
            {int: {history: 2}},
            {int: {religion: 2}},
            {wis: {insight: 2}}
        ], 2, character.skillProfs)
    );
    character.gold = 20;
    character.traits = character.traits.concat(
        "Unarmored Defence",
        "Martial Arts"
    );
}

function addPaladinFeatures(character: Character){
    character.className = "Paladin";
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
        [{wis: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {int: {religion: 2}},
            {wis: {insight: 2}},
            {wis: {medicine: 2}},
            {cha: {intimidation: 2}},
            {cha: {persuasion: 2}}
        ], 2, character.skillProfs)
    );
    character.gold = 200;
    character.traits = character.traits.concat("Divine Sense", "Lay on Hands");
}

function addRangerFeatures(character: Character){
    character.className = "Ranger";
    character.hitDice = 10;
    character.armorProfs = character.armorProfs.concat(
        light,
        medium
    );
    character.weaponProfs = character.weaponProfs.concat(
        simpleMelee,
        simpleRanged,
        martialMelee,
        martialRanged
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{str: 2}, {dex: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {dex: {stealth: 2}},
            {int: {nature: 2}},
            {int: {investigation: 2}},
            {wis: {animalHandling: 2}},
            {wis: {insight: 2}},
            {wis: {perception: 2}},
            {wis: {survival: 2}}
        ], 3, character.skillProfs)
    );
    character.gold = 200;
    character.traits = character.traits.concat(
        util.choice([
            "Favored Enemy: Beasts",
            "Favored Enemy: Fey",
            "Favored Enemy: Humanoids",
            "Favored Enemy: Monstrosities",
            "Favored Enemy: Undead"
        ]),
        "Natural Explorer"
    );
}

function addRogueFeatures(character: Character){
    character.className = "Rogue";
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs.concat(
        simpleMelee,
        simpleRanged,
        findWeapon("Hand Crossbow"),
        findWeapon("Longsword"),
        findWeapon("Rapier"),
        findWeapon("Shortsword")
    );
    character.toolProfs = character.toolProfs.concat(findTool("Thieve's tools"));
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{dex: 2}, {int: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {str: {athletics: 2}},
            {dex: {acrobatics: 2}},
            {dex: {stealth: 2}},
            {dex: {sleightOfHand: 2}},
            {int: {investigation: 2}},
            {wis: {insight: 2}},
            {wis: {perception: 2}},
            {cha: {deception: 2}},
            {cha: {intimidation: 2}},
            {cha: {persuasion: 2}},
            {cha: {performance: 2}}
        ], 4, character.skillProfs)
    );
    character.gold = 160;
    character.expertise = character.expertise.concat(
        util.choices(character.skillProfs, 2, character.expertise)
    );
    character.traits = character.traits.concat("Sneak Attack");
    character.languages.push("Thieve's cant");
}

function addSorcererFeatures(character: Character){
    character.className = "Sorcerer";
    addSorcererSubClassFeatures(character);
    character.hitDice = 6;
    character.weaponProfs = character.weaponProfs.concat(
        findWeapon("Dagger"),
        findWeapon("Dart"),
        findWeapon("Sling"),
        findWeapon("Quarterstaff"),
        findWeapon("Light Crossbow")
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{con: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {int: {arcana: 2}},
            {int: {religion: 2}},
            {wis: {insight: 2}},
            {wis: {perception: 2}},
            {cha: {deception: 2}},
            {cha: {persuasion: 2}}
        ], 2, character.skillProfs)
    );
    character.gold = 120;
    handleSorcererMemorizedSpells(character);
}

function handleSorcererMemorizedSpells(character: Character) {
    character.memorizedSpells[0] = util.choices(
        sorcererSpells[0],
        4,
        character.inherentSpells[0].concat(character.memorizedSpells[0])
    );
    character.memorizedSpells[1] = util.choices(
        sorcererSpells[1],
        2,
        character.inherentSpells[1].concat(character.memorizedSpells[1])
    );
}

function addWarlockFeatures(character: Character){
    character.className = "Warlock";
    addWarlockSubClassFeatures(character);
    character.hitDice = 8;
    character.armorProfs = character.armorProfs.concat(light);
    character.weaponProfs = character.weaponProfs.concat(simpleMelee, simpleRanged);
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{wis: 2}, {cha: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {int: {arcana: 2}},
            {cha: {deception: 2}},
            {int: {history: 2}},
            {cha: {intimidation: 2}},
            {int: {investigation: 2}},
            {int: {nature: 2}},
            {int: {religion: 2}}
        ], 2, character.skillProfs)
    );
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(
        util.choices(warlockSpells[0], 2, character.inherentSpells[0])
    );
    character.gold = 160;
}

function addWizardFeatures(character: Character){
    character.className = "Wizard";
    character.hitDice = 6;
    character.weaponProfs = character.weaponProfs.concat(
        findWeapon("Dagger"),
        findWeapon("Dart"),
        findWeapon("Sling"),
        findWeapon("Quarterstaff"),
        findWeapon("Light Crossbow")
    );
    character.savingThrowProfs = character.savingThrowProfs.concat(
        [{int: 2}, {wis: 2}].map(fleshOutAttributes)
    );
    character.skillProfs = character.skillProfs.concat(
        util.choices<DeepPartial<Skills>>([
            {int: {arcana: 2}},
            {int: {history: 2}},
            {wis: {insight: 2}},
            {int: {investigation: 2}},
            {wis: {medicine: 2}},
            {int: {religion: 2}}
        ], 2, character.skillProfs)
    );
    character.gold = 160;
    handleWizardMemorizedSpells(character);
    character.traits = character.traits.concat("Arcane Recovery");
}

function handleWizardMemorizedSpells(character: Character) {
    character.memorizedSpells[0] = util.choices(
        wizardSpells[0],
        3,
        character.inherentSpells[0]
    );
    let spellsKnown = Math.max(character.attrMods.int + character.level, 1);
    character.memorizedSpells[1] = util.choices(
        wizardSpells[1],
        spellsKnown,
        character.inherentSpells[1]
    );
}