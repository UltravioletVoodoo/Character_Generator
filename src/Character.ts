import { Attributes, zeroAttributes, mergeAttributes, generateMods, fleshOutAttributes } from "./Attributes";
import { Skills, zeroSkills, DeepPartial, sumSkills, convertAttrToSkills } from "./Skills";
import { Tool, blankTool } from "./ToolSets";
import { Weapon } from "./WeaponSets";
import { Armor, blankArmor, chooseArmor, calculateAc } from "./ArmorSets";
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
import { chooseEquipment } from "./Equipment";
import { Shield, noShield } from "./ShieldSets";

export interface Character {
    className: string;
    level: number;
    raceName: string;
    alignment: string;
    sex: string;
    age: number;
    attributes: Attributes;
    attrMods: Attributes;
    savingThrows: Attributes;
    savingThrowProfs: Partial<Attributes>[];
    savingThrowProfsFlat: Attributes;
    skills: Skills;
    skillProfs: DeepPartial<Skills>[];
    expertise: DeepPartial<Skills>[];
    skillProfsFlat: Skills;
    proficiencyBonus: number;
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
    armorProfs: Armor[];
    shield: Shield;
    startingGold: number;
    tool: Tool;
    personality: string;
    ideal: string;
    bond: string;
    flaw: string;
    traits: string[];
    level0Spells: string[];
    level1Spells: string[];
}

export const blankCharacter: Character = {
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
    shield: noShield,
    startingGold: 0,
    tool: blankTool,
    personality: "",
    ideal: "",
    bond: "",
    flaw: "",
    traits: [],
    level0Spells: [],
    level1Spells: [],
}


// Adds the base features that every character needs that are not related to race or class
export function addBaseFeatures(character: Character){
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
}

function removeDuplicatesFromLists(character: Character){
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

function finalizeCharacterFeatures(character: Character): Character {
    removeDuplicatesFromLists(character);
    character.skillProfsFlat = sumSkills(character.skillProfs);
    character.savingThrowProfsFlat = mergeAttributes(character.savingThrowProfs.map(fleshOutAttributes));
    character.attrMods = generateMods(character.attributes);
    character.skills = sumSkills([character.skillProfsFlat]
        .concat(convertAttrToSkills(character.attrMods))
        .concat(sumSkills(character.expertise))
        );
    character.savingThrows = mergeAttributes([character.savingThrowProfsFlat, character.attrMods]);

    // equipment
    chooseEquipment(character);

    character.ac = calculateAc(character);
    character.initiative = character.attrMods.dex;
    character.hp = character.hp + character.attrMods.con + character.hitDice;
    return character;
}

// Generate the character in its entirety
export function generateCharacter(): Character {

    // Start with a blank slate in the correct format
    let character = {...blankCharacter};

    // Add miscelaneous features not related to class or race
    addBaseFeatures(character);

    // Add race features
    addRaceFeatures(character);

    // Add class features
    addCharacterClassFeatures(character);

    // Apply the final touches and compute the values that required class/race
    finalizeCharacterFeatures(character);
    
    // Return the finalized character
    return character;
}