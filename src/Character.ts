import { Attributes } from "./Attributes";
import { Skills } from "./Skills";
import { Range } from "./Range";
import { Spells } from "./Spells";
import { Colors } from "./Colors";
import { ArtAssets } from "./ArtAssets";
import { Weapon } from "./WeaponSets"
import { Armor } from "./ArmorSets";
import { Tool } from "./ToolSets";

export interface Character {
    name: string;
    raceName: string;
    className: string;
    alignment: string;
    attributes: Attributes;
    attrMods: Attributes;
    proficiencyBonus: number;
    skills: Skills;
    armorProficiencies: Set<Armor>;
    shieldProficiencies: Set<Armor>;
    armor: Armor;
    shield: Armor;
    ac: number;
    weaponProficiencies: Set<Weapon>;
    weapons: Weapon[];
    initiative: number;
    speed: number;
    hitDice: number;
    hitPoints: number;
    languages: Set<string>;
    toolProficiencies: Set<Tool>;
    tool: Tool;
    savingThrowProficiencies: Partial<Attributes>;
    savingThrow: Attributes;
    skillProficiencies: Skills;
    startingGold: number;
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    traits: Set<string>;
    ageRange: Range;
    age: number;
    colors: Colors;
    artAssets: ArtAssets;
    spells: Spells[];
}