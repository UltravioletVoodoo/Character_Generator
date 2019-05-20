import { zeroAttributes, mergeAttributes, generateMods, fleshOutAttributes } from "./Attributes";
import { zeroSkills, sumSkills, convertAttrToSkills } from "./Skills";
import { blankArmor } from "./ArmorSets";
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
export const blankCharacter = {
    name: "",
    className: "",
    level: 1,
    raceName: "",
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
    ac: 0,
    initiative: 0,
    speed: 0,
    hitDice: 0,
    hp: 0,
    weapons: [],
    weaponProfs: [],
    armor: blankArmor,
    armorProfs: [],
    startingGold: 0,
    tools: [],
    personality: "",
    ideal: "",
    bond: "",
    flaw: "",
    traits: [],
    level0Spells: [],
    level1Spells: [],
};
// Adds the base features that every character needs that are not related to race or class
export function addBaseFeatures(character) {
    // Choose the character gender
    character.sex = util.choice(sex);
    // Choose the character alignment
    character.alignment = util.choice(alignment);
    // Modify the base attributes using pointbuy
    character.attributes = mergeAttributes([character.attributes, pointBuy()]);
    // Pick the personality, ideals, bonds, and flaws for the character
    character.personality = util.choice(personality);
    character.ideal = util.choice(ideals);
    character.bond = util.choice(bonds);
    character.flaw = util.choice(flaws);
    // Return the modified character
    return character;
}
function removeDuplicatesFromLists(character) {
    character.skillProfs = [...new Set(character.skillProfs)];
    character.savingThrowProfs = [...new Set(character.savingThrowProfs)];
    character.expertise = [...new Set(character.expertise)];
    character.languages = [...new Set(character.languages)];
    character.toolProfs = [...new Set(character.toolProfs)];
    character.weaponProfs = [...new Set(character.weaponProfs)];
    character.traits = [...new Set(character.traits)];
    character.level0Spells = [...new Set(character.level0Spells)];
    character.level1Spells = [...new Set(character.level1Spells)];
}
function finalizeCharacterFeatures(character) {
    removeDuplicatesFromLists(character);
    character.skillProfsFlat = sumSkills(character.skillProfs);
    character.savingThrowProfsFlat = mergeAttributes(character.savingThrowProfs.map(fleshOutAttributes));
    character.attrMods = generateMods(character.attributes);
    character.skills = sumSkills([character.skillProfsFlat]
        .concat(convertAttrToSkills(character.attrMods))
        .concat(sumSkills(character.expertise)));
    character.savingThrows = mergeAttributes([character.savingThrowProfsFlat, character.attrMods]);
    return character;
}
// Generate the character in its entirety
export function generateCharacter() {
    // Start with a blank slate in the correct format
    let character = { ...blankCharacter };
    // Add miscelaneous features not related to class or race
    character = addBaseFeatures(character);
    // Add race features
    character = addRaceFeatures(character);
    // Add class features
    character = addCharacterClassFeatures(character);
    // Apply the final touches and compute the values that required class/race
    character = finalizeCharacterFeatures(character);
    // Return the finalized character
    return character;
}
