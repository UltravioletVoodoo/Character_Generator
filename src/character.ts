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
    proficiencyBonus: 2;
    skills: Skills;
    ac: number;
    initiative: number;
    speed: number;
    hitPoints: number;
    hitDice: number;
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    languages: Set<string>;
    armorProficiencies: Set<Armor>;
    shieldProficiencies: Set<Armor>;
    weaponProficiencies: Set<Weapon>;
    toolProficiencies: Set<Tool>;
    savingThrowProficiencies: Partial<Attributes>;
    skillProficiencies: Skills;
    startingGold: number;
    weapons: Weapon[];
    armor: string[];
    traits: Set<string>;
    age: Range;
    colors: Colors;
    artAssets: ArtAssets;
    spells: Spells[];
}