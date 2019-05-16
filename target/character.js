import { zeroAttributes } from "./Attributes";
import { zeroSkills } from "./Skills";
import { blankArmor } from "./ArmorSets";
import { addCharacterClassFeatures } from "./CharacterClass";
import { addRaceFeatures } from "./Race";
export const blankCharacter = {
    name: "",
    className: "",
    level: 1,
    raceName: "",
    alignment: "",
    sex: "",
    attributes: zeroAttributes,
    attrMods: zeroAttributes,
    savingThrows: zeroAttributes,
    savingThrowProfs: zeroAttributes,
    skills: zeroSkills,
    skillProfs: zeroSkills,
    proficiencyBonus: 2,
    languages: [],
    toolProfs: [],
    ac: 0,
    initiative: 0,
    speed: 0,
    hitDice: 0,
    hp: 0,
    weapons: [],
    armor: blankArmor,
    startingGold: 0,
    tools: [],
    personalityTrait: "",
    ideal: "",
    bond: "",
    flaw: "",
    traits: [],
    level0Spells: [],
    level1Spells: [],
};
// Generate the character in its entirety
export function generateCharacter() {
    // Start with a blank slate in the correct format
    let character = blankCharacter;
    // Add class features
    character = addCharacterClassFeatures(character);
    // Add race features
    character = addRaceFeatures(character);
    return character;
}
