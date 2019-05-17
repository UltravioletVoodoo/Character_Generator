import { Attributes, zeroAttributes, mergeAttributes } from "./Attributes";
import { Skills, zeroSkills, DeepPartial, sumSkills } from "./Skills";
import { Tool } from "./ToolSets";
import { Weapon } from "./WeaponSets";
import { Armor, blankArmor } from "./ArmorSets";
import { addCharacterClassFeatures } from "./CharacterClass"
import { addRaceFeatures } from "./Race";
import { pointBuy } from "./PointBuy";
import { sex } from "./Sex";
import { util } from "./Util";
import { alignment } from "./Alignment";
import { personality } from "./PersonalitySets";
import { ideals } from "./IdealSets";
import { bonds } from "./BondSets";
import { flaws } from "./FlawSets";

export interface Character {
    name: string;
    className: string;
    level: 1;
    raceName: string;
    alignment: string;
    sex: string;
    age: number;
    attributes: Attributes;
    attrMods: Attributes;
    savingThrows: Attributes;
    savingThrowProfs: Attributes;
    skills: Skills;
    skillProfs: DeepPartial<Skills>[];
    skillProfsFlat: Skills;
    proficiencyBonus: 2;
    languages: string[];
    toolProfs: Tool[];
    ac: number;
    initiative: number;
    speed: number;
    hitDice: number;
    hp: number;
    weapons: Weapon[];
    weaponProfs: Weapon[];
    armor: Armor;
    armorProfs: Armor[]
    startingGold: number;
    tools: Tool[];
    personality: string;
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
    age: 0,
    attributes: zeroAttributes,
    attrMods: zeroAttributes,
    savingThrows: zeroAttributes,
    savingThrowProfs: zeroAttributes,
    skills: zeroSkills,
    skillProfs: [],
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
}


// Adds the base features that every character needs that are not related to race or class
export function addBaseFeatures(character: Character): Character {
    
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

function finalizeCharacterFeatures(character: Character): Character {
    character.skillProfsFlat = sumSkills(character.skillProfs);
    return character;
}

// Generate the character in its entirety
export function generateCharacter() {

    // Start with a blank slate in the correct format
    let character = blankCharacter;

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