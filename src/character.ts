import { Attributes } from "./Attributes";
import { Skills } from "./Skills";
import { Range } from "./Range";
import { Spells } from "./Spells";
import { Colors } from "./Colors";
import { ArtAssets } from "./ArtAssets";
import { Weapon } from "./WeaponSets"

export interface Character {
    name: string;
    raceName: string;
    alignment: string;
    attributes: Attributes;
    proficiencyBonus: 2;
    savingThrows: Attributes;
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
    weaponProficiencies: Set<Weapon>;
    armorProficiencies: Set<string>;
    skillProficiencies: Set<string>;
    generalProficiencies: Set<string>;
    weapons: Weapon[];
    armor: string[];
    traits: Set<string>;
    age: Range;
    colors: Colors;
    artAssets: ArtAssets;
    spells: Spells;
}