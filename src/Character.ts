import { Attributes, zeroAttributes } from "./Attributes";
import { Skills, zeroSkills } from "./Skills";
import { Tool } from "./ToolSets";
import { Weapon } from "./WeaponSets";
import { Armor, blankArmor } from "./ArmorSets";
import { addCharacterClassFeatures } from "./CharacterClass"
import { addRaceFeatures } from "./Race";

export interface Character {
    name: string;
    className: string;
    level: 1;
    raceName: string;
    alignment: string;
    sex: string;
    attributes: Attributes;
    attrMods: Attributes;
    savingThrows: Attributes;
    savingThrowProfs: Attributes;
    skills: Skills;
    skillProfs: Skills;
    proficiencyBonus: 2;
    languages: string[];
    toolProfs: Tool[];
    ac: number;
    initiative: number;
    speed: number;
    hitDice: number;
    hp: number;
    weapons: Weapon[];
    armor: Armor;
    startingGold: number;
    tools: Tool[];
    personalityTrait: string;
    ideal: string;
    bond: string;
    flaw: string;
    traits: string[];
    level0Spells: string[];
    level1Spells: string[];
}

export const blankCharacter: Character = {
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
}


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