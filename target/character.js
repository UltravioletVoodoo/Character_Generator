import { zeroAttributes, mergeAttributes, generateMods, fleshOutAttributes } from "./Attributes";
import { zeroSkills, sumSkills, convertAttrToSkills } from "./Skills";
import { blankArmor, calculateAcWithoutShield, calculateAcWithShield } from "./ArmorSets";
import { addCharacterClassFeatures } from "./CharacterClass";
import { addRaceFeatures } from "./Race";
import { pointBuy } from "./PointBuy";
import { sex } from "./Sex";
import { util } from "./Util";
import { alignment } from "./Alignment";
import { personality } from "./PersonalitySets";
import { ideals } from "./IdealSets";
import { bonds } from "./BondSets";
import { flaws } from "./FlawSets";
import { chooseEquipment } from "./Equipment";
import { noShield } from "./ShieldSets";
import { addLevelUpFeatures } from "./LevelUp";
import { generateSpells } from "./Spells";
import { chooseMagicItem } from "./MagicItemTableB";
import { generatePortrait } from "./Portrait";
export function blankCharacter() {
    return {
        className: "",
        level: 1,
        raceName: "",
        subRaceName: "",
        alignment: "",
        sex: "",
        age: 0,
        attributes: zeroAttributes,
        attrMods: zeroAttributes,
        savingThrows: zeroAttributes,
        savingThrowProfs: [],
        savingThrowProfsFlat: zeroAttributes,
        skills: zeroSkills,
        skillProfs: [],
        expertise: [],
        skillProfsFlat: zeroSkills,
        proficiencyBonus: 2,
        languages: [],
        toolProfs: [],
        acWithShield: 0,
        acWithoutShield: 0,
        initiative: 0,
        speed: 0,
        hitDice: 0,
        hp: 0,
        weapons: [],
        weaponProfs: [],
        armor: blankArmor,
        armorProfs: [],
        shield: noShield,
        gold: 0,
        tools: [],
        personality: "",
        ideal: "",
        bond: "",
        flaw: "",
        traits: [],
        abilities: [],
        spells: [[], [], []],
        inherentSpells: [[], [], []],
        memorizedSpells: [[], [], []],
        miscItems: [],
        assets: {
            Ears: "",
            Eyes: "",
            Hair: "",
            Heads: "",
            Mouths: "",
            Necks: "",
            Noses: "",
            Chins: ""
        }
    };
}
// Adds the base features that every character needs that are not related to race or class
export function addBaseFeatures(character, options) {
    // Choose the character gender
    character.sex = util.choice(sex);
    // Choose the character alignment
    character.alignment = util.choice(alignment);
    // Modify the base attributes using pointbuy
    character.attributes = mergeAttributes([character.attributes, pointBuy(character, options)]);
    // Pick the personality, ideals, bonds, and flaws for the character
    character.personality = util.choice(personality);
    character.ideal = util.choice(ideals);
    character.bond = util.choice(bonds);
    character.flaw = util.choice(flaws);
}
function removeDuplicatesFromLists(character) {
    character.skillProfs = [...new Set(character.skillProfs)];
    character.savingThrowProfs = [...new Set(character.savingThrowProfs)];
    character.expertise = [...new Set(character.expertise)];
    character.languages = [...new Set(character.languages)];
    character.toolProfs = [...new Set(character.toolProfs)];
    character.weaponProfs = [...new Set(character.weaponProfs)];
    character.traits = [...new Set(character.traits)];
    character.abilities = [...new Set(character.abilities)];
    character.inherentSpells[0] = [...new Set(character.inherentSpells[0])];
    character.inherentSpells[1] = [...new Set(character.inherentSpells[1])];
    character.inherentSpells[2] = [...new Set(character.inherentSpells[2])];
    character.memorizedSpells[0] = [...new Set(character.memorizedSpells[0])];
    character.memorizedSpells[1] = [...new Set(character.memorizedSpells[1])];
    character.memorizedSpells[2] = [...new Set(character.memorizedSpells[2])];
}
function finalizeCharacterFeatures(character, options) {
    removeDuplicatesFromLists(character);
    character.skillProfsFlat = sumSkills(character.skillProfs);
    character.savingThrowProfsFlat = mergeAttributes(character.savingThrowProfs.map(fleshOutAttributes));
    character.skills = sumSkills([character.skillProfsFlat]
        .concat(convertAttrToSkills(character.attrMods))
        .concat(sumSkills(character.expertise)));
    character.savingThrows = mergeAttributes([character.savingThrowProfsFlat, character.attrMods]);
    // equipment
    chooseEquipment(character);
    character.acWithShield = calculateAcWithShield(character);
    character.acWithoutShield = calculateAcWithoutShield(character);
    character.initiative = character.attrMods.dex;
    character.hp = character.hp + character.attrMods.con + character.hitDice;
    // spells
    generateSpells(character);
    // if magic items are selected, give the player a magic item
    if (options.magicItems)
        chooseMagicItem(character);
    // if generate portrait is selected, generate a portrait for the player
    if (options.generatePortrait)
        generatePortrait(character);
    return character;
}
// Generate the character in its entirety
export function generateCharacter(options) {
    // Start with a blank slate in the correct format
    let character = blankCharacter();
    // Add miscelaneous features not related to class or race
    addBaseFeatures(character, options);
    // Add race features
    addRaceFeatures(character, options);
    // Now that we have the attributes done, we can calculate the mods used elsewhere
    character.attrMods = generateMods(character.attributes);
    // Add class features
    addCharacterClassFeatures(character);
    // Handle potential level-ups
    addLevelUpFeatures(character, options);
    // Apply the final touches and compute the values that required class/race
    finalizeCharacterFeatures(character, options);
    // Return the finalized character
    return character;
}
